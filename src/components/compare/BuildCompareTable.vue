<template>
  <div id="compare-view" class="compare-view">
    <header class="compare-header">
      <button id="btn-close-compare-mobile" class="btn btn-secondary btn-back-mobile" title="Cerrar comparación" @click="$emit('close-compare')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <div class="compare-title-area">
        <h2>📊 Comparativa de Builds (<span id="compare-count-header">{{ selectedCompareBuilds.length }}</span>)</h2>
        <p>Análisis lado a lado de estadísticas, roles y perfiles de optimización</p>
      </div>
      <button id="btn-close-compare" class="btn btn-secondary btn-close-compare-desktop" @click="$emit('close-compare')">
        Cerrar Comparación
      </button>
    </header>

    <div class="compare-workspace">
      <!-- Overlay Radar Visualizer -->
      <div class="compare-radar-section">
        <h3>Superposición Radar de Optimización</h3>
        <div id="compare-radar-container" class="compare-radar-container">
          <RadarSvgChart
            mode="overlay"
            :builds-list="selectedCompareBuilds"
            :all-builds="allBuilds"
            :hovered-build-id="hoveredCompareBuildId"
          />
        </div>
        <div id="compare-legend" class="compare-legend">
          <div
            v-for="b in selectedCompareBuilds"
            :key="b.id"
            class="legend-item"
            :class="{ active: hoveredCompareBuildId === b.id }"
            :data-build-id="b.id"
            @mouseenter="$emit('update:hoveredCompareBuildId', b.id)"
            @mouseleave="$emit('update:hoveredCompareBuildId', null)"
          >
            <span class="legend-color-dot" :style="{ backgroundColor: getClassColor(allBuilds, b.classes) }"></span>
            <span class="legend-name">{{ b.name }}</span>
            <button class="btn-remove-legend" title="Quitar de comparación" @click.stop="$emit('toggle-compare-build', b.id)">×</button>
          </div>
        </div>
      </div>

      <!-- Compare Matrix Table -->
      <div class="compare-table-section">
        <div class="compare-table-container">
          <table class="compare-table">
            <thead>
              <tr>
                <th class="col-metric">Métrica / Atributo</th>
                <th
                  v-for="b in selectedCompareBuilds"
                  :key="b.id"
                  :class="[`build-col-${b.id}`, { highlighted: hoveredCompareBuildId === b.id }]"
                  :data-build-id="b.id"
                  @mouseenter="$emit('update:hoveredCompareBuildId', b.id)"
                  @mouseleave="$emit('update:hoveredCompareBuildId', null)"
                >
                  <div class="th-build-header">
                    <span class="th-build-name" @click="$emit('select-build', b.id, 'character guide.md')">{{ b.name }}</span>
                    <button class="btn-remove-col" title="Quitar de comparación" @click.stop="$emit('toggle-compare-build', b.id)">×</button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Row: Clases -->
              <tr>
                <td>Clases</td>
                <td
                  v-for="b in selectedCompareBuilds"
                  :key="b.id"
                  :class="[`build-col-${b.id}`, { highlighted: hoveredCompareBuildId === b.id }]"
                  :data-build-id="b.id"
                  @mouseenter="$emit('update:hoveredCompareBuildId', b.id)"
                  @mouseleave="$emit('update:hoveredCompareBuildId', null)"
                >
                  <div class="class-badges-container">
                    <span
                      v-for="badge in getClassBadges(b.classes)"
                      :key="badge.text"
                      class="class-pill"
                      :style="{
                        backgroundColor: badge.color + '22',
                        borderColor: badge.color + '66',
                        color: badge.color
                      }"
                    >
                      {{ badge.text }}
                    </span>
                  </div>
                </td>
              </tr>
              <!-- Row: Reglamento -->
              <tr>
                <td>Reglamento</td>
                <td
                  v-for="b in selectedCompareBuilds"
                  :key="b.id"
                  :class="[`build-col-${b.id}`, { highlighted: hoveredCompareBuildId === b.id }]"
                  :data-build-id="b.id"
                  @mouseenter="$emit('update:hoveredCompareBuildId', b.id)"
                  @mouseleave="$emit('update:hoveredCompareBuildId', null)"
                >
                  <span class="system-badge" :class="b.system.includes('2024') ? 'system-2024' : 'system-2014'">
                    {{ b.system.includes('2024') ? '2024 (5.5e)' : '2014 (5e)' }}
                  </span>
                </td>
              </tr>
              <!-- Row: Rol -->
              <tr>
                <td>Rol Principal</td>
                <td
                  v-for="b in selectedCompareBuilds"
                  :key="b.id"
                  :class="[`build-col-${b.id}`, { highlighted: hoveredCompareBuildId === b.id }]"
                  :data-build-id="b.id"
                  @mouseenter="$emit('update:hoveredCompareBuildId', b.id)"
                  @mouseleave="$emit('update:hoveredCompareBuildId', null)"
                >
                  <div class="card-role-row compact">
                    <span
                      v-for="roleTag in getRoleTags(b.role)"
                      :key="roleTag"
                      class="role-badge"
                    >
                      {{ roleTag }}
                    </span>
                  </div>
                </td>
              </tr>
              <!-- Ratings rows -->
              <tr v-for="cat in ratingCategories" :key="cat.key">
                <td>{{ cat.label }}</td>
                <td
                  v-for="b in selectedCompareBuilds"
                  :key="b.id"
                  :class="[`build-col-${b.id}`, { highlighted: hoveredCompareBuildId === b.id }]"
                  :data-build-id="b.id"
                  @mouseenter="$emit('update:hoveredCompareBuildId', b.id)"
                  @mouseleave="$emit('update:hoveredCompareBuildId', null)"
                >
                  <div class="rating-cell">
                    <span
                      class="rating-val"
                      :class="[getScoreColorClass(b.ratings[cat.key] || 0), { 'stat-winner': isWinner(b.id, cat.key, selectedCompareBuilds) }]"
                    >
                      {{ b.ratings[cat.key] || 0 }}
                    </span>
                    <div class="rating-bar-bg">
                      <div
                        class="rating-bar-fill"
                        :class="`${cat.key}-color`"
                        :style="{ width: `${b.ratings[cat.key] || 0}%` }"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
              <!-- Average row -->
              <tr class="font-bold">
                <td>📊 Media Total</td>
                <td
                  v-for="b in selectedCompareBuilds"
                  :key="b.id"
                  :class="[`build-col-${b.id}`, { highlighted: hoveredCompareBuildId === b.id }]"
                  :data-build-id="b.id"
                  @mouseenter="$emit('update:hoveredCompareBuildId', b.id)"
                  @mouseleave="$emit('update:hoveredCompareBuildId', null)"
                >
                  <div class="rating-cell">
                    <span
                      class="rating-val font-bold"
                      :class="[getScoreColorClass(parseFloat(getAverageRating(b.ratings))), { 'stat-winner': isAvgWinner(b.id, selectedCompareBuilds) }]"
                    >
                      {{ getAverageRating(b.ratings) }}
                    </span>
                    <div class="rating-bar-bg">
                      <div
                        class="rating-bar-fill avg-color"
                        :style="{ width: `${getAverageRating(b.ratings)}%` }"
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Build, Ratings, RatingCategory } from '../../types/build';
import { getClassColor } from '../../utils/theme';
import { getAverageRating, getScoreColorClass, getClassBadges, getRoleTags } from '../../utils/formatters';
import RadarSvgChart from '../radar/RadarSvgChart.vue';

