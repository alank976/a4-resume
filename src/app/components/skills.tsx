import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";
import type { SkillGroup } from "@/lib/types";

interface SkillsProps {
  skills: readonly SkillGroup[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section title={SECTION_TITLES.skills} titleId="skills-section">
      <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-x-4 sm:gap-y-1.5 print:grid-cols-[11rem_1fr] print:gap-y-0">
        {skills.map(({ name, items }) => (
          <div key={name} className="contents">
            <dt className="text-xs font-medium leading-relaxed text-foreground sm:text-sm print:text-[10px] print:leading-snug">
              {name}
            </dt>
            <dd>
              <TagList tags={items} label={name} variant="skills" />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
