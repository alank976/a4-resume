import type React from "react";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA, SECTION_TITLES } from "@/data/resume-data";
import { getContactLinks, getSections, type SectionKey } from "@/lib/resume";
import { generateResumeStructuredData } from "@/lib/structured-data";
import { cn, paragraphs } from "@/lib/utils";
import { Awards } from "./components/awards";
import { Certifications } from "./components/certifications";
import { Education } from "./components/education";
import { Header } from "./components/header";
import { Interests, Languages } from "./components/languages";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import { WorkExperience } from "./components/work-experience";

const SIDE_BY_SIDE: SectionKey[] = ["languages", "interests"];

// Keeps the order of sections, but puts the short ones that sit next to each
// other in SIDE_BY_SIDE into one row.
function groupSections(keys: SectionKey[]): SectionKey[][] {
  const rows: SectionKey[][] = [];
  for (const key of keys) {
    const last = rows.at(-1);
    if (last && SIDE_BY_SIDE.includes(key) && SIDE_BY_SIDE.includes(last[0])) {
      last.push(key);
    } else {
      rows.push([key]);
    }
  }
  return rows;
}

export default function ResumePage() {
  const structuredData = generateResumeStructuredData();
  const commandMenuLinks = getContactLinks(RESUME_DATA).filter(
    ({ icon }) => icon !== "mail" && icon !== "phone"
  );
  const content: Record<SectionKey, React.ReactNode> = {
    summary: (
      <Summary
        title={SECTION_TITLES.summary}
        paragraphs={paragraphs(RESUME_DATA.summary)}
      />
    ),
    work: <WorkExperience work={RESUME_DATA.work} />,
    skills: <Skills skills={RESUME_DATA.skills} />,
    certifications: (
      <Certifications certifications={RESUME_DATA.certifications} />
    ),
    education: <Education education={RESUME_DATA.education} />,
    awards: <Awards awards={RESUME_DATA.awards} />,
    projects: <Projects projects={RESUME_DATA.projects} />,
    languages: <Languages languages={RESUME_DATA.languages} />,
    interests: <Interests interests={RESUME_DATA.interests} />,
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <main
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-0 md:p-16"
        id="main-content"
      >
        <section
          className="mx-auto w-full max-w-3xl space-y-8 print:max-w-none print:space-y-3"
          aria-label="Resume Content"
        >
          <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
            <Header />
          </div>

          {groupSections(getSections(RESUME_DATA)).map((keys, index) => (
            <div
              key={keys.join("+")}
              className={cn(
                "animate-fade-in",
                keys.length > 1 &&
                  "grid grid-cols-1 gap-8 sm:grid-cols-2 print:grid-cols-2 print:gap-3"
              )}
              style={{ animationDelay: `${(index + 1) * 75}ms` }}
            >
              {keys.map((key) => (
                <div key={key}>{content[key]}</div>
              ))}
            </div>
          ))}
        </section>

        <CommandMenu links={commandMenuLinks} />
      </main>
    </>
  );
}
