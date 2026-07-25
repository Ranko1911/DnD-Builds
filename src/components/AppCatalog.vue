<template>
  <div class="app-container" :class="{ 'has-build-selected': !!selectedBuild }">
    <!-- Header -->
    <AppHeader
      v-model:searchQuery="searchQuery"
      v-model:isHeaderHidden="isHeaderHidden"
      v-model:isSidebarHidden="isSidebarHidden"
      v-model:isFilterVisible="isFilterVisible"
      v-model:isLayoutSettingsOpen="isLayoutSettingsOpen"
      v-model:showTracker="showTracker"
      v-model:showRadar="showRadar"
      v-model:filterSystem="filterSystem"
      v-model:filterClass="filterClass"
      v-model:filterRole="filterRole"
      :current-view="currentView"
      :active-filter-count="activeFilterCount"
      @reset-home="resetHome"
      @toggle-radar-table="toggleRadarTableView"
      @reset-filters="resetFilters"
    />

    <!-- Main Workspace -->
    <main class="app-main">
      <!-- Backdrop para el panel lateral en móvil -->
      <div
        v-if="!isSidebarHidden"
        class="sidebar-backdrop"
        title="Cerrar catálogo"
        @click="isSidebarHidden = true"
      ></div>

      <!-- Botón Flotante en Móvil para Abrir Catálogo -->
      <button
        v-if="isSidebarHidden"
        class="mobile-fab-catalog"
        title="Abrir Catálogo de Builds"
        @click="isSidebarHidden = false"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
        <span>Builds</span>
      </button>

      <!-- Sidebar with Build Cards -->
      <BuildSidebar
        v-model:searchQuery="searchQuery"
        v-model:filterClass="filterClass"
        v-model:filterRole="filterRole"
        v-model:filterSystem="filterSystem"
        v-model:sortOption="sortOption"
        :filtered-builds="filteredBuilds"
        :selected-build-id="selectedBuild?.id"
        :compare-build-ids="compareBuildIds"
        :is-sidebar-hidden="isSidebarHidden"
        :active-filter-count="activeFilterCount"
        @select-build="selectBuild"
        @toggle-compare="toggleCompareBuild"
        @filter-system="(sys) => filterSystem = sys"
        @filter-role-badge="filterRoleByBadge"
        @open-compare="currentView = 'compare'"
        @reset-filters="resetFilters"
      />

      <!-- Sidebar Resizer -->
      <div id="sidebar-resizer" class="sidebar-resizer" title="Arrastra para cambiar el tamaño"></div>

      <!-- Detail / View Pane -->
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
        <BuildDetail
          v-else-if="currentView === 'detail' && selectedBuild"
          v-model:currentLevel="currentLevel"
          v-model:currentEdition="currentEdition"
          v-model:showRadar="showRadar"
          :selected-build="selectedBuild"
          :selected-file="selectedFile"
          :show-tracker="showTracker"
          :raw-markdown="rawMarkdown"
          :calculated-resources="calculatedResources"
          :get-resource-checked="getResourceChecked"
          @reset-home="resetHome"
          @select-build="selectBuild"
          @switch-tab="switchTab"
          @prev-file="prevFile"
          @next-file="nextFile"
          @reset-resources="resetResourceTracker"
          @toggle-resource-bubble="toggleResourceBubble"
        />

        <!-- Comparison View Pane -->
        <BuildCompareTable
          v-else-if="currentView === 'compare'"
          v-model:hoveredCompareBuildId="hoveredCompareBuildId"
          :selected-compare-builds="selectedCompareBuilds"
          :all-builds="builds"
          @close-compare="closeCompare"
          @toggle-compare-build="toggleCompareBuild"
          @select-build="selectBuild"
        />

        <!-- Radar Table View Pane -->
        <RadarTableView
          v-else-if="currentView === 'radar-table'"
          :sorted-builds="sortedRadarTableBuilds"
          :all-builds="builds"
          :selected-build-id="selectedBuild?.id"
          :radar-sort-column="radarSortColumn"
          :radar-sort-asc="radarSortAsc"
          @close-radar-table="currentView = selectedBuild ? 'detail' : 'welcome'"
          @select-build="selectBuild"
          @sort="sortRadarTable"
        />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import type { Build, Ratings, BuildView, SortOption } from '../types/build';
