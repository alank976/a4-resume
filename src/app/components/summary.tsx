"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "../../components/ui/section";

interface AboutProps {
  title: string;
  paragraphs: string[];
  className?: string;
}

// On phones only the first paragraph shows until the reader asks for more.
// Wider screens and print always show everything.
export function Summary({ title, paragraphs, className }: AboutProps) {
  const [expanded, setExpanded] = useState(false);
  const [first, ...rest] = paragraphs;

  return (
    <Section title={title} titleId="about-section" className={className}>
      <div className="space-y-2 text-pretty text-sm text-body print:space-y-1 print:text-[11px] print:leading-tight">
        <p>{first}</p>
        {rest.map((paragraph) => (
          <p
            key={paragraph}
            className={cn(!expanded && "max-sm:hidden print:block")}
          >
            {paragraph}
          </p>
        ))}
        {rest.length > 0 && !expanded && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground sm:hidden print:hidden"
          >
            Read more
          </button>
        )}
      </div>
    </Section>
  );
}
