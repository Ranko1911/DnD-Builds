<template>
  <div class="app-container" :class="{ 'has-build-selected': !!selectedBuild }">
    <!-- Restore header floating button -->
    <button
      id="btn-restore-header"
      class="restore-header-btn"
      :class="{ hidden: !isHeaderHidden }"
      title="Mostrar cabecera"
      @click="isHeaderHidden = false"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <!-- Header -->
    <header id="app-header" class="app-header" :class="{ hidden: isHeaderHidden }">
      <div class="logo-container">
        <button
          id="btn-toggle-sidebar"
          class="btn btn-secondary sidebar-toggle-btn"
          title="Mostrar/Ocultar Catálogo"
          @click="isSidebarHidden = !isSidebarHidden"
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
        <div class="logo-text" style="cursor: pointer;" @click="resetHome">
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
            v-model="searchQuery"
            type="text"
            placeholder="Buscar por nombre, clase, rol..."
          />
        </div>

        <button
          id="btn-toggle-filters"
          class="btn btn-secondary filter-toggle-btn"
          :class="{ active: isFilterVisible }"
          title="Filtrar builds"
          @click="isFilterVisible = !isFilterVisible"
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
          @click="toggleRadarTableView"
        >
          <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        </button>

        <button
          id="btn-layout-settings"
          class="btn btn-secondary layout-settings-btn"
          title="Ajustes de pantalla"
          @click="isLayoutSettingsOpen = !isLayoutSettingsOpen"
        >
          <svg class="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <path d="M17 17l-3-3 3-3"></path>
          </svg>
        </button>

        <!-- Dropdown de Ajustes -->
        <div id="layout-settings-dropdown" class="layout-settings-dropdown" :class="{ hidden: !isLayoutSettingsOpen }">
          <div class="dropdown-header">Ajustes de Interfaz</div>
          <div class="dropdown-item">
            <label class="toggle-switch" for="setting-toggle-sidebar">
              <input id="setting-toggle-sidebar" v-model="isSidebarHidden" type="checkbox">
              <span class="toggle-slider"></span>
              <span class="toggle-text">Ocultar Catálogo</span>
            </label>
          </div>
          <div class="dropdown-item">
            <label class="toggle-switch" for="setting-toggle-header">
              <input id="setting-toggle-header" v-model="isHeaderHidden" type="checkbox">
              <span class="toggle-slider"></span>
              <span class="toggle-text">Ocultar Cabecera</span>
            </label>
          </div>
        </div>

        <div id="filter-group" class="filter-group" :class="{ active: isFilterVisible }">
          <select id="filter-system" v-model="filterSystem">
            <option value="all">Todos los Reglamentos</option>
            <option value="2014">D&D 5e (2014)</option>
            <option value="2024">D&D 2024 (5.5e)</option>
          </select>

          <select id="filter-class" v-model="filterClass">
            <option value="all">Todas las Clases</option>
            <option value="artificer">Artificier (Artificiero)</option>
            <option value="barbarian">Barbarian (Bárbaro)</option>
            <option value="bard">Bard (Bardo)</option>
            <option value="cleric">Cleric (Clérigo)</option>
            <option value="druid">Druid (Druida)</option>
            <option value="fighter">Fighter (Guerrero)</option>
            <option value="monk">Monk (Monje)</option>
            <option value="paladin">Paladin (Paladín)</option>
            <option value="ranger">Ranger (Explorador)</option>
            <option value="rogue">Rogue (Pícaro)</option>
            <option value="sorcerer">Sorcerer (Hechicero)</option>
            <option value="warlock">Warlock (Brujo)</option>
            <option value="wizard">Wizard (Mago)</option>
          </select>

          <select id="filter-role" v-model="filterRole">
            <option value="all">Todos los Roles</option>
            <option value="tank">Frontline / Tank</option>
            <option value="blaster">Blaster / AoE</option>
            <option value="controller">Controlador / Controller</option>
            <option value="striker">Striker / DPS Melee</option>
            <option value="healer">Sanador / Support</option>
          </select>
        </div>
      </div>
    </header>

    <!-- Main Workspace -->
    <main class="app-main">
      <!-- Sidebar with Build Cards -->
      <aside id="builds-sidebar" class="builds-sidebar" :class="{ hidden: isSidebarHidden, 'builds-sidebar-has-compare': compareBuildIds.length >= 2 }">
        <div class="sidebar-header">
          <h2>Catálogo de Builds</h2>
          <span id="builds-count" class="badge-count">{{ filteredBuilds.length }}</span>
        </div>

        <div class="sidebar-controls">
          <select id="sort-select" v-model="sortOption" class="sort-select">
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
          <div
            v-for="build in filteredBuilds"
            :key="build.id"
            class="build-card"
            :class="{ active: selectedBuild?.id === build.id }"
            @click="selectBuild(build.id, 'character guide.md')"
          >
            <div class="card-header">
              <div class="card-compare-selector" @click.stop>
                <input
                  :id="`chk-${build.id}`"
                  type="checkbox"
                  class="compare-checkbox"
                  :checked="compareBuildIds.includes(build.id)"
                  @change="toggleCompareBuild(build.id)"
                />
                <label :for="`chk-${build.id}`" class="compare-checkbox-custom" title="Seleccionar para comparar"></label>
              </div>
              <h3>{{ build.name }}</h3>
              <span
                class="system-badge"
                :class="build.system.includes('2024') ? 'system-2024' : 'system-2014'"
                @click.stop="filterSystem = build.system.includes('2024') ? '2024' : '2014'"
              >
                {{ build.system.includes('2024') ? 'D&D 2024' : 'D&D 5e (2014)' }}
              </span>
            </div>
            <div class="card-classes">{{ build.classes }}</div>
            <div class="card-role-row">
              <span
                v-for="roleTag in getRoleTags(build.role)"
                :key="roleTag"
                class="role-badge"
                @click.stop="filterRoleByBadge(roleTag)"
              >
                {{ roleTag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Floating Compare Bar in Sidebar -->
        <div id="compare-bar" class="compare-bar" :class="{ hidden: compareBuildIds.length < 2 }">
          <button id="btn-compare" class="btn btn-compare" @click="currentView = 'compare'">
            <span>📊</span> Comparar (<span id="compare-count">{{ compareBuildIds.length }}</span>)
          </button>
        </div>
      </aside>

      <!-- Sidebar Resizer -->
      <div id="sidebar-resizer" class="sidebar-resizer" title="Arrastra para cambiar el tamaño"></div>

      <!-- Detail Pane -->
      <section id="detail-pane" class="build-detail-pane">
        <!-- Welcome View -->
        <div v-if="currentView === 'welcome'" id="welcome-view" class="welcome-view">
          <div class="welcome-content">
            <div class="welcome-icon">🎲</div>
            <h2>Bienvenido al Archivo de Builds</h2>
            <p>Selecciona una build en el panel lateral para explorar su hoja de ruta, lista de conjuros, inventario detallado y mecánicas matemáticas de optimización.</p>

            <div class="stats-overview">
              <div class="stat-card">
                <span id="stat-total" class="stat-value">{{ builds.length }}</span>
                <span class="stat-label">Builds Totales</span>
              </div>
              <div class="stat-card">
                <span id="stat-2024" class="stat-value">{{ count2024 }}</span>
                <span class="stat-label">Edición 2024</span>
              </div>
              <div class="stat-card">
                <span id="stat-2014" class="stat-value">{{ count2014 }}</span>
                <span class="stat-label">Edición 2014</span>
              </div>
            </div>

            <button
              id="welcome-btn-radar-table"
              class="btn btn-primary welcome-radar-btn"
              style="margin-top: 2rem; display: flex; align-items: center; gap: 0.5rem; margin-left: auto; margin-right: auto; padding: 0.75rem 1.5rem;"
              @click="currentView = 'radar-table'"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Ver Tabla Comparativa de Radar
            </button>
          </div>
        </div>

        <!-- Build Content View -->
        <div v-else-if="currentView === 'detail' && selectedBuild" id="build-content-view" class="build-content-view">
          <!-- Breadcrumbs -->
          <div id="detail-breadcrumbs" class="breadcrumbs">
            <span class="crumb-root" @click="resetHome">Builds</span> /
            <span class="crumb-build" @click="selectBuild(selectedBuild.id, 'character guide.md')">{{ selectedBuild.name }}</span> /
            <span class="crumb-file">{{ getFileLabel(selectedFile) }}</span>
          </div>

          <header class="detail-header">
            <button id="btn-back-catalog" class="btn btn-secondary btn-back-mobile" title="Volver al catálogo" @click="resetHome">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div class="detail-title-area">
              <div class="detail-title-row">
                <h2 id="detail-build-name">{{ selectedBuild.name }}</h2>
                <span id="detail-system-badge" class="system-badge" :class="selectedBuild.system.includes('2024') ? 'system-2024' : 'system-2014'">
                  {{ selectedBuild.system.includes('2024') ? 'D&D 2024' : 'D&D 5e (2014)' }}
                </span>
              </div>
              <div id="detail-classes" class="detail-subtitle">{{ selectedBuild.classes }}</div>
            </div>

            <div id="level-selector-area" class="level-selector-area" :class="{ hidden: !showTracker && selectedFile !== 'roadmap.md' }">
              <label class="level-selector-label" for="level-slider">Nv. <span id="level-value">{{ currentLevel }}</span></label>
              <input id="level-slider" v-model.number="currentLevel" type="range" min="1" max="20" class="level-slider">
            </div>

            <div class="detail-actions">
              <a v-if="selectedBuild.youtube" id="detail-youtube-btn" :href="selectedBuild.youtube" target="_blank" rel="noopener" class="btn btn-youtube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Ver Guía en YouTube
              </a>
            </div>
          </header>

          <!-- Panel Toggles -->
          <div class="panel-toggles">
            <label class="toggle-switch" for="toggle-tracker">
              <input id="toggle-tracker" v-model="showTracker" type="checkbox">
              <span class="toggle-slider"></span>
              <span class="toggle-text">Recursos</span>
            </label>
            <label class="toggle-switch" for="toggle-radar">
              <input id="toggle-radar" v-model="showRadar" type="checkbox">
              <span class="toggle-slider"></span>
              <span class="toggle-text">Radar</span>
            </label>
          </div>

          <!-- Resource Tracker Container -->
          <div v-if="showTracker" id="resource-tracker" class="resource-tracker-panel">
            <div class="tracker-header">
              <h4>⚔️ Control de Recursos (Nivel {{ currentLevel }})</h4>
              <button class="btn btn-secondary btn-small" @click="resetResourceTracker">Restablecer</button>
            </div>
            <div class="tracker-grid">
              <div v-for="res in calculatedResources" :key="res.id" class="tracker-group">
                <span class="group-label">{{ res.label }}</span>
                <div class="group-bubbles">
                  <div
                    v-for="i in res.count"
                    :key="i"
                    class="tracker-bubble"
                    :class="{ checked: i <= getResourceChecked(res.id) }"
                    @click="toggleResourceBubble(res.id, i)"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Radar Chart Panel -->
          <div v-if="showRadar && selectedBuild.ratings" id="radar-chart-panel" class="radar-chart-panel">
            <div class="radar-svg-wrapper" v-html="renderSingleRadarSvg(selectedBuild.ratings)"></div>
          </div>

          <!-- Detail Tabs -->
          <nav class="detail-tabs">
            <button
              v-for="file in ORDERED_FILES"
              :key="file"
              class="tab-btn"
              :class="{ active: selectedFile === file }"
              @click="switchTab(file)"
            >
              <span>{{ getFileIcon(file) }}</span> {{ getFileLabel(file) }}
            </button>
          </nav>

          <!-- Rendered Document View -->
          <div id="markdown-viewer" class="markdown-container" @click="handleMarkdownClick">
            <div class="markdown-viewer-content" v-html="renderedMarkdownHtml"></div>
          </div>

          <!-- Bottom Navigation Buttons -->
          <div id="content-nav-buttons" class="content-nav-buttons">
            <button id="btn-prev-file" class="btn btn-secondary" :disabled="currentFileIndex <= 0" @click="prevFile">
              <span class="btn-icon">←</span> Anterior
            </button>
            <button id="btn-back-bottom" class="btn btn-secondary" @click="resetHome">
              <span>📋</span> Volver
            </button>
            <button id="btn-next-file" class="btn btn-secondary" :disabled="currentFileIndex >= ORDERED_FILES.length - 1" @click="nextFile">
              Siguiente <span class="btn-icon">→</span>
            </button>
          </div>
        </div>

        <!-- Compare View Pane -->
        <div v-else-if="currentView === 'compare'" id="compare-view" class="compare-view">
          <header class="compare-header">
            <button id="btn-close-compare-mobile" class="btn btn-secondary btn-back-mobile" title="Cerrar comparación" @click="closeCompare">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div class="compare-title-area">
              <h2>📊 Comparador de Builds</h2>
              <p>Comparativa detallada y perfiles de optimización superpuestos</p>
            </div>
            <button id="btn-close-compare" class="btn btn-secondary btn-close-compare-desktop" @click="closeCompare">
              Cerrar Comparación
            </button>
          </header>

          <div class="compare-workspace">
            <div class="compare-radar-section">
              <h3>Perfil de Optimización Superpuesto</h3>
              <div id="compare-radar-chart" class="compare-radar-container" v-html="renderOverlayRadarSvg(selectedCompareBuilds)"></div>
              <div id="compare-legend" class="compare-legend">
                <div
                  v-for="b in selectedCompareBuilds"
                  :key="b.id"
                  class="legend-item"
                  :class="{ highlighted: hoveredCompareBuildId === b.id }"
                  :data-build-id="b.id"
                  @mouseenter="hoveredCompareBuildId = b.id"
                  @mouseleave="hoveredCompareBuildId = null"
                >
                  <span class="legend-color" :style="{ backgroundColor: getClassColor(b.classes) }"></span>
                  <span>{{ b.name }}</span>
                </div>
              </div>
            </div>

            <div class="compare-table-section">
              <h3>Tabla de Características</h3>
              <div id="compare-table-container" class="compare-table-container">
                <p v-if="selectedCompareBuilds.length === 0" class="no-results">No hay builds seleccionadas para comparar.</p>
                <table v-else class="compare-table">
                  <thead>
                    <tr>
                      <th>Característica</th>
                      <th
                        v-for="b in selectedCompareBuilds"
                        :key="b.id"
                        :class="[`build-col-${b.id}`, { highlighted: hoveredCompareBuildId === b.id }]"
                        :data-build-id="b.id"
                        @mouseenter="hoveredCompareBuildId = b.id"
                        @mouseleave="hoveredCompareBuildId = null"
                      >
                        <div class="compare-header-cell">
                          <span :style="{ color: getClassColor(b.id), fontWeight: 700 }">{{ b.name }}</span>
                          <button class="btn-remove-col" title="Quitar de la comparación" @click.stop="toggleCompareBuild(b.id)">×</button>
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
                        @mouseenter="hoveredCompareBuildId = b.id"
                        @mouseleave="hoveredCompareBuildId = null"
                      >
                        {{ b.classes }}
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
                        @mouseenter="hoveredCompareBuildId = b.id"
                        @mouseleave="hoveredCompareBuildId = null"
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
                        @mouseenter="hoveredCompareBuildId = b.id"
                        @mouseleave="hoveredCompareBuildId = null"
                      >
                        {{ b.role }}
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
                        @mouseenter="hoveredCompareBuildId = b.id"
                        @mouseleave="hoveredCompareBuildId = null"
                      >
                        <span v-if="isWinner(b.id, cat.key, selectedCompareBuilds)" class="stat-winner">
                          {{ b.ratings[cat.key] || 0 }}/100
                        </span>
                        <span v-else>
                          {{ b.ratings[cat.key] || 0 }}/100
                        </span>
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
                        @mouseenter="hoveredCompareBuildId = b.id"
                        @mouseleave="hoveredCompareBuildId = null"
                      >
                        <span v-if="isAvgWinner(b.id, selectedCompareBuilds)" class="stat-winner">
                          {{ getAverageRating(b.ratings) }}/100
                        </span>
                        <span v-else>
                          {{ getAverageRating(b.ratings) }}/100
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Radar Table View Pane -->
        <div v-else-if="currentView === 'radar-table'" id="radar-table-view" class="radar-table-view">
          <header class="radar-table-header">
            <button id="btn-close-radar-table-mobile" class="btn btn-secondary btn-back-mobile" title="Cerrar tabla de radar" @click="currentView = selectedBuild ? 'detail' : 'welcome'">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div class="radar-table-title-area">
              <h2>📊 Tabla de Radar de Optimización</h2>
              <p>Matriz completa y ordenada de puntuaciones para todas las builds del catálogo</p>
            </div>
            <button id="btn-close-radar-table" class="btn btn-secondary btn-close-radar-table-desktop" @click="currentView = selectedBuild ? 'detail' : 'welcome'">
              Cerrar Tabla
            </button>
          </header>

          <div class="radar-table-workspace">
            <div class="radar-table-container">
              <table class="radar-compare-table">
                <thead>
                  <tr>
                    <th :class="{ sorted: radarSortColumn === 'name' }" @click="sortRadarTable('name')">
                      <span class="th-content">Build <span class="sort-indicator" :class="getSortDirClass('name')">{{ getSortDirIcon('name') }}</span></span>
                    </th>
                    <th :class="{ sorted: radarSortColumn === 'system' }" @click="sortRadarTable('system')">
                      <span class="th-content">Reglamento <span class="sort-indicator" :class="getSortDirClass('system')">{{ getSortDirIcon('system') }}</span></span>
                    </th>
                    <th :class="{ sorted: radarSortColumn === 'dpr' }" @click="sortRadarTable('dpr')">
                      <span class="th-content">⚔️ DPR <span class="sort-indicator" :class="getSortDirClass('dpr')">{{ getSortDirIcon('dpr') }}</span></span>
                    </th>
                    <th :class="{ sorted: radarSortColumn === 'ehp' }" @click="sortRadarTable('ehp')">
                      <span class="th-content">🛡️ EHP <span class="sort-indicator" :class="getSortDirClass('ehp')">{{ getSortDirIcon('ehp') }}</span></span>
                    </th>
                    <th :class="{ sorted: radarSortColumn === 'control' }" @click="sortRadarTable('control')">
                      <span class="th-content">🌪️ Control <span class="sort-indicator" :class="getSortDirClass('control')">{{ getSortDirIcon('control') }}</span></span>
                    </th>
                    <th :class="{ sorted: radarSortColumn === 'support' }" @click="sortRadarTable('support')">
                      <span class="th-content">💖 Soporte <span class="sort-indicator" :class="getSortDirClass('support')">{{ getSortDirIcon('support') }}</span></span>
                    </th>
                    <th :class="{ sorted: radarSortColumn === 'complexity' }" @click="sortRadarTable('complexity')">
                      <span class="th-content">🧠 Complejidad <span class="sort-indicator" :class="getSortDirClass('complexity')">{{ getSortDirIcon('complexity') }}</span></span>
                    </th>
                    <th :class="{ sorted: radarSortColumn === 'avg' }" @click="sortRadarTable('avg')">
                      <span class="th-content">📊 Media <span class="sort-indicator" :class="getSortDirClass('avg')">{{ getSortDirIcon('avg') }}</span></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="b in sortedRadarTableBuilds" :key="b.id" class="radar-table-row" :class="{ highlight: selectedBuild?.id === b.id }" @click="selectBuild(b.id, 'character guide.md')">
                    <td class="font-bold cursor-pointer">{{ b.name }}</td>
                    <td><span class="system-badge" :class="b.system.includes('2024') ? 'system-2024' : 'system-2014'">{{ b.system.includes('2024') ? '2024 (5.5e)' : '2014 (5e)' }}</span></td>
                    <td>
                      <div class="rating-cell">
                        <span class="rating-val">{{ b.ratings.dpr }}</span>
                        <div class="rating-bar-bg"><div class="rating-bar-fill dpr-color" :style="{ width: `${b.ratings.dpr}%` }"></div></div>
                      </div>
                    </td>
                    <td>
                      <div class="rating-cell">
                        <span class="rating-val">{{ b.ratings.ehp }}</span>
                        <div class="rating-bar-bg"><div class="rating-bar-fill ehp-color" :style="{ width: `${b.ratings.ehp}%` }"></div></div>
                      </div>
                    </td>
                    <td>
                      <div class="rating-cell">
                        <span class="rating-val">{{ b.ratings.control }}</span>
                        <div class="rating-bar-bg"><div class="rating-bar-fill control-color" :style="{ width: `${b.ratings.control}%` }"></div></div>
                      </div>
                    </td>
                    <td>
                      <div class="rating-cell">
                        <span class="rating-val">{{ b.ratings.support }}</span>
                        <div class="rating-bar-bg"><div class="rating-bar-fill support-color" :style="{ width: `${b.ratings.support}%` }"></div></div>
                      </div>
                    </td>
                    <td>
                      <div class="rating-cell">
                        <span class="rating-val">{{ b.ratings.complexity }}</span>
                        <div class="rating-bar-bg"><div class="rating-bar-fill complexity-color" :style="{ width: `${b.ratings.complexity}%` }"></div></div>
                      </div>
                    </td>
                    <td>
                      <div class="rating-cell">
                        <span class="rating-val text-primary font-bold">{{ getAverageRating(b.ratings) }}</span>
                        <div class="rating-bar-bg"><div class="rating-bar-fill avg-color" :style="{ width: `${getAverageRating(b.ratings)}%` }"></div></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import { marked } from 'marked';
import katex from 'katex';

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
  classes: string;
  system: string;
  role: string;
  folder: string;
  youtube: string | null;
  ratings: Ratings;
}

const ORDERED_FILES = [
  'character guide.md',
  'spell list.md',
  'roadmap.md',
  'actual inventory list.md',
  'item list to obtain.md',
  'bastion and downtime.md'
];

const FILE_LABELS: Record<string, string> = {
  'character guide.md': 'Guía Principal',
  'spell list.md': 'Conjuros',
  'roadmap.md': 'Progreso Nivel a Nivel',
  'actual inventory list.md': 'Inventario Equipado',
  'item list to obtain.md': 'Objetos Deseados',
  'bastion and downtime.md': 'Bastión y Tiempo Muerto'
};

const FILE_ICONS: Record<string, string> = {
  'character guide.md': '📖',
  'spell list.md': '🔮',
  'roadmap.md': '🗺️',
  'actual inventory list.md': '🎒',
  'item list to obtain.md': '🎯',
  'bastion and downtime.md': '🏰'
};

const CLASS_COLORS: Record<string, { primary: string; secondary: string }> = {
  barbarian: { primary: '#ef4444', secondary: '#b91c1c' },
  bard: { primary: '#ec4899', secondary: '#a855f7' },
  cleric: { primary: '#eab308', secondary: '#ca8a04' },
  druid: { primary: '#10b981', secondary: '#047857' },
  fighter: { primary: '#94a3b8', secondary: '#64748b' },
  monk: { primary: '#06b6d4', secondary: '#0891b2' },
  paladin: { primary: '#f59e0b', secondary: '#d97706' },
  ranger: { primary: '#84cc16', secondary: '#65a30d' },
  rogue: { primary: '#818cf8', secondary: '#4f46e5' },
  sorcerer: { primary: '#ec4899', secondary: '#db2777' },
  warlock: { primary: '#8b5cf6', secondary: '#6d28d9' },
  wizard: { primary: '#3b82f6', secondary: '#1d4ed8' },
  artificer: { primary: '#f97316', secondary: '#ea580c' }
};

const ratingCategories = [
  { key: 'dpr' as const, label: 'Daño (DPR)' },
  { key: 'ehp' as const, label: 'Tanque (EHP)' },
  { key: 'control' as const, label: 'Control' },
  { key: 'support' as const, label: 'Soporte' },
  { key: 'complexity' as const, label: 'Mecánicas' }
];

// State
const builds = ref<Build[]>([]);
const selectedBuild = ref<Build | null>(null);
const selectedFile = ref('character guide.md');
const currentView = ref<'welcome' | 'detail' | 'compare' | 'radar-table'>('welcome');
const searchQuery = ref('');
const filterSystem = ref('all');
const filterClass = ref('all');
const filterRole = ref('all');
const sortOption = ref('name-asc');

const isSidebarHidden = ref(false);
const isHeaderHidden = ref(false);
const isFilterVisible = ref(false);
const isLayoutSettingsOpen = ref(false);
const showTracker = ref(false);
const showRadar = ref(false);
const currentLevel = ref(20);

const compareBuildIds = ref<string[]>([]);
const hoveredCompareBuildId = ref<string | null>(null);
const rawMarkdown = ref('');
const resourceStorage = ref<Record<string, number>>({});
const radarSortColumn = ref<string>('avg');
const radarSortAsc = ref(false);

const count2024 = computed(() => builds.value.filter(b => b.system.includes('2024')).length);
const count2014 = computed(() => builds.value.filter(b => b.system.includes('2014')).length);

const currentFileIndex = computed(() => ORDERED_FILES.indexOf(selectedFile.value));

const selectedCompareBuilds = computed(() => {
  return compareBuildIds.value.map(id => builds.value.find(b => b.id === id)).filter((b): b is Build => !!b);
});

const filteredBuilds = computed(() => {
  let list = builds.value.filter(build => {
    if (filterSystem.value === '2014' && !build.system.includes('2014')) return false;
    if (filterSystem.value === '2024' && !build.system.includes('2024')) return false;

    if (filterClass.value !== 'all' && !build.classes.toLowerCase().includes(filterClass.value.toLowerCase())) {
      return false;
    }

    if (filterRole.value !== 'all') {
      const r = filterRole.value.toLowerCase();
      const roleStr = build.role.toLowerCase();
      if (r === 'tank' && !roleStr.includes('tank') && !roleStr.includes('frontline')) return false;
      if (r === 'blaster' && !roleStr.includes('blaster') && !roleStr.includes('aoe')) return false;
      if (r === 'controller' && !roleStr.includes('control') && !roleStr.includes('controller')) return false;
      if (r === 'striker' && !roleStr.includes('striker') && !roleStr.includes('dps') && !roleStr.includes('melee')) return false;
      if (r === 'healer' && !roleStr.includes('healer') && !roleStr.includes('support') && !roleStr.includes('soporte') && !roleStr.includes('sanador')) return false;
    }

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase();
      return (
        build.name.toLowerCase().includes(q) ||
        build.classes.toLowerCase().includes(q) ||
        build.role.toLowerCase().includes(q)
      );
    }

    return true;
  });

  return list.sort((a, b) => {
    const avgA = parseFloat(getAverageRating(a.ratings));
    const avgB = parseFloat(getAverageRating(b.ratings));

    switch (sortOption.value) {
      case 'name-asc': return a.name.localeCompare(b.name);
      case 'name-desc': return b.name.localeCompare(a.name);
      case 'avg-desc': return avgB - avgA;
      case 'avg-asc': return avgA - avgB;
      case 'class-asc': return a.classes.localeCompare(b.classes);
      case 'class-desc': return b.classes.localeCompare(a.classes);
      case 'dpr-desc': return (b.ratings.dpr || 0) - (a.ratings.dpr || 0);
      case 'ehp-desc': return (b.ratings.ehp || 0) - (a.ratings.ehp || 0);
      case 'control-desc': return (b.ratings.control || 0) - (a.ratings.control || 0);
      case 'support-desc': return (b.ratings.support || 0) - (a.ratings.support || 0);
      case 'complexity-asc': return (a.ratings.complexity || 0) - (b.ratings.complexity || 0);
      case 'complexity-desc': return (b.ratings.complexity || 0) - (a.ratings.complexity || 0);
      default: return 0;
    }
  });
});

