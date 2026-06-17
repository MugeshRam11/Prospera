import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Landmark,
  TimerReset,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── DATA ─── */
const slides = [
  {
    number: "01",
    label: "Tax Efficiency",
    title: "Zero Personal\nIncome Tax.",
    description:
      "The UAE offers a uniquely efficient environment for founders, operators, and investors seeking to preserve personal wealth. For globally mobile individuals and capital allocators, this creates a structurally stronger base for long-term financial planning, residence, and regional expansion.",
    metric: "0%",
    metricLabel: "Personal Income Tax",
    cardDescription:
      "A structurally attractive jurisdiction for private wealth, founder relocation, and cross-border capital planning.",
    footer: "Capital preservation advantage",
    footerIcon: true,
    icon: Landmark,
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    link: "/corporate",
  },
  {
    number: "02",
    label: "Business Structuring",
    title: "Freezone Corporate\nTax Advantage.",
    description:
      "For many business models, UAE freezones present an efficient route to incorporation, operational setup, and long-term structuring. The appeal lies not only in tax treatment, but also in clarity, ownership flexibility, and the speed with which international founders can establish a regional base.",
    metric: "0%",
    metricLabel: "Corporate Tax (Eligible Freezones)",
    cardDescription:
      "Efficient incorporation pathways designed for international operators, cross-border founders, and growth-stage businesses.",
    footer: "100% ownership · Fast setup",
    footerIcon: false,
    icon: Building2,
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    link: "/corporate/freezone-setup",
  },
  {
    number: "03",
    label: "Execution Speed",
    title: "Fast Market\nEntry.",
    description:
      "The UAE's execution advantage is not only strategic—it is practical. For investors and entrepreneurs entering the market, setup speed reduces friction, improves agility, and enables a faster transition from planning to operating.",
    metric: "12.4d",
    metricLabel: "Average Freezone Setup Time",
    cardDescription:
      "A faster path from decision to operation for business setup, market entry, and regional execution.",
    footer: "Reduced friction → faster capital deployment",
    footerIcon: false,
    icon: TimerReset,
    imageUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop",
    link: "/corporate/mainland-setup",
  },
  {
    number: "04",
    label: "Property Income",
    title: "Attractive\nRental Yield.",
    description:
      "Dubai continues to stand out as a market where capital appreciation and rental income can coexist more compellingly than in many mature gateway cities. For investors prioritizing income-generating real estate, this makes the market particularly relevant.",
    metric: "8.4%",
    metricLabel: "Avg. Rental Yield, Dubai",
    cardDescription:
      "An income-oriented property environment that strengthens Dubai's case for globally diversified investors.",
    footer: "Investor-oriented market signal",
    footerIcon: true,
    icon: TrendingUp,
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    link: "/real-estate/property-investment",
  },
];

/* ─── ANIMATION VARIANTS ─── */
const textVariants: Variants = {
  enter: {
    y: 52,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: [0.55, 0, 1, 0.45],
    },
  },
};

const cardVariants: Variants = {
  enter: {
    y: 60,
    opacity: 0,
    scale: 0.96,
  },
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.08,
    },
  },
  exit: {
    y: -36,
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.4,
      ease: [0.55, 0, 1, 0.45],
    },
  },
};

const numberVariants: Variants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

