import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, Building2 } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const MainlandSetup = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 18, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      <section ref={heroRef} className="section-curve relative min-h-[80vh] flex items-end overflow-hidden bg-secondary">
        <img ref={imgRef} src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover scale-110 opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/88 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />

        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/30">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/corporate" className="hover:text-primary transition-colors">Corporate</Link>
          <ChevronRight size={10} />
          <span className="text-primary/70">Mainland Setup</span>
        </div>

        <div className="relative z-10 section-padding pt-40 pb-24 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3 mb-8">
              <Building2 size={14} className="text-primary/70" />
              <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/80">Mainland Company Formation</span>
            </motion.div>
            <div className="overflow-hidden mb-6">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.93] text-secondary-foreground">
                Full UAE market<br />access. <span className="italic text-primary">No restrictions.</span>
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-xl mb-10">
              Mainland companies can trade directly with UAE government entities, operate across all seven emirates, and access the broadest range of banking relationships available to any UAE corporate structure.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group">
                Request Mainland Advisory <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Key Advantages</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            Why mainland<br /><span className="italic">matters.</span>
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "100% Foreign Ownership", desc: "Select sectors now permit full foreign ownership under UAE Commercial Companies Law amendments — no local sponsor required.", stat: "100%", imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop" },
            { title: "Government Contract Eligibility", desc: "Only mainland entities can bid for UAE federal and emirate-level government contracts — a major commercial advantage unavailable to freezone companies.", stat: "Federal eligible", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
            { title: "Unrestricted Trade Across Emirates", desc: "No geographical limitations on where you operate, hire, or trade. Full access to the UAE market — all seven emirates, no distribution agent required.", stat: "7 Emirates", imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop" },
          ].map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-foreground/[0.10] aspect-[3/4] bg-secondary hover:border-primary/35 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.25)] transition-all duration-500">
                <img src={card.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:translate-x-[-4px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/98 via-secondary/75 to-secondary/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 right-5">
                  <span className="text-xs font-display text-primary bg-secondary/70 backdrop-blur-sm border border-primary/20 px-3 py-1.5 rounded-full">{card.stat}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-xl font-display tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">{card.title}</h3>
                  <p className="text-xs font-sans text-white/55 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Comparison</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            Mainland vs<br /><span className="italic">Freezone.</span>
          </h2>
        </SectionReveal>
        <div className="border border-foreground/[0.10] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary text-secondary-foreground">
            <div className="px-6 py-4 text-[10px] font-sans uppercase tracking-[0.16em] text-secondary-foreground/50">Criterion</div>
            <div className="px-6 py-4 text-[10px] font-sans uppercase tracking-[0.16em] text-primary border-l border-secondary-foreground/10">Mainland</div>
            <div className="px-6 py-4 text-[10px] font-sans uppercase tracking-[0.16em] text-secondary-foreground/50 border-l border-secondary-foreground/10">Freezone</div>
          </div>
          {[
            ["Foreign Ownership", "100% (select sectors)", "100% (all)"],
            ["Government Contracts", "✓ Eligible", "✗ Not eligible"],
            ["UAE Market Trading", "Unrestricted", "Via agent / branch"],
            ["Setup Cost", "AED 15,000–25,000", "AED 11,900–35,000"],
            ["Setup Time", "10–20 days", "7–21 days"],
            ["Corporate Tax", "9% (>AED 375K profit)", "0% (qualifying income)"],
            ["Banking Access", "Strongest", "Good"],
          ].map(([crit, main, free], i) => (
            <div key={crit} className={`grid grid-cols-3 border-t border-foreground/[0.06] ${i % 2 === 0 ? "bg-background" : "bg-foreground/[0.01]"}`}>
              <div className="px-6 py-4 text-sm font-sans text-muted-foreground">{crit}</div>
              <div className="px-6 py-4 text-sm font-sans text-primary font-medium border-l border-foreground/[0.06]">{main}</div>
              <div className="px-6 py-4 text-sm font-sans text-muted-foreground border-l border-foreground/[0.06]">{free}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary section-curve">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">Cost Overview</span>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-secondary-foreground mb-8">
              What to expect<br /><span className="italic text-primary">financially.</span>
            </h2>
            <div className="space-y-3">
              {[
                { item: "Initial setup (license + incorporation)", cost: "AED 15,000–25,000" },
                { item: "Annual renewal", cost: "AED 8,000–15,000" },
                { item: "Visa per person", cost: "AED 3,500–5,000" },
                { item: "Bank account opening", cost: "Included" },
                { item: "Corporate tax registration", cost: "AED 500–1,000" },
              ].map((row) => (
                <div key={row.item} className="flex items-center justify-between py-3 border-b border-primary/[0.08]">
                  <span className="text-sm font-sans text-secondary-foreground/65">{row.item}</span>
                  <span className="text-sm font-sans font-medium text-primary">{row.cost}</span>
                </div>
              ))}
            </div>
            <p className="text-xs font-sans text-secondary-foreground/30 italic mt-4">* Indicative only. Full breakdown provided during advisory.</p>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <span className="text-label text-primary/80 mb-4 block">Setup Process</span>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-secondary-foreground mb-8">
              From decision to<br /><span className="italic text-primary">operation.</span>
            </h2>
            <div className="space-y-4">
              {[
                { num: "01", title: "Initial approval & trade name reservation" },
                { num: "02", title: "MoA drafting and notarization" },
                { num: "03", title: "DED license issuance" },
                { num: "04", title: "Chamber of Commerce registration" },
                { num: "05", title: "Immigration card and visa processing" },
                { num: "06", title: "Bank account introduction and opening" },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-4 group">
                  <span className="text-[10px] font-sans text-primary/50 uppercase tracking-[0.16em] w-6 flex-shrink-0">{step.num}</span>
                  <div className="flex-1 h-px bg-primary/10 group-hover:bg-primary/25 transition-colors duration-300" />
                  <span className="text-sm font-sans text-secondary-foreground/60 text-right max-w-xs">{step.title}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default MainlandSetup;
