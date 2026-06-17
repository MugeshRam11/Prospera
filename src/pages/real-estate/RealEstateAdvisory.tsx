import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight, ArrowUpRight, ChevronRight,
  TrendingUp, Home, BarChart3, Settings, FileText
} from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

/* ── Service definitions ── */
const services = [
  {
    label: "Property Investment",
    title: "Data-driven acquisition intelligence.",
    desc: "Yield analysis, market timing, and acquisition strategy for residential and commercial assets across Dubai's key investment corridors.",
    stat: "8.4%", statLabel: "Avg. gross yield",
    path: "/real-estate/property-investment",
    icon: TrendingUp,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1400&auto=format&fit=crop",
    pan: "group-hover:translate-x-[-6px] group-hover:translate-y-[-4px]",
  },
  {
    label: "Off-Plan",
    title: "Enter early. Exit at a premium.",
    desc: "Developer relationships, launch access, payment plan modelling, and off-plan lifecycle management for capital-efficient entry.",
    stat: "18%", statLabel: "Avg. off-plan appreciation",
    path: "/real-estate/off-plan",
    icon: FileText,
    imageUrl: "https://images.unsplash.com/photo-1582407947092-5e71e4a38c87?q=80&w=1400&auto=format&fit=crop",
    pan: "group-hover:translate-x-[5px] group-hover:translate-y-[-3px]",
  },
  {
    label: "Ready Property",
    title: "Immediate yield. Proven assets.",
    desc: "Ready property advisory covering valuation, due diligence, negotiation, and DLD registration — income from day one.",
    stat: "Day 1", statLabel: "Income generation",
    path: "/real-estate/ready-property",
    icon: Home,
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1400&auto=format&fit=crop",
    pan: "group-hover:translate-x-[-4px] group-hover:translate-y-[4px]",
  },
  {
    label: "Portfolio Advisory",
    title: "Optimize what you already own.",
    desc: "Portfolio audit, yield gap analysis, rebalancing strategy, and exit planning for existing UAE property holders.",
    stat: "7.2%", statLabel: "Avg. yield post-advisory",
    path: "/real-estate/portfolio",
    icon: BarChart3,
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1400&auto=format&fit=crop",
    pan: "group-hover:translate-x-[4px] group-hover:translate-y-[-5px]",
  },
  {
    label: "Property Management",
    title: "Hands-off ownership.",
    desc: "Full-service management — tenant sourcing, RERA compliance, maintenance, and financial reporting for the passive investor.",
    stat: "94%", statLabel: "Occupancy rate",
    path: "/real-estate/property-management",
    icon: Settings,
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop",
    pan: "group-hover:translate-x-[-5px] group-hover:translate-y-[-6px]",
  },
];

/* ── Market data for yield comparison ── */
const yieldData = [
  { city: "Dubai", yield: 8.4, bar: 100 },
  { city: "London", yield: 3.1, bar: 37 },
  { city: "Singapore", yield: 2.8, bar: 33 },
  { city: "New York", yield: 3.4, bar: 40 },
  { city: "Paris", yield: 2.9, bar: 35 },
  { city: "Sydney", yield: 3.7, bar: 44 },
];