const sortedRadarTableBuilds = computed(() => {
  return [...filteredBuilds.value].sort((a, b) => {
    let valA: number | string = 0;
    let valB: number | string = 0;

    if (radarSortColumn.value === 'name') { valA = a.name; valB = b.name; }
    else if (radarSortColumn.value === 'system') { valA = a.system; valB = b.system; }
    else if (radarSortColumn.value === 'avg') {
      valA = parseFloat(getAverageRating(a.ratings));
      valB = parseFloat(getAverageRating(b.ratings));
    } else {
      const k = radarSortColumn.value as keyof Ratings;
      valA = a.ratings[k] || 0;
      valB = b.ratings[k] || 0;
    }

    if (typeof valA === 'string' && typeof valB === 'string') {
      return radarSortAsc.value ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }
    return radarSortAsc.value ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
  });
});

function getClassColor(buildIdOrClasses: string): string {
  const b = builds.value.find(x => x.id === buildIdOrClasses);
  const str = b ? b.classes : buildIdOrClasses;
  if (!str) return '#6366f1';
  const lower = str.toLowerCase();
  for (const [cls, colors] of Object.entries(CLASS_COLORS)) {
    if (lower.includes(cls)) return colors.primary;
  }
  return '#6366f1';
}

function getFileLabel(f: string): string { return FILE_LABELS[f] || f; }
function getFileIcon(f: string): string { return FILE_ICONS[f] || '📄'; }

