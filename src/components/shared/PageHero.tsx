import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description: string;
  ctaText?: string;
  ctaPath?: string;
}

const PageHero = ({ label, title, description, ctaText, ctaPath }: PageHeroProps) => {
  return (
    <section className="section-curve section-padding min-h-[50vh] flex items-end relative bg-background">
      <div className="absolute top-0 left-12 lg:left-24 w-px h-24 bg-gradient-to-b from-primary/40 to-transparent" />
      <SectionReveal>
        <span className="text-label text-primary mb-4 block">{label}</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8 font-sans">{description}</p>
        {ctaText && ctaPath && (
          <Link
            to={ctaPath}
            className="inline-flex items-center gap-3 text-sm font-sans text-primary uppercase tracking-widest hover:gap-4 transition-all duration-300"
          >
            {ctaText} <ArrowRight size={14} />
          </Link>
        )}
      </SectionReveal>
    </section>
  );
};

export default PageHero;