const RealEstateAdvisory = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero parallax */
      gsap.to(imgRef.current, {
        yPercent: 22, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });

      /* Service cards stagger */
      gsap.fromTo(".re-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".re-grid", start: "top 82%" } }
      );

      /* Yield bars animate in */
      gsap.fromTo(".yield-bar-fill",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: ".yield-section", start: "top 78%" } }
      );

      /* Stats line reveal */
      gsap.fromTo(".stat-divider",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.2, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: ".stats-band", start: "top 82%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>

      {/* ══════════════ HERO ══════════════ */}
      <section ref={heroRef} className="section-curve relative min-h-screen flex items-end overflow-hidden bg-secondary">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
          alt="Dubai real estate"
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/85 to-secondary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-secondary/20" />

        {/* Animated vertical accent line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-8 md:left-16 top-36 bottom-36 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent origin-top"
        />

        {/* Breadcrumb */}
        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/30">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-primary/70">Real Estate Advisory</span>
        </div>

        {/* Content */}
        <div className="relative z-10 section-padding pt-44 pb-28 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">

            {/* Left — headline */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-10 bg-primary/60" />
                <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-primary/80">
                  Real Estate Advisory · Dubai, UAE
                </span>
              </motion.div>

              <div className="overflow-hidden mb-6">
                <motion.h1
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display tracking-tight leading-[0.93] text-secondary-foreground"
                >
                  Invest in Dubai<br />
                  with <span className="italic text-primary">intelligence.</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-lg mb-10"
              >
                500+ advisory engagements. Data-driven property selection across
                off-plan, ready assets, and portfolio strategy for the discerning investor.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group"
                >
                  Request Property Advisory
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right — floating market data card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="border border-primary/15 bg-secondary/60 backdrop-blur-md rounded-2xl p-8">
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-secondary-foreground/40 mb-6">
                  Dubai vs Global Markets · Avg. Gross Rental Yield
                </p>
                <div className="space-y-4">
                  {yieldData.map((d) => (
                    <div key={d.city} className="flex items-center gap-4">
                      <span className="text-xs font-sans text-secondary-foreground/50 w-20 flex-shrink-0">{d.city}</span>
                      <div className="flex-1 h-1.5 bg-secondary-foreground/[0.08] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full yield-bar-fill"
                          style={{
                            width: `${d.bar}%`,
                            background: d.city === "Dubai"
                              ? "hsl(var(--primary))"
                              : "hsl(var(--secondary-foreground) / 0.2)",
                          }}
                        />
                      </div>
                      <span className={`text-sm font-display tracking-tight w-10 text-right ${d.city === "Dubai" ? "text-primary" : "text-secondary-foreground/40"}`}>
                        {d.yield}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-primary/10 flex items-center justify-between">
                  <span className="text-[10px] font-sans text-secondary-foreground/35">Source: market data 2024–25</span>
                  <span className="text-[10px] font-sans text-primary uppercase tracking-[0.12em]">Dubai outperforms</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS BAND ══════════════ */}
      <section className="stats-band section-padding py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-foreground/[0.08]">
          {[
            { value: 8.4, suffix: "%", label: "Avg. gross rental yield", decimals: 1 },
            { value: 500, suffix: "+", label: "Advisory engagements", decimals: 0 },
            { value: 1.5, suffix: "Bn+ AED", label: "Transacted value advised", decimals: 1 },
            { value: 18, suffix: "%", label: "Avg. off-plan appreciation", decimals: 0 },
          ].map((s, i) => (
            <SectionReveal key={s.label} delay={i * 0.08}>
              <div className="text-center md:px-8">
                <div className="stat-divider h-px bg-primary/25 mb-5 mx-auto w-10" />
                <div className="text-3xl md:text-4xl font-display tracking-tight text-primary mb-2">
                  <AnimatedCounter end={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-[0.13em] leading-tight">{s.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ══════════════ SERVICES GRID ══════════════ */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-4">
            Five disciplines.<br />
            <span className="italic">One property mandate.</span>
          </h2>
          <p className="text-base text-muted-foreground font-sans mb-16 max-w-xl">
            From first acquisition to multi-asset portfolio — we coordinate every stage
            of your UAE property journey under one advisory relationship.
          </p>
        </SectionReveal>

        {/* Top 3 — tall portrait cards */}
        <div className="re-grid grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((s, i) => (
            <Link
              key={s.label}
              to={s.path}
              className="re-card group relative block overflow-hidden rounded-2xl border border-foreground/[0.10] aspect-[3/4] bg-secondary transition-all duration-500 hover:border-primary/40 hover:shadow-[0_28px_64px_-20px_hsl(var(--primary)/0.28)]"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image with pan */}
              <img
                src={s.imageUrl} alt=""
                className={`absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-out ${s.pan}`}
              />
              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/98 via-secondary/65 to-secondary/10 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/22 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Stat — top right */}
              <div className="absolute top-5 right-5 text-right z-10">
                <div className="text-2xl font-display text-primary leading-none">{s.stat}</div>
                <div className="text-[9px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/45 mt-0.5">{s.statLabel}</div>
              </div>

              {/* Arrow — top left */}
              <div className="absolute top-5 left-5 z-10">
                <div className="w-8 h-8 rounded-full border border-foreground/15 bg-secondary/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                  <ArrowUpRight size={13} className="text-secondary-foreground/40 group-hover:text-primary-foreground transition-all duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
                </div>
              </div>

              {/* Bottom — slides content */}
              <div className="absolute inset-x-0 bottom-0 z-10 text-white">
                {/* Pop-up detail on hover */}
                <div
                  className="px-6 overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: hoveredCard === i ? "72px" : "0px",
                    opacity: hoveredCard === i ? 1 : 0,
                    transform: `translateY(${hoveredCard === i ? "0" : "10px"})`,
                    transition: "max-height 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                >
                  <p className="text-xs font-sans text-white/55 leading-relaxed pb-4 border-b border-white/10">{s.desc}</p>
                </div>

                <div
                  className="px-6 pb-7 transition-all duration-400"
                  style={{ transform: hoveredCard === i ? "translateY(-4px)" : "translateY(0)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <s.icon size={12} className="text-primary" />
                    <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-primary/80">{s.label}</span>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-display tracking-tight mb-4 transition-colors duration-300"
                    style={{ color: hoveredCard === i ? "hsl(var(--primary))" : "white" }}
                  >
                    {s.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-xs font-sans text-primary transition-all duration-300"
                    style={{ gap: hoveredCard === i ? "10px" : "6px" }}>
                    Explore <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom 2 — wide landscape cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.slice(3).map((s, i) => (
            <Link
              key={s.label}
              to={s.path}
              className="re-card group relative block overflow-hidden rounded-2xl border border-foreground/[0.10] aspect-[16/7] bg-secondary transition-all duration-500 hover:border-primary/40 hover:shadow-[0_28px_64px_-20px_hsl(var(--primary)/0.28)]"
            >
              <img src={s.imageUrl} alt="" className={`absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-out ${s.pan}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/78 to-secondary/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/18 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-5 right-5">
                <div className="w-8 h-8 rounded-full border border-foreground/15 bg-secondary/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                  <ArrowUpRight size={13} className="text-secondary-foreground/40 group-hover:text-primary-foreground transition-all duration-300" />
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-8 md:p-10 max-w-md">
                <div className="flex items-center gap-2 mb-3">
                  <s.icon size={12} className="text-primary" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-primary/80">{s.label}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="text-sm font-sans text-white/50 leading-relaxed mb-5 max-w-xs">{s.desc}</p>
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-display text-primary">{s.stat}</span>
                  <span className="text-[10px] font-sans text-secondary-foreground/40 uppercase tracking-[0.12em]">{s.statLabel}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════ MARKET CONTEXT ══════════════ */}
      <section className="section-padding bg-secondary section-curve">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <span className="text-label text-primary/80 mb-5 block">Market Context</span>
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-secondary-foreground mb-6">
                Why Dubai.<br /><span className="italic text-primary">Why now.</span>
              </h2>
              <p className="text-secondary-foreground/55 font-sans leading-relaxed mb-5">
                Dubai's real estate market continues to stand out globally — delivering rental
                yields of 6.5–8.4% against a backdrop of zero personal tax, growing population
                demand, and a regulatory framework actively designed to attract international capital.
              </p>
              <p className="text-secondary-foreground/55 font-sans leading-relaxed mb-10">
                For globally mobile investors, the convergence of yield, capital growth, and
                lifestyle makes Dubai a structurally compelling allocation — not just an emerging
                market play, but an established institutional asset class.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-primary/25 text-primary rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                Explore Your Investment Options
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <div className="yield-section space-y-4">
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-secondary-foreground/35 mb-6">
                  Average Gross Rental Yield Comparison
                </p>
                {yieldData.map((d, i) => (
                  <div key={d.city} className="flex items-center gap-5">
                    <span className="text-xs font-sans text-secondary-foreground/50 w-20 flex-shrink-0">{d.city}</span>
                    <div className="flex-1 h-1 bg-secondary-foreground/[0.08] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full yield-bar-fill transition-all duration-1000"
                        style={{
                          width: `${d.bar}%`,
                          background: d.city === "Dubai" ? "hsl(var(--primary))" : "hsl(var(--secondary-foreground) / 0.18)",
                        }}
                      />
                    </div>
                    <span className={`text-sm font-display tracking-tight w-12 text-right flex-shrink-0 ${d.city === "Dubai" ? "text-primary" : "text-secondary-foreground/35"}`}>
                      {d.yield}%
                    </span>
                  </div>
                ))}
                <div className="pt-6 border-t border-primary/10 flex items-center justify-between text-[10px] font-sans">
                  <span className="text-secondary-foreground/30">Source: market data 2024–2025</span>
                  <span className="text-primary uppercase tracking-[0.12em]">Dubai outperforms 2.3×</span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default RealEstateAdvisory;
