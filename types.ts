export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Detay sayfası için uzun açıklama
  tags: string[];
  features?: string[]; // Projenin özellikleri listesi
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  description: string;
  logoUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  id: 'instagram' | 'x' | 'discord' | 'linkedin' | 'github' | 'mail';
}

export enum PageRoute {
  HOME = '/',
  ALL_PROJECTS = '/projects',
  PROJECT_DETAIL = '/project/:id'
}