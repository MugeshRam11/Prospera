import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import VideoSlot from "@/components/shared/VideoSlot";
import Section, { BAND } from "./Section";
import mainlandFreezoneVideo from "@/assets/eco system clips/01 — Mainland & Freezone setup.mp4";
import corporateBankVideo from "@/assets/eco system clips/02 — Corporate bank accounts.mp4";
import goldenVisaVideo from "@/assets/eco system clips/03 golden visa.mp4";
import offPlanVideo from "@/assets/eco system clips/04 off plan investment.mp4";
import propertyManagementVideo from "@/assets/eco system clips/08 property management.mp4";

/* ──────────────────────────────────────────────────────────────────────────
   ECOSYSTEM GRID — Prypco "Our ecosystem" pattern.
   Auto-looping marquee rail — triples the tile set so the loop is seamless.
   Pauses on hover. ADD VIDEOS: import files and set `video` per tile.
   ────────────────────────────────────────────────────────────────────────── */

interface Tile {
  title: string;
  cta: string;
  path: string;
  video: string; // ← drop video imports here manually
}

const TILES: Tile[] = [
  { title: "Mainland & Freezone setup",  cta: "Start your company",    path: "/corporate",                        video: mainlandFreezoneVideo },
  { title: "Corporate bank accounts",    cta: "Open with confidence",   path: "/corporate/bank-account",           video: corporateBankVideo },
  { title: "UAE Golden Visa",            cta: "Check eligibility",      path: "/corporate/golden-visa",            video: goldenVisaVideo },
  { title: "Off-plan investment",        cta: "View opportunities",     path: "/real-estate/off-plan",             video: offPlanVideo },
  { title: "Ready property",            cta: "Acquire assets",          path: "/real-estate/ready-property",       video: "" },
  { title: "Mortgage & pre-approval",   cta: "Compare rates",           path: "/mortgage",                        video: "" },
  { title: "Refinancing",               cta: "Restructure capital",     path: "/mortgage/refinancing",            video: "" },
  { title: "Property management",       cta: "Protect your yield",      path: "/real-estate/property-management", video: propertyManagementVideo },
];

/* Triple the array so the CSS loop is seamless */
const LOOPED = [...TILES, ...TILES, ...TILES];

const TileCard = ({ tile, i }: { tile: Tile; i: number }) => (
  <Link
    to={tile.path}
    className="group relative flex-shrink-0 w-[240px] md:w-[265px] rounded-3xl overflow-hidden surface-translucent transition-all duration-400 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_24px_60px_-18px_rgba(10,17,40,0.28)]"
  >
    {/* Video slot */}
    <div className="aspect-[4/3] overflow-hidden">
      <div className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
        <VideoSlot src={tile.video} />
      </div>
    </div>

    {/* Label */}
    <div className="px-5 py-5">
      <div className="text-[15px] font-display text-foreground/90 leading-snug min-h-[42px]">
        {tile.title}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[10px] font-vayu uppercase tracking-[0.14em] text-primary">
          {tile.cta}
        </span>
        <span className="w-7 h-7 rounded-full border border-foreground/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
          <ArrowUpRight
            size={12}
            className="text-foreground/35 transition-all duration-300 group-hover:text-primary-foreground"
          />
        </span>
      </div>
    </div>

    {/* Index badge — always shows original tile number */}
    <span className="absolute top-4 left-4 text-[9px] font-vayu tracking-[0.18em] text-foreground/30 bg-background/80 backdrop-blur-sm rounded-full px-2.5 py-1">
      0{(i % TILES.length) + 1}
    </span>
  </Link>
);

const EcosystemGridSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <Section
      theme="light"
      bandColor={BAND.IVORY}
      ref={ref}
      className="py-24 md:py-32 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 md:px-12 lg:px-24 mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <span className="text-[10px] font-vayu uppercase tracking-[0.22em] text-primary block mb-4">
            Our Ecosystem
          </span>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.05] max-w-xl">
            Everything UAE investment,{" "}
            <span className="text-primary">on one platform.</span>
          </h2>
        </div>
        <p className="text-[13px] font-sans text-foreground/50 leading-relaxed max-w-xs">
          Eight services. One coordinated mandate. Hover to pause, drag to
          explore.
        </p>
      </motion.div>

      {/* Auto-loop rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="flex gap-4 lg:gap-5 w-max animate-marquee-slow hover:[animation-play-state:paused] pl-6 md:pl-12 lg:pl-24 pb-6"
        >
          {LOOPED.map((tile, i) => (
            <TileCard key={`${tile.path}-${i}`} tile={tile} i={i} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default EcosystemGridSection;
