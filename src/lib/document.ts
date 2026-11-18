import { SECTION_TITLES } from "@/data/resume-data";
import {
  displayUrl,
  getContactLinks,
  getSections,
  type SectionKey,
} from "@/lib/resume";
import type { ResumeData } from "@/lib/types";
import { paragraphs } from "@/lib/utils";

export interface Link {
  href: string;
  url: string;
}

export interface Row {
  label: string;
  text: string;
  link: Link;
}

export interface Entry {
  name: string;
  link?: Link;
  dates?: string;
  role?: string;
  description?: string;
  highlights: string[];
  tags: string[];
}

export type Inline = string | { code: string };

export type Block =
  | { kind: "title"; name: string; tagline: string }
  | { kind: "rows"; rows: Row[] }
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; inlines: Inline[] }
  | ({ kind: "entry" } & Entry)
  | { kind: "tags"; tags: string[] };

const web = (href: string): Link => ({ href, url: displayUrl(href) });

const dates = (start: string, end: string | null) =>
  `${start} - ${end ?? "Present"}`;

const sections: Record<SectionKey, (data: ResumeData) => Block[]> = {
  summary: ({ summary }) =>
    paragraphs(summary).map((text) => ({ kind: "paragraph", inlines: [text] })),
  work: ({ work }) =>
    work.map((job) => ({
      kind: "entry",
      name: job.company,
      link: web(job.link),
      dates: dates(job.start, job.end),
      role: [job.title, job.location].filter(Boolean).join(", "),
      description: job.description,
      highlights: job.highlights ?? [],
      tags: job.badges,
    })),
  skills: ({ skills }) =>
    skills.map(({ name, items }) => ({
      kind: "paragraph",
      inlines: [`${name}: ${items.join(" · ")}`],
    })),
  certifications: ({ certifications }) =>
    certifications.map((cert) => ({
      kind: "entry",
      name: cert.title,
      link: cert.link ? web(cert.link) : undefined,
      dates: cert.year,
      role: cert.issuer,
      highlights: [],
      tags: [],
    })),
  education: ({ education }) =>
    education.map((school) => ({
      kind: "entry",
      name: school.degree,
      dates: dates(school.start, school.end),
      role: school.school,
      highlights: school.notes ?? [],
      tags: [],
    })),
  awards: ({ awards }) =>
    awards.map((award) => ({
      kind: "entry",
      name: award.role,
      link: award.link ? web(award.link) : undefined,
      dates: award.date,
      role: award.title,
      highlights: award.highlights ?? [],
      tags: [],
    })),
  projects: ({ projects }) =>
    projects.map((project) => ({
      kind: "entry",
      name: project.title,
      link: project.link ? web(project.link) : undefined,
      dates: project.date,
      description: project.description,
      highlights: (project.links ?? []).map(
        ({ title, url }) => `${title}: ${url}`
      ),
      tags: project.techStack,
    })),
  languages: ({ languages }) => [
    {
      kind: "tags",
      tags: languages.map(({ name, level }) => `${name} (${level})`),
    },
  ],
  interests: ({ interests }) => [{ kind: "tags", tags: interests }],
};

const title = ({ name, about }: ResumeData): Block => ({
  kind: "title",
  name,
  tagline: about,
});

const body = (data: ResumeData): Block[] => [
  {
    kind: "rows",
    rows: [
      { label: "Location", text: data.location, link: web(data.locationLink) },
      ...getContactLinks(data).map(({ label, text, href }) => ({
        label,
        text,
        link: { href, url: text },
      })),
    ],
  },
  ...getSections(data).flatMap((key): Block[] => [
    { kind: "heading", text: SECTION_TITLES[key] },
    ...sections[key](data),
  ]),
];

export function resumeBlocks(data: ResumeData): Block[] {
  return [title(data), ...body(data)];
}

export function llmsBlocks(data: ResumeData): Block[] {
  const site = new URL(data.siteUrl).origin;
  return [
    title(data),
    {
      kind: "paragraph",
      inlines: [
        "This CV also comes as 80-column text from ",
        { code: `curl ${site}/cv.txt` },
        ", and as markdown from ",
        { code: `${site}/cv.md` },
        ".",
      ],
    },
    ...body(data),
  ];
}
