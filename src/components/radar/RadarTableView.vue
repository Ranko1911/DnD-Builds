<template>
  <div id="radar-table-view" class="radar-table-view">
    <header class="radar-table-header">
      <button id="btn-close-radar-table-mobile" class="btn btn-secondary btn-back-mobile" title="Cerrar tabla de radar" @click="$emit('close-radar-table')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      <div class="radar-table-title-area">
        <h2>📊 Tabla de Radar de Optimización</h2>
        <p>Matriz completa y ordenada de puntuaciones para todas las builds del catálogo</p>
      </div>
      <button id="btn-close-radar-table" class="btn btn-secondary btn-close-radar-table-desktop" @click="$emit('close-radar-table')">
        Cerrar Tabla
      </button>
    </header>

    <div class="radar-table-workspace">
      <div class="radar-table-container">
        <table class="radar-compare-table">
          <thead>
            <tr>
              <th :class="{ sorted: radarSortColumn === 'name' }" @click="$emit('sort', 'name')">
                <span class="th-content">Build <span class="sort-indicator" :class="getSortDirClass('name')">{{ getSortDirIcon('name') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'classes' }" @click="$emit('sort', 'classes')">
                <span class="th-content">Clases <span class="sort-indicator" :class="getSortDirClass('classes')">{{ getSortDirIcon('classes') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'role' }" @click="$emit('sort', 'role')">
                <span class="th-content">Rol <span class="sort-indicator" :class="getSortDirClass('role')">{{ getSortDirIcon('role') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'system' }" @click="$emit('sort', 'system')">
                <span class="th-content">Reglamento <span class="sort-indicator" :class="getSortDirClass('system')">{{ getSortDirIcon('system') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'dpr' }" @click="$emit('sort', 'dpr')">
                <span class="th-content">⚔️ DPR <span class="sort-indicator" :class="getSortDirClass('dpr')">{{ getSortDirIcon('dpr') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'ehp' }" @click="$emit('sort', 'ehp')">
                <span class="th-content">🛡️ EHP <span class="sort-indicator" :class="getSortDirClass('ehp')">{{ getSortDirIcon('ehp') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'control' }" @click="$emit('sort', 'control')">
                <span class="th-content">🌪️ Control <span class="sort-indicator" :class="getSortDirClass('control')">{{ getSortDirIcon('control') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'support' }" @click="$emit('sort', 'support')">
                <span class="th-content">💖 Soporte <span class="sort-indicator" :class="getSortDirClass('support')">{{ getSortDirIcon('support') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'complexity' }" @click="$emit('sort', 'complexity')">
                <span class="th-content">🧠 Complejidad <span class="sort-indicator" :class="getSortDirClass('complexity')">{{ getSortDirIcon('complexity') }}</span></span>
              </th>
              <th :class="{ sorted: radarSortColumn === 'avg' }" @click="$emit('sort', 'avg')">
                <span class="th-content">📊 Media <span class="sort-indicator" :class="getSortDirClass('avg')">{{ getSortDirIcon('avg') }}</span></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="b in sortedBuilds"
              :key="b.id"
              class="radar-table-row"
              :class="{ highlight: selectedBuildId === b.id }"
              @click="$emit('select-build', b.id, 'character guide.md')"
            >
              <td class="font-bold cursor-pointer build-name-cell">
                <span class="class-color-indicator" :style="{ backgroundColor: getClassColor(allBuilds, b.classes), boxShadow: `0 0 6px ${getClassColor(allBuilds, b.classes)}` }"></span>
                {{ b.name }}
              </td>
              <td>
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
              <td>
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
              <td><span class="system-badge" :class="b.system.includes('2024') ? 'system-2024' : 'system-2014'">{{ b.system.includes('2024') ? '2024 (5.5e)' : '2014 (5e)' }}</span></td>
              <td>
                <div class="rating-cell">
                  <span class="rating-val" :class="getScoreColorClass(b.ratings.dpr)">{{ b.ratings.dpr }}</span>
                  <div class="rating-bar-bg"><div class="rating-bar-fill dpr-color" :style="{ width: `${b.ratings.dpr}%` }"></div></div>
                </div>
              </td>
              <td>
                <div class="rating-cell">
                  <span class="rating-val" :class="getScoreColorClass(b.ratings.ehp)">{{ b.ratings.ehp }}</span>
                  <div class="rating-bar-bg"><div class="rating-bar-fill ehp-color" :style="{ width: `${b.ratings.ehp}%` }"></div></div>
                </div>
              </td>
              <td>
                <div class="rating-cell">
                  <span class="rating-val" :class="getScoreColorClass(b.ratings.control)">{{ b.ratings.control }}</span>
                  <div class="rating-bar-bg"><div class="rating-bar-fill control-color" :style="{ width: `${b.ratings.control}%` }"></div></div>
                </div>
              </td>
              <td>
                <div class="rating-cell">
                  <span class="rating-val" :class="getScoreColorClass(b.ratings.support)">{{ b.ratings.support }}</span>
                  <div class="rating-bar-bg"><div class="rating-bar-fill support-color" :style="{ width: `${b.ratings.support}%` }"></div></div>
                </div>
              </td>
              <td>
                <div class="rating-cell">
                  <span class="rating-val" :class="getScoreColorClass(b.ratings.complexity)">{{ b.ratings.complexity }}</span>
                  <div class="rating-bar-bg"><div class="rating-bar-fill complexity-color" :style="{ width: `${b.ratings.complexity}%` }"></div></div>
                </div>
              </td>
              <td>
                <div class="rating-cell">
                  <span class="rating-val font-bold" :class="getScoreColorClass(parseFloat(getAverageRating(b.ratings)))">{{ getAverageRating(b.ratings) }}</span>
                  <div class="rating-bar-bg"><div class="rating-bar-fill avg-color" :style="{ width: `${getAverageRating(b.ratings)}%` }"></div></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Build } from '../../types/build';
import { getClassColor } from '../../utils/theme';
import { getAverageRating, getScoreColorClass, getClassBadges, getRoleTags } from '../../utils/formatters';

const props = defineProps<{
  sortedBuilds: Build[];
  allBuilds: Build[];
  selectedBuildId?: string;
  radarSortColumn: string;
  radarSortAsc: boolean;
}>();

defineEmits<{
  (e: 'close-radar-table'): void;
  (e: 'select-build', id: string, file: string): void;
  (e: 'sort', col: string): void;
}>();

function getSortDirClass(col: string): string {
  if (props.radarSortColumn !== col) return 'placeholder';
  return props.radarSortAsc ? 'asc' : 'desc';
}

function getSortDirIcon(col: string): string {
  if (props.radarSortColumn !== col) return '▲';
  return props.radarSortAsc ? '▲' : '▼';
}
</script>
