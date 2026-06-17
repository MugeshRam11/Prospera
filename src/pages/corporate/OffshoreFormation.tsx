import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, Landmark, CheckCircle2 } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const OffshoreFormation = () => {
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
      <section ref={heroRef} className="section-curve relative min-h-[80vh] flex items-end overflow-hidden bg-secondary">
        <img ref={imgRef} src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover scale-110 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/88 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />
        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/30">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link><ChevronRight size={10} />
          <Link to="/corporate" className="hover:text-primary transition-colors">Corporate</Link><ChevronRight size={10} />
          <span className="text-primary/70">Offshore Formation</span>
        </div>
        <div className="relative z-10 section-padding pt-40 pb-24 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3 mb-8">
              <Landmark size={14} className="text-primary/70" /><span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/80">Offshore & Holding Structures</span>
            </motion.div>
            <div className="overflow-hidden mb-6">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.93] text-secondary-foreground">
                International holding.<br /><span className="italic text-primary">UAE intelligence.</span>
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-xl mb-10">
              RAK ICC and ADGM offshore companies offer asset protection, estate planning, and international holding capabilities — with UAE banking access and full Prospera advisory support.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group">
                Request Offshore Advisory <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Offshore Structures</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            Three offshore<br /><span className="italic">vehicles.</span>
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "RAK ICC", subtitle: "International Corporate Centre", tag: "Most Popular", desc: "Fastest and most cost-effective offshore structure. Ideal for holding companies, IP vehicles, and international trading. AED 8,000–12,000 setup cost.", features: ["Privacy of ownership", "No audit requirement", "UAE banking eligible", "100% foreign ownership"], imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop" },
            { name: "ADGM SPV", subtitle: "Abu Dhabi Global Market", tag: "Regulated", desc: "Preferred for asset management and family office structures. Highly regulated, globally recognized, excellent for institutional capital.", features: ["FSRA regulated", "Family office ready", "Institutional credibility", "Strong legal framework"], imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
            { name: "DIFC PC", subtitle: "Prescribed Company", tag: "Financial Services", desc: "For regulated financial activities, investment fund structures, and entities requiring DIFC's internationally recognized legal framework.", features: ["DIFC Courts jurisdiction", "Fund structures", "Common law framework", "Global recognition"], imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" },
          ].map((card, i) => (
            <SectionReveal key={card.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-foreground/[0.10] bg-background hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_hsl(var(--primary)/0.2)] transition-all duration-500 h-full flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img src={card.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4"><span className="text-[9px] font-sans uppercase tracking-[0.14em] text-primary bg-background/85 backdrop-blur-sm border border-primary/20 px-2.5 py-1 rounded-full">{card.tag}</span></div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-display tracking-tight text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{card.name}</h3>
                    <p className="text-xs font-sans text-muted-foreground uppercase tracking-[0.12em]">{card.subtitle}</p>
                  </div>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-5 flex-1">{card.desc}</p>
                  <div className="space-y-2">
                    {card.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-primary flex-shrink-0" />
                        <span className="text-xs font-sans text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary section-curve">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-secondary-foreground mb-14">
              Who offshore<br /><span className="italic text-primary">structures serve.</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Real estate holding vehicles", "IP and royalty structures", "Family wealth vehicles", "International trading companies", "Succession and estate planning", "Investment fund structures", "Cross-border capital planning", "Privacy-sensitive ownership"].map((use, i) => (
              <SectionReveal key={use} delay={i * 0.06}>
                <div className="flex items-center gap-3 p-4 border border-primary/10 rounded-xl hover:border-primary/25 hover:bg-primary/[0.03] transition-all duration-300 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-sans text-secondary-foreground/65 group-hover:text-secondary-foreground transition-colors">{use}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default OffshoreFormation;
