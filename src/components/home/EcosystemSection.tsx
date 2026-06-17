import SectionReveal from "../shared/SectionReveal";
import AnimatedCounter from "../shared/AnimatedCounter";

const stats = [
  { value: 0, suffix: "%", label: "Personal Income Tax", prefix: "" },
  { value: 0, suffix: "%", label: "Corporate Tax (Freezones)", prefix: "" },
  { value: 12.4, suffix: " Days", label: "Avg. Freezone Setup Time", decimals: 1 },
  { value: 8.4, suffix: "%", label: "Avg. Rental Yield, Dubai", decimals: 1 },
];

const EcosystemSection = () => {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />

      <SectionReveal>
        <span className="text-label text-primary/80 mb-4 block">The Opportunity</span>
        <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
          Why the <span className="italic">UAE,</span> Now.
        </h2>
        <p className="text-secondary-foreground/60 max-w-2xl text-lg leading-relaxed mb-16 font-sans">
          The Emirates offer a structurally unmatched environment for capital deployment—
          zero personal tax, world-class infrastructure, and a regulatory framework 
          purpose-built for global investors.
        </p>
      </SectionReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <SectionReveal key={stat.label} delay={i * 0.1}>
            <div className="border-t border-primary/20 pt-6">
              <div className="text-4xl md:text-5xl font-display tracking-tight text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <p className="text-sm text-secondary-foreground/50 font-sans">{stat.label}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
};

export default EcosystemSection;
