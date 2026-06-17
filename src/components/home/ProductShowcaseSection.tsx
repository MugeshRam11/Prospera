import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Section, { BAND } from "./Section";

// ─── Data ────────────────────────────────────────────────────────────────────

const products = [
  {
    index: "01",
    label: "Corporate Advisory",
    title: "Structure.\nEstablish.\nScale.",
    persona: "For the Global Founder",
    personaDetail: "Setting up in the UAE freezone or mainland ecosystem",
    highlight: "40+ Freezone jurisdictions",
    proofs: [
      { initials: "AR", name: "Arjun R.", note: "DMCC license — 18 days" },
      { initials: "SK", name: "Sara K.", note: "Mainland setup + 3 visas" },
    ],
    path: "/corporate",
    cta: "Explore Advisory",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    panX: "-8px",
    panY: "-6px",
  },
  {
    index: "02",
    label: "Real Estate Advisory",
    title: "Invest with\nIntelligence.",
    persona: "For the Discerning Investor",
    personaDetail: "Acquiring and managing premium UAE property",
    highlight: "8.4% avg. Dubai rental yield",
    proofs: [
      { initials: "NA", name: "Noor A.", note: "Marina apt — 7.1% yield" },
      { initials: "JM", name: "James M.", note: "Off-plan, Business Bay" },
    ],
    path: "/real-estate",
    cta: "View Properties",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    panX: "6px",
    panY: "-4px",
  },
  {
    index: "03",
    label: "Mortgage & Financing",
    title: "Capitalize\nwith Precision.",
    persona: "For the Strategic Buyer",
    personaDetail: "Accessing optimal UAE financing structures",
    highlight: "Best-in-market bank rates",
    proofs: [
      { initials: "FH", name: "Farid H.", note: "Pre-approved in 48 hrs" },
      { initials: "LP", name: "Lena P.", note: "Refinanced — saved AED 96K" },
    ],
    path: "/mortgage",
    cta: "Analyze Options",
    imageUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
    panX: "-5px",
    panY: "5px",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const headingVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const labelVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const subVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.08 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 72, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 75,
      damping: 18,
      // opacity handled separately via a tween override
    },
  },
};

// ─── Micro-proof chip (Prypco-style human story) ─────────────────────────────

const ProofChip = ({
  proof,
}: {
  proof: { initials: string; name: string; note: string };
}) => (
  <div className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full bg-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)]">
    <span className="w-6 h-6 rounded-full bg-brand-gold/90 text-brand-navy text-[8px] font-vayu font-bold flex items-center justify-center flex-shrink-0">
      {proof.initials}
    </span>
    <span className="leading-tight">
      <span className="block text-[9px] font-sans font-semibold text-brand-navy">
        {proof.name}
      </span>
      <span className="block text-[8px] font-sans text-brand-navy/55 whitespace-nowrap">
        {proof.note}
      </span>
    </span>
  </div>
);

// ─── Product Card ─────────────────────────────────────────────────────────────

