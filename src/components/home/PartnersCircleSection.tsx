import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Handshake, LineChart, ShieldCheck } from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
   PARTNERS CIRCLE — Prypco One analog, positioned the private-banking way
   (Raghu's "Strategic Partners Circle" brief, 20/03):
   not "refer a friend, get $100" — an exclusive alliance for wealth
   managers, lawyers, brokers and family offices.
   Links to /contact until the Referral.ae integration ships.
   ────────────────────────────────────────────────────────────────────────── */

const PILLARS = [
  {
    icon: Handshake,
    title: "Strategic Alliance Network",
    text: "Wealth managers, lawyers, brokers, and family offices introduce clients to one coordinated UAE gateway.",
  },
  {
    icon: LineChart,
    title: "Performance Participation",
    text: "Transparent success fees on completed mandates — property, structuring, financing, and residency.",
  },
  {
    icon: ShieldCheck,
    title: "Partner Dashboard",
    text: "Professional referral tracking with full visibility from introduction to completion.",
  },
];

const PartnersCircleSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-brand-navy text-brand-ivory"
    >
      {/* Ambient gold glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          top: "-30%",
          right: "-10%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197,160,89,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-brand-gold/60" />
              <span className="text-[10px] font-vayu uppercase tracking-[0.26em] text-brand-gold">
                The Partners Circle
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl leading-[1.06] tracking-tight">
              Bring your clients.
              <br />
              <span className="italic text-brand-gold">
                Share in the value created.
              </span>
            </h2>

            <p className="mt-6 text-sm md:text-[15px] font-sans text-white/55 leading-relaxed max-w-[48ch]">
              We empower advisors worldwide to offer their clients seamless UAE
              entry — while participating professionally in every completed
              mandate.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full border border-brand-gold/50 px-7 py-3.5 text-[11px] font-vayu uppercase tracking-[0.18em] text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy"
            >
              Apply to the Circle
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* Right — pillars */}
          <div className="flex flex-col gap-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 32 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-start gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-5 transition-colors duration-300 hover:border-brand-gold/40"
                >
                  <span className="mt-0.5 w-10 h-10 rounded-xl border border-brand-gold/25 bg-brand-gold/[0.08] flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-brand-gold" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-display tracking-wide text-white/90">
                      {p.title}
                    </span>
                    <span className="block mt-1 text-[12px] font-sans text-white/45 leading-relaxed">
                      {p.text}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCircleSection;
