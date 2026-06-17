import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  Home,
  Award,
  CreditCard,
  Check,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
   HERO JOURNEY BUILDER
   The "Prypco-style" interactive element: the visitor selects what they
   need and watches the selections assemble into ONE integrated plan —
   the "one roof" message demonstrated, not just stated.
   ────────────────────────────────────────────────────────────────────────── */

type ServiceKey = "company" | "visa" | "mortgage" | "property";

interface Service {
  key: ServiceKey;
  icon: React.ElementType;
  chip: string;
  step: string;
  detail: string;
  weeksLabel: string;
  weeks: [number, number];
  order: number;
}

const SERVICES: Service[] = [
  {
    key: "company",
    icon: Building2,
    chip: "Set up a company",
    step: "Corporate Structuring",
    detail: "Mainland · Freezone · Offshore",
    weeksLabel: "2–4 wks",
    weeks: [2, 4],
    order: 1,
  },
  {
    key: "visa",
    icon: Award,
    chip: "Golden Visa",
    step: "Residency & Golden Visa",
    detail: "10-year investor residency",
    weeksLabel: "3–6 wks",
    weeks: [3, 6],
    order: 2,
  },
  {
    key: "mortgage",
    icon: CreditCard,
    chip: "Finance it",
    step: "Mortgage & Capital",
    detail: "Pre-approval · direct bank partnerships",
    weeksLabel: "2–3 wks",
    weeks: [2, 3],
    order: 3,
  },
  {
    key: "property",
    icon: Home,
    chip: "Acquire property",
    step: "Property Acquisition",
    detail: "Off-plan & ready assets",
    weeksLabel: "4–8 wks",
    weeks: [4, 8],
    order: 4,
  },
];

const HeroJourneyBuilder = () => {
  const [selected, setSelected] = useState<Set<ServiceKey>>(
    () => new Set<ServiceKey>(["company", "visa"]),
  );

  const toggle = (key: ServiceKey) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const path = useMemo(
    () =>
      SERVICES.filter((s) => selected.has(s.key)).sort(
        (a, b) => a.order - b.order,
      ),
    [selected],
  );

  /* Coordinated in parallel → total ≈ the longest single track */
  const timeline = useMemo(() => {
    if (path.length === 0) return null;
    const min = Math.max(...path.map((s) => s.weeks[0]));
    const max = Math.max(...path.map((s) => s.weeks[1]));
    return `${min}–${max} weeks`;
  }, [path]);

  return (
    <div className="w-full max-w-[480px] rounded-3xl border border-brand-gold/30 bg-black/80 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="text-[10px] font-vayu uppercase tracking-[0.22em] text-brand-gold/90">
          Build your UAE journey
        </div>
        <p className="mt-1.5 text-[13px] font-sans text-white/45 leading-relaxed">
          Select what you need — watch it become one plan.
        </p>
      </div>

      {/* Selector chips */}
      <div className="px-6 flex flex-wrap gap-2">
        {SERVICES.map((s) => {
          const active = selected.has(s.key);
          const Icon = s.icon;
          return (
            <button
              key={s.key}
              onClick={() => toggle(s.key)}
              aria-pressed={active}
              className={`group inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[10px] font-vayu uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 ${
                active
                  ? "border-brand-gold bg-brand-gold text-brand-navy"
                  : "border-white/15 text-white/55 hover:border-white/35 hover:text-white/80"
              }`}
            >
              {active ? (
                <Check size={11} strokeWidth={3} />
              ) : (
                <Icon size={11} />
              )}
              {s.chip}
            </button>
          );
        })}
      </div>

      {/* Integrated path */}
      <div className="px-6 pt-5 pb-2 min-h-[180px]">
        <AnimatePresence mode="popLayout" initial={false}>
          {path.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[13px] font-sans text-white/35 italic pt-6"
            >
              Select at least one objective above to see your integrated path.
            </motion.p>
          ) : (
            path.map((s, i) => (
              <motion.div
                key={s.key}
                layout
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 14 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="relative flex items-start gap-4 pb-5 last:pb-1"
              >
                {/* Node + connector */}
                <div className="flex flex-col items-center self-stretch">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-brand-gold ring-4 ring-brand-gold/15 flex-shrink-0" />
                  {i < path.length - 1 && (
                    <motion.span
                      layout
                      className="w-px flex-1 mt-1.5 bg-gradient-to-b from-brand-gold/50 to-brand-gold/10"
                    />
                  )}
                </div>
                {/* Step copy */}
                <div className="flex-1 min-w-0 -mt-0.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[14px] font-display text-white/90 tracking-wide">
                      {i + 1}. {s.step}
                    </span>
                    <span className="text-[10px] font-vayu uppercase tracking-[0.12em] text-brand-gold/80 whitespace-nowrap">
                      {s.weeksLabel}
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-white/40 mt-0.5">
                    {s.detail}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Footer — timeline + CTA */}
      <div className="px-6 py-5 border-t border-white/[0.07] flex items-center justify-between gap-4">
        <div className="min-w-0">
          <AnimatePresence mode="wait" initial={false}>
            {timeline ? (
              <motion.div
                key={timeline}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-[15px] font-display text-brand-gold leading-none">
                  ≈ {timeline}
                </div>
                <div className="text-[9px] font-vayu uppercase tracking-[0.14em] text-white/35 mt-1.5">
                  Run in parallel · one team · indicative
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[11px] font-sans text-white/30"
              >
                Your timeline appears here
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-[10px] font-vayu uppercase tracking-[0.16em] text-brand-navy whitespace-nowrap transition-all duration-300 hover:bg-[#d4b06a] hover:shadow-[0_0_28px_rgba(197,160,89,0.35)]"
        >
          Get my integrated plan
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroJourneyBuilder;