const ProductCard = ({ product }: { product: (typeof products)[0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      // Override opacity transition to be a simple ease, not spring
      style={{ willChange: "transform, opacity" }}
    >
      <Link
        to={product.path}
        className="group relative block overflow-hidden rounded-2xl aspect-[3/4] bg-[#0c0c0c]"
        style={{
          border: hovered
            ? "1px solid rgba(var(--primary-rgb, 100,80,255), 0.38)"
            : "1px solid rgba(255,255,255,0.07)",
          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          boxShadow: hovered
            ? "0 28px 72px -20px rgba(var(--primary-rgb, 100,80,255), 0.28)"
            : "0 0 0 0 transparent",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── Background image with pan ── */}
        <div
          className="absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={product.imageUrl}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
            style={{
              transform: hovered
                ? `scale(1.07) translate(${product.panX}, ${product.panY})`
                : "scale(1.0) translate(0, 0)",
              transition: "transform 0.75s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          />
        </div>

        {/* ── Gradient overlays ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 to-transparent" />

        {/* ── Top-left: highlight pill ── */}
        <div className="absolute top-5 left-5 z-20">
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-vayu uppercase tracking-[0.14em]"
            style={{
              background: hovered
                ? "rgba(var(--primary-rgb, 100,80,255), 0.12)"
                : "rgba(255,255,255,0.07)",
              border: hovered
                ? "1px solid rgba(var(--primary-rgb, 100,80,255), 0.45)"
                : "1px solid rgba(255,255,255,0.12)",
              color: hovered
                ? "hsl(var(--primary))"
                : "rgba(255,255,255,0.55)",
              backdropFilter: "blur(8px)",
              transition: "all 0.35s ease",
            }}
          >
            {product.highlight}
          </span>
        </div>

        {/* ── Top-right: arrow button ── */}
        <div className="absolute top-5 right-5 z-20">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: hovered ? "hsl(var(--primary))" : "rgba(255,255,255,0.08)",
              border: hovered
                ? "1px solid hsl(var(--primary))"
                : "1px solid rgba(255,255,255,0.10)",
              transform: hovered ? "scale(1.12)" : "scale(1)",
              transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              backdropFilter: "blur(8px)",
            }}
          >
            <ArrowUpRight
              size={13}
              style={{
                color: hovered ? "hsl(var(--primary-foreground))" : "rgba(255,255,255,0.35)",
                transform: hovered ? "translate(1px, -1px)" : "translate(0,0)",
                transition: "all 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* ── Floating micro-proof chips (Prypco-style) ── */}
        <div className="absolute top-[34%] left-5 z-20 proof-drift-a">
          <ProofChip proof={product.proofs[0]} />
        </div>
        <div className="absolute top-[48%] right-5 z-20 proof-drift-b">
          <ProofChip proof={product.proofs[1]} />
        </div>

        {/* ── Index number (decorative) ── */}
        <div
          className="absolute bottom-[calc(100%-72%)] right-6 z-20 font-vayu"
          style={{
            fontSize: "clamp(56px, 8vw, 80px)",
            fontWeight: 700,
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            userSelect: "none",
            transition: "color 0.4s ease",
            ...(hovered ? { color: "rgba(var(--primary-rgb, 100,80,255), 0.08)" } : {}),
          }}
          aria-hidden="true"
        >
          {product.index}
        </div>

        {/* ── Bottom content ── */}
        <div className="absolute inset-x-0 bottom-0 z-20">
          {/* Main text block */}
          <div
            className="px-7 pb-7"
            style={{
              transform: hovered ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {/* Service label */}
            <span
              className="text-[9px] font-vayu uppercase tracking-[0.18em] mb-2 block"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              {product.label}
            </span>

            {/* Title */}
            <h3
              className="font-vayu tracking-tight mb-5"
              style={{
                fontSize: "clamp(22px, 2.2vw, 30px)",
                lineHeight: 1.08,
                fontWeight: 300,
                whiteSpace: "pre-line",
                color: hovered ? "hsl(var(--primary))" : "rgba(255,255,255,0.95)",
                transition: "color 0.35s ease",
              }}
            >
              {product.title}
            </h3>

            {/* CTA */}
            <span
              className="inline-flex items-center text-[12px] font-vayu"
              style={{
                color: "hsl(var(--primary))",
                gap: hovered ? "14px" : "8px",
                transition: "gap 0.3s ease",
              }}
            >
              {product.cta}
              <span
                style={{
                  display: "inline-block",
                  transform: hovered ? "translateX(4px)" : "translateX(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ─── Divider line ─────────────────────────────────────────────────────────────

const AnimatedDivider = ({ isInView }: { isInView: boolean }) => (
  <div className="overflow-hidden mb-10 md:mb-14">
    <div
      style={{
        height: "1px",
        background: "rgba(255,255,255,0.08)",
        transform: isInView ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.05s",
      }}
    />
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

const ProductShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12% 0px" });

  return (
    <Section
      theme="light"
      bandColor={BAND.IVORY}
      ref={sectionRef}
      className="section-padding"
    >
      {/* ── Section header ── */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mb-10 md:mb-16"
      >
        <motion.span
          variants={labelVariants}
          className="text-[10px] font-vayu uppercase tracking-[0.18em] block mb-4"
          style={{ color: "hsl(var(--primary))" }}
        >
          Our Verticals
        </motion.span>

        <motion.h2
          variants={headingVariants}
          className="font-vayu tracking-tight mb-5"
          style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            lineHeight: 1.05,
            fontWeight: 900,
          }}
        >
          One Mandate.{" "}
          <span className="text-primary" style={{ fontWeight: 700 }}>
            Three Pillars.
          </span>
        </motion.h2>

        <motion.p
          variants={subVariants}
          className="max-w-xl font-vayu leading-relaxed"
          style={{
            fontSize: "clamp(13px, 1.1vw, 15px)",
            color: "hsl(var(--foreground) / 0.55)",
          }}
        >
          Every UAE investment journey spans corporate, real estate, and financing.
          We coordinate all three under a single strategic mandate.
        </motion.p>
      </motion.div>

      {/* ── Horizontal rule ── */}
      <AnimatedDivider isInView={isInView} />

      {/* ── Card grid ── */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5"
      >
        {products.map((product) => (
          <ProductCard key={product.label} product={product} />
        ))}
      </motion.div>

      {/* Disclosure */}
      <p
        className="mt-4 text-[9px] font-sans"
        style={{ color: "hsl(var(--foreground) / 0.3)" }}
      >
        *Client outcomes shown are illustrative examples.
      </p>
    </Section>
  );
};

export default ProductShowcaseSection;
