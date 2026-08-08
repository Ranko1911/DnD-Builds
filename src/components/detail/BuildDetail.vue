<template>
  <div id="build-content-view" class="build-content-view">
    <!-- Breadcrumbs & View Toggle Bar -->
    <div id="detail-breadcrumbs" class="breadcrumbs">
      <div class="crumb-path">
        <span class="crumb-root" @click="$emit('reset-home')">Builds</span> /
        <span class="crumb-build" @click="$emit('select-build', selectedBuild.id, 'character guide.md')">{{ selectedBuild.name }}</span> /
        <span class="crumb-file">{{ getFileLabel(selectedFile) }}</span>
      </div>

      <div class="view-mode-toggle" v-if="parsedJsonData && (parsedJsonData.sections?.length > 0 || parsedJsonData.tables?.length > 0)">
        <button
          class="toggle-mode-btn"
          :class="{ active: viewMode === 'interactive' }"
          title="Vista estructurada interactiva basada en datos JSON"
          @click="viewMode = 'interactive'"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span>Vista JSON</span>
        </button>
        <button
          class="toggle-mode-btn"
          :class="{ active: viewMode === 'markdown' }"
          title="Vista documento Markdown original"
          @click="viewMode = 'markdown'"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>Markdown</span>
        </button>
      </div>
    </div>

    <header class="detail-header">
      <div class="detail-header-main">
        <button id="btn-back-catalog" class="btn btn-secondary btn-back-mobile" title="Volver al catálogo" @click="$emit('reset-home')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <div class="detail-title-area">
          <div class="detail-title-row">
            <h2 id="detail-build-name">{{ selectedBuild.name }}</h2>
            <div class="edition-toggle-container">
              <button
                class="edition-toggle-btn"
                :class="{ active: currentEdition === '2014' }"
                @click="$emit('update:currentEdition', '2014')"
              >
                2014 (5e)
              </button>
              <button
                class="edition-toggle-btn"
                :class="{ active: currentEdition === '2024' }"
                @click="$emit('update:currentEdition', '2024')"
              >
                2024 (5.5e)
              </button>
            </div>
          </div>
          <div id="detail-classes" class="detail-subtitle">{{ selectedBuild.classes }}</div>
        </div>
      </div>

      <div class="detail-header-sub" v-if="(showTracker || selectedFile === 'roadmap.md') || selectedBuild.youtube">
        <div id="level-selector-area" class="level-selector-area" :class="{ hidden: !showTracker && selectedFile !== 'roadmap.md' }">
          <label class="level-selector-label" for="level-slider">Nv. <span id="level-value">{{ currentLevel }}</span></label>
          <input
            id="level-slider"
            :value="currentLevel"
            type="range"
            min="1"
            max="20"
            class="level-slider"
            @input="$emit('update:currentLevel', parseInt(($event.target as HTMLInputElement).value))"
          >
        </div>

        <div v-if="selectedBuild.youtube" class="detail-actions">
          <a id="detail-youtube-btn" :href="selectedBuild.youtube" target="_blank" rel="noopener" class="btn btn-youtube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Resource Tracker Area -->
    <div id="resource-tracker-card" class="resource-tracker-card" :class="{ hidden: !showTracker || calculatedResources.length === 0 }">
      <div class="tracker-header">
        <div class="tracker-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          Tracker de Recursos (Nv. <span id="tracker-level">{{ currentLevel }}</span>)
        </div>
        <button id="btn-reset-tracker" class="btn btn-text btn-reset-tracker" title="Restablecer recursos" @click="$emit('reset-resources')">
          Restablecer
        </button>
      </div>
      <div id="tracker-items-grid" class="tracker-items-grid">
        <div v-for="res in calculatedResources" :key="res.id" class="tracker-item">
          <span class="tracker-label">{{ res.label }}</span>
          <div class="tracker-bubbles">
            <span
              v-for="i in res.count"
              :key="i"
              class="tracker-bubble"
              :class="{ used: getResourceChecked(res.id) >= i }"
              @click="$emit('toggle-resource-bubble', res.id, i)"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <nav id="detail-nav-tabs" class="detail-tabs">
      <button
        v-for="file in ORDERED_FILES"
        :key="file"
        class="tab-btn"
        :class="{ active: selectedFile === file }"
        @click="$emit('switch-tab', file)"
      >
        <span class="tab-icon">{{ getFileIcon(file) }}</span>
        <span class="tab-text">{{ getFileLabel(file) }}</span>
      </button>
    </nav>

    <!-- Document Viewer Container -->
    <div id="document-viewer-wrapper" class="markdown-container">
      <!-- High-End Character Attributes Stats Grid (when viewing guide) -->
      <BuildStatsGrid
        v-if="selectedFile.includes('character guide') && generalDataSection"
        :selectedBuild="selectedBuild"
        :generalDataSection="generalDataSection"
      />

      <!-- Interactive Structured JSON View -->
      <JsonSectionViewer
        v-if="viewMode === 'interactive' && parsedJsonData && (parsedJsonData.sections?.length > 0 || parsedJsonData.tables?.length > 0)"
        :sections="parsedJsonData.sections || []"
        :tables="parsedJsonData.tables || []"
        :current-level="currentLevel"
      />

      <!-- Fallback Content Viewer (Standard HTML/Markdown) -->
      <div
        v-else
        id="markdown-viewer"
        class="markdown-viewer-content"
        @click="handleMarkdownClick"
        v-html="renderedHtml"
      ></div>

      <!-- Floating Radar Panel -->
      <aside v-if="showRadar" id="floating-radar-panel" class="floating-radar-panel">
        <div class="radar-card-header">
          <span class="radar-title">Perfil de Optimización</span>
          <button id="btn-close-floating-radar" class="btn-close-radar" title="Cerrar radar" @click="$emit('update:showRadar', false)">×</button>
        </div>
        <RadarSvgChart :ratings="selectedBuild.ratings" />
      </aside>
    </div>

    <!-- Bottom Navigation Footer -->
    <footer class="doc-footer">
      <button id="btn-prev-file" class="btn btn-secondary" :disabled="currentFileIndex <= 0" @click="$emit('prev-file')">
        ← Anterior
      </button>
      <button id="btn-next-file" class="btn btn-secondary" :disabled="currentFileIndex >= ORDERED_FILES.length - 1" @click="$emit('next-file')">
        Siguiente →
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Build } from '../../types/build';
import { ORDERED_FILES, getFileLabel, getFileIcon } from '../../utils/formatters';
import { parseMarkdownWithKaTeX } from '../../utils/markdown';
import RadarSvgChart from '../radar/RadarSvgChart.vue';
import BuildStatsGrid from './BuildStatsGrid.vue';
import JsonSectionViewer from './JsonSectionViewer.vue';

