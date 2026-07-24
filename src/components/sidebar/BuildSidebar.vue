<template>
  <aside
    id="builds-sidebar"
    class="builds-sidebar"
    :class="{ hidden: isSidebarHidden, 'builds-sidebar-has-compare': compareBuildIds.length >= 2 }"
  >
    <div class="sidebar-header">
      <h2>Catálogo de Builds</h2>
      <span id="builds-count" class="badge-count">{{ filteredBuilds.length }}</span>
    </div>

    <div class="sidebar-controls">
      <select
        id="sort-select"
        :value="sortOption"
        class="sort-select"
        @change="$emit('update:sortOption', ($event.target as HTMLSelectElement).value as SortOption)"
      >
        <option value="name-asc">Ordenar por: Nombre (A-Z)</option>
        <option value="name-desc">Ordenar por: Nombre (Z-A)</option>
        <option value="avg-desc">Ordenar por: Media Total (Mayor a Menor)</option>
        <option value="avg-asc">Ordenar por: Media Total (Menor a Mayor)</option>
        <option value="class-asc">Ordenar por: Clase (A-Z)</option>
        <option value="class-desc">Ordenar por: Clase (Z-A)</option>
        <option value="dpr-desc">Ordenar por: DPR (Mayor a Menor)</option>
        <option value="ehp-desc">Ordenar por: Tanque / EHP (Mayor a Menor)</option>
        <option value="control-desc">Ordenar por: Control (Mayor a Menor)</option>
        <option value="support-desc">Ordenar por: Soporte (Mayor a Menor)</option>
        <option value="complexity-asc">Ordenar por: Mecánicas (Fácil a Difícil)</option>
        <option value="complexity-desc">Ordenar por: Mecánicas (Difícil a Fácil)</option>
      </select>
    </div>

    <div id="builds-list" class="cards-list">
      <BuildCard
        v-for="build in filteredBuilds"
        :key="build.id"
        :build="build"
        :is-active="selectedBuildId === build.id"
        :is-compare-selected="compareBuildIds.includes(build.id)"
        @select-build="(id, file) => $emit('select-build', id, file)"
        @toggle-compare="(id) => $emit('toggle-compare', id)"
        @filter-system="(sys) => $emit('filter-system', sys)"
        @filter-role-badge="(tag) => $emit('filter-role-badge', tag)"
      />
    </div>

    <!-- Floating Compare Bar in Sidebar -->
    <div id="compare-bar" class="compare-bar" :class="{ hidden: compareBuildIds.length < 2 }">
      <button id="btn-compare" class="btn btn-compare" @click="$emit('open-compare')">
        <span>📊</span> Comparar (<span id="compare-count">{{ compareBuildIds.length }}</span>)
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Build, SortOption } from '../../types/build';
import BuildCard from './BuildCard.vue';

defineProps<{
  filteredBuilds: Build[];
  selectedBuildId: string | undefined;
  compareBuildIds: string[];
  isSidebarHidden: boolean;
  sortOption: SortOption;
}>();

defineEmits<{
  (e: 'update:sortOption', val: SortOption): void;
  (e: 'select-build', id: string, file: string): void;
  (e: 'toggle-compare', id: string): void;
  (e: 'filter-system', system: string): void;
  (e: 'filter-role-badge', roleTag: string): void;
  (e: 'open-compare'): void;
}>();
</script>
