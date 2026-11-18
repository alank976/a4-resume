import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";
import type { Language } from "@/lib/types";

export function Languages({ languages }: { languages: readonly Language[] }) {
  return (
    <Section title={SECTION_TITLES.languages} titleId="languages">
      <TagList
        tags={languages.map(({ name, level }) => `${name} (${level})`)}
        label="Spoken languages"
        variant="skills"
      />
    </Section>
  );
}

export function Interests({ interests }: { interests: readonly string[] }) {
  return (
    <Section title={SECTION_TITLES.interests} titleId="interests">
      <TagList tags={interests} label="Interests" variant="skills" />
    </Section>
  );
}
