<template>
  <div
    class="build-card"
    :class="{ active: isActive }"
    @click="$emit('select-build', build.id, 'character guide.md')"
  >
    <div class="card-header">
      <div class="card-compare-selector" @click.stop>
        <input
          :id="`chk-${build.id}`"
          type="checkbox"
          class="compare-checkbox"
          :checked="isCompareSelected"
          @change="$emit('toggle-compare', build.id)"
        />
        <label :for="`chk-${build.id}`" class="compare-checkbox-custom" title="Seleccionar para comparar"></label>
      </div>
      <h3>{{ build.name }}</h3>
      <span
        class="system-badge"
        :class="build.system.includes('2024') ? 'system-2024' : 'system-2014'"
        @click.stop="$emit('filter-system', build.system.includes('2024') ? '2024' : '2014')"
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
        @click.stop="$emit('filter-role-badge', roleTag)"
      >
        {{ roleTag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Build } from '../../types/build';
import { getRoleTags } from '../../utils/formatters';

defineProps<{
  build: Build;
  isActive: boolean;
  isCompareSelected: boolean;
}>();

defineEmits<{
  (e: 'select-build', id: string, file: string): void;
  (e: 'toggle-compare', id: string): void;
  (e: 'filter-system', system: string): void;
  (e: 'filter-role-badge', roleTag: string): void;
}>();
</script>
