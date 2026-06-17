import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, TrendingUp, CheckCircle2, Calculator } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const corridors = [
  { name: "Downtown Dubai",    yield: "5.5–6.5%", growth: "High",   type: "Prestige" },
  { name: "Dubai Marina",      yield: "6.0–7.0%", growth: "Medium", type: "Income"   },
  { name: "Jumeirah Beach Residence", yield: "6.5–7.5%", growth: "Medium", type: "Lifestyle" },
  { name: "Business Bay",      yield: "6.5–8.0%", growth: "High",   type: "Growth"   },
  { name: "Jumeirah Village Circle", yield: "7.0–8.5%", growth: "High", type: "Value" },
  { name: "Dubai Hills Estate", yield: "5.8–7.0%", growth: "High",  type: "Premium"  },
];

const PropertyInvestment = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  /* DLD Calculator */
  const [price, setPrice] = useState("");
  const propPrice = Number(price) || 0;
  const dldFee = propPrice * 0.04;
  const trusteeFee = propPrice > 500000 ? 4200 : 2100;
  const regFee = propPrice > 500000 ? 580 : 290;
  const totalDLD = dldFee + trusteeFee + regFee;

  /* Yield Calculator */
  const [propVal, setPropVal] = useState("");
  const [annualRent, setAnnualRent] = useState("");
  const [serviceCharge, setServiceCharge] = useState("");
  const pv = Number(propVal) || 0;
  const ar = Number(annualRent) || 0;
  const sc = Number(serviceCharge) || 0;
  const grossYield = pv > 0 ? (ar / pv) * 100 : 0;
  const netYield = pv > 0 ? ((ar - sc) / pv) * 100 : 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 20, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.fromTo(".corridor-row",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: ".corridor-table", start: "top 80%" } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>

      {/* HERO */}
      <section ref={heroRef} className="section-curve relative min-h-[85vh] flex items-end overflow-hidden bg-secondary">
        <img ref={imgRef} src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover scale-110 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/88 to-secondary/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />

        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/30">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link><ChevronRight size={10} />
          <Link to="/real-estate" className="hover:text-primary transition-colors">Real Estate</Link><ChevronRight size={10} />
          <span className="text-primary/70">Property Investment</span>
        </div>

        <div className="relative z-10 section-padding pt-44 pb-24 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3 mb-8">
                <TrendingUp size={14} className="text-primary/70" />
                <span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/80">Property Investment Advisory</span>
              </motion.div>
              <div className="overflow-hidden mb-6">
                <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.93] text-secondary-foreground">
                  Data-driven.<br />Dubai-<span className="italic text-primary">focused.</span>
                </motion.h1>
              </div>
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-lg mb-10">
                We identify high-yield investment opportunities before the market prices them in — using transaction data, developer relationships, and 15+ years of Dubai market experience.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}>
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group">
                  Request Investment Advisory <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right — 3 quick stats */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }} className="hidden lg:grid grid-cols-1 gap-3">
              {[
                { stat: "8.4%", label: "Average gross rental yield" },
                { stat: "AED 400Bn+", label: "Dubai transaction volume 2024" },
                { stat: "42%", label: "Foreign buyer share" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border border-primary/15 bg-secondary/40 backdrop-blur-sm rounded-xl px-6 py-4">
                  <span className="text-2xl font-display text-primary">{item.stat}</span>
                  <span className="text-xs font-sans text-secondary-foreground/45 text-right max-w-[160px] leading-snug">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionReveal>
            <span className="text-label text-primary mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-6">
              Institutional methodology.<br /><span className="italic">Individual mandate.</span>
            </h2>
            <p className="text-base text-muted-foreground font-sans leading-relaxed mb-8">
              We screen 200+ active listings using yield-first criteria, developer track records, location fundamentals, and exit liquidity profiles. You receive a shortlist of 3–5 curated opportunities with full data packs — not a broker's inventory sheet.
            </p>
            <div className="space-y-3">
              {[
                "Objective mapping — yield vs appreciation vs liquidity",
                "Market screening across 200+ active listings",
                "3–5 curated opportunities with full analysis packs",
                "Price negotiation and acquisition execution",
                "DLD registration and title deed transfer",
                "Post-acquisition rental and management setup",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-sans text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <div className="sticky top-28 space-y-4">
              {[
                { imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop", caption: "Residential & mixed-use acquisitions" },
                { imageUrl: "https://images.unsplash.com/photo-1582407947092-5e71e4a38c87?q=80&w=800&auto=format&fit=crop", caption: "Off-plan and resale market access" },
              ].map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl aspect-video group">
                  <img src={img.imageUrl} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-sans text-foreground/60 bg-background/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-foreground/[0.08]">{img.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* KEY CORRIDORS */}
      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Market Corridors</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            Dubai's prime<br /><span className="italic">investment corridors.</span>
          </h2>
        </SectionReveal>

        <div className="corridor-table border border-foreground/[0.10] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-4 bg-secondary text-secondary-foreground px-6 py-4">
            {["Location", "Gross Yield", "Capital Growth", "Profile"].map((h) => (
              <div key={h} className="text-[10px] font-sans uppercase tracking-[0.16em] text-secondary-foreground/45">{h}</div>
            ))}
          </div>
          {corridors.map((c, i) => (
            <div key={c.name} className={`corridor-row grid grid-cols-4 px-6 py-5 border-t border-foreground/[0.06] items-center hover:bg-primary/[0.03] transition-colors duration-200 ${i % 2 === 0 ? "bg-background" : "bg-foreground/[0.01]"}`}>
              <span className="font-display text-base text-foreground tracking-tight">{c.name}</span>
              <span className="text-sm font-display text-primary font-semibold">{c.yield}</span>
              <span className={`text-xs font-sans uppercase tracking-[0.12em] px-2.5 py-1 rounded-full w-fit ${c.growth === "High" ? "text-primary bg-primary/10 border border-primary/20" : "text-muted-foreground bg-foreground/[0.04] border border-foreground/[0.08]"}`}>{c.growth}</span>
              <span className="text-xs font-sans text-muted-foreground">{c.type}</span>
            </div>
          ))}
        </div>
        <p className="text-[11px] font-sans text-muted-foreground/45 mt-3 italic">* Yield ranges are indicative and based on market data. Actual returns vary by asset, condition, and management.</p>
      </section>

      {/* DUAL CALCULATORS */}
      <section className="section-padding bg-secondary section-curve">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">Investment Tools</span>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-secondary-foreground mb-14">
              Calculate your<br /><span className="italic text-primary">investment position.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* DLD COST CALCULATOR */}
            <SectionReveal>
              <div className="border border-primary/15 rounded-2xl p-8 bg-secondary/50 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl border border-primary/25 flex items-center justify-center bg-primary/[0.06]">
                    <Calculator size={16} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-label text-primary/80 block leading-tight">DLD Cost Calculator</span>
                    <span className="text-[10px] font-sans text-secondary-foreground/35">Dubai Land Department fees</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/45 mb-2 block">Property Price (AED)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="e.g. 2,000,000"
                    className="w-full bg-transparent border border-primary/15 rounded-xl px-4 py-3 text-sm font-sans text-secondary-foreground placeholder:text-secondary-foreground/25 focus:border-primary/45 focus:outline-none transition-colors duration-200"
                  />
                </div>

                {propPrice > 0 ? (
                  <div className="flex-1 border-t border-primary/10 pt-6 space-y-3">
                    {[
                      { label: "DLD Transfer Fee (4%)", value: dldFee },
                      { label: "Trustee Office Fee", value: trusteeFee },
                      { label: "Registration Fee", value: regFee },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center">
                        <span className="text-xs font-sans text-secondary-foreground/45">{row.label}</span>
                        <span className="text-sm font-sans text-secondary-foreground/70 tabular-nums">AED {row.value.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-3 border-t border-primary/10">
                      <span className="text-sm font-sans font-medium text-primary">Total Acquisition Cost</span>
                      <span className="text-2xl font-display text-primary tabular-nums">AED {totalDLD.toLocaleString()}</span>
                    </div>
                    <Link to="/contact" className="inline-flex items-center gap-2 mt-4 text-xs font-sans text-primary uppercase tracking-[0.14em] hover:gap-3 transition-all duration-300 group">
                      Get full investment analysis <ArrowRight size={11} />
                    </Link>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-xs font-sans text-secondary-foreground/30 text-center">Enter a property price to see your full cost breakdown</p>
                  </div>
                )}
              </div>
            </SectionReveal>

            {/* RENTAL YIELD CALCULATOR */}
            <SectionReveal delay={0.1}>
              <div className="border border-primary/15 rounded-2xl p-8 bg-secondary/50 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl border border-primary/25 flex items-center justify-center bg-primary/[0.06]">
                    <TrendingUp size={16} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-label text-primary/80 block leading-tight">Yield Calculator</span>
                    <span className="text-[10px] font-sans text-secondary-foreground/35">Gross & net rental yield</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mb-6">
                  {[
                    { label: "Property Value (AED)", value: propVal, setter: setPropVal, placeholder: "e.g. 1,500,000" },
                    { label: "Annual Rental Income (AED)", value: annualRent, setter: setAnnualRent, placeholder: "e.g. 100,000" },
                    { label: "Annual Service Charge (AED)", value: serviceCharge, setter: setServiceCharge, placeholder: "e.g. 12,000 (optional)" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/45 mb-2 block">{field.label}</label>
                      <input
                        type="number"
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent border border-primary/15 rounded-xl px-4 py-3 text-sm font-sans text-secondary-foreground placeholder:text-secondary-foreground/25 focus:border-primary/45 focus:outline-none transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                {pv > 0 && ar > 0 ? (
                  <div className="flex-1 border-t border-primary/10 pt-6">
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div className="border border-primary/10 rounded-xl p-4 text-center">
                        <div className="text-[10px] font-sans uppercase tracking-[0.12em] text-secondary-foreground/40 mb-1">Gross Yield</div>
                        <div className="text-2xl font-display text-primary tabular-nums">{grossYield.toFixed(2)}%</div>
                      </div>
                      <div className="border border-primary/20 rounded-xl p-4 text-center bg-primary/[0.04]">
                        <div className="text-[10px] font-sans uppercase tracking-[0.12em] text-secondary-foreground/40 mb-1">Net Yield</div>
                        <div className="text-2xl font-display text-primary tabular-nums">{netYield.toFixed(2)}%</div>
                      </div>
                    </div>
                    <p className="text-[11px] font-sans text-secondary-foreground/30 leading-relaxed mb-3">Net yield reflects service charge deduction only. Full net yield analysis requires management fee, vacancy, and maintenance modelling.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-sans text-primary uppercase tracking-[0.14em] hover:gap-3 transition-all duration-300">
                      Unlock full net yield breakdown <ArrowRight size={11} />
                    </Link>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-xs font-sans text-secondary-foreground/30 text-center">Enter property value and annual rent to calculate your yield</p>
                  </div>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default PropertyInvestment;
