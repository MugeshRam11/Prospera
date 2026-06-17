import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BuildingIcon, HouseIcon, CardIcon } from "./AnimatedServiceIcons";
import PillArrowButton from "@/components/ui/pill-arrow-button";

const SERVICES = [
  {
    icon: BuildingIcon,
    label: "Corporate Advisory",
    description: "Mainland, Freezone & Offshore company formation with integrated banking and visa strategy.",
    cta: "Explore Strategy",
    path: "/corporate",
  },
  {
    icon: HouseIcon,
    label: "Real Estate Advisory",
    description: "Data-driven property investment — off-plan, ready assets, and yield optimization.",
    cta: "View Intelligence",
    path: "/real-estate",
  },
  {
    icon: CardIcon,
    label: "Mortgage & Financing",
    description: "Home loans, investor financing, and refinancing with direct bank partnerships.",
    cta: "Analyze Options",
    path: "/mortgage",
  },
] as const;

const HeroServiceBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const active = SERVICES[activeIndex];
  const Icon = active.icon;

  return (
    <div className="w-full bg-white border border-foreground/[0.08] rounded-2xl sm:rounded-full shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] px-4 py-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

      {/* Icon + text */}
      <div className="flex items-center gap-3 flex-1 min-w-0 w-full sm:w-auto">
        <div className="w-11 h-11 rounded-xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`icon-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.35 }}
              className="flex items-center justify-center"
            >
              <Icon size={20} className="text-primary" />
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${activeIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="min-w-0"
          >
            <div className="text-[9px] font-vayu uppercase tracking-[0.16em] text-primary/70 mb-0.5">
              {active.label}
            </div>
            <p className="text-xs sm:text-sm font-sans text-foreground/55 truncate">
              {active.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
        {SERVICES.map((service, i) => (
          <button
            key={service.path}
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${service.label}`}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-4 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-foreground/15"
            }`}
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`cta-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 sm:flex-none"
          >
            <PillArrowButton to={active.path} className="flex-1 sm:flex-none">
              {active.cta}
            </PillArrowButton>
          </motion.div>
        </AnimatePresence>

        <PillArrowButton
          to="/contact"
          className="hidden sm:flex"
          circleClassName="bg-primary/70"
        >
          Book Consultation
        </PillArrowButton>
      </div>
    </div>
  );
};

export default HeroServiceBar;
