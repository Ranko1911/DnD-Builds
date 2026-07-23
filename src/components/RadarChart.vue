<template>
  <div class="radar-chart-container">
    <svg :viewBox="`0 0 ${size} ${size}`" class="radar-svg">
      <defs>
        <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.3" />
          <stop offset="100%" stop-color="var(--color-primary)" stop-opacity="0" />
        </radialGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Background Circles / Polygons -->
      <g class="grid-lines">
        <polygon
          v-for="level in [0.25, 0.5, 0.75, 1]"
          :key="level"
          :points="getPolygonPoints(level)"
          class="grid-polygon"
        />
        <line
          v-for="(axis, index) in axes"
          :key="index"
          :x1="center"
          :y1="center"
          :x2="getAxisEnd(index).x"
          :y2="getAxisEnd(index).y"
          class="axis-line"
        />
      </g>

      <!-- Main Build Radar Polygon -->
      <g v-if="ratings" class="data-polygon-group">
        <polygon
          :points="getDataPolygonPoints(ratings)"
          class="data-polygon"
        />
        <circle
          v-for="(axis, index) in axes"
          :key="index"
          :cx="getDataPoint(index, ratings[axis.key]).x"
          :cy="getDataPoint(index, ratings[axis.key]).y"
          r="4.5"
          class="data-dot"
        />
      </g>

      <!-- Comparison Polygons (if any) -->
      <g v-for="(b, idx) in compareBuilds" :key="b.id" class="compare-polygon-group">
        <polygon
          :points="getDataPolygonPoints(b.ratings)"
          :stroke="getCompareColor(idx)"
          :fill="getCompareFill(idx)"
          stroke-width="2"
          class="compare-polygon"
        />
      </g>

      <!-- Axis Labels -->
      <g class="axis-labels">
        <text
          v-for="(axis, index) in axes"
          :key="index"
          :x="getLabelPos(index).x"
          :y="getLabelPos(index).y"
          :text-anchor="getLabelAnchor(index)"
          class="radar-label"
        >
          {{ axis.label }} ({{ ratings ? ratings[axis.key] : 0 }})
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Ratings {
  dpr: number;
  ehp: number;
  control: number;
  support: number;
  complexity: number;
}

interface Build {
  id: string;
  name: string;
  ratings: Ratings;
}

const props = withDefaults(defineProps<{
  ratings?: Ratings;
  compareBuilds?: Build[];
  size?: number;
}>(), {
  size: 320
});

const center = computed(() => props.size / 2);
const radius = computed(() => props.size * 0.35);

const axes = [
  { key: 'dpr' as const, label: '⚔️ DPR' },
  { key: 'ehp' as const, label: '🛡️ EHP' },
  { key: 'control' as const, label: '🌪️ Control' },
  { key: 'support' as const, label: '💖 Soporte' },
  { key: 'complexity' as const, label: '🧠 Complejidad' }
];

const totalAxes = axes.length;

function getAngle(index: number): number {
  return (Math.PI * 2 / totalAxes) * index - Math.PI / 2;
}

function getAxisEnd(index: number) {
  const angle = getAngle(index);
  return {
    x: center.value + radius.value * Math.cos(angle),
    y: center.value + radius.value * Math.sin(angle)
  };
}

function getPolygonPoints(scale: number): string {
  return axes.map((_, i) => {
    const angle = getAngle(i);
    const r = radius.value * scale;
    const x = center.value + r * Math.cos(angle);
    const y = center.value + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
}

function getDataPoint(index: number, val: number = 0) {
  const angle = getAngle(index);
  const normalizedVal = Math.max(0, Math.min(100, val)) / 100;
  const r = radius.value * normalizedVal;
  return {
    x: center.value + r * Math.cos(angle),
    y: center.value + r * Math.sin(angle)
  };
}

function getDataPolygonPoints(rat: Ratings): string {
  return axes.map((axis, i) => {
    const pt = getDataPoint(i, rat[axis.key] || 0);
    return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
  }).join(' ');
}

function getLabelPos(index: number) {
  const angle = getAngle(index);
  const offset = 28;
  return {
    x: center.value + (radius.value + offset) * Math.cos(angle),
    y: center.value + (radius.value + offset) * Math.sin(angle) + 4
  };
}

function getLabelAnchor(index: number): string {
  const angle = getAngle(index);
  const cos = Math.cos(angle);
  if (Math.abs(cos) < 0.2) return 'middle';
  return cos > 0 ? 'start' : 'end';
}

const compareColors = ['#10b981', '#f59e0b', '#0ea5e9', '#ec4899', '#a855f7'];

function getCompareColor(idx: number): string {
  return compareColors[idx % compareColors.length];
}

function getCompareFill(idx: number): string {
  const c = getCompareColor(idx);
  return `${c}22`;
}
</script>

<style scoped>
.radar-chart-container {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radar-svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

.grid-polygon {
  fill: none;
  stroke: rgba(255, 255, 255, 0.08);
  stroke-width: 1;
}

.axis-line {
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 1;
  stroke-dasharray: 2 2;
}

.data-polygon {
  fill: rgba(99, 102, 241, 0.25);
  stroke: var(--color-primary, #6366f1);
  stroke-width: 2.5;
  filter: drop-shadow(0 0 6px var(--color-primary-glow, rgba(99, 102, 241, 0.4)));
}

.data-dot {
  fill: #fff;
  stroke: var(--color-primary, #6366f1);
  stroke-width: 2;
  transition: r 0.2s ease;
}

.data-dot:hover {
  r: 6.5;
  cursor: pointer;
}

.radar-label {
  fill: var(--color-text-main, #f3f4f6);
  font-family: var(--font-heading, sans-serif);
  font-size: 11px;
  font-weight: 600;
}
</style>
