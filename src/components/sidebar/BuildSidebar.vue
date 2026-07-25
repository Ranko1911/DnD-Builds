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
      <!-- Buscador rápido por texto -->
      <div class="sidebar-search-box">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
          <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <input
          id="sidebar-search-input"
          :value="searchQuery"
          type="text"
          placeholder="Buscar por nombre..."
          class="sidebar-input"
          @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
        />
        <button
          v-if="searchQuery"
          class="clear-input-icon"
          title="Limpiar búsqueda"
          @click="$emit('update:searchQuery', '')"
        >
          ✕
        </button>
      </div>

      <!-- Buscadores por Clase y Rol -->
      <div class="sidebar-filter-grid">
        <!-- Desplegable por Clase -->
        <select
          id="sidebar-class-filter"
          :value="filterClass"
          class="sidebar-select"
          title="Buscador por Clase"
          @change="$emit('update:filterClass', ($event.target as HTMLSelectElement).value)"
        >
          <option value="all">🛡️ Clase: Todas</option>
          <option value="barbarian">Bárbaro (Barbarian)</option>
          <option value="bard">Bardo (Bard)</option>
          <option value="cleric">Clérigo (Cleric)</option>
          <option value="druid">Druida (Druid)</option>
          <option value="fighter">Guerrero (Fighter)</option>
          <option value="monk">Monje (Monk)</option>
          <option value="paladin">Paladín (Paladin)</option>
          <option value="ranger">Explorador (Ranger)</option>
          <option value="rogue">Pícaro (Rogue)</option>
          <option value="sorcerer">Hechicero (Sorcerer)</option>
          <option value="warlock">Brujo (Warlock)</option>
          <option value="wizard">Mago (Wizard)</option>
          <option value="artificer">Artífice (Artificer)</option>
        </select>

        <!-- Desplegable por Rol -->
        <select
          id="sidebar-role-filter"
          :value="filterRole"
          class="sidebar-select"
          title="Buscador por Rol"
          @change="$emit('update:filterRole', ($event.target as HTMLSelectElement).value)"
        >
          <option value="all">🎯 Rol: Todos</option>
          <option value="tank">Tanque / Frontline</option>
          <option value="striker">Striker / Daño</option>
          <option value="blaster">Blaster / AoE</option>
          <option value="controller">Controlador</option>
          <option value="healer">Soporte / Curador</option>
        </select>
      </div>

      <!-- Ordenación -->
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

      <!-- Chips de Filtros Activos -->
      <div v-if="activeFilterCount > 0" class="active-chips-container">
        <span v-if="searchQuery" class="chip">
          "{{ searchQuery }}"
          <button class="chip-remove" @click="$emit('update:searchQuery', '')">✕</button>
        </span>
        <span v-if="filterClass !== 'all'" class="chip">
          Clase: {{ getClassName(filterClass) }}
          <button class="chip-remove" @click="$emit('update:filterClass', 'all')">✕</button>
        </span>
        <span v-if="filterRole !== 'all'" class="chip">
          Rol: {{ getRoleName(filterRole) }}
          <button class="chip-remove" @click="$emit('update:filterRole', 'all')">✕</button>
        </span>
        <span v-if="filterSystem !== 'all'" class="chip">
          Edición: {{ filterSystem }}
          <button class="chip-remove" @click="$emit('update:filterSystem', 'all')">✕</button>
        </span>
        <button class="chip-reset-all" @click="$emit('reset-filters')">Limpiar todos</button>
      </div>
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
  searchQuery: string;
  filterClass: string;
  filterRole: string;
  filterSystem: string;
  activeFilterCount: number;
}>();

defineEmits<{
  (e: 'update:sortOption', val: SortOption): void;
  (e: 'update:searchQuery', val: string): void;
  (e: 'update:filterClass', val: string): void;
  (e: 'update:filterRole', val: string): void;
  (e: 'update:filterSystem', val: string): void;
  (e: 'select-build', id: string, file: string): void;
  (e: 'toggle-compare', id: string): void;
  (e: 'filter-system', system: string): void;
  (e: 'filter-role-badge', roleTag: string): void;
  (e: 'open-compare'): void;
  (e: 'reset-filters'): void;
}>();

const classNamesMap: Record<string, string> = {
  barbarian: 'Bárbaro',
  bard: 'Bardo',
  cleric: 'Clérigo',
  druid: 'Druida',
  fighter: 'Guerrero',
  monk: 'Monje',
  paladin: 'Paladín',
  ranger: 'Explorador',
  rogue: 'Pícaro',
  sorcerer: 'Hechicero',
  warlock: 'Brujo',
  wizard: 'Mago',
  artificer: 'Artífice'
};

const roleNamesMap: Record<string, string> = {
  tank: 'Tanque',
  striker: 'Striker',
  blaster: 'Blaster',
  controller: 'Controlador',
  healer: 'Soporte'
};

function getClassName(code: string): string {
  return classNamesMap[code] || code;
}

function getRoleName(code: string): string {
  return roleNamesMap[code] || code;
}
</script>
