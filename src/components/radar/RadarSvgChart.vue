<template>
  <div class="radar-chart-svg-wrapper" v-html="svgContent"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Build, Ratings } from '../../types/build';
import { getClassColor } from '../../utils/theme';

const props = defineProps<{
  mode?: 'single' | 'overlay';
  ratings?: Ratings;
  buildsList?: Build[];
  allBuilds?: Build[];
  hoveredBuildId?: string | null;
}>();

const svgContent = computed(() => {
  if (props.mode === 'overlay' && props.buildsList) {
    return renderOverlayRadarSvg(props.buildsList, props.allBuilds || [], props.hoveredBuildId || null);
  }
  return renderSingleRadarSvg(props.ratings || { dpr: 0, ehp: 0, control: 0, support: 0, complexity: 0 });
});

function renderSingleRadarSvg(ratings: Ratings): string {
  const MAX = 100;
  const axes = [
    { label: 'DPR', val: ratings.dpr || 0 },
    { label: 'EHP', val: ratings.ehp || 0 },
    { label: 'Control', val: ratings.control || 0 },
    { label: 'Soporte', val: ratings.support || 0 },
    { label: 'Complejidad', val: ratings.complexity || 0 }
  ];
  const n = axes.length;
  const cx = 180, cy = 140, maxR = 100;
  const angleOff = -Math.PI / 2;

  function polar(i: number, scale: number) {
    const a = angleOff + (2 * Math.PI * i) / n;
    return { x: cx + Math.cos(a) * maxR * scale, y: cy + Math.sin(a) * maxR * scale };
  }

  let gridSvg = '';
  [20, 40, 60, 80, 100].forEach(val => {
    const s = val / MAX;
    const pts = [];
    for (let i = 0; i < n; i++) { const p = polar(i, s); pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`); }
    gridSvg += `<polygon points="${pts.join(' ')}" fill="none" stroke="rgba(255,255,255,${val === 100 ? '0.12' : '0.06'})" stroke-width="${val === 100 ? 1.5 : 1}"/>`;
  });

  let axisSvg = '';
  for (let i = 0; i < n; i++) {
    const p = polar(i, 1);
    axisSvg += `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
  }

  const dataPts = axes.map((ax, i) => {
    const p = polar(i, ax.val / MAX);
    return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
  });

  const dataSvg = `<polygon points="${dataPts.join(' ')}" fill="rgba(99, 102, 241, 0.25)" stroke="var(--color-primary, #6366f1)" stroke-width="2.5"/>`;

  let labelsSvg = '';
  axes.forEach((ax, i) => {
    const p = polar(i, 1.25);
    const anchor = p.x < cx - 5 ? 'end' : p.x > cx + 5 ? 'start' : 'middle';
    labelsSvg += `<text x="${p.x.toFixed(1)}" y="${(p.y - 6).toFixed(1)}" text-anchor="${anchor}" class="radar-label" fill="#f3f4f6" font-size="11" font-weight="600">${ax.label}</text>`;
    labelsSvg += `<text x="${p.x.toFixed(1)}" y="${(p.y + 8).toFixed(1)}" text-anchor="${anchor}" class="radar-value-label" fill="#9ca3af" font-size="10">${ax.val}/100</text>`;
  });

  return `<svg viewBox="0 0 360 280" style="width:100%; max-width:360px; margin:0 auto; display:block;">${gridSvg}${axisSvg}${dataSvg}${labelsSvg}</svg>`;
}

function renderOverlayRadarSvg(buildsList: Build[], allBuilds: Build[], hoveredBuildId: string | null): string {
  const MAX = 100;
  const axes = [
    { key: 'dpr' as const, label: 'DPR' },
    { key: 'ehp' as const, label: 'EHP' },
    { key: 'control' as const, label: 'Control' },
    { key: 'support' as const, label: 'Soporte' },
    { key: 'complexity' as const, label: 'Complejidad' }
  ];
  const n = axes.length;
  const cx = 180, cy = 140, maxR = 100;
  const angleOff = -Math.PI / 2;

  function polar(i: number, scale: number) {
    const a = angleOff + (2 * Math.PI * i) / n;
    return { x: cx + Math.cos(a) * maxR * scale, y: cy + Math.sin(a) * maxR * scale };
  }

  let gridSvg = '';
  let ringLabelsSvg = '';
  [20, 40, 60, 80, 100].forEach(val => {
    const s = val / MAX;
    const pts = [];
    for (let i = 0; i < n; i++) { const p = polar(i, s); pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`); }
    const isFull = val === MAX;
    gridSvg += `<polygon points="${pts.join(' ')}" fill="none" stroke="rgba(255,255,255,${isFull ? '0.12' : '0.06'})" stroke-width="${isFull ? 1.5 : 1}"/>`;
    ringLabelsSvg += `<text x="${(cx + 6).toFixed(1)}" y="${(cy - s * maxR).toFixed(1)}" dominant-baseline="central" fill="rgba(255,255,255,0.28)" style="font-size:8px; font-family:var(--font-body);">${val}</text>`;
  });

  let axisSvg = '';
  for (let i = 0; i < n; i++) {
    const p = polar(i, 1);
    axisSvg += `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
  }

  let polygonsSvg = '';
  let dotsSvg = '';

  buildsList.forEach(build => {
    const color = getClassColor(allBuilds, build.classes);
    const isHighlighted = hoveredBuildId === build.id;
    const isDimmed = hoveredBuildId !== null && !isHighlighted;
    const polyClass = `compare-polygon ${isHighlighted ? 'highlighted' : isDimmed ? 'dimmed' : ''}`;

    const dataPts: string[] = [];

    for (let i = 0; i < n; i++) {
      const key = axes[i].key;
      const val = (build.ratings && build.ratings[key]) || 0;
      const p = polar(i, val / MAX);
      dataPts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);

      dotsSvg += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.5" fill="${color}" class="${polyClass}" data-build-id="${build.id}" style="pointer-events: none;"/>`;
    }

    polygonsSvg += `<polygon points="${dataPts.join(' ')}" fill="${color}" stroke="${color}" class="${polyClass}" data-build-id="${build.id}" style="stroke: ${color}; fill: ${color};" />`;
  });

  let labelsSvg = '';
  for (let i = 0; i < n; i++) {
    const pLabel = polar(i, 1.22);
    const anchor = pLabel.x < cx - 5 ? 'end' : pLabel.x > cx + 5 ? 'start' : 'middle';
    labelsSvg += `<text x="${pLabel.x.toFixed(1)}" y="${pLabel.y.toFixed(1)}" text-anchor="${anchor}" dominant-baseline="central" fill="var(--color-text-muted)" style="font-size: 10px; font-weight: 600; font-family: var(--font-body);">${axes[i].label}</text>`;
  }

  return `<svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg">${gridSvg}${axisSvg}${polygonsSvg}${dotsSvg}${ringLabelsSvg}${labelsSvg}</svg>`;
}
</script>
