import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Globe,
  Landmark,
  Shield,
  TrendingUp,
  Users,
  FileText,
  CreditCard,
  Scale,
  Briefcase,
  Award,
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SectionReveal from "@/components/shared/SectionReveal";
import ConsultationCTA from "@/components/home/ConsultationCTA";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.22, 1, 0.36, 1] as const;

const headingWords = ["Building Enduring", "Business Structures", "in the UAE."];

const pillars = [
  { title: "Strategy", sub: "Objective-led" },
  { title: "Regulation", sub: "Fully compliant" },
  { title: "Execution", sub: "End-to-end" },
];

const mdMetrics = [
  { metric: "20+", label: "Years in banking & real estate" },
  { metric: "500+", label: "Advisory engagements" },
  { metric: "40+", label: "Nationalities served" },
  { metric: "3", label: "UAE jurisdictions covered" },
];

const operatingPoints = [
  "Jurisdictional complexity requires expert navigation",
  "Banking relationships depend on entity structure quality",
  "Tax framework demands proactive compliance positioning",
  "Formation errors create constraints that compound over time",
];

const whyCards = [
  {
    icon: Award,
    title: "Senior-Led Advisory",
    badge: "No Delegation",
    desc: "Every engagement is guided by senior judgment — not volume-driven processing or delegated execution. You work directly with experienced principals, not junior staff.",
    detail: "Direct MD involvement in all mandates",
  },
  {
    icon: Shield,
    title: "Banking & Compliance-Ready Structures",
    badge: "Beyond Licensing",
    desc: "Entities are designed with regulatory interpretation, KYC readiness, and tax continuity in mind — not merely license issuance. Structures that pass banking scrutiny from day one.",
    detail: "KYC-ready from formation",
  },
  {
    icon: TrendingUp,
    title: "Focused on Continuity",
    badge: "Long-Term Alignment",
    desc: "Prospera structures businesses to remain resilient as regulations, banking standards, and ownership needs evolve. We plan for tomorrow, not just today.",
    detail: "Evolves with regulatory changes",
  },
];

const jurisdictions = [
  {
    icon: Building2,
    label: "Mainland Companies",
    title: "Full UAE market access. No restrictions.",
    points: [
      "100% foreign ownership (select sectors)",
      "Government contract eligibility",
      "Unrestricted trade across all emirates",
      "DED licensing",
    ],
    path: "/corporate/mainland-setup",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Globe,
    label: "Free Zone Companies",
    title: "Zero tax. Full ownership. Rapid setup.",
    points: [
      "40+ freezone jurisdictions",
      "0% corporate tax (eligible)",
      "7–15 day average setup",
      "100% repatriation of profits",
    ],
    path: "/corporate/freezone-setup",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Landmark,
    label: "Offshore & Holding Structures",
    title: "International holding. UAE intelligence.",
    points: [
      "RAK ICC and ADGM offshore",
      "Asset protection vehicles",
      "Estate and succession planning",
      "UAE banking access",
    ],
    path: "/corporate/offshore-formation",
    imageUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop",
  },
];

const processSteps = [
  {
    step: "01",
    icon: Users,
    title: "Strategic Consultation",
    desc: "Understanding your objectives, operating model, and risk profile. We map your ideal structure before any formation begins.",
    duration: "Week 1",
  },
  {
    step: "02",
    icon: FileText,
    title: "Structuring & Licensing",
    desc: "Designing jurisdiction, activity scope, and governance alignment. Every decision is calibrated to your commercial objectives.",
    duration: "Week 2–3",
  },
  {
    step: "03",
    icon: CreditCard,
    title: "Banking Integration",
    desc: "Preparing the entity for bank engagement — including profiling, KYC documentation, and direct coordination with UAE financial institutions.",
    duration: "Week 3–5",
  },
  {
    step: "04",
    icon: Shield,
    title: "Ongoing Advisory Support",
    desc: "Post-formation regulatory monitoring, KYC maintenance, VAT/corporate tax advisory, and residency solutions where appropriate.",
    duration: "Ongoing",
  },
];