function getRoleTags(roleStr: string): string[] {
  if (!roleStr) return [];
  return roleStr.split('/').map(r => r.trim());
}

function filterRoleByBadge(roleTag: string) {
  const badgeText = roleTag.toLowerCase();
  if (badgeText.includes('tank') || badgeText.includes('frontline')) filterRole.value = 'tank';
  else if (badgeText.includes('blaster') || badgeText.includes('aoe')) filterRole.value = 'blaster';
  else if (badgeText.includes('controller') || badgeText.includes('control')) filterRole.value = 'controller';
  else if (badgeText.includes('striker') || badgeText.includes('dps') || badgeText.includes('melee')) filterRole.value = 'striker';
  else if (badgeText.includes('healer') || badgeText.includes('support') || badgeText.includes('soporte') || badgeText.includes('sanador')) filterRole.value = 'healer';
}

function getAverageRating(r: Ratings): string {
  if (!r) return '0.0';
  const avg = (r.dpr + r.ehp + r.control + r.support + r.complexity) / 5;
  return avg.toFixed(1);
}

function toggleCompareBuild(id: string) {
  const idx = compareBuildIds.value.indexOf(id);
  if (idx === -1) {
    compareBuildIds.value.push(id);
  } else {
    compareBuildIds.value.splice(idx, 1);
  }
  if (compareBuildIds.value.length < 2 && currentView.value === 'compare') {
    closeCompare();
  }
}