const props = defineProps<{
  selectedBuild: Build;
  selectedFile: string;
  currentEdition: '2014' | '2024';
  currentLevel: number;
  showTracker: boolean;
  showRadar: boolean;
  rawMarkdown: string;
  parsedJsonData?: any;
  calculatedResources: { id: string; label: string; count: number }[];
  getResourceChecked: (resId: string) => number;
}>();

const emit = defineEmits<{
  (e: 'reset-home'): void;
  (e: 'select-build', id: string, file: string): void;
  (e: 'update:currentEdition', edition: '2014' | '2024'): void;
  (e: 'update:currentLevel', lvl: number): void;
  (e: 'update:showRadar', show: boolean): void;
  (e: 'switch-tab', file: string): void;
  (e: 'prev-file'): void;
  (e: 'next-file'): void;
  (e: 'reset-resources'): void;
  (e: 'toggle-resource-bubble', resId: string, idx: number): void;
}>();

const viewMode = ref<'interactive' | 'markdown'>('interactive');

const currentFileIndex = computed(() => ORDERED_FILES.indexOf(props.selectedFile));
const renderedHtml = computed(() => parseMarkdownWithKaTeX(props.rawMarkdown));

const generalDataSection = computed(() => {
  if (!props.parsedJsonData || !props.parsedJsonData.sections) return null;
  return props.parsedJsonData.sections.find((s: any) =>
    s.title && s.title.toLowerCase().includes('general data')
  ) || null;
});

function handleMarkdownClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href) return;

  const decodedHref = decodeURIComponent(href);
  if (decodedHref.endsWith('.md') && (decodedHref.startsWith('./') || !decodedHref.includes('/'))) {
    e.preventDefault();
    const fileName = decodedHref.replace('./', '');
    emit('switch-tab', fileName);
  }
}
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.view-mode-toggle {
  display: inline-flex;
  background: rgba(0, 0, 0, 0.25);
  padding: 0.2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.toggle-mode-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--text-secondary, #94a3b8);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.toggle-mode-btn:hover {
  color: #fff;
}

.toggle-mode-btn.active {
  background: var(--accent-primary, #38bdf8);
  color: #000;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(56, 189, 248, 0.3);
}
</style>
