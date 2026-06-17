import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, Award, CheckCircle2 } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const GoldenVisa = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, { yPercent: 18, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      <section ref={heroRef} className="section-curve relative min-h-[85vh] flex items-end overflow-hidden bg-secondary">
        <img ref={imgRef} src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover scale-110 opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/88 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />
        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/30">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link><ChevronRight size={10} />
          <Link to="/corporate" className="hover:text-primary transition-colors">Corporate</Link><ChevronRight size={10} />
          <span className="text-primary/70">Golden Visa</span>
        </div>
        <div className="relative z-10 section-padding pt-40 pb-24 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3 mb-8">
              <Award size={14} className="text-primary/70" /><span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/80">UAE Golden Visa</span>
            </motion.div>
            <div className="overflow-hidden mb-6">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.93] text-secondary-foreground">
                10-year residency.<br /><span className="italic text-primary">On your terms.</span>
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-xl mb-10">
              The UAE Golden Visa offers long-term residency to investors, property owners, entrepreneurs, and professionals — with full family inclusion and no UAE sponsor requirement.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group">
                Check Eligibility <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-4 border border-secondary-foreground/20 text-secondary-foreground/70 rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:border-primary/40 hover:text-primary transition-all duration-300">
                Book Advisory Call
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-foreground/[0.08]">
          {[
            { value: 10, suffix: " yrs", label: "Renewable residency" },
            { value: 2, suffix: "M+ AED", label: "Property pathway" },
            { value: 4, suffix: "–6 wks", label: "Processing time" },
            { value: 40, suffix: "+", label: "Nationalities served" },
          ].map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.08}>
              <div className="text-center md:px-8">
                <div className="text-3xl md:text-4xl font-display tracking-tight text-primary mb-2">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-[0.14em]">{s.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Eligibility Pathways</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            Three routes to<br /><span className="italic">10-year residency.</span>
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Property Investment", threshold: "AED 2M+", desc: "Own UAE property valued at AED 2 million or above. Off-plan properties now qualify subject to conditions.", imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" },
            { title: "Company Ownership", threshold: "AED 2M+ capital", desc: "Establish or own a UAE company with paid-up capital of AED 2 million or above. Freezone companies qualify.", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
            { title: "Professional Achievement", threshold: "Specialist fields", desc: "Doctors, engineers, scientists, artists, and senior executives in specialised fields recognised by UAE authorities.", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
          ].map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-foreground/[0.10] aspect-[3/4] bg-secondary hover:border-primary/35 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.25)] transition-all duration-500">
                <img src={card.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/98 via-secondary/70 to-secondary/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-display text-primary bg-secondary/70 backdrop-blur-sm border border-primary/20 px-3 py-1.5 rounded-full">{card.threshold}</span>
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

      <section className="section-padding bg-secondary section-curve">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-secondary-foreground mb-8">
              What the Golden Visa<br /><span className="italic text-primary">gives you.</span>
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {["10-year renewable residency", "Sponsor your entire family", "No UAE sponsor required", "Multiple entry visa", "Live and work in any emirate", "UAE banking and investment access", "Property ownership rights", "Children's education access"].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-sans text-secondary-foreground/65">{b}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.12}>
            <span className="text-label text-primary/80 mb-4 block">Timeline</span>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-secondary-foreground mb-8">
              From application<br /><span className="italic text-primary">to activation.</span>
            </h2>
            <div className="space-y-5">
              {[
                { week: "Week 1–2", title: "Eligibility assessment & document preparation" },
                { week: "Week 2–3", title: "ICA application submission" },
                { week: "Week 3–5", title: "Medical examination & Emirates ID" },
                { week: "Week 4–6", title: "Visa stamping & full activation" },
              ].map((step, i) => (
                <div key={step.week} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center">
                      <div className="text-[9px] font-sans text-primary font-bold">{String(i + 1).padStart(2, "0")}</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans text-primary/60 uppercase tracking-[0.14em]">{step.week}</span>
                    <p className="text-sm font-sans text-secondary-foreground/65 mt-0.5">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 border border-primary/15 rounded-xl">
              <p className="text-xs font-sans text-secondary-foreground/45 leading-relaxed">
                <span className="text-primary font-medium">Cost overview:</span> Government fees AED 2,800–4,200 · Medical AED 600–800 · Emirates ID AED 370 · Prospera advisory fee included in mandate.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default GoldenVisa;
