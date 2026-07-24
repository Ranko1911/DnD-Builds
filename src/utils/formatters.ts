import type { Ratings } from '../types/build';
import { CLASS_COLORS } from './theme';

export function getAverageRating(r?: Ratings): string {
  if (!r) return '0.0';
  const avg = ((r.dpr || 0) + (r.ehp || 0) + (r.control || 0) + (r.support || 0) + (r.complexity || 0)) / 5;
  return avg.toFixed(1);
}

export function getScoreColorClass(val: number): string {
  if (val >= 80) return 'score-high';
  if (val >= 60) return 'score-mid-high';
  if (val >= 40) return 'score-mid';
  return 'score-low';
}

export function getClassBadges(classesStr: string): { text: string; color: string }[] {
  if (!classesStr) return [];
  const parts = classesStr.split('/');
  return parts.map(part => {
    const trimmed = part.trim();
    const lower = trimmed.toLowerCase();
    let color = '#6366f1';
    for (const [cls, colors] of Object.entries(CLASS_COLORS)) {
      if (lower.includes(cls)) {
        color = colors.primary;
        break;
      }
    }
    return { text: trimmed, color };
  });
}

export function getRoleTags(roleStr: string): string[] {
  if (!roleStr) return [];
  return roleStr.split('/').map(r => r.trim());
}

export const ORDERED_FILES = [
  'character guide.md',
  'spell list.md',
  'roadmap.md',
  'actual inventory list.md',
  'item list to obtain.md',
  'bastion and downtime.md'
];

export const FILE_LABELS: Record<string, string> = {
  'character guide.md': 'Guía Principal',
  'spell list.md': 'Conjuros',
  'roadmap.md': 'Progreso Nivel a Nivel',
  'actual inventory list.md': 'Inventario Equipado',
  'item list to obtain.md': 'Objetos Deseados',
  'bastion and downtime.md': 'Bastión y Tiempo Muerto'
};

export const FILE_ICONS: Record<string, string> = {
  'character guide.md': '📖',
  'spell list.md': '🔮',
  'roadmap.md': '🗺️',
  'actual inventory list.md': '🎒',
  'item list to obtain.md': '🎯',
  'bastion and downtime.md': '🏰'
};

export function getFileLabel(f: string): string {
  return FILE_LABELS[f] || f;
}

export function getFileIcon(f: string): string {
  return FILE_ICONS[f] || '📄';
}
