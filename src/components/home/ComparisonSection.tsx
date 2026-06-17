import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Building2,
  Home,
  CreditCard,
  Award,
  Landmark,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Section, { BAND } from "./Section";
import prosperaMark from "@/assets/prospera logo icon png.png";
import businessSetupImg from "@/assets/with prospera comparison/corporate-advisory_1.jpg";
import realEstateImg from "@/assets/with prospera comparison/Real estate broker.jpg";
import mortgageImg from "@/assets/with prospera comparison/Mortgage broker.jpg";
import visaImg from "@/assets/with prospera comparison/Real estate broker (2).jpg";
import bankImg from "@/assets/with prospera comparison/Bank relationship.jpg";

/* ──────────────────────────────────────────────────────────────────────────
   WITH PROSPERA / WITHOUT PROSPERA — interactive comparison.
   Five vendor cards flip from fragmented pain points to coordinated wins,
   and animated beams connect them to a single Prospera mark.
   ────────────────────────────────────────────────────────────────────────── */

const VENDORS = [
  {
    icon: Building2,
    title: "Business setup agency",
    pain: "Re-explain everything",
    win: "Unified strategy",
    image: businessSetupImg,
  },
  {
    icon: Home,
    title: "Real estate broker",
    pain: "No shared timeline",
    win: "Synchronized timeline",
    image: realEstateImg,
  },
  {
    icon: CreditCard,
    title: "Mortgage broker",
    pain: "Conflicting advice",
    win: "Aligned financing",
    image: mortgageImg,
  },
  {
    icon: Award,
    title: "Visa consultant",
    pain: "Duplicate KYC, again",
    win: "Single KYC profile",
    image: visaImg,
  },
  {
    icon: Landmark,
    title: "Bank relationship",
    pain: "Stalled — wrong structure",
    win: "Pre-approved structure",
    image: bankImg,
  },
];

const ComparisonSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15% 0px" });
  const [withProspera, setWithProspera] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const cardRefs = [card0Ref, card1Ref, card2Ref, card3Ref, card4Ref];

  return (
    <Section
      theme="light"
      bandColor={BAND.IVORY}
      ref={sectionRef}
      className="section-padding overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="text-[10px] font-vayu uppercase tracking-[0.22em] text-primary block mb-4">
          The Prospera Difference
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
          One mandate,{" "}
          <span className="text-primary">or five agencies?</span>
        </h2>
        <p className="mt-5 text-sm md:text-[15px] font-sans text-foreground/55 leading-relaxed">
          Most UAE journeys are run by disconnected vendors. Toggle to see what
          changes when one team carries the whole mandate.
        </p>
      </motion.div>

      {/* Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex justify-center"
      >
        <div className="relative inline-flex rounded-full border border-foreground/10 bg-foreground/[0.03] p-1">
          {([false, true] as const).map((isWith) => (
            <button
              key={String(isWith)}
              onClick={() => setWithProspera(isWith)}
              aria-pressed={withProspera === isWith}
              className={`relative z-10 rounded-full px-6 py-2.5 text-[11px] font-vayu uppercase tracking-[0.16em] transition-colors duration-300 ${
                withProspera === isWith
                  ? isWith
                    ? "text-primary-foreground"
                    : "text-background"
                  : "text-foreground/45 hover:text-foreground/70"
              }`}
            >
              {withProspera === isWith && (
                <motion.span
                  layoutId="comparison-thumb"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className={`absolute inset-0 rounded-full ${
                    isWith ? "bg-primary" : "bg-foreground/80"
                  }`}
                />
              )}
              <span className="relative">
                {isWith ? "With Prospera" : "Without Prospera"}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Stage */}
      <div ref={stageRef} className="relative mt-12 md:mt-16 max-w-5xl mx-auto">
        {/* Vendor cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {VENDORS.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                ref={cardRefs[i]}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: withProspera ? -8 : 0,
                        borderColor: withProspera
                          ? "hsl(var(--primary) / 0.35)"
                          : "hsl(var(--foreground) / 0.10)",
                        boxShadow: withProspera
                          ? "0 16px 40px -16px hsl(var(--primary) / 0.28)"
                          : "0 1px 3px 0 rgba(10,17,40,0.06)",
                      }
                    : {}
                }
                transition={{
                  delay: isInView ? i * 0.07 : 0,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative overflow-hidden rounded-2xl border bg-card px-5 py-6 min-h-[180px] ${
                  i === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <AnimatePresence>
                  {withProspera && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 z-0"
                    >
                      <img
                        src={v.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <span
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-xl border mb-4 transition-colors duration-300 ${
                    withProspera
                      ? "bg-white/10 border-white/25 text-white"
                      : "bg-foreground/[0.05] border-foreground/10 text-foreground/40"
                  }`}
                >
                  <Icon size={15} />
                </span>
                <div
                  className={`relative z-10 text-[13px] font-display leading-snug transition-colors duration-300 ${
                    withProspera ? "text-white" : "text-foreground/80"
                  }`}
                >
                  {v.title}
                </div>
                <AnimatePresence mode="wait">
                  {!withProspera ? (
                    <motion.div
                      key="pain"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 mt-1.5 flex items-start gap-1.5 text-[10px] font-sans text-destructive/70"
                    >
                      <AlertTriangle size={10} className="mt-0.5 shrink-0" />
                      {v.pain}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="win"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 mt-1.5 flex items-start gap-1.5 text-[10px] font-sans font-medium text-brand-gold"
                    >
                      <CheckCircle2 size={10} className="mt-0.5 shrink-0" />
                      {v.win}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Prospera mark + animated beams */}
        <div className="mt-14 md:mt-20 h-28 flex items-center justify-center">
          <AnimatePresence>
            {withProspera && (
              <motion.div
                ref={logoRef}
                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
                className="relative z-10 flex items-center justify-center w-28 h-28 rounded-full bg-card border border-primary/20 shadow-[0_16px_40px_-16px_rgba(10,17,40,0.18)]"
              >
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
                <img
                  src={prosperaMark}
                  alt="Prospera"
                  className="relative w-16 h-16 object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {withProspera &&
            cardRefs.map((ref, i) => (
              <AnimatedBeam
                key={`beam-${i}`}
                containerRef={stageRef}
                fromRef={ref}
                toRef={logoRef}
                curvature={60}
                pathColor="rgba(10,17,40,0.08)"
                pathWidth={1.5}
                pathOpacity={1}
                gradientStartColor="hsl(40, 40%, 55%)"
                gradientStopColor="hsl(45, 85%, 72%)"
                delay={i * 0.15}
              />
            ))}
        </div>

        {/* Caption + CTA */}
        <div className="mt-2 flex flex-col items-center text-center">
          <motion.p
            key={withProspera ? "with-caption" : "without-caption"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-[12px] font-sans text-foreground/40 italic"
          >
            {withProspera
              ? "1 partner · 1 timeline · We carry the coordination risk."
              : "5 vendors · 5 timelines · you carry the coordination risk."}
          </motion.p>

          <AnimatePresence>
            {withProspera && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-[10px] font-vayu uppercase tracking-[0.16em] text-brand-navy transition-all duration-300 hover:bg-[#d4b06a]"
                >
                  Book a Guidance Call
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Nudge */}
      {!withProspera && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setWithProspera(true)}
            className="group inline-flex items-center gap-2 text-[11px] font-vayu uppercase tracking-[0.16em] text-primary hover:text-primary/80 transition-colors"
          >
            See it with Prospera
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      )}
    </Section>
  );
};

export default ComparisonSection;
