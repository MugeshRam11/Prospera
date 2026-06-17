import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, FileText, CheckCircle2, ArrowUpRight } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const developers = [
  { name: "Emaar", tag: "Tier 1", desc: "Downtown, Creek Harbour, Hills Estate" },
  { name: "DAMAC", tag: "Tier 1", desc: "Business Bay, DAMAC Hills, Lagoons" },
  { name: "Nakheel", tag: "Tier 1", desc: "Palm Jumeirah, Deira Islands" },
  { name: "Aldar", tag: "Tier 1", desc: "Abu Dhabi, Yas Island, Saadiyat" },
  { name: "Sobha", tag: "Premium", desc: "Sobha Hartland, Creek Vistas" },
  { name: "Binghatti", tag: "Growth", desc: "JVC, Business Bay, Dubai Healthcare" },
];

const paymentPlans = [
  { label: "Construction-Linked", split: "40/60", desc: "40% during construction, 60% on handover. Lower initial commitment.", risk: "Low" },
  { label: "Post-Handover", split: "30/70", desc: "30% during build, 70% over 2–5 years post completion. Maximum leverage.", risk: "Medium" },
  { label: "Investor Plan", split: "50/50", desc: "Equal split pre and post completion. Balanced cash flow.", risk: "Low–Med" },
];

const OffPlan = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 20, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.fromTo(".dev-card",
        { opacity: 0, y: 20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".dev-grid", start: "top 82%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>

      {/* HERO */}
      <section ref={heroRef} className="section-curve relative min-h-[85vh] flex items-end overflow-hidden bg-secondary">
        <img ref={imgRef} src="https://images.unsplash.com/photo-1582407947092-5e71e4a38c87?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover scale-110 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/88 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />

        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/30">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link><ChevronRight size={10} />
          <Link to="/real-estate" className="hover:text-primary transition-colors">Real Estate</Link><ChevronRight size={10} />
          <span className="text-primary/70">Off-Plan</span>
        </div>

        <div className="relative z-10 section-padding pt-44 pb-24 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3 mb-8">
                <FileText size={14} className="text-primary/70" />
                <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/80">Off-Plan Investment Advisory</span>
              </motion.div>
              <div className="overflow-hidden mb-6">
                <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.93] text-secondary-foreground">
                  Enter early.<br />Exit at a <span className="italic text-primary">premium.</span>
                </motion.h1>
              </div>
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-lg mb-10">
                Off-plan properties in Dubai have delivered 15–28% capital appreciation between launch and handover. We provide curated access to the launches worth entering — and the discipline to avoid those that aren't.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}>
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group">
                  Request Off-Plan Advisory <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right — 3 advantage stats */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:grid grid-cols-1 gap-3">
              {[
                { stat: "10–20%", label: "Below market entry vs. ready comparables" },
                { stat: "18%", label: "Average appreciation launch to handover (2022–24)" },
                { stat: "40/60", label: "Construction-linked plans — capital-efficient entry" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border border-primary/15 bg-secondary/40 backdrop-blur-sm rounded-xl px-6 py-4">
                  <span className="text-2xl font-display text-primary">{item.stat}</span>
                  <span className="text-xs font-sans text-secondary-foreground/40 text-right max-w-[180px] leading-snug">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY OFF-PLAN — 3 cards */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Why Off-Plan</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            The structural<br /><span className="italic">advantages.</span>
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Below-Market Entry", stat: "10–20%", desc: "Launch prices are typically 10–20% below comparable ready properties in the same corridor — providing an immediate paper gain on day one.", imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop" },
            { title: "Flexible Payment Plans", stat: "40/60", desc: "Construction-linked and post-handover plans allow capital-efficient entry — typically 40% across construction milestones, 60% on completion.", imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop" },
            { title: "Capital Growth Potential", stat: "18%", desc: "Prime Dubai off-plan has averaged 18% appreciation from launch to handover over 2022–2024, significantly outperforming ready asset appreciation.", imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop" },
          ].map((card, i) => (
            <SectionReveal key={card.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-foreground/[0.10] bg-background hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_hsl(var(--primary)/0.18)] transition-all duration-500 h-full flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={card.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xl font-display text-primary">{card.stat}</span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-display tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{card.title}</h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* DEVELOPER NETWORK */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Developer Network</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-4">
            Direct access.<br /><span className="italic">Tier-1 developers.</span>
          </h2>
          <p className="text-base text-muted-foreground font-sans mb-14 max-w-xl">
            We maintain direct relationships with UAE's leading developers — providing early launch access, preferential allocation, and negotiation leverage unavailable through standard channels.
          </p>
        </SectionReveal>
        <div className="dev-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {developers.map((dev) => (
            <div key={dev.name} className="dev-card border border-foreground/[0.10] rounded-2xl p-6 bg-background hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 group flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/[0.06] border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <span className="text-xs font-display font-bold text-primary">{dev.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display text-base text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">{dev.name}</span>
                  <span className="text-[9px] font-sans uppercase tracking-[0.12em] text-primary/70 bg-primary/10 border border-primary/15 px-2 py-0.5 rounded-full">{dev.tag}</span>
                </div>
                <p className="text-xs font-sans text-muted-foreground">{dev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAYMENT PLANS */}
      <section className="section-padding bg-secondary section-curve">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">Payment Plans</span>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-secondary-foreground mb-14">
              Capital-efficient<br /><span className="italic text-primary">entry structures.</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {paymentPlans.map((plan, i) => (
              <SectionReveal key={plan.label} delay={i * 0.1}>
                <div className="border border-primary/10 rounded-2xl p-8 hover:border-primary/25 hover:bg-primary/[0.03] transition-all duration-300 group h-full flex flex-col">
                  <div className="text-4xl font-display text-primary mb-3">{plan.split}</div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-display tracking-tight text-secondary-foreground group-hover:text-primary transition-colors duration-300">{plan.label}</h3>
                    <span className="text-[9px] font-sans uppercase tracking-[0.12em] text-secondary-foreground/40 border border-secondary-foreground/10 px-2 py-0.5 rounded-full">Risk: {plan.risk}</span>
                  </div>
                  <p className="text-sm font-sans text-secondary-foreground/50 leading-relaxed flex-1">{plan.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            Launch to<br /><span className="italic">handover.</span>
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-foreground/[0.05] rounded-2xl overflow-hidden">
          {[
            { num: "01", title: "Opportunity Sourcing", desc: "Curated access to launches from our developer network — screened before market release." },
            { num: "02", title: "Due Diligence", desc: "Developer track record, location fundamentals, payment structure, and exit liquidity." },
            { num: "03", title: "Negotiation & Booking", desc: "Price negotiation, booking fee structuring, and DLD Oqood registration." },
            { num: "04", title: "Lifecycle Management", desc: "Milestone payment coordination, snagging, handover, and post-handover setup." },
          ].map((step, i) => (
            <SectionReveal key={step.num} delay={i * 0.1}>
              <div className="bg-background p-8 h-full hover:bg-primary/[0.03] transition-colors duration-300 group">
                <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary/50 mb-4">{step.num}</div>
                <h3 className="text-lg font-display tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default OffPlan;