function closeCompare() {
  currentView.value = selectedBuild.value ? 'detail' : 'welcome';
}

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

function sortRadarTable(col: string) {
  if (radarSortColumn.value === col) {
    radarSortAsc.value = !radarSortAsc.value;
  } else {
    radarSortColumn.value = col;
    radarSortAsc.value = false;
  }
}

function getSortDirClass(col: string): string {
  if (radarSortColumn.value !== col) return 'placeholder';
  return radarSortAsc.value ? 'asc' : 'desc';
}

function getSortDirIcon(col: string): string {
  if (radarSortColumn.value !== col) return '▲';
  return radarSortAsc.value ? '▲' : '▼';
}

function toggleRadarTableView() {
  if (currentView.value === 'radar-table') {
    currentView.value = selectedBuild.value ? 'detail' : 'welcome';
  } else {
    currentView.value = 'radar-table';
  }
}

function resetHome() {
  selectedBuild.value = null;
  currentView.value = 'welcome';
  applyDynamicTheme(null);
  window.location.hash = '';
}

function selectBuild(buildId: string, file: string = 'character guide.md') {
  const build = builds.value.find(b => b.id === buildId);
  if (!build) return;
  selectedBuild.value = build;
  selectedFile.value = file;
  currentView.value = 'detail';
  applyDynamicThemeForBuild(build.classes);
  loadMarkdown();
  window.location.hash = `#build=${buildId}&file=${encodeURIComponent(file)}`;
}

