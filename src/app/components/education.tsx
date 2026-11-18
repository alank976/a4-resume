import { DateRange } from "@/components/ui/date-range";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag-list";
import { SECTION_TITLES } from "@/data/resume-data";
import type { EducationEntry } from "@/lib/types";

interface EducationItemProps {
  education: EducationEntry;
}

function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree, notes } = education;

  return (
    <>
      <div className="flex items-baseline justify-between gap-x-2">
        <h3 className="text-sm font-medium leading-snug print:leading-none">
          {degree}
        </h3>
        <DateRange start={start} end={end} label="Period" />
      </div>
      <div className="mt-1 text-sm text-body print:mt-0.5 print:text-[12px] print:leading-tight">
        {school}
      </div>
      {notes && notes.length > 0 && (
        <TagList
          tags={notes}
          label="Notes"
          wrap={true}
          className="mt-1 print:mt-0.5"
        />
      )}
    </>
  );
}

interface EducationListProps {
  education: readonly EducationEntry[];
}

export function Education({ education }: EducationListProps) {
  return (
    <Section title={SECTION_TITLES.education} titleId="education-section">
      <div className="space-y-4 print:space-y-1">
        {education.map((item) => (
          <article key={item.school} className="print:break-inside-avoid">
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
