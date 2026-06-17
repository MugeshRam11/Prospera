import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Plus, Minus } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const freezones = [
  { name: "DMCC", full: "Dubai Multi Commodities Centre", best: "Commodities, Trading, Crypto", time: "10–14 days", cost: "AED 18,000+", tax: "0%", highlight: true },
  { name: "DIFC", full: "Dubai International Financial Centre", best: "Financial Services, FinTech", time: "14–21 days", cost: "AED 35,000+", tax: "0%", highlight: false },
  { name: "JAFZA", full: "Jebel Ali Free Zone", best: "Logistics, Manufacturing", time: "10–15 days", cost: "AED 15,000+", tax: "0%", highlight: false },
  { name: "ADGM", full: "Abu Dhabi Global Market", best: "Asset Management, Family Office", time: "14–21 days", cost: "AED 30,000+", tax: "0%", highlight: false },
  { name: "RAKEZ", full: "Ras Al Khaimah Economic Zone", best: "SMEs, Light Industry", time: "7–10 days", cost: "AED 12,000+", tax: "0%", highlight: false },
  { name: "IFZA", full: "International Free Zone Authority", best: "General Trading, Consulting", time: "7–10 days", cost: "AED 11,900+", tax: "0%", highlight: false },
  { name: "Meydan", full: "Meydan Free Zone", best: "E-Commerce, Consulting", time: "7–10 days", cost: "AED 12,500+", tax: "0%", highlight: false },
];

const faqs = [
  { q: "Can I operate across the UAE from a freezone?", a: "Freezone companies can operate freely within their freezone and internationally, but require a local distributor or branch for direct trading with UAE mainland customers. Many business models operate entirely within freezone or internationally and face no restriction." },
  { q: "What is the difference between an FZE and FZCO?", a: "An FZE (Free Zone Establishment) has a single shareholder; an FZCO (Free Zone Company) has 2–50 shareholders. Both enjoy the same tax and ownership benefits. The right structure depends on your shareholding arrangement." },
  { q: "Do I need a physical office in the freezone?", a: "Most freezones offer a range of options from a registered address (flexi-desk) to a dedicated office or warehouse. The requirement varies by freezone and license type. We advise on the minimum viable office solution for your business model." },
  { q: "Can a freezone company open a UAE bank account?", a: "Yes — freezone companies can open UAE bank accounts. The process requires KYC documentation, business activity clarity, and (in some cases) a bank introduction. Our banking partnerships accelerate approval timelines significantly." },
];