import { applyDynamicTheme, applyDynamicThemeForBuild } from '../utils/theme';
import { getAverageRating, ORDERED_FILES } from '../utils/formatters';
import AppHeader from './layout/AppHeader.vue';
import BuildSidebar from './sidebar/BuildSidebar.vue';
import BuildDetail from './detail/BuildDetail.vue';
import BuildCompareTable from './compare/BuildCompareTable.vue';
import RadarTableView from './radar/RadarTableView.vue';

// State
const builds = ref<Build[]>([]);
const selectedBuild = ref<Build | null>(null);
const selectedFile = ref('character guide.md');
const currentEdition = ref<'2014' | '2024'>('2024');
const currentView = ref<BuildView>('welcome');
const searchQuery = ref('');
const filterSystem = ref('all');
const filterClass = ref('all');
const filterRole = ref('all');
const sortOption = ref<SortOption>('name-asc');

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

const activeFilterCount = computed(() => {
  let count = 0;
  if (filterSystem.value !== 'all') count++;
  if (filterClass.value !== 'all') count++;
  if (filterRole.value !== 'all') count++;
  if (searchQuery.value.trim() !== '') count++;
  return count;
});

const filteredBuilds = computed(() => {
  const list = builds.value.filter(build => {
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
      if (r === 'striker' && !roleStr.includes('striker') && !roleStr.includes('dps') && !roleStr.includes('melee') && !roleStr.includes('nova') && !roleStr.includes('sniper')) return false;
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
    else if (radarSortColumn.value === 'classes') { valA = a.classes; valB = b.classes; }
    else if (radarSortColumn.value === 'role') { valA = a.role; valB = b.role; }
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

function resetFilters() {
  filterSystem.value = 'all';
  filterClass.value = 'all';
  filterRole.value = 'all';
  searchQuery.value = '';
}

function filterRoleByBadge(roleTag: string) {
  const badgeText = roleTag.toLowerCase();
  if (badgeText.includes('tank') || badgeText.includes('frontline')) filterRole.value = 'tank';
  else if (badgeText.includes('blaster') || badgeText.includes('aoe')) filterRole.value = 'blaster';
  else if (badgeText.includes('controller') || badgeText.includes('control')) filterRole.value = 'controller';
  else if (badgeText.includes('striker') || badgeText.includes('dps') || badgeText.includes('melee')) filterRole.value = 'striker';
  else if (badgeText.includes('healer') || badgeText.includes('support') || badgeText.includes('soporte') || badgeText.includes('sanador')) filterRole.value = 'healer';
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

function sortRadarTable(col: string) {
  if (radarSortColumn.value === col) {
    radarSortAsc.value = !radarSortAsc.value;
  } else {
    radarSortColumn.value = col;
    radarSortAsc.value = false;
  }
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
  currentEdition.value = build.system.includes('2024') ? '2024' : '2014';
  currentView.value = 'detail';
  applyDynamicThemeForBuild(build.classes);
  loadMarkdown();
  window.location.hash = `#build=${buildId}&file=${encodeURIComponent(file)}`;

  if (typeof window !== 'undefined' && window.innerWidth < 900) {
    isSidebarHidden.value = true;
  }
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

  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  const folderEncoded = encodeURI(selectedBuild.value.folder);
  const baseName = selectedFile.value.replace('.md', '');

  const editionFileName = `${baseName} ${currentEdition.value}.md`;
  const editionFileEncoded = encodeURIComponent(editionFileName);
  const editionPath = `${baseUrl}/${folderEncoded}/${editionFileEncoded}`;

  const defaultFileEncoded = encodeURIComponent(selectedFile.value);
  const defaultPath = `${baseUrl}/${folderEncoded}/${defaultFileEncoded}`;

  try {
    let res = await fetch(editionPath);
    if (!res.ok) {
      res = await fetch(defaultPath);
    }
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

watch(currentEdition, () => {
  if (selectedBuild.value && currentView.value === 'detail') {
    loadMarkdown();
  }
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

// Resource Tracker Logic
const calculatedResources = computed(() => {
  if (!selectedBuild.value) return [];
  const lvl = currentLevel.value;
  const clsStr = selectedBuild.value.classes.toLowerCase();

  const parseLevel = (cName: string) => {
    const reg = new RegExp(`${cName}[^/\\d]*(\\d+)`, 'i');
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
    const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
    const res = await fetch(`${baseUrl}/builds.json`);
    builds.value = await res.json();
    syncHash();
    window.addEventListener('hashchange', syncHash);
  } catch (err) {
    console.error('Error loading builds.json:', err);
  }
});
</script>
