import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight, ArrowUpRight, Building2, Globe, Landmark,
  CreditCard, Award, ChevronRight, CheckCircle2, Shield,
  TrendingUp, Clock, Users
} from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    label: "Mainland Setup",
    title: "Full UAE market access. No restrictions.",
    desc: "100% foreign ownership in select sectors, DED licensing, and direct government contract eligibility. The gold standard for serious UAE operators.",
    stat: "7–15 days",
    statLabel: "Average setup",
    path: "/corporate/mainland-setup",
    icon: Building2,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    panDir: "group-hover:translate-x-[-6px] group-hover:translate-y-[-4px]",
  },
  {
    label: "Freezone Setup",
    title: "Zero tax. Full ownership. Rapid setup.",
    desc: "40+ freezone jurisdictions matched to your industry — from DMCC for commodities to DIFC for financial services to IFZA for general trading.",
    stat: "0%",
    statLabel: "Corporate tax",
    path: "/corporate/freezone-setup",
    icon: Globe,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    panDir: "group-hover:translate-x-[5px] group-hover:translate-y-[-3px]",
  },
  {
    label: "Offshore Formation",
    title: "International holding. UAE intelligence.",
    desc: "RAK ICC and ADGM offshore structures for asset protection, estate planning, and international holding — with UAE banking access.",
    stat: "RAK ICC",
    statLabel: "Fastest structure",
    path: "/corporate/offshore-formation",
    icon: Landmark,
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop",
    panDir: "group-hover:translate-x-[-4px] group-hover:translate-y-[4px]",
  },
  {
    label: "Bank Account Opening",
    title: "UAE banking without the complexity.",
    desc: "Direct relationships with Emirates NBD, FAB, Mashreq, and 12+ banks. Faster approvals, better terms, dedicated RM access.",
    stat: "12+",
    statLabel: "Bank partners",
    path: "/corporate/bank-account",
    icon: CreditCard,
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    panDir: "group-hover:translate-x-[4px] group-hover:translate-y-[-5px]",
  },
  {
    label: "Golden Visa",
    title: "10-year residency. On your terms.",
    desc: "UAE Golden Visa for investors, property owners, entrepreneurs, and professionals. Full family inclusion, no sponsor required.",
    stat: "10yr",
    statLabel: "Renewable residency",
    path: "/corporate/golden-visa",
    icon: Award,
    imageUrl: "https://images.unsplash.com/photo-1582407947092-5e71e4a38c87?q=80&w=800&auto=format&fit=crop",
    panDir: "group-hover:translate-x-[-5px] group-hover:translate-y-[-6px]",
  },
];

