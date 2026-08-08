<template>
  <div class="json-section-viewer" v-if="filteredSections.length > 0">
    <div
      v-for="(sec, idx) in filteredSections"
      :key="idx"
      class="json-section-card"
      :class="getSectionCardClass(sec)"
    >
      <div class="section-header" v-if="sec.title && sec.title !== 'Main'">
        <span class="section-icon">{{ getSectionIcon(sec.title) }}</span>
        <h3 class="section-title" :class="`level-${sec.level}`">{{ cleanTitle(sec.title) }}</h3>
      </div>

      <div class="section-body">
        <div
          v-for="(line, lIdx) in sec.lines"
          :key="lIdx"
          class="section-line"
          :class="getLineClass(line)"
          v-html="formatLine(line)"
        ></div>
      </div>
    </div>

    <!-- Render tables if present in JSON -->
    <JsonTableViewer v-if="tables && tables.length > 0" :tables="tables" :current-level="currentLevel" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { parseMarkdownWithKaTeX } from '../../utils/markdown';
import JsonTableViewer from './JsonTableViewer.vue';

interface Section {
  title: string;
  level: number;
  lines: string[];
}

const props = defineProps<{
  sections: Section[];
  tables?: Array<Array<Record<string, string>>>;
  currentLevel?: number;
}>();

const filteredSections = computed(() => {
  if (!props.sections) return [];
  return props.sections.filter(s => {
    if (!s.title) return true;
    const lower = s.title.toLowerCase();
    // Exclude General Data section as it's displayed in BuildStatsGrid
    return !lower.includes('general data');
  });
});

function cleanTitle(title: string): string {
  return title.replace(/^[0-9.#📊🎯🛡️🧮⚖️📜⚡🗺️💎🏠⚙️\s]+/, '').trim() || title;
}

function getSectionIcon(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('resource') || t.includes('recurso')) return '⚡';
  if (t.includes('action') || t.includes('combate') || t.includes('loop')) return '⚔️';
  if (t.includes('meta') || t.includes('combo') || t.includes('math') || t.includes('engine')) return '🧮';
  if (t.includes('blueprint') || t.includes('clase')) return '🛡️';
  if (t.includes('home') || t.includes('regla')) return '🏠';
  if (t.includes('dotes') || t.includes('feats')) return '🎯';
  if (t.includes('progresión') || t.includes('hoja de ruta')) return '🗺️';
  if (t.includes('spell') || t.includes('conjuro')) return '✨';
  if (t.includes('item') || t.includes('inventario') || t.includes('objeto')) return '💎';
  return '📜';
}

function getSectionCardClass(sec: Section): string {
  const t = sec.title.toLowerCase();
  if (t.includes('meta') || t.includes('engine') || t.includes('math')) return 'card-highlight-gold';
  if (t.includes('resource') || t.includes('combate')) return 'card-highlight-blue';
  return '';
}

function getLineClass(line: string): string {
  const trimmed = line.trim();
  if (trimmed.startsWith('$$') || trimmed.includes('\\text{')) return 'line-math';
  if (trimmed.startsWith('1.') || trimmed.startsWith('2.') || trimmed.startsWith('3.')) return 'line-ordered';
  if (trimmed.startsWith('*') || trimmed.startsWith('-')) return 'line-bullet';
  if (trimmed.includes('🔴') || trimmed.includes('🟡') || trimmed.includes('🟢') || trimmed.includes('🔵')) return 'line-rating';
  return '';
}

function formatLine(line: string): string {
  let text = line.trim();

  // Strip leading bullet stars/dashes for bullet lines
  if (text.startsWith('* ') || text.startsWith('- ')) {
    text = text.substring(2).trim();
  }

  // Format rating color badges
  text = text
    .replace(/🔴/g, '<span class="badge-pill badge-red" title="Malo/Situacional">🔴 Situacional</span>')
    .replace(/🟡/g, '<span class="badge-pill badge-yellow" title="Decente">🟡 Decente</span>')
    .replace(/🟢/g, '<span class="badge-pill badge-green" title="Excelente">🟢 Excelente</span>')
    .replace(/🔵/g, '<span class="badge-pill badge-blue" title="Roto/META">🔵 Roto/META</span>');

  return parseMarkdownWithKaTeX(text);
}
</script>

<style scoped>
.json-section-viewer {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1rem 0;
}

.json-section-card {
  background: var(--surface-card, #1e1e24);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.json-section-card:hover {
  border-color: rgba(255, 255, 255, 0.18);
}

.card-highlight-gold {
  border-left: 4px solid #eab308;
  background: linear-gradient(135deg, rgba(234, 179, 8, 0.04) 0%, rgba(30, 30, 36, 0.95) 100%);
}

.card-highlight-blue {
  border-left: 4px solid #38bdf8;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.04) 0%, rgba(30, 30, 36, 0.95) 100%);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.section-icon {
  font-size: 1.3rem;
}

.section-title {
  margin: 0;
  color: var(--text-heading, #f8fafc);
  font-weight: 700;
  letter-spacing: -0.01em;
}

.section-title.level-1 { font-size: 1.4rem; color: var(--accent-primary, #38bdf8); }
.section-title.level-2 { font-size: 1.2rem; }
.section-title.level-3 { font-size: 1.05rem; color: #cbd5e1; }

.section-body {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.section-line {
  color: var(--text-main, #e2e8f0);
  line-height: 1.65;
  font-size: 0.95rem;
}

.line-bullet {
  padding-left: 1.25rem;
  position: relative;
}

.line-bullet::before {
  content: "•";
  position: absolute;
  left: 0.35rem;
  color: var(--accent-primary, #38bdf8);
  font-weight: bold;
}

.line-ordered {
  background: rgba(255, 255, 255, 0.02);
  padding: 0.6rem 0.85rem;
  border-radius: 8px;
  border-left: 3px solid var(--accent-primary, #38bdf8);
}

.line-math {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-family: 'KaTeX_Main', serif;
}

:deep(.badge-pill) {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.15rem 0.45rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

:deep(.badge-red) {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.4);
}

:deep(.badge-yellow) {
  background: rgba(234, 179, 8, 0.2);
  color: #fde047;
  border: 1px solid rgba(234, 179, 8, 0.4);
}

:deep(.badge-green) {
  background: rgba(34, 197, 94, 0.2);
  color: #86efac;
  border: 1px solid rgba(34, 197, 94, 0.4);
}

:deep(.badge-blue) {
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  border: 1px solid rgba(59, 130, 246, 0.4);
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
}
</style>
