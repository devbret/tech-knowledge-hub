const CATEGORIES = [
  "OSINT",
  "AI",
  "Video Games",
  "FOSS",
  "Programming",
  "Audio",
  "OPSEC",
  "Music",
  "Cybersecurity",
  "Other",
  "Hardware",
  "Biohacking",
  "Blockchain",
  "DevOps",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const ALL_CATEGORIES: Category[] = [...CATEGORIES];

export interface GlossaryEntry {
  term: string;
  definition: string;
  category?: Category[];
  more?: string;
  source?: string;
  source_url?: string;
  quote?: string;
}

export interface LinkEntry {
  title: string;
  url: string;
  description?: string;
  category?: Category[];
}
