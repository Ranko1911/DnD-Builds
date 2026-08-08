<template>
  <div class="build-stats-dashboard">
    <!-- Attributes Grid (STR, DEX, CON, INT, WIS, CHA) -->
    <div v-if="parsedStats.length > 0" class="attributes-grid">
      <div
        v-for="stat in parsedStats"
        :key="stat.name"
        class="stat-card"
        :class="{ highlight: isPrimaryStat(stat.name) }"
      >
        <span class="stat-name">{{ stat.name }}</span>
        <div class="stat-score-row">
          <span class="stat-score">{{ stat.score }}</span>
          <span class="stat-modifier" :class="stat.mod >= 0 ? 'positive' : 'negative'">
            {{ stat.mod >= 0 ? '+' + stat.mod : stat.mod }}
          </span>
        </div>
        <span v-if="stat.note" class="stat-note" :title="stat.note">{{ stat.note }}</span>
      </div>
    </div>

    <!-- General Info Badges Bar -->
    <div class="general-badges-bar">
      <div v-if="infoBadges.system" class="info-badge system-tag">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>{{ infoBadges.system }}</span>
      </div>

      <div v-if="infoBadges.species" class="info-badge species-tag">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
          <circle cx="12" cy="7" r="4"/>
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        </svg>
        <span>{{ infoBadges.species }}</span>
      </div>

      <div v-if="infoBadges.role" class="info-badge role-tag">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        <span>{{ infoBadges.role }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  selectedBuild: any;
  generalDataSection?: any;
}>();

// Helper to extract stats from generalDataSection lines
const parsedStats = computed(() => {
  const statsList: Array<{ name: string; score: string; mod: number; note: string }> = [];
  if (!props.generalDataSection || !props.generalDataSection.lines) return statsList;

  const statRegex = /^(?:\*|\-)?\s*\*\*(FUER|STR|DES|DEX|CON|INT|SAB|WIS|CAR|CHA)(?:\s*\([^)]+\))?:\*\*\s*(\d+)\s*\(([-+]?\d+)\)(.*)/i;

  props.generalDataSection.lines.forEach((line: string) => {
    const match = line.match(statRegex);
    if (match) {
      const name = match[1].toUpperCase();
      const score = match[2];
      const mod = parseInt(match[3], 10);
      let note = match[4].replace(/^\[\[|\]\]$/g, '').trim();
      note = note.replace(/^[\[\s\-:]+|[\]\s]+$/g, '');

      statsList.push({ name, score, mod, note });
    }
  });

  return statsList;
});

const isPrimaryStat = (name: string) => {
  return ['SAB', 'WIS', 'DES', 'DEX', 'CON', 'INT'].includes(name);
};

const infoBadges = computed(() => {
  const result = {
    system: props.selectedBuild.system || '',
    species: '',
    role: props.selectedBuild.role || ''
  };

  if (!props.generalDataSection || !props.generalDataSection.lines) return result;

  props.generalDataSection.lines.forEach((line: string) => {
    if (line.toLowerCase().includes('species:')) {
      result.species = line.replace(/species:/i, '').trim();
    } else if (!result.system && line.toLowerCase().includes('system standard:')) {
      result.system = line.replace(/system standard:/i, '').trim();
    } else if (!result.role && line.toLowerCase().includes('combat role:')) {
      result.role = line.replace(/combat role:/i, '').trim();
    }
  });

  return result;
});
</script>

<style scoped>
.build-stats-dashboard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  background: rgba(16, 21, 36, 0.6);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  padding: 1.25rem;
  backdrop-filter: blur(12px);
}

.attributes-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.75rem;
}

@media (max-width: 900px) {
  .attributes-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 500px) {
  .attributes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  padding: 0.65rem 0.4rem;
  transition: var(--transition-smooth);
}

.stat-card:hover {
  border-color: var(--border-color-hover);
  background: rgba(255, 255, 255, 0.05);
}

.stat-card.highlight {
  border-color: rgba(99, 102, 241, 0.4);
  background: rgba(99, 102, 241, 0.06);
}

.stat-name {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.stat-score-row {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin: 0.2rem 0;
}

.stat-score {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-text-main);
}

.stat-modifier {
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
}

.stat-modifier.positive {
  background: rgba(16, 185, 129, 0.2);
  color: #34d399;
}

.stat-modifier.negative {
  background: rgba(244, 63, 94, 0.2);
  color: #f87171;
}

.stat-note {
  font-size: 0.68rem;
  color: var(--color-text-dark);
  text-align: center;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.general-badges-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.info-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
}

.system-tag {
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #a5b4fc;
}

.species-tag {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #6ee7b7;
}

.role-tag {
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.3);
  color: #fcd34d;
}
</style>
