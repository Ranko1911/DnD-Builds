<template>
  <button
    id="btn-restore-header"
    class="restore-header-btn"
    :class="{ hidden: !isHeaderHidden }"
    title="Mostrar cabecera"
    @click="$emit('update:isHeaderHidden', false)"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </button>

  <header id="app-header" class="app-header" :class="{ hidden: isHeaderHidden }">
    <div class="logo-container">
      <button
        id="btn-toggle-sidebar"
        class="btn btn-secondary sidebar-toggle-btn"
        title="Mostrar/Ocultar Catálogo"
        @click="$emit('update:isSidebarHidden', !isSidebarHidden)"
      >
        <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      </button>
      <svg class="logo-icon" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="logo-text" style="cursor: pointer;" @click="$emit('reset-home')">
        <h1>D&D Build Archivist</h1>
        <p>Optimización y Archivo de Fichas de Personaje</p>
      </div>
    </div>

    <div class="search-filter-bar">
      <div class="search-wrapper">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
          <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <input
          id="build-search"
          :value="searchQuery"
          type="text"
          placeholder="Buscar por nombre, clase, rol..."
          @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
        />
      </div>

      <button
        id="btn-toggle-filters"
        class="btn btn-secondary filter-toggle-btn"
        :class="{ active: isFilterVisible }"
        title="Filtrar builds"
        @click="$emit('update:isFilterVisible', !isFilterVisible)"
      >
        <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
      </button>

      <button
        id="btn-show-radar-table"
        class="btn btn-secondary radar-table-toggle-btn"
        :class="{ active: currentView === 'radar-table' }"
        title="Ver tabla de radar"
        @click="$emit('toggle-radar-table')"
      >
        <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      </button>

      <div class="layout-settings-wrapper" style="position: relative;">
        <button
          id="btn-layout-settings"
          class="btn btn-secondary layout-settings-btn"
          :class="{ active: isLayoutSettingsOpen }"
          title="Ajustes de pantalla"
          @click="$emit('update:isLayoutSettingsOpen', !isLayoutSettingsOpen)"
        >
          <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <path d="M17 17l-3-3 3-3"></path>
          </svg>
        </button>

        <!-- Dropdown de Ajustes -->
        <div id="layout-settings-dropdown" class="layout-settings-dropdown" :class="{ hidden: !isLayoutSettingsOpen }">
          <div class="dropdown-header">⚙️ Ajustes de Interfaz</div>
          <div class="dropdown-item">
            <span>Ocultar Catálogo Lateral</span>
            <label class="toggle-switch" for="setting-toggle-sidebar">
              <input id="setting-toggle-sidebar" :checked="isSidebarHidden" type="checkbox" @change="$emit('update:isSidebarHidden', !isSidebarHidden)">
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="dropdown-item">
            <span>Ocultar Cabecera</span>
            <label class="toggle-switch" for="setting-toggle-header">
              <input id="setting-toggle-header" :checked="isHeaderHidden" type="checkbox" @change="$emit('update:isHeaderHidden', !isHeaderHidden)">
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="dropdown-item">
            <span>Mostrar Tracker de Recursos</span>
            <label class="toggle-switch" for="setting-toggle-tracker">
              <input id="setting-toggle-tracker" :checked="showTracker" type="checkbox" @change="$emit('update:showTracker', !showTracker)">
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="dropdown-item">
            <span>Mostrar Radar en Detalle</span>
            <label class="toggle-switch" for="setting-toggle-radar">
              <input id="setting-toggle-radar" :checked="showRadar" type="checkbox" @change="$emit('update:showRadar', !showRadar)">
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Filter Bar Drawer -->
  <div id="filter-drawer" class="filter-drawer" :class="{ hidden: !isFilterVisible }">
    <div class="filter-group">
      <label>Reglamento / Edición:</label>
      <div class="btn-group">
        <button class="btn btn-sm" :class="{ active: filterSystem === 'all' }" @click="$emit('update:filterSystem', 'all')">Todos</button>
        <button class="btn btn-sm" :class="{ active: filterSystem === '2024' }" @click="$emit('update:filterSystem', '2024')">2024 (5.5e)</button>
        <button class="btn btn-sm" :class="{ active: filterSystem === '2014' }" @click="$emit('update:filterSystem', '2014')">2014 (5e)</button>
      </div>
    </div>

    <div class="filter-group">
      <label for="class-select">Clase Principal:</label>
      <select id="class-select" :value="filterClass" class="filter-select" @change="$emit('update:filterClass', ($event.target as HTMLSelectElement).value)">
        <option value="all">Todas las Clases</option>
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
    </div>

    <div class="filter-group">
      <label for="role-select">Rol Tactico:</label>
      <select id="role-select" :value="filterRole" class="filter-select" @change="$emit('update:filterRole', ($event.target as HTMLSelectElement).value)">
        <option value="all">Todos los Roles</option>
        <option value="tank">Tanque / Frontline</option>
        <option value="striker">Striker / Daño Monobjetivo</option>
        <option value="blaster">Blaster / AoE</option>
        <option value="controller">Controlador de Campo</option>
        <option value="healer">Soporte / Sanador</option>
      </select>
    </div>

    <button id="btn-reset-filters" class="btn btn-text" @click="$emit('reset-filters')">Restablecer Filtros</button>
  </div>
</template>

<script setup lang="ts">
import type { BuildView } from '../../types/build';

defineProps<{
  searchQuery: string;
  isHeaderHidden: boolean;
  isSidebarHidden: boolean;
  isFilterVisible: boolean;
  isLayoutSettingsOpen: boolean;
  showTracker: boolean;
  showRadar: boolean;
  filterSystem: string;
  filterClass: string;
  filterRole: string;
  currentView: BuildView;
}>();

defineEmits<{
  (e: 'update:searchQuery', val: string): void;
  (e: 'update:isHeaderHidden', val: boolean): void;
  (e: 'update:isSidebarHidden', val: boolean): void;
  (e: 'update:isFilterVisible', val: boolean): void;
  (e: 'update:isLayoutSettingsOpen', val: boolean): void;
  (e: 'update:showTracker', val: boolean): void;
  (e: 'update:showRadar', val: boolean): void;
  (e: 'update:filterSystem', val: string): void;
  (e: 'update:filterClass', val: string): void;
  (e: 'update:filterRole', val: string): void;
  (e: 'reset-home'): void;
  (e: 'toggle-radar-table'): void;
  (e: 'reset-filters'): void;
}>();
</script>
