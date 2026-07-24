export interface Ratings {
  dpr: number;
  ehp: number;
  control: number;
  support: number;
  complexity: number;
}

export interface Build {
  id: string;
  name: string;
  classes: string;
  system: string;
  role: string;
  folder: string;
  youtube: string | null;
  ratings: Ratings;
}

export interface RatingCategory {
  key: keyof Ratings;
  label: string;
}

export interface ClassColor {
  primary: string;
  secondary: string;
}

export type BuildView = 'welcome' | 'detail' | 'compare' | 'radar-table';

export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'avg-desc'
  | 'avg-asc'
  | 'class-asc'
  | 'class-desc'
  | 'dpr-desc'
  | 'ehp-desc'
  | 'control-desc'
  | 'support-desc'
  | 'complexity-asc'
  | 'complexity-desc';
