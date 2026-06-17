import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────────────────────
   <Section> — a themed, full-bleed band on the home page. Each section paints
   its own flat bandColor background, so the boundary between sections is a
   plain colour divider.

     • theme     — "dark" (light text, navy/charcoal bands) or
                    "light" (dark text, ivory/sand bands). Also lets the
                    navbar / future logic react to the band it's over.
     • bandColor — the section's solid background colour.
     • --local-fg / --local-muted / --local-border — theme-correct tokens any
       child can consume, plus a sensible base text color as a safety net.
   ────────────────────────────────────────────────────────────────────────── */

const NAVY = "#0A1128";
const IVORY = "#FCFAF7";
const CHARCOAL = "#1A1814";
const SAND = "#EDE3CF";

export const BAND = { NAVY, IVORY, CHARCOAL, SAND };

type Theme = "light" | "dark";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  theme: Theme;
  bandColor: string;
  children: ReactNode;
}

const THEME_VARS: Record<Theme, CSSProperties> = {
  light: {
    "--local-fg": "hsl(var(--foreground))",
    "--local-muted": "hsl(var(--foreground) / 0.55)",
    "--local-border": "hsl(var(--foreground) / 0.10)",
    color: "hsl(var(--foreground))",
  } as CSSProperties,
  dark: {
    "--local-fg": "hsl(var(--brand-ivory))",
    "--local-muted": "hsl(var(--brand-ivory) / 0.60)",
    "--local-border": "hsl(var(--brand-ivory) / 0.14)",
    color: "hsl(var(--brand-ivory))",
  } as CSSProperties,
};

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ theme, bandColor, className, style, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        data-theme={theme}
        className={cn("relative", className)}
        style={{
          ...THEME_VARS[theme],
          backgroundColor: bandColor,
          ...style,
        }}
        {...props}
      >
        {children}
      </section>
    );
  },
);
Section.displayName = "Section";

export default Section;
