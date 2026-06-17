import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";

interface ServiceCardProps {
  icon?: LucideIcon;
  label: string;
  title: string;
  description: string;
  path: string;
  cta?: string;
  index?: number;
}

const ServiceCard = ({ label, title, description, path, cta = "Explore Strategy", index = 0 }: ServiceCardProps) => {
  return (
    <SectionReveal delay={index * 0.1}>
      <Link
        to={path}
        className="block border border-foreground/[0.10] bg-card p-8 rounded-2xl group hover:border-primary/30 transition-all duration-500 h-full hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.15)]"
      >
        <span className="text-label text-primary/70 mb-3 block">{label}</span>
        <h3 className="text-xl font-display tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-6">{description}</p>
        <span className="inline-flex items-center gap-2 text-xs font-sans text-primary uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
          {cta} <ArrowRight size={12} />
        </span>
      </Link>
    </SectionReveal>
  );
};

export default ServiceCard;