const ratingCategories: RatingCategory[] = [
  { key: 'dpr', label: 'Daño (DPR)' },
  { key: 'ehp', label: 'Tanque (EHP)' },
  { key: 'control', label: 'Control' },
  { key: 'support', label: 'Soporte' },
  { key: 'complexity', label: 'Mecánicas' }
];

defineProps<{
  selectedCompareBuilds: Build[];
  allBuilds: Build[];
  hoveredCompareBuildId: string | null;
}>();

defineEmits<{
  (e: 'close-compare'): void;
  (e: 'update:hoveredCompareBuildId', id: string | null): void;
  (e: 'toggle-compare-build', id: string): void;
  (e: 'select-build', id: string, file: string): void;
}>();

function isWinner(buildId: string, key: keyof Ratings, buildsList: Build[]): boolean {
  const maxVal = Math.max(...buildsList.map(b => b.ratings[key] || 0));
  const buildVal = buildsList.find(b => b.id === buildId)?.ratings[key] || 0;
  return buildVal === maxVal && maxVal > 0;
}

function isAvgWinner(buildId: string, buildsList: Build[]): boolean {
  const maxVal = Math.max(...buildsList.map(b => parseFloat(getAverageRating(b.ratings))));
  const buildVal = parseFloat(getAverageRating(buildsList.find(b => b.id === buildId)?.ratings || { dpr: 0, ehp: 0, control: 0, support: 0, complexity: 0 }));
  return buildVal === maxVal && maxVal > 0;
}
</script>
