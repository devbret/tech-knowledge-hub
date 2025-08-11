export type Category =
  | "OSINT"
  | "AI"
  | "Video Games"
  | "FOSS"
  | "Programming"
  | "Audio"
  | "OPSEC";

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