/* ─── COMPONENT ─── */
const UaeOpportunityStickySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${slides.length * window.innerHeight}px`,
        pin: stickyRef.current,
        onUpdate: (self) => {
          const rawIndex = self.progress * slides.length;
          const index = Math.min(
            Math.floor(rawIndex),
            slides.length - 1
          );
          setActiveSlide(index);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const slide = slides[activeSlide];
  const SlideIcon = slide.icon;

  /* ── Reduced motion: static, scroll-friendly stack (no pin, no transitions),
     preserving every slide's content. ─────────────────────────────────────── */
  if (prefersReduced) {
    return (
      <div className="relative bg-background text-foreground">
        <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/70">
              The Opportunity
            </span>
          </div>
          <div className="space-y-16 md:space-y-20">
            {slides.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-6">
                      <div className="w-8 h-8 rounded-lg border border-primary/25 bg-primary/[0.06] flex items-center justify-center">
                        <Icon size={15} className="text-primary" />
                      </div>
                      <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-primary/75">
                        {s.label}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display tracking-tight leading-[0.95] mb-6 whitespace-pre-line">
                      {s.title.split("\n").map((line, i) =>
                        i === 1 ? (
                          <span key={i} className="text-primary">
                            {line}
                            {"\n"}
                          </span>
                        ) : (
                          <span key={i}>
                            {line}
                            {"\n"}
                          </span>
                        ),
                      )}
                    </h2>
                    <p className="text-foreground/50 font-sans text-sm md:text-base leading-relaxed max-w-md mb-6">
                      {s.description}
                    </p>
                    <Link
                      to={s.link}
                      className="inline-flex items-center gap-2 text-sm font-sans text-primary"
                    >
                      Learn more
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 lg:p-8">
                    <div className="text-5xl font-display tracking-tight text-primary mb-1">
                      {s.metric}
                    </div>
                    <p className="text-sm text-foreground/55 font-sans mb-4">
                      {s.metricLabel}
                    </p>
                    <p className="text-sm text-foreground/45 font-sans leading-relaxed">
                      {s.cardDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="relative">
      {/* ── STICKY CONTAINER — 100vh, pinned by GSAP ── */}
      <div
        ref={stickyRef}
        className="w-full bg-background text-foreground overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-primary/20 z-10" />

        {/* ── LARGE BACKGROUND NUMBER ── */}
        <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.span
              key={`num-bg-${activeSlide}`}
              variants={numberVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-[28vw] font-display tracking-tighter text-foreground/[0.04] leading-none select-none pr-8 translate-y-4"
            >
              {slide.number}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col">

          {/* Top label row */}
          <div className="flex items-center justify-between pt-10 md:pt-12">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/70">
                The Opportunity
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-sans text-foreground/35">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSlide}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary/70 font-medium"
                >
                  {slide.number}
                </motion.span>
              </AnimatePresence>
              <span>/</span>
              <span>0{slides.length}</span>
            </div>
          </div>

          {/* Content grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center py-8 md:py-10">

            {/* ── LEFT: Text content ── */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-8 h-8 rounded-lg border border-primary/25 bg-primary/[0.06] flex items-center justify-center">
                      <SlideIcon size={15} className="text-primary" />
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-primary/75">
                      {slide.label}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display tracking-tight leading-[0.95] text-foreground mb-6 whitespace-pre-line">
                    {slide.title.split("\n").map((line, i) =>
                      i === 1 ? (
                        <span key={i} className="text-primary">
                          {line}
                          {"\n"}
                        </span>
                      ) : (
                        <span key={i}>
                          {line}
                          {"\n"}
                        </span>
                      )
                    )}
                  </h2>

                  <p className="text-foreground/50 font-sans text-sm md:text-base leading-relaxed max-w-md mb-8">
                    {slide.description}
                  </p>

                  <Link
                    to={slide.link}
                    className="inline-flex items-center gap-2.5 text-sm font-sans text-primary hover:gap-4 transition-all duration-300 group"
                  >
                    Learn more
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── RIGHT: Insight card ── */}
            <div className="hidden lg:flex items-center justify-center lg:justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full max-w-[380px] xl:max-w-[420px]"
                >
                  <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-sm shadow-[0_24px_64px_-24px_rgba(10,17,40,0.18)]">

                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={slide.imageUrl}
                        alt={slide.label}
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-foreground/10 bg-background/80 backdrop-blur-sm">
                          <SlideIcon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-primary/90">
                          {slide.label}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-5xl font-display tracking-tight text-primary mb-1">
                        {slide.metric}
                      </div>
                      <p className="text-sm text-foreground/55 font-sans mb-4">
                        {slide.metricLabel}
                      </p>
                      <p className="text-sm text-foreground/45 font-sans leading-relaxed mb-5">
                        {slide.cardDescription}
                      </p>

                      <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                        <span className="text-xs font-sans text-foreground/40">
                          {slide.footer}
                        </span>
                        {slide.footerIcon && (
                          <ArrowUpRight size={13} className="text-primary/45" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UaeOpportunityStickySection;
