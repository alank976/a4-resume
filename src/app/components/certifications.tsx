import { ExternalArrow } from "@/components/ui/external-arrow";
import { Section } from "@/components/ui/section";
import { SECTION_TITLES } from "@/data/resume-data";
import type { Certification } from "@/lib/types";

interface CertificationsProps {
  certifications: readonly Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Section title={SECTION_TITLES.certifications} titleId="certifications">
      <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 print:grid-cols-2 print:gap-y-1">
        {certifications.map(({ title, issuer, year, link }) => (
          <article key={title} className="print:break-inside-avoid">
            <h3 className="text-sm font-medium leading-snug print:text-[11px] print:leading-tight">
              {link ? (
                <a
                  className="hover:underline"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} credential (opens in new tab)`}
                >
                  {title}
                  <ExternalArrow />
                </a>
              ) : (
                title
              )}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground print:mt-0 print:text-[10px] print:leading-tight">
              {issuer} · <span className="tabular-nums">{year}</span>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
