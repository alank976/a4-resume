"use client";

import { PrinterIcon } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
      aria-label="Print or save as PDF"
      title="Print or save as PDF"
    >
      <PrinterIcon className="size-4" aria-hidden="true" />
    </button>
  );
}
