import { Link } from "react-router-dom";
import { ArrowRight, Calculator } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";

const tools = [
  { title: "Freezone Cost Estimator", description: "Estimate your complete setup cost across 40+ freezones.", path: "/corporate/freezone-setup" },
  { title: "DLD Cost Calculator", description: "Calculate Dubai Land Department fees and registration costs.", path: "/real-estate/property-investment" },
  { title: "Rental Yield Calculator", description: "Analyze gross rental yield for any UAE property investment.", path: "/real-estate/property-investment" },
  { title: "Mortgage Affordability", description: "Determine your loan eligibility and estimated EMI.", path: "/mortgage/home-loan" },
];

const ToolsPreview = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <SectionReveal>
        <span className="text-label text-primary/80 mb-4 block">Advisory Previews</span>
        <h2 className="text-4xl md:text-5xl tracking-tight mb-4">
          Investment <span className="italic">Intelligence</span> Tools.
        </h2>
        <p className="text-secondary-foreground/50 max-w-xl text-base mb-16 font-sans">
          Preview your investment analysis. Complete advisory requires a strategic conversation.
        </p>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10">
        {tools.map((tool, i) => (
          <SectionReveal key={tool.title} delay={i * 0.08}>
            <Link
              to={tool.path}
              className="flex items-start gap-6 p-8 bg-secondary hover:bg-brand-slate/80 transition-colors duration-500 group"
            >
              <Calculator size={20} strokeWidth={1} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-display tracking-tight mb-2">{tool.title}</h3>
                <p className="text-sm text-secondary-foreground/50 font-sans mb-4">{tool.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-sans text-primary uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  Analyze Data <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default ToolsPreview;
