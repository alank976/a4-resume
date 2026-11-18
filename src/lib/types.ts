import type { StaticImageData } from "next/image";

export type SocialIcon = "github" | "linkedin" | "x" | "globe";

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
}

export interface WorkEntry {
  company: string;
  link: string;
  location?: string;
  badges: string[];
  title: string;
  start: string;
  end: string | null;
  description?: string;
  highlights?: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end: string | null;
  notes?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface Award {
  title: string;
  role: string;
  date: string;
  link?: string;
  highlights?: string[];
}

export interface NamedLink {
  title: string;
  url: string;
}

export interface Project {
  title: string;
  date?: string;
  techStack: string[];
  description: string;
  link?: string;
  links?: NamedLink[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeData {
  name: string;
  location: string;
  locationLink: string;
  about: string;
  /** Paragraphs are separated by a blank line. */
  summary: string;
  avatar: StaticImageData;
  siteUrl: string;
  personalWebsiteUrl?: string;
  contact: {
    email: string;
    tel: string;
    social: SocialLink[];
  };
  work: WorkEntry[];
  skills: SkillGroup[];
  certifications: Certification[];
  education: EducationEntry[];
  awards: Award[];
  projects: Project[];
  languages: Language[];
  interests: string[];
}
