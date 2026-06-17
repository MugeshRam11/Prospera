import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import HeroJourneyBuilder from "./hero/HeroJourneyBuilder";
import HeroMarketTicker from "./hero/HeroMarketTicker";
import { Waves } from "@/components/ui/wave-background";

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────────────────────
   HERO — "Private banking gateway" direction (client-approved 28/02 concept)
   Deep navy · champagne gold · Instrument Serif · interactive journey builder.

   Headline alternates (swap copy below if the client prefers):
   A. "The single architect of your UAE ambition."   ← current (Raghu's words)
   B. "Every UAE ambition. One coordinated mandate."
   C. "Enter the UAE the way capital does."
   ────────────────────────────────────────────────────────────────────────── */

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  /* ── Entry animation ─────────────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reduced motion: skip the choreography, just reveal everything.
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(
          [".hero-eyebrow", ".hero-sub", ".hero-ctas", ".hero-trust", ".hero-builder", glowRef.current],
          { opacity: 1, y: 0 },
        );
        gsap.set([".hero-line-1", ".hero-line-2"], { yPercent: 0, opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(bgRef.current, { scale: 1.06 }, { scale: 1, duration: 1.6 }, 0)
        .fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" },
          0,
        );

      // Eyebrow
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.25,
      );

      // Per-line curtain lift
      gsap.set([".hero-line-1", ".hero-line-2"], { yPercent: 105, opacity: 1 });
      tl.to(
        [".hero-line-1", ".hero-line-2"],
        { yPercent: 0, duration: 0.95, ease: "power4.out", stagger: 0.14 },
        0.4,
      );

      // Sub-headline, CTAs, trust row
      tl.fromTo(
        [".hero-sub", ".hero-ctas", ".hero-trust"],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
        1.05,
      );

      // Journey builder slides in
      tl.fromTo(
        ".hero-builder",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        0.85,
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── Scroll-driven effects ───────────────────────────────────────────── */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
      gsap.to(headlineRef.current, {
        scale: 0.96,
        y: -12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "70% top",
          scrub: 1,
        },
      });
      gsap.to(sectionRef.current, {
        borderBottomLeftRadius: "120px",
        borderBottomRightRadius: "120px",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "40% top",
          end: "bottom top",
          scrub: 0.3,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-brand-navy"
    >
      {/* ── BACKGROUND ──────────────────────────────────────────────────── */}
      <div ref={bgRef} className="absolute inset-0">
        <Waves
          className="absolute inset-0"
          backgroundColor="rgba(0,0,0,0.8)"
          strokeColor="#c5a059"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
        {/* Grain for tactile depth */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      {/* ── CHAMPAGNE GLOW (slow ambient drift) ─────────────────────────── */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none hidden lg:block hero-glow-drift"
        style={{
          width: 900,
          height: 900,
          top: "42%",
          left: "30%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197,160,89,0.13) 0%, transparent 65%)",
          opacity: 0,
          zIndex: 1,
        }}
      />

      {/* ── GOLD HAIRLINES ──────────────────────────────────────────────── */}
      <div className="absolute top-0 left-12 lg:left-24 w-px h-36 bg-gradient-to-b from-brand-gold/30 to-transparent z-[2]" />
      <div className="absolute top-0 right-12 lg:right-24 w-px h-24 bg-gradient-to-b from-brand-gold/20 to-transparent z-[2]" />

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-24 pt-32 lg:pt-36 pb-12 lg:pb-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-16">
          {/* LEFT — Headline */}
          <div ref={headlineRef} className="flex flex-col">
            {/* Eyebrow */}
            <div
              className="hero-eyebrow flex items-center gap-3"
              style={{ opacity: 0 }}
            >
              <span className="h-px w-10 bg-brand-gold/60" />
              <span className="text-[10px] font-vayu uppercase tracking-[0.28em] text-brand-gold">
                Private advisory · Dubai, UAE
              </span>
            </div>

            {/* Headline — serif, per-line curtain lift */}
            <h1 className="mt-6 text-[2.75rem] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem] font-display text-brand-ivory leading-[1.04] tracking-tight">
              <span className="block overflow-hidden pb-1">
                <span
                  className="hero-line-1 inline-block"
                  style={{ opacity: 0 }}
                >
                  The single architect
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span
                  className="hero-line-2 inline-block text-brand-gold"
                  style={{ opacity: 0 }}
                >
                  of your UAE ambition.
                </span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="hero-sub mt-6 text-sm md:text-[15px] font-sans text-white/55 leading-relaxed max-w-[46ch]"
              style={{ opacity: 0 }}
            >
              Corporate structuring, real estate acquisition, residency and
              capital — coordinated by one accountable team, under one roof.
            </p>

            {/* CTAs */}
            <div
              className="hero-ctas mt-8 flex flex-wrap items-center gap-4"
              style={{ opacity: 0 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand-gold px-7 py-3.5 text-[11px] font-vayu uppercase tracking-[0.18em] text-brand-navy transition-all duration-300 hover:bg-[#d4b06a] hover:shadow-[0_0_36px_rgba(197,160,89,0.4)]"
              >
                Book a Guidance Call
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-[11px] font-vayu uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors duration-300"
              >
                Our approach
                <span className="h-px w-6 bg-white/30 group-hover:w-9 group-hover:bg-brand-gold transition-all duration-300" />
              </Link>
            </div>

            {/* Trust row */}
            <div
              className="hero-trust mt-10 flex items-center gap-5 text-[9px] font-vayu uppercase tracking-[0.18em] text-white/30"
              style={{ opacity: 0 }}
            >
              <span>DLD Registered</span>
              <span className="w-1 h-1 rounded-full bg-brand-gold/40" />
              <span>40+ Freezones</span>
              <span className="w-1 h-1 rounded-full bg-brand-gold/40" />
              <span>Bank Partnerships</span>
            </div>
          </div>

          {/* RIGHT — Interactive journey builder */}
          <div
            className="hero-builder flex justify-center lg:justify-end"
            style={{ opacity: 0 }}
          >
            <HeroJourneyBuilder />
          </div>
        </div>
      </div>

      {/* ── MARKET PULSE TICKER ─────────────────────────────────────────── */}
      <div className="relative z-10">
        <HeroMarketTicker />
      </div>
    </section>
  );
};

export default HeroSection;
