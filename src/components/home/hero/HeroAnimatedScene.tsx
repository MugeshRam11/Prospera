import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroPerson from "@/assets/hero-person.png";
import prosperaIcon from "@/assets/prospera logo icon png.png";
import {
  BuildingIcon,
  HouseIcon,
  CardIcon,
  ChartIcon,
  CheckIcon,
  iconLoopCSS,
} from "./AnimatedServiceIcons";

const floatCSS = `
@keyframes float-a {
  0%,100% { transform: translateY(0px) rotate(-1deg); }
  50%      { transform: translateY(-10px) rotate(1deg); }
}
@keyframes float-b {
  0%,100% { transform: translateY(0px) rotate(1deg); }
  50%      { transform: translateY(-14px) rotate(-1deg); }
}
@keyframes float-c {
  0%,100% { transform: translateY(-5px) rotate(0.5deg); }
  50%      { transform: translateY(7px) rotate(-0.5deg); }
}
@keyframes float-d {
  0%,100% { transform: translateY(3px); }
  50%      { transform: translateY(-7px); }
}
` + iconLoopCSS;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const popVariants = {
  hidden: { scale: 0.5, opacity: 0, y: 24 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 22 },
  },
};

const personVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 160, damping: 20, delay: 0.1 },
  },
};

/* ── Compact service card ── */
const ServiceCard = ({
  icon: Icon,
  label,
  desc,
  stat,
}: {
  icon: React.ElementType;
  label: string;
  desc: string;
  stat: string;
}) => (
  <motion.div variants={popVariants}>
    <div className="flex items-center gap-2.5 px-3.5 py-3 bg-white border border-foreground/[0.10] rounded-2xl shadow-[0_8px_28px_-8px_rgba(0,0,0,0.16)] w-[200px]">
      <div className="w-8 h-8 rounded-xl border border-primary/20 bg-primary/[0.07] flex items-center justify-center flex-shrink-0">
        <Icon size={14} className="text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[8px] font-vayu uppercase tracking-[0.15em] text-primary/70 mb-0.5 truncate">{label}</div>
        <div className="text-[11px] font-display text-primary leading-none">{stat}</div>
      </div>
      <ArrowRight size={10} className="text-foreground/25 flex-shrink-0" />
    </div>
  </motion.div>
);

const HeroAnimatedScene = () => {
  useEffect(() => {
    if (document.getElementById("hero-scene-css")) return;
    const style = document.createElement("style");
    style.id = "hero-scene-css";
    style.textContent = floatCSS;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full h-[580px] select-none"
      aria-hidden="true"
    >

      {/* ── PERSON IMAGE — centered, pulled up ── */}
      <motion.div
        variants={personVariants}
        className="absolute top-[calc(3%_-_15px)] left-[calc(50%_-_160px)] -translate-x-1/2 h-[84%] pointer-events-none z-10"
      >
        <img
          src={heroPerson}
          alt=""
          className="h-full w-auto object-contain object-bottom"
          loading="eager"
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      {/* ══════════════════════════════
          LEFT COLUMN — orbiting the man
      ══════════════════════════════ */}

      {/* One Roof pill — upper left */}
      <div
        className="absolute top-[10px] left-[4%] z-20"
        style={{ animation: "float-a 5s ease-in-out infinite 0.6s" }}
      >
        <motion.div variants={popVariants}>
          <div className="flex items-center gap-2 px-3.5 py-2 bg-white border border-primary/25 rounded-full whitespace-nowrap">
            <div className="w-3.5 h-3.5 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
              <img src={prosperaIcon} alt="" className="w-full h-full object-contain" />
            </div>
            <span className="text-[9px] font-vayu uppercase tracking-[0.16em] text-primary/80">
              One Roof · All Three Verticals
            </span>
          </div>
        </motion.div>
      </div>

      {/* Corporate Setup — left, upper */}
      <div
        className="absolute top-[68px] left-[4%] z-20"
        style={{ animation: "float-a 5.2s ease-in-out infinite" }}
      >
        <ServiceCard
          icon={BuildingIcon}
          label="Corporate Setup"
          desc=""
          stat="40+ Freezones"
        />
      </div>

      {/* Nationality badge — left, middle */}
      <div
        className="absolute top-[44%] left-[2%] z-20"
        style={{ animation: "float-c 4.8s ease-in-out infinite 0.9s" }}
      >
        <motion.div variants={popVariants}>
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-foreground/[0.09] rounded-xl shadow-sm">
            <div className="flex -space-x-1">
              {[
                { code: "ae", label: "UAE" },
                { code: "in", label: "India" },
                { code: "us", label: "US" },
                { code: "gb", label: "UK" },
              ].map(({ code, label }) => (
                <div key={code} className="w-5 h-5 rounded-full border-2 border-background overflow-hidden">
                  <img
                    src={`https://flagcdn.com/w40/${code}.png`}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-[9px] font-vayu text-foreground/55 whitespace-nowrap">40+ nationalities</span>
          </div>
        </motion.div>
      </div>

      {/* Real Estate — left, lower */}
      <div
        className="absolute bottom-[88px] left-[4%] z-20"
        style={{ animation: "float-b 6s ease-in-out infinite 0.4s" }}
      >
        <ServiceCard
          icon={HouseIcon}
          label="Real Estate"
          desc=""
          stat="8.4% yield"
        />
      </div>

      {/* ══════════════════════════════
          RIGHT COLUMN — orbiting the man
      ══════════════════════════════ */}

      {/* Mortgage — right, upper */}
      <div
        className="absolute top-[74px] right-[4%] z-20"
        style={{ animation: "float-b 5.5s ease-in-out infinite 1s" }}
      >
        <ServiceCard
          icon={CardIcon}
          label="Mortgage"
          desc=""
          stat="From 2.99%"
        />
      </div>

      {/* AED stat badge — right, middle */}
      <div
        className="absolute top-[40%] right-[6%] z-20"
        style={{ animation: "float-a 5.2s ease-in-out infinite 1.5s" }}
      >
        <motion.div variants={popVariants}>
          <div className="flex flex-col items-center px-4 py-3 bg-secondary/90 backdrop-blur-md border border-primary/15 rounded-2xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)]">
            <ChartIcon size={16} className="text-primary mb-1.5" />
            <span className="text-lg font-display text-primary leading-none">AED 2Bn+</span>
            <span className="text-[7px] font-vayu text-secondary-foreground/40 uppercase tracking-[0.12em] mt-1">
              Advised
            </span>
          </div>
        </motion.div>
      </div>

      {/* Response time — right, lower */}
      <div
        className="absolute bottom-[84px] right-[4%] z-20"
        style={{ animation: "float-d 4.5s ease-in-out infinite 0.3s" }}
      >
        <motion.div variants={popVariants}>
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white border border-foreground/[0.10] rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)]">
            <CheckIcon size={16} className="text-primary flex-shrink-0" />
            <div>
              <div className="text-[7px] font-vayu uppercase tracking-[0.15em] text-foreground/40">Response time</div>
              <div className="text-[11px] font-sans font-medium text-foreground/80">Within 24 hours</div>
            </div>
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default HeroAnimatedScene;