function switchTab(file: string) {
  selectedFile.value = file;
  loadMarkdown();
  if (selectedBuild.value) {
    window.location.hash = `#build=${selectedBuild.value.id}&file=${encodeURIComponent(file)}`;
  }
}

function prevFile() {
  if (currentFileIndex.value > 0) {
    switchTab(ORDERED_FILES[currentFileIndex.value - 1]);
  }
}

function nextFile() {
  if (currentFileIndex.value < ORDERED_FILES.length - 1) {
    switchTab(ORDERED_FILES[currentFileIndex.value + 1]);
  }
}

async function loadMarkdown() {
  if (!selectedBuild.value) return;

  const folderEncoded = encodeURI(selectedBuild.value.folder);
  const fileEncoded = encodeURIComponent(selectedFile.value);
  const filePath = `/${folderEncoded}/${fileEncoded}`;

  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error('File not found');
    rawMarkdown.value = await res.text();
    await nextTick();
    if (selectedFile.value === 'roadmap.md') {
      applyRoadmapTableFilter();
    }
  } catch (err) {
    rawMarkdown.value = `### Contenido No Disponible\nNo se pudo cargar el archivo \`${selectedFile.value}\`.`;
  }
}

// Markdown + KaTeX LaTeX Parsing
const renderedMarkdownHtml = computed(() => {
  if (!rawMarkdown.value) return '<div class="skeleton-loader"></div>';

  let text = rawMarkdown.value.replace(/(?:^|\s)(\.\/[a-zA-Z0-9\s_-]+\.md)/g, (match, path) => {
    const cleanPath = path.trim();
    const fileName = cleanPath.replace('./', '');
    const label = FILE_LABELS[fileName] || fileName;
    return ` [${label}](${encodeURI(cleanPath)})`;
  });

  const mathBlocks: { id: string; math: string; display: boolean }[] = [];

  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
    const id = `MATHDISPLAYPLACEHOLDER${mathBlocks.length}`;
    mathBlocks.push({ id, math, display: true });
    return id;
  });

  text = text.replace(/\$([^$\n]+?)\$/g, (_, math) => {
    const id = `MATHINLINEPLACEHOLDER${mathBlocks.length}`;
    mathBlocks.push({ id, math, display: false });
    return id;
  });

  let html = marked.parse(text) as string;

  mathBlocks.forEach(({ id, math, display }) => {
    try {
      const rendered = katex.renderToString(math.trim(), { displayMode: display, throwOnError: false });
      html = html.replace(id, rendered);
    } catch {
      html = html.replace(id, display ? `$$${math}$$` : `$${math}$`);
    }
  });

  return html;
});