const FreezoneSetup = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 18, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.fromTo(".fz-row",
        { opacity: 0, x: -16 },
        { opacity: 1, x: 0, stagger: 0.07, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".fz-table", start: "top 80%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      <section ref={heroRef} className="section-curve relative min-h-[80vh] flex items-end overflow-hidden bg-secondary">
        <img ref={imgRef} src="https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?q=80&w=2076&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover scale-110 opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/88 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />

        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/30">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/corporate" className="hover:text-primary transition-colors">Corporate</Link>
          <ChevronRight size={10} />
          <span className="text-primary/70">Freezone Setup</span>
        </div>

        <div className="relative z-10 section-padding pt-40 pb-24 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3 mb-8">
              <Globe size={14} className="text-primary/70" />
              <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/80">Freezone Company Formation</span>
            </motion.div>
            <div className="overflow-hidden mb-6">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.93] text-secondary-foreground">
                Zero tax.<br />Full ownership.<br /><span className="italic text-primary">Rapid setup.</span>
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-xl mb-10">
              We match your business model to the optimal UAE freezone across 40+ jurisdictions — from DMCC for commodities to DIFC for financial services, matched to your industry, budget, and objectives.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group">
                Request Freezone Advisory <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Why Freezone</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            The structural<br /><span className="italic">advantages.</span>
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "0%", label: "Corporate Tax", desc: "Eligible freezone entities pay zero corporate tax on qualifying income — a structurally significant advantage for international operators." },
            { stat: "100%", label: "Foreign Ownership", desc: "Full foreign ownership with no local partner required. Your equity structure is entirely yours." },
            { stat: "7–21d", label: "Average Setup Time", desc: "From application to license issuance — streamlined freezone processes deliver operational entities fast." },
          ].map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.1}>
              <div className="border border-foreground/[0.10] rounded-2xl p-8 bg-background hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_12px_48px_-16px_hsl(var(--primary)/0.18)] transition-all duration-400 group h-full flex flex-col">
                <div className="text-4xl md:text-5xl font-display tracking-tight text-primary mb-2">{item.stat}</div>
                <div className="text-xs font-sans uppercase tracking-[0.16em] text-muted-foreground mb-4">{item.label}</div>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Freezone Comparison</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            Major UAE freezones<br /><span className="italic">at a glance.</span>
          </h2>
        </SectionReveal>
        <div className="fz-table border border-foreground/[0.10] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-5 bg-secondary text-secondary-foreground px-6 py-4">
            {["Freezone", "Best For", "Setup Time", "Min. Cost", "Tax"].map((h) => (
              <div key={h} className="text-[10px] font-sans uppercase tracking-[0.16em] text-secondary-foreground/50">{h}</div>
            ))}
          </div>
          {freezones.map((fz) => (
            <div key={fz.name} className={`fz-row grid grid-cols-5 px-6 py-5 border-t border-foreground/[0.06] items-center transition-colors duration-200 hover:bg-primary/[0.03] cursor-default ${fz.highlight ? "bg-primary/[0.04]" : "bg-background"}`}>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-base text-foreground tracking-tight">{fz.name}</span>
                  {fz.highlight && <span className="text-[9px] font-sans uppercase tracking-[0.14em] text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded-full">Popular</span>}
                </div>
                <span className="text-[10px] font-sans text-muted-foreground">{fz.full}</span>
              </div>
              <div className="text-sm font-sans text-muted-foreground">{fz.best}</div>
              <div className="text-sm font-sans text-foreground">{fz.time}</div>
              <div className="text-sm font-sans text-foreground">{fz.cost}</div>
              <div className="text-sm font-display font-semibold text-primary">{fz.tax}</div>
            </div>
          ))}
        </div>
        <p className="text-xs font-sans text-muted-foreground/50 mt-4 italic">
          * Costs are indicative. Final fees depend on activity, share capital, and office requirements. Prospera provides a full cost breakdown during advisory.
        </p>
      </section>

      <section className="section-padding bg-secondary section-curve">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">What We Handle</span>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-secondary-foreground mb-14">
              End-to-end.<br /><span className="italic text-primary">Nothing delegated.</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {[
              "Freezone selection and jurisdiction matching",
              "Trade name reservation and approval",
              "License application and activity classification",
              "Memorandum of Association drafting",
              "Share certificate and incorporation documents",
              "Visa quota allocation and applications",
              "Business centre address or dedicated office",
              "Bank introduction letter preparation",
              "Post-formation compliance guidance",
              "Corporate tax registration (where applicable)",
            ].map((item, i) => (
              <SectionReveal key={item} delay={i * 0.04}>
                <div className="flex items-center gap-3 py-3 border-b border-primary/[0.08]">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-sans text-secondary-foreground/70">{item}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <SectionReveal>
            <span className="text-label text-primary mb-4 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-display tracking-tight mb-4">
              Common <span className="italic">questions.</span>
            </h2>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">
              Can't find your answer? Our advisory team responds within 24 hours.
            </p>
          </SectionReveal>
          <div className="lg:col-span-2 space-y-0">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border-b border-foreground/[0.08]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-start justify-between gap-6 py-6 text-left group">
                  <span className="text-base font-display tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-foreground/10 flex items-center justify-center mt-0.5 group-hover:border-primary/30 transition-colors">
                    {openFaq === i ? <Minus size={11} className="text-primary" /> : <Plus size={11} className="text-foreground/40 group-hover:text-primary transition-colors" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <p className="pb-6 text-sm font-sans text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default FreezoneSetup;