const profiles = [
  { icon: Briefcase, title: "Professional & Advisory Firms", desc: "Consulting, legal, and advisory practices establishing UAE credibility and regional presence." },
  { icon: Globe, title: "Trading & Distribution Businesses", desc: "Cross-border trading companies requiring optimal mainland or freezone structures for operations." },
  { icon: Users, title: "Service Companies", desc: "Service-sector entities requiring compliant, bankable structures for UAE market access." },
  { icon: Scale, title: "Technology Ventures", desc: "Tech founders and product companies seeking zero-tax, 100% ownership freezone structures." },
  { icon: Building2, title: "Holding & Investment Structures", desc: "Family offices and investment principals structuring UAE-based holding and asset vehicles." },
  { icon: Award, title: "High-Net-Worth Individuals", desc: "HNWIs seeking Golden Visa pathways, personal banking, and UAE residency establishment." },
];

const standards = [
  { title: "Senior-level advisory involvement", desc: "Direct access to experienced principals. No junior delegation." },
  { title: "Thoughtful, compliant structuring", desc: "Every entity designed to pass banking and regulatory scrutiny." },
  { title: "Transparent engagement frameworks", desc: "Clear scope, clear fees, clear timelines — from day one." },
  { title: "Long-term partnership orientation", desc: "We remain engaged as your business evolves and regulations change." },
];

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-hero-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".philosophy-img", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".philosophy-img",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".process-step",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: ".process-grid", start: "top 80%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      {/* SECTION 1 — HERO */}
      <section className="about-hero section-curve relative h-screen min-h-[680px] w-full overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop"
            alt="Dubai skyline"
            className="about-hero-img absolute inset-0 h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-end px-6 md:px-12 lg:px-24 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-10 bg-primary/70" />
              <span className="text-label text-primary/90">
                Corporate Advisory & Structuring · Dubai, UAE
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight mb-8">
              {headingWords.map((word, i) => (
                <span key={word} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE }}
                  >
                    {i === 2 ? <span className="italic text-primary">{word}</span> : word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              className="max-w-2xl text-base md:text-lg text-secondary-foreground/75 font-sans leading-relaxed mb-10"
            >
              We operate at the intersection of strategy, regulation, and execution —
              supporting founders, business owners, and investment principals in
              establishing and managing their UAE presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-primary text-primary-foreground text-sm font-sans uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 group"
              >
                Begin Your Mandate
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/corporate"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-secondary-foreground/25 text-secondary-foreground text-sm font-sans uppercase tracking-widest hover:border-primary/60 hover:text-primary transition-colors duration-300"
              >
                Our Services
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3 text-secondary-foreground/60">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-12 w-px bg-secondary-foreground/30 relative overflow-hidden">
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-primary"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHO WE ARE */}
      <section className="section-padding bg-background">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <SectionReveal>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-foreground/10">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
                  alt="Prospera team"
                  className="h-full w-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="absolute -bottom-6 -left-6 md:-left-10 rounded-2xl bg-background border border-foreground/10 shadow-xl p-5 w-44"
              >
                <div className="font-display text-4xl text-primary leading-none">20+</div>
                <div className="text-[11px] font-sans uppercase tracking-[0.14em] text-muted-foreground mt-2">
                  Years combined expertise
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
                className="absolute -top-6 -right-6 md:-right-10 rounded-2xl bg-secondary text-secondary-foreground border border-primary/30 p-5 w-44"
              >
                <div className="font-display text-3xl text-primary">Dubai</div>
                <div className="text-[11px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/60 mt-2">
                  UAE · Est. 2022
                </div>
              </motion.div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <span className="text-label text-primary mb-4 block">About Prospera</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
              Strategy, Regulation, <span className="italic text-primary">and Execution.</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              Prospera is a UAE-based corporate advisory firm supporting founders,
              business owners, and investment principals in establishing and managing
              their presence in the United Arab Emirates.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Our mandate extends beyond incorporation. We focus on creating business
              foundations that support governance, credibility, and continuity — ensuring
              that each structure we advise is formed with clarity, compliance, and
              long-term viability in mind.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                  className="card-prypco p-4 text-center"
                >
                  <div className="mx-auto mb-3 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  <div className="font-display text-lg">{p.title}</div>
                  <div className="text-[10px] font-sans uppercase tracking-[0.14em] text-muted-foreground mt-1">
                    {p.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION 3 — MANAGING DIRECTOR */}
      <section className="section-curve section-padding bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">Our Managing Director</span>
            <blockquote className="font-display text-3xl md:text-4xl tracking-tight leading-[1.2] mb-8">
              "Structure precedes scale. <span className="italic text-primary">Every great business</span> in
              the UAE begins with the right foundation."
            </blockquote>
            <p className="text-secondary-foreground/65 font-sans leading-relaxed mb-10">
              With over 20 years of experience across banking and real estate, Ragunath's
              disciplined approach to structuring and investment alignment defines
              Prospera's advisory philosophy.
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-secondary-foreground/15">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-primary/30 bg-primary/10 flex items-center justify-center">
                <Users size={26} className="text-primary/70" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display text-xl">Ragunath Bose</div>
                <div className="text-[11px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/55 mt-1">
                  Managing Director · Leadership & Advisory Oversight
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-px bg-secondary-foreground/10 rounded-2xl overflow-hidden border border-secondary-foreground/10">
              {mdMetrics.map((m) => (
                <div key={m.label} className="bg-secondary p-8">
                  <div className="font-display text-5xl text-primary leading-none mb-3">{m.metric}</div>
                  <div className="text-xs font-sans uppercase tracking-[0.14em] text-secondary-foreground/55">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION 4 — OPERATING CONTEXT */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionReveal>
            <span className="text-label text-primary mb-4 block">The Operating Context</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
              The UAE rewards <span className="italic text-primary">informed judgment.</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              The United Arab Emirates remains one of the world's most compelling
              jurisdictions for international business. However, successful establishment
              requires more than speed — it requires informed judgment.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Jurisdictional variation, regulatory interpretation, banking scrutiny, and
              evolving tax frameworks demand a measured and deliberate approach. Missteps
              at the formation stage often result in avoidable constraints later — in
              banking access, compliance, and scalability.
            </p>

            <ul className="space-y-3">
              {operatingPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm font-sans text-foreground/80">{pt}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-foreground/10">
                <img
                  src="https://images.unsplash.com/photo-1542315192-1f61a1792f33?q=80&w=1200&auto=format&fit=crop"
                  alt="UAE business district"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="absolute -bottom-8 left-4 right-4 md:left-8 md:right-8 rounded-2xl bg-background border border-primary/20 shadow-xl p-6"
              >
                <p className="font-display text-xl md:text-2xl tracking-tight">
                  "Structure precedes scale."
                </p>
                <p className="text-xs font-sans uppercase tracking-[0.14em] text-muted-foreground mt-3">
                  Prospera's core philosophy — Ragunath Bose, Managing Director
                </p>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION 5 — OUR PHILOSOPHY */}
      <section className="section-curve relative bg-background">
        <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2400&auto=format&fit=crop"
            alt="Handshake — partnership"
            className="philosophy-img absolute inset-0 h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-8 left-6 md:left-12 lg:left-24">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-primary/30 text-label text-primary">
              Our Philosophy
            </span>
          </div>
        </div>

        <div className="section-padding pt-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionReveal>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6">
                Structure <span className="italic text-primary">Precedes Scale.</span>
              </h2>
              <p className="text-lg font-sans text-muted-foreground italic">
                Not an administrative task. A strategic exercise.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <p className="text-muted-foreground font-sans leading-relaxed mb-5">
                Businesses formed without clarity frequently encounter friction — in
                banking relationships, regulatory alignment, and long-term governance.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed mb-5">
                Prospera approaches business establishment as a strategic exercise, not an
                administrative task. Each engagement begins with a thorough understanding
                of the client's objectives, operating model, and risk profile.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                The goal is not just a license. It is a structure that performs — in
                banking, in compliance, and in growth.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHY CHOOSE PROSPERA */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary mb-4 block">Why Clients Choose Prospera</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] mb-16 max-w-3xl">
              Senior-led. Compliance-ready. <span className="italic text-primary">Built for continuity.</span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {whyCards.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="card-prypco p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                    <item.icon size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="badge-prypco mb-4 self-start">{item.badge}</span>
                  <h3 className="font-display text-2xl tracking-tight mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-foreground/10 text-xs font-sans uppercase tracking-[0.14em] text-primary/80">
                    <span>{item.detail}</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — JURISDICTION COVERAGE */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary mb-4 block">Advisory Scope</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
              All principal UAE <span className="italic text-primary">jurisdictions.</span>
            </h2>
            <p className="text-muted-foreground font-sans max-w-2xl mb-14">
              Each structure is carefully calibrated to support operational needs, banking
              engagement, and future scalability.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {jurisdictions.map((card, i) => (
              <SectionReveal key={card.label} delay={i * 0.1}>
                <Link
                  to={card.path}
                  className="group relative block overflow-hidden rounded-2xl border border-foreground/10 bg-secondary text-secondary-foreground aspect-[3/4] hover:border-primary/40 hover:shadow-[0_24px_64px_-20px_hsl(var(--primary)/0.3)] transition-all duration-500"
                >
                  <img
                    src={card.imageUrl}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <card.icon size={16} className="text-primary" strokeWidth={1.5} />
                      <span className="text-[10px] font-sans uppercase tracking-[0.14em] text-primary/90">
                        {card.label}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl tracking-tight mb-4 leading-snug">
                      {card.title}
                    </h3>
                    <ul className="space-y-1.5 mb-5">
                      {card.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs font-sans text-white/75">
                          <CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.14em] text-primary group-hover:gap-3 transition-all">
                      Learn more <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — ADVISORY PROCESS */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">Our Advisory Process</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
              Measured. Transparent. <span className="italic text-primary">Predictable.</span>
            </h2>
            <p className="text-secondary-foreground/65 font-sans max-w-2xl mb-16">
              A structured engagement model designed around your objectives — not
              administrative convenience.
            </p>
          </SectionReveal>

          <div className="process-grid space-y-px bg-secondary-foreground/10 rounded-2xl overflow-hidden border border-secondary-foreground/10">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="process-step bg-secondary p-6 md:p-8 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start md:items-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <step.icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[10px] font-sans uppercase tracking-[0.14em] text-primary/80">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl tracking-tight mb-2">{step.title}</h3>
                  <p className="text-sm text-secondary-foreground/60 font-sans leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
                <span className="badge-prypco shrink-0">{step.duration}</span>
              </div>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <p className="mt-12 text-center font-display italic text-xl md:text-2xl text-secondary-foreground/80">
              "A measured, transparent, and predictable engagement model."
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION 9 — CLIENT PROFILES */}
      <section className="section-curve section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary mb-4 block">Client Profiles</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] mb-14">
              Who we <span className="italic text-primary">work with.</span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.07}>
                <div className="card-prypco p-7 h-full flex gap-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <p.icon size={18} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-tight mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <p className="mt-12 text-center font-display italic text-lg md:text-xl text-muted-foreground">
              Engagements are guided by discretion, judgment, and long-term alignment.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION 10 — THE PROSPERA STANDARD */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <SectionReveal>
            <span className="text-label text-primary mb-4 block">The Prospera Standard</span>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1.1] mb-6">
              Clients engage us for <span className="italic text-primary">four things.</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Our role is to reduce complexity, mitigate risk, and support enduring
              business presence in the UAE.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-primary text-primary-foreground text-sm font-sans uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 group"
            >
              Start Your Mandate
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="space-y-4">
              {standards.map((s, i) => (
                <div key={s.title} className="card-prypco p-6 flex gap-5">
                  <div className="font-display text-3xl text-primary/80 leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-tight mb-1.5">{s.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <ConsultationCTA />
    </PageLayout>
  );
};

export default About;