function applyRoadmapTableFilter() {
  const container = document.getElementById('markdown-viewer');
  if (!container) return;
  const rows = container.querySelectorAll('table tbody tr, table tr');
  rows.forEach(row => {
    const firstTd = row.querySelector('td');
    if (!firstTd) return;
    const m = firstTd.textContent?.match(/\d+/);
    if (!m) return;
    const rowLvl = parseInt(m[0]);
    if (rowLvl === currentLevel.value) {
      row.classList.add('current-level-row');
      row.classList.remove('future-level-row');
    } else if (rowLvl > currentLevel.value) {
      row.classList.add('future-level-row');
      row.classList.remove('current-level-row');
    } else {
      row.classList.remove('current-level-row', 'future-level-row');
    }
  });
}

function handleMarkdownClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href) return;

  const decodedHref = decodeURIComponent(href);
  if (decodedHref.endsWith('.md') && (decodedHref.startsWith('./') || !decodedHref.includes('/'))) {
    e.preventDefault();
    const filename = decodedHref.replace('./', '');
    if (ORDERED_FILES.includes(filename) && selectedBuild.value) {
      switchTab(filename);
    }
  }
}

// Dynamic Theme per D&D class
function applyDynamicThemeForBuild(classesStr: string) {
  if (!classesStr) { applyDynamicTheme(null); return; }

  const lower = classesStr.toLowerCase();
  const knownClasses = Object.keys(CLASS_COLORS);
  const matched = knownClasses.filter(c => lower.includes(c));

  if (matched.length === 0) { applyDynamicTheme(null); return; }

  const primaryClass = matched[0];
  const secondaryClass = matched[1] || primaryClass;

  const primaryColor = CLASS_COLORS[primaryClass].primary;
  const secondaryColor = matched.length > 1 ? CLASS_COLORS[secondaryClass].primary : CLASS_COLORS[primaryClass].secondary;

  applyDynamicTheme({
    primary: primaryColor,
    primaryGlow: hexToRgba(primaryColor, 0.15),
    secondary: secondaryColor,
    secondaryGlow: hexToRgba(secondaryColor, 0.15)
  });
}