const CorporateAdvisory = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 22,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.fromTo(".corp-service-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".corp-services-grid", start: "top 80%" } }
      );
      gsap.fromTo(".stat-line",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 1.2, ease: "power2.out", stagger: 0.1,
          scrollTrigger: { trigger: ".stats-row", start: "top 80%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      <section ref={heroRef} className="section-curve relative min-h-[90vh] flex items-end overflow-hidden bg-secondary">
        <img ref={imgRef} src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover scale-110 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/85 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />

        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="absolute left-8 md:left-16 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent origin-top" />

        <div className="relative z-10 section-padding pt-40 pb-24 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary/70" />
              <span className="text-[10px] font-sans uppercase tracking-[0.24em] text-primary/80">Corporate Advisory & Structuring</span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }} className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display tracking-tight leading-[0.93] text-secondary-foreground">
                Structure your UAE<br />
                presence with{" "}<span className="italic text-primary">precision.</span>
              </motion.h1>
            </div>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-xl mb-10">
              From mainland to freezone, offshore to banking — we navigate the full UAE corporate formation spectrum so you launch with the optimal structure for your objectives.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group">
                Request Corporate Advisory <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <span className="text-xs font-sans text-secondary-foreground/35 uppercase tracking-[0.14em]">Response within 24 hours</span>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/35">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-primary/70">Corporate Advisory</span>
        </div>
      </section>

      <section className="stats-row section-padding py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-foreground/[0.08]">
          {[
            { value: 40, suffix: "+", label: "Freezone jurisdictions" },
            { value: 500, suffix: "+", label: "Advisory mandates" },
            { value: 20, suffix: "+", label: "Years combined expertise" },
            { value: 12, suffix: "+", label: "Direct bank partnerships" },
          ].map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center md:px-8">
                <div className="stat-line h-px bg-primary/25 mb-6 mx-auto w-12" />
                <div className="text-3xl md:text-4xl font-display tracking-tight text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-[0.14em]">{stat.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-16">
            Five disciplines.<br /><span className="italic">One advisory mandate.</span>
          </h2>
        </SectionReveal>

        <div className="corp-services-grid grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((service) => (
            <Link key={service.label} to={service.path} className="corp-service-card group relative block overflow-hidden rounded-2xl border border-foreground/[0.10] aspect-[3/4] bg-secondary transition-all duration-500 hover:border-primary/40 hover:shadow-[0_24px_64px_-20px_hsl(var(--primary)/0.25)]">
              <img src={service.imageUrl} alt="" className={`absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-out ${service.panDir}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/98 via-secondary/70 to-secondary/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-5 right-5 text-right">
                <div className="text-xl font-display text-primary">{service.stat}</div>
                <div className="text-[9px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/50">{service.statLabel}</div>
              </div>
              <div className="absolute top-5 left-5">
                <div className="w-8 h-8 rounded-full border border-foreground/15 bg-secondary/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                  <ArrowUpRight size={13} className="text-foreground/40 group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <service.icon size={13} className="text-primary" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-primary/80">{service.label}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-xs font-sans text-white/55 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-400 max-h-0 group-hover:max-h-20 overflow-hidden">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-sans text-primary transition-all duration-300 group-hover:gap-3">Explore <ArrowRight size={11} /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.slice(3).map((service) => (
            <Link key={service.label} to={service.path} className="corp-service-card group relative block overflow-hidden rounded-2xl border border-foreground/[0.10] aspect-[16/7] bg-secondary transition-all duration-500 hover:border-primary/40 hover:shadow-[0_24px_64px_-20px_hsl(var(--primary)/0.25)]">
              <img src={service.imageUrl} alt="" className={`absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-out ${service.panDir}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/75 to-secondary/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-5 right-5">
                <div className="w-8 h-8 rounded-full border border-foreground/15 bg-secondary/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                  <ArrowUpRight size={13} className="text-foreground/40 group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-8 md:p-10 max-w-lg">
                <div className="flex items-center gap-2 mb-3">
                  <service.icon size={13} className="text-primary" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-primary/80">{service.label}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-sm font-sans text-white/50 leading-relaxed mb-5 max-w-sm">{service.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-sans text-primary group-hover:gap-3 transition-all duration-300">Explore <ArrowRight size={13} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary section-curve">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <span className="text-label text-primary/80 mb-5 block">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-secondary-foreground mb-6">
                Structure precedes<br /><span className="italic text-primary">scale. Always.</span>
              </h2>
              <p className="text-secondary-foreground/55 font-sans leading-relaxed mb-6">
                Most advisors treat company formation as an administrative task. We treat it as a strategic exercise. Every entity we structure is designed with three objectives in mind: banking acceptance, regulatory compliance, and long-term scalability.
              </p>
              <p className="text-secondary-foreground/55 font-sans leading-relaxed mb-10">
                Formation errors compound. A structure that fails banking KYC at month 3, or triggers a regulatory flag at year 2, costs far more to fix than it costs to get right from day one.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-primary/25 text-primary rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                Begin Your Mandate <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </SectionReveal>

            <SectionReveal delay={0.12}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Shield, title: "Banking-Ready from Day One", desc: "Every structure is profiled for KYC acceptance before formation begins." },
                  { icon: CheckCircle2, title: "Senior-Led, Not Delegated", desc: "Your mandate is managed by experienced principals — not junior processing staff." },
                  { icon: TrendingUp, title: "Built for Long-Term Resilience", desc: "Structures that evolve with UAE regulatory changes, not against them." },
                  { icon: Clock, title: "Predictable Timelines", desc: "Clear scope, clear fees, clear milestones from day one." },
                ].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} className="flex items-start gap-4 p-5 border border-primary/10 rounded-xl hover:border-primary/25 hover:bg-primary/[0.03] transition-all duration-300 group">
                    <div className="w-9 h-9 rounded-xl border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <item.icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-sans font-semibold text-secondary-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-xs font-sans text-secondary-foreground/45 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Advisory Process</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-16">
            Four steps.<br /><span className="italic">One seamless mandate.</span>
          </h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-foreground/[0.06] rounded-2xl overflow-hidden">
          {[
            { num: "01", title: "Strategic Consultation", desc: "Objectives, operating model, and risk profile mapped before any formation begins.", icon: Users },
            { num: "02", title: "Structuring & Licensing", desc: "Jurisdiction, activity scope, and governance alignment designed for your commercial goals.", icon: Building2 },
            { num: "03", title: "Banking Integration", desc: "Entity profiled and introduced to bank partners for account opening.", icon: CreditCard },
            { num: "04", title: "Ongoing Support", desc: "Post-formation compliance, tax advisory, and regulatory monitoring.", icon: Shield },
          ].map((step, i) => (
            <SectionReveal key={step.num} delay={i * 0.1}>
              <div className="bg-background p-8 h-full group hover:bg-primary/[0.03] transition-colors duration-300">
                <div className="text-[10px] font-sans uppercase tracking-[0.2em] text-primary/50 mb-4">{step.num}</div>
                <step.icon size={20} className="text-primary mb-5" />
                <h3 className="text-lg font-display tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default CorporateAdvisory;
