<template>
  <div class="json-table-wrapper" v-if="normalizedTables.length > 0">
    <div
      v-for="(table, tIdx) in normalizedTables"
      :key="tIdx"
      class="json-table-card"
    >
      <div class="json-table-toolbar" v-if="table.headers.length > 0 && table.rows.length > 5">
        <div class="table-search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Filtrar en tabla..."
            class="table-search-input"
          />
        </div>
        <span class="table-row-count">{{ filteredRows(table).length }} filas</span>
      </div>

      <div class="table-scroll-container">
        <table class="json-data-table">
          <thead>
            <tr>
              <th
                v-for="header in table.headers"
                :key="header"
                class="json-th"
                :class="getHeaderClass(header)"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rIdx) in filteredRows(table)"
              :key="rIdx"
              class="json-tr"
              :class="getRowClass(row)"
            >
              <td
                v-for="header in table.headers"
                :key="header"
                class="json-td"
                :class="getHeaderClass(header)"
              >
                <span v-html="formatCellValue(row[header], header, getRowLevel(row))"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { parseMarkdownWithKaTeX } from '../../utils/markdown';

const props = defineProps<{
  tables: Array<Array<Record<string, string>>>;
  currentLevel?: number;
}>();

const searchQuery = ref('');

interface TableData {
  headers: string[];
  rows: Record<string, string>[];
}

const normalizedTables = computed<TableData[]>(() => {
  if (!props.tables || !Array.isArray(props.tables)) return [];
  return props.tables.map(table => {
    if (!Array.isArray(table) || table.length === 0) return { headers: [], rows: [] };
    const headers = Object.keys(table[0]);
    return { headers, rows: table };
  });
});

function getRowLevel(row: Record<string, string>): number | null {
  const levelKey = Object.keys(row).find(k =>
    k.toLowerCase().includes('nivel') || k.toLowerCase().includes('level')
  );
  if (!levelKey || !row[levelKey]) return null;
  const match = row[levelKey].match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

function getRowClass(row: Record<string, string>): Record<string, boolean> {
  const lvl = getRowLevel(row);
  if (lvl === null || props.currentLevel === undefined) return {};

  return {
    'current-level-row': lvl === props.currentLevel,
    'future-level-row': lvl > props.currentLevel,
    'past-level-row': lvl < props.currentLevel
  };
}

function getHeaderClass(header: string): string {
  const lower = header.toLowerCase();
  if (lower.includes('nivel') || lower.includes('level') || lower.includes('pb')) return 'col-narrow text-center';
  if (lower.includes('valoración') || lower.includes('rating') || lower.includes('criterio')) return 'col-badge text-center';
  return '';
}

function filteredRows(table: TableData): Record<string, string>[] {
  if (!searchQuery.value.trim()) return table.rows;
  const q = searchQuery.value.toLowerCase();
  return table.rows.filter(row =>
    Object.values(row).some(val => val && val.toString().toLowerCase().includes(q))
  );
}

function formatCellValue(val: string | undefined, header: string, rowLevel: number | null): string {
  if (!val) return '-';

  let raw = val.toString().trim();

  // If level column and matches currentLevel, append active tag
  const isLevelCol = header.toLowerCase().includes('nivel') || header.toLowerCase().includes('level');
  if (isLevelCol && rowLevel !== null && props.currentLevel !== undefined && rowLevel === props.currentLevel) {
    raw = `${raw} <span class="current-lvl-tag">★ Nv. Actual</span>`;
  }

  // Format rating color badges 🔴 🟡 🟢 🔵
  raw = raw
    .replace(/🔴/g, '<span class="badge-pill badge-red" title="Malo/Situacional">🔴 Situacional</span>')
    .replace(/🟡/g, '<span class="badge-pill badge-yellow" title="Decente">🟡 Decente</span>')
    .replace(/🟢/g, '<span class="badge-pill badge-green" title="Excelente">🟢 Excelente</span>')
    .replace(/🔵/g, '<span class="badge-pill badge-blue" title="Roto/META">🔵 Roto/META</span>');

  return parseMarkdownWithKaTeX(raw);
}
</script>

<style scoped>
.json-table-wrapper {
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.json-table-card {
  background: var(--surface-card, #1e1e24);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.json-table-toolbar {
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-search-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary, #94a3b8);
}

.table-search-input {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.85rem;
  outline: none;
  width: 160px;
}

.table-row-count {
  font-size: 0.75rem;
  color: var(--text-muted, #64748b);
  font-weight: 500;
}

.table-scroll-container {
  overflow-x: auto;
  max-width: 100%;
}

.json-data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  text-align: left;
}

.json-th {
  background: var(--surface-header, #272730);
  color: var(--text-accent, #38bdf8);
  font-weight: 700;
  padding: 0.85rem 1rem;
  border-bottom: 2px solid var(--accent-primary, #38bdf8);
  white-space: nowrap;

  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}

.json-td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text-main, #e2e8f0);
  line-height: 1.5;
  vertical-align: middle;
}

.json-tr {
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.json-tr:hover {
  background-color: rgba(255, 255, 255, 0.04);
}

.col-narrow {
  width: 100px;
  white-space: nowrap;
}

.col-badge {
  width: 140px;
}

.text-center {
  text-align: center;
}

/* Level Row Highlighting */
.json-tr.current-level-row {
  background: rgba(234, 179, 8, 0.15) !important;
  border-left: 4px solid #eab308;
  font-weight: 600;
}

.json-tr.current-level-row .json-td {
  color: #fef08a;
}

.json-tr.future-level-row {
  opacity: 0.65;
}

.json-tr.past-level-row {
  opacity: 0.9;
}

:deep(.current-lvl-tag) {
  display: inline-block;
  background: #eab308;
  color: #000;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  margin-left: 0.4rem;
  text-transform: uppercase;

  vertical-align: middle;
}

:deep(.badge-pill) {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.5rem;
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