function hexToRgba(hex: string, alpha: number) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function applyDynamicTheme(colors: { primary: string; primaryGlow: string; secondary: string; secondaryGlow: string } | null) {
  const root = document.documentElement;
  if (!colors) {
    root.style.setProperty('--color-primary', '#6366f1');
    root.style.setProperty('--color-primary-glow', 'rgba(99, 102, 241, 0.15)');
    root.style.setProperty('--color-secondary', '#a855f7');
    root.style.setProperty('--color-secondary-glow', 'rgba(168, 85, 247, 0.15)');
    return;
  }
  root.style.setProperty('--color-primary', colors.primary);
  root.style.setProperty('--color-primary-glow', colors.primaryGlow);
  root.style.setProperty('--color-secondary', colors.secondary);
  root.style.setProperty('--color-secondary-glow', colors.secondaryGlow);
}

// Resource Tracker Logic
const calculatedResources = computed(() => {
  if (!selectedBuild.value) return [];
  const lvl = currentLevel.value;
  const clsStr = selectedBuild.value.classes.toLowerCase();

  const parseLevel = (cName: string) => {
    const reg = new RegExp(`${cName}\\s*(\\d+)`, 'i');
    const m = clsStr.match(reg);
    return m ? parseInt(m[1]) : (clsStr.includes(cName) ? lvl : 0);
  };

  const bLvl = parseLevel('barbarian');
  const bardLvl = parseLevel('bard');
  const sorcLvl = parseLevel('sorcerer');
  const warlockLvl = parseLevel('warlock');
  const druidLvl = parseLevel('druid');
  const clericLvl = parseLevel('cleric');
  const paladinLvl = parseLevel('paladin');
  const monkLvl = parseLevel('monk');
  const fighterLvl = parseLevel('fighter');

  const resources = [];

  if (bLvl > 0) {
    let r = 2;
    if (bLvl >= 17) r = 6;
    else if (bLvl >= 12) r = 5;
    else if (bLvl >= 6) r = 4;
    else if (bLvl >= 3) r = 3;
    resources.push({ id: 'rage', label: 'Furia de Bárbaro', count: r });
  }

  if (bardLvl > 0) {
    let die = 'd6';
    if (bardLvl >= 15) die = 'd12';
    else if (bardLvl >= 10) die = 'd10';
    else if (bardLvl >= 5) die = 'd8';
    resources.push({ id: 'inspiration', label: `Inspiración Bárdica (${die})`, count: Math.max(3, Math.floor(lvl / 4)) });
  }

  if (sorcLvl >= 2) {
    resources.push({ id: 'sorcery', label: 'Puntos de Sorcería', count: sorcLvl });
  }

  if (warlockLvl > 0) {
    let slots = 2;
    let slotLvl = 1;
    if (warlockLvl === 1) { slots = 1; slotLvl = 1; }
    else if (warlockLvl === 2) { slots = 2; slotLvl = 1; }
    else if (warlockLvl <= 4) { slots = 2; slotLvl = 2; }
    else if (warlockLvl <= 6) { slots = 2; slotLvl = 3; }
    else if (warlockLvl <= 8) { slots = 2; slotLvl = 4; }
    else { slots = warlockLvl >= 17 ? 4 : 3; slotLvl = 5; }
    resources.push({ id: 'pact', label: `Espacios de Pacto (Nv. ${slotLvl})`, count: slots });
  }

  if (druidLvl >= 2) {
    resources.push({ id: 'wildshape', label: 'Forma Salvaje', count: 2 });
  }

  if (clericLvl >= 2 || paladinLvl >= 3) {
    let cd = 1;
    if (clericLvl >= 18) cd = 3;
    else if (clericLvl >= 6) cd = 2;
    resources.push({ id: 'channel', label: 'Canalizar Divinidad', count: cd });
  }

  if (monkLvl >= 2) {
    resources.push({ id: 'ki', label: 'Puntos de Ki', count: monkLvl });
  }

  if (fighterLvl >= 2) {
    resources.push({ id: 'actionsurge', label: 'Acción Impetuosa', count: fighterLvl >= 17 ? 2 : 1 });
  }

  return resources;
});

