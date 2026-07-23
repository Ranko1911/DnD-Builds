<template>
  <div class="app-container" :class="{ 'has-build-selected': !!selectedBuild }">
    <!-- Floating restore header button -->
    <button
      v-if="isHeaderHidden"
      class="restore-header-btn"
      title="Mostrar cabecera"
      @click="isHeaderHidden = false"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <!-- Header -->
    <header v-if="!isHeaderHidden" class="app-header">
      <div class="logo-container">
        <button
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
        <div class="logo-text">
          <h1>D&D Build Archivist <span class="badge-v2">v2 Astro</span></h1>
          <p>Optimización y Archivo de Fichas de Personaje (D&D 5e / 2024)</p>
        </div>
      </div>

      <div class="search-filter-bar">
        <div class="search-wrapper">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar por nombre, clase, rol..."
          />
        </div>

        <button
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
          class="btn btn-secondary radar-table-toggle-btn"
          :class="{ active: isRadarTableView }"
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
        <div v-if="isLayoutSettingsOpen" class="layout-settings-dropdown">
          <div class="dropdown-header">Ajustes de Interfaz</div>
          <div class="dropdown-item">
            <label class="toggle-switch">
              <input v-model="isSidebarHidden" type="checkbox">
              <span class="toggle-slider"></span>
              <span class="toggle-text">Ocultar Catálogo</span>
            </label>
          </div>
          <div class="dropdown-item">
            <label class="toggle-switch">
              <input v-model="isHeaderHidden" type="checkbox">
              <span class="toggle-slider"></span>
              <span class="toggle-text">Ocultar Cabecera</span>
            </label>
          </div>
        </div>

        <div class="filter-group" :class="{ active: isFilterVisible }">
          <select v-model="filterSystem">
            <option value="all">Todos los Reglamentos</option>
            <option value="2014">D&D 5e (2014)</option>
            <option value="2024">D&D 2024 (5.5e)</option>
          </select>

          <select v-model="filterClass">
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

          <select v-model="filterRole">
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

    <!-- Main Content Area -->
    <main class="app-main">
      <!-- Sidebar / Catalog -->
      <aside v-if="!isSidebarHidden" class="app-sidebar">
        <div class="sidebar-header">
          <h2>Catálogo</h2>
          <span class="builds-count">{{ filteredBuilds.length }} / {{ builds.length }} builds</span>
        </div>

        <div class="builds-list">
          <div
            v-for="build in filteredBuilds"
            :key="build.id"
            class="build-card"
            :class="{ active: selectedBuild?.id === build.id }"
            @click="selectBuild(build, 'character guide.md')"
          >
            <div class="card-header">
              <div class="card-compare-selector" @click.stop>
                <input
                  type="checkbox"
                  :id="`chk-${build.id}`"
                  :checked="compareBuildIds.includes(build.id)"
                  class="compare-checkbox"
                  @change="toggleCompareBuild(build.id)"
                />
                <label :for="`chk-${build.id}`" class="compare-checkbox-custom" title="Seleccionar para comparar"></label>
              </div>
              <h3>{{ build.name }}</h3>
              <span class="system-badge" :class="getSystemBadgeClass(build.system)">
                {{ getSystemBadgeText(build.system) }}
              </span>
            </div>
            <div class="card-classes">{{ build.classes }}</div>
            <div class="card-role-row">
              <span class="role-badge">{{ build.role }}</span>
            </div>
          </div>
        </div>

        <div v-if="compareBuildIds.length > 1" class="compare-bar-floating">
          <span>{{ compareBuildIds.length }} seleccionados</span>
          <button class="btn btn-primary btn-sm" @click="showCompareView = true">
            Comparar Radar
          </button>
        </div>
      </aside>

      <!-- Main Panel Views -->
      <section class="content-panel">
        <!-- Radar Table View -->
        <div v-if="isRadarTableView" class="radar-table-view">
          <div class="detail-header">
            <h2>Tabla Comparativa Global (Escala 0–100)</h2>
            <button class="btn btn-secondary btn-sm" @click="isRadarTableView = false">Cerrar</button>
          </div>
          <div class="table-responsive">
            <table class="radar-table">
              <thead>
                <tr>
                  <th>Build</th>
                  <th>Reglamento</th>
                  <th>⚔️ DPR</th>
                  <th>🛡️ EHP</th>
                  <th>🌪️ Control</th>
                  <th>💖 Soporte</th>
                  <th>🧠 Complejidad</th>
                  <th>📊 Media</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="b in filteredBuilds" :key="b.id" :class="{ highlight: selectedBuild?.id === b.id }">
                  <td class="font-bold cursor-pointer" @click="selectBuild(b, 'character guide.md')">{{ b.name }}</td>
                  <td><span class="system-badge" :class="getSystemBadgeClass(b.system)">{{ getSystemBadgeText(b.system) }}</span></td>
                  <td>{{ b.ratings.dpr }}</td>
                  <td>{{ b.ratings.ehp }}</td>
                  <td>{{ b.ratings.control }}</td>
                  <td>{{ b.ratings.support }}</td>
                  <td>{{ b.ratings.complexity }}</td>
                  <td class="font-bold text-primary">{{ getAverageRating(b.ratings) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Welcome View when no build selected -->
        <div v-else-if="!selectedBuild" class="welcome-view">
          <div class="welcome-content">
            <svg class="welcome-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <h2>Bienvenido al Archivo de Builds de D&D</h2>
            <p>Selecciona cualquier ficha del catálogo para consultar sus guías, listas de conjuros, progresión, bastión y radar estadístico (Escala 0–100).</p>
            <div class="quick-stats">
              <div class="stat-card">
                <span class="stat-value">{{ builds.length }}</span>
                <span class="stat-label">Builds Totales</span>
              </div>
              <div class="stat-card">
                <span class="stat-value">{{ count2024 }}</span>
                <span class="stat-label">Edición 2024</span>
              </div>
              <div class="stat-card">
                <span class="stat-value">{{ count2014 }}</span>
                <span class="stat-label">Edición 2014</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Selected Build Detail View -->
        <div v-else class="build-detail-view">
          <!-- Build Header -->
          <div class="build-header">
            <div class="build-meta">
              <div class="title-row">
                <h2>{{ selectedBuild.name }}</h2>
                <span class="system-badge" :class="getSystemBadgeClass(selectedBuild.system)">
                  {{ getSystemBadgeText(selectedBuild.system) }}
                </span>
                <a
                  v-if="selectedBuild.youtube"
                  :href="selectedBuild.youtube"
                  target="_blank"
                  rel="noopener"
                  class="youtube-btn"
                >
                  📺 Ver en YouTube
                </a>
              </div>
              <p class="classes-text">{{ selectedBuild.classes }}</p>
            </div>

            <!-- Radar Chart Widget -->
            <div class="header-radar-widget">
              <RadarChart :ratings="selectedBuild.ratings" :size="240" />
            </div>
          </div>

          <!-- Navigation Tabs -->
          <nav class="file-tabs">
            <button
              v-for="file in filesList"
              :key="file.name"
              class="tab-btn"
              :class="{ active: currentFile === file.name }"
              @click="currentFile = file.name"
            >
              {{ file.label }}
            </button>
          </nav>

          <!-- Level Progression Slider -->
          <div class="level-slider-bar">
            <label for="level-slider">Nivel de Personaje: <strong class="text-primary">Nivel {{ currentLevel }}</strong></label>
            <input
              id="level-slider"
              v-model.number="currentLevel"
              type="range"
              min="1"
              max="20"
              step="1"
            />
          </div>

          <!-- Markdown Content Rendered -->
          <div class="markdown-container" v-html="renderedMarkdown"></div>
        </div>
      </section>
    </main>

    <!-- Compare Modal View -->
    <div v-if="showCompareView" class="modal-overlay" @click.self="showCompareView = false">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Comparativa Radar ({{ selectedCompareBuilds.length }} Builds)</h3>
          <button class="btn-close" @click="showCompareView = false">✕</button>
        </div>
        <div class="modal-body">
          <RadarChart :compare-builds="selectedCompareBuilds" :size="360" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { marked } from 'marked';
import katex from 'katex';
import RadarChart from './RadarChart.vue';

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

const builds = ref<Build[]>([]);
const selectedBuild = ref<Build | null>(null);
const currentFile = ref('character guide.md');
const searchQuery = ref('');
const filterSystem = ref('all');
const filterClass = ref('all');
const filterRole = ref('all');
const isSidebarHidden = ref(false);
const isHeaderHidden = ref(false);
const isFilterVisible = ref(false);
const isLayoutSettingsOpen = ref(false);
const isRadarTableView = ref(false);
const showCompareView = ref(false);
const compareBuildIds = ref<string[]>([]);
const currentLevel = ref(20);
const rawMarkdown = ref('');

const filesList = [
  { name: 'character guide.md', label: 'Guía Principal' },
  { name: 'spell list.md', label: 'Conjuros' },
  { name: 'roadmap.md', label: 'Progresión' },
  { name: 'actual inventory list.md', label: 'Inventario Equipado' },
  { name: 'item list to obtain.md', label: 'Objetos Deseados' },
  { name: 'bastion and downtime.md', label: 'Bastión' }
];

const count2024 = computed(() => builds.value.filter(b => b.system.includes('2024')).length);
const count2014 = computed(() => builds.value.filter(b => b.system.includes('2014')).length);

const filteredBuilds = computed(() => {
  return builds.value.filter(build => {
    // System filter
    if (filterSystem.value === '2014' && !build.system.includes('2014')) return false;
    if (filterSystem.value === '2024' && !build.system.includes('2024')) return false;

    // Class filter
    if (filterClass.value !== 'all' && !build.classes.toLowerCase().includes(filterClass.value.toLowerCase())) {
      return false;
    }

    // Role filter
    if (filterRole.value !== 'all') {
      const r = filterRole.value.toLowerCase();
      const roleStr = build.role.toLowerCase();
      if (r === 'tank' && !roleStr.includes('tank') && !roleStr.includes('frontline')) return false;
      if (r === 'blaster' && !roleStr.includes('blaster') && !roleStr.includes('aoe')) return false;
      if (r === 'controller' && !roleStr.includes('control') && !roleStr.includes('controller')) return false;
      if (r === 'striker' && !roleStr.includes('striker') && !roleStr.includes('dps')) return false;
      if (r === 'healer' && !roleStr.includes('healer') && !roleStr.includes('support') && !roleStr.includes('soporte')) return false;
    }

    // Search query
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
});

const selectedCompareBuilds = computed(() => {
  return builds.value.filter(b => compareBuildIds.value.includes(b.id));
});

function getAverageRating(r: Ratings): string {
  const avg = (r.dpr + r.ehp + r.control + r.support + r.complexity) / 5;
  return avg.toFixed(1);
}

function getSystemBadgeClass(sys: string): string {
  return sys.includes('2024') ? 'badge-2024' : 'badge-2014';
}

function getSystemBadgeText(sys: string): string {
  return sys.includes('2024') ? 'D&D 2024' : 'D&D 2014';
}

function toggleCompareBuild(id: string) {
  const idx = compareBuildIds.value.indexOf(id);
  if (idx === -1) {
    compareBuildIds.value.push(id);
  } else {
    compareBuildIds.value.splice(idx, 1);
  }
}

function selectBuild(build: Build, fileName: string = 'character guide.md') {
  selectedBuild.value = build;
  currentFile.value = fileName;
  isRadarTableView.value = false;
  loadMarkdown();
}

function toggleRadarTableView() {
  isRadarTableView.value = !isRadarTableView.value;
}

async function loadMarkdown() {
  if (!selectedBuild.value) return;
  const filePath = `/${selectedBuild.value.folder}/${currentFile.value}`;
  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error('File not found');
    rawMarkdown.value = await res.text();
  } catch (err) {
    rawMarkdown.value = `### Documento no encontrado\nNo se pudo cargar \`${filePath}\`.`;
  }
}

// Render Markdown + KaTeX math typesetting
const renderedMarkdown = computed(() => {
  if (!rawMarkdown.value) return '';

  let parsedHTML = marked.parse(rawMarkdown.value) as string;

  // Process KaTeX LaTeX math blocks: $$ ... $$ and inline: $ ... $
  parsedHTML = parsedHTML.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return math;
    }
  });

  parsedHTML = parsedHTML.replace(/\$([^\$\n]+)\$/g, (_, math) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return math;
    }
  });

  return parsedHTML;
});

watch([selectedBuild, currentFile], () => {
  loadMarkdown();
});

onMounted(async () => {
  try {
    const res = await fetch('/builds.json');
    builds.value = await res.json();
  } catch (err) {
    console.error('Error fetching builds.json:', err);
  }
});
</script>

<style scoped>
.badge-v2 {
  font-size: 0.65rem;
  padding: 2px 6px;
  background: linear-gradient(135deg, #10b981, #0ea5e9);
  color: #fff;
  border-radius: 4px;
  margin-left: 6px;
  vertical-align: middle;
}

.level-slider-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bg-surface-glass);
  padding: 0.75rem 1.25rem;
  border-radius: var(--border-radius-md);
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
}

.level-slider-bar input[type="range"] {
  flex-grow: 1;
  accent-color: var(--color-primary);
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  max-width: 600px;
  width: 90%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.btn-close {
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: 1.25rem;
  cursor: pointer;
}

.compare-bar-floating {
  position: sticky;
  bottom: 0;
  background: var(--bg-surface-glass);
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
}
</style>
