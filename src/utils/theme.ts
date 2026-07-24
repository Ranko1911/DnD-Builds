import type { ClassColor, Build } from '../types/build';

export const CLASS_COLORS: Record<string, ClassColor> = {
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

export function hexToRgba(hex: string, alpha: number): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getClassColor(buildsList: Build[], buildIdOrClasses: string): string {
  const b = buildsList.find(x => x.id === buildIdOrClasses);
  const str = b ? b.classes : buildIdOrClasses;
  if (!str) return '#6366f1';
  const lower = str.toLowerCase();
  for (const [cls, colors] of Object.entries(CLASS_COLORS)) {
    if (lower.includes(cls)) return colors.primary;
  }
  return '#6366f1';
}

export function applyDynamicTheme(colors: { primary: string; primaryGlow: string; secondary: string; secondaryGlow: string } | null) {
  if (typeof document === 'undefined') return;
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

export function applyDynamicThemeForBuild(classesStr: string) {
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