function getResourceChecked(resId: string): number {
  if (!selectedBuild.value) return 0;
  const key = `tracker-${selectedBuild.value.id}-${resId}`;
  return resourceStorage.value[key] || 0;
}

function toggleResourceBubble(resId: string, index: number) {
  if (!selectedBuild.value) return;
  const key = `tracker-${selectedBuild.value.id}-${resId}`;
  const current = resourceStorage.value[key] || 0;
  const next = current === index ? index - 1 : index;
  resourceStorage.value[key] = next;
}

function resetResourceTracker() {
  if (!selectedBuild.value) return;
  calculatedResources.value.forEach(res => {
    const key = `tracker-${selectedBuild.value!.id}-${res.id}`;
    delete resourceStorage.value[key];
  });
}

// Single SVG Radar SVG renderer
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

// Overlay SVG Radar renderer for compare mode
function renderOverlayRadarSvg(buildsList: Build[]): string {
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
    const color = getClassColor(build.classes);
    const isHighlighted = hoveredCompareBuildId.value === build.id;
    const isDimmed = hoveredCompareBuildId.value !== null && !isHighlighted;
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

// Hash router handler
function syncHash() {
  const hash = window.location.hash.substring(1);
  if (!hash) {
    selectedBuild.value = null;
    currentView.value = 'welcome';
    applyDynamicTheme(null);
    return;
  }

  const params = new URLSearchParams(hash);
  const view = params.get('view');
  const buildId = params.get('build');
  const file = params.get('file') || 'character guide.md';

  if (view === 'radar-table') {
    currentView.value = 'radar-table';
    applyDynamicTheme(null);
  } else if (buildId) {
    selectBuild(buildId, file);
  }
}

onMounted(async () => {
  try {
    const res = await fetch('/builds.json');
    builds.value = await res.json();
    syncHash();
    window.addEventListener('hashchange', syncHash);
  } catch (err) {
    console.error('Error loading builds.json:', err);
  }
});
</script>
