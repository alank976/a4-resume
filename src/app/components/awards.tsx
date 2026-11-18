import { ExternalArrow } from "@/components/ui/external-arrow";
import { Section } from "@/components/ui/section";
import { SECTION_TITLES } from "@/data/resume-data";
import type { Award } from "@/lib/types";

interface AwardsProps {
  awards: readonly Award[];
}

export function Awards({ awards }: AwardsProps) {
  return (
    <Section title={SECTION_TITLES.awards} titleId="awards">
      <div className="space-y-4 print:space-y-1">
        {awards.map(({ title, role, date, link, highlights }) => (
          <article key={title} className="print:break-inside-avoid">
            <div className="flex items-baseline justify-between gap-x-2">
              <h3 className="text-sm font-medium leading-snug print:leading-none">
                {role}
              </h3>
              <div className="shrink-0 text-[13px] tabular-nums text-muted-foreground print:leading-none">
                {date}
              </div>
            </div>
            <p className="mt-1 text-sm leading-snug text-body print:mt-0.5 print:text-[12px] print:leading-tight">
              {link ? (
                <a
                  className="hover:underline"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                  <ExternalArrow />
                </a>
              ) : (
                title
              )}
            </p>
            {highlights && highlights.length > 0 && (
              <ul className="mt-1 list-outside list-disc space-y-0.5 pl-4 text-pretty text-xs text-body marker:text-muted-foreground print:mt-0.5 print:space-y-0 print:text-[10px] print:leading-tight">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
