import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, CreditCard } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import PageLayout from "@/components/layout/PageLayout";

gsap.registerPlugin(ScrollTrigger);

const banks = ["Emirates NBD", "First Abu Dhabi Bank", "Mashreq Bank", "ADCB", "RAKBANK", "Standard Chartered UAE", "HSBC UAE", "Citibank UAE", "Commercial Bank of Dubai", "United Arab Bank", "Dubai Islamic Bank", "Sharjah Islamic Bank"];

const BankAccount = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, { yPercent: 18, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true } });
      gsap.fromTo(".bank-badge", { opacity: 0, y: 12 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger: ".banks-grid", start: "top 80%" } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageLayout>
      <section ref={heroRef} className="section-curve relative min-h-[80vh] flex items-end overflow-hidden bg-secondary">
        <img ref={imgRef} src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover scale-110 opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/98 via-secondary/88 to-secondary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-transparent" />
        <div className="absolute top-28 left-6 md:left-16 z-20 flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/30">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link><ChevronRight size={10} />
          <Link to="/corporate" className="hover:text-primary transition-colors">Corporate</Link><ChevronRight size={10} />
          <span className="text-primary/70">Bank Account Opening</span>
        </div>
        <div className="relative z-10 section-padding pt-40 pb-24 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-3 mb-8">
              <CreditCard size={14} className="text-primary/70" /><span className="text-[10px] font-sans uppercase tracking-[0.22em] text-primary/80">UAE Bank Account Opening</span>
            </motion.div>
            <div className="overflow-hidden mb-6">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[0.93] text-secondary-foreground">
                UAE banking.<br /><span className="italic text-primary">Without the complexity.</span>
              </motion.h1>
            </div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="text-base md:text-lg text-secondary-foreground/50 font-sans leading-relaxed max-w-xl mb-10">
              We navigate the UAE's compliance-heavy banking environment through direct relationships with 12+ banks — delivering faster approvals and better account terms for our clients.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 }}>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-sm font-sans font-medium uppercase tracking-wider hover:bg-primary/90 active:scale-95 transition-all duration-200 group">
                Request Banking Advisory <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Banking Partners</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-4">12+ direct bank<br /><span className="italic">relationships.</span></h2>
          <p className="text-base text-muted-foreground font-sans mb-14 max-w-xl">Our relationships deliver preferential rates, faster processing, and dedicated RM access unavailable through standard channels.</p>
        </SectionReveal>
        <div className="banks-grid flex flex-wrap gap-3">
          {banks.map((bank) => (
            <div key={bank} className="bank-badge border border-foreground/[0.10] rounded-xl px-5 py-3 text-sm font-sans text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/[0.03] transition-all duration-300 cursor-default">{bank}</div>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0 bg-secondary section-curve">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="text-label text-primary/80 mb-4 block">Our Advantage</span>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-secondary-foreground mb-14">
              What our partnerships<br /><span className="italic text-primary">deliver.</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Faster Processing", stat: "2–3 weeks", desc: "Applications through our relationships are pre-screened, reducing approval time from the standard 6–8 weeks to 2–3 weeks." },
              { title: "Preferential Rates", stat: "0.1–0.3%", desc: "Our volume relationships unlock rate discounts not available through direct application — on average 0.1–0.3% below standard rates." },
              { title: "Dedicated RM Access", stat: "Named RM", desc: "Your file is managed by a named relationship manager with accountability — not a rotating call centre or generic processing queue." },
              { title: "Higher Approval Rates", stat: "Pre-screened", desc: "Our document preparation and pre-screening significantly reduces rejection rates for clients with complex ownership structures or international backgrounds." },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="border border-primary/10 rounded-2xl p-8 hover:border-primary/25 hover:bg-primary/[0.03] transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-5">
                    <h3 className="text-xl font-display tracking-tight text-secondary-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <span className="text-xs font-sans text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full flex-shrink-0 ml-4">{item.stat}</span>
                  </div>
                  <p className="text-sm font-sans text-secondary-foreground/45 leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight mb-14">
            From selection to<br /><span className="italic">activation.</span>
          </h2>
        </SectionReveal>
        <div className="space-y-4">
          {[
            { num: "01", title: "Bank Selection", desc: "We match your business model, nationality, and activity profile to the optimal bank." },
            { num: "02", title: "Document Preparation", desc: "Full KYC and compliance pack assembled to each bank's specific requirements." },
            { num: "03", title: "Direct Introduction", desc: "Warm introduction to a named relationship manager — no cold applications." },
            { num: "04", title: "KYC Coordination", desc: "We coordinate the KYC and AML documentation process end-to-end." },
            { num: "05", title: "Account Activation", desc: "Debit card, online banking, and trade finance facilities activated." },
          ].map((step) => (
            <SectionReveal key={step.num} delay={0.05}>
              <div className="flex items-start gap-6 p-6 border border-foreground/[0.08] rounded-2xl hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300 group">
                <span className="text-[10px] font-sans text-primary/50 uppercase tracking-[0.2em] mt-1 w-6 flex-shrink-0">{step.num}</span>
                <div>
                  <h4 className="text-base font-display tracking-tight text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                  <p className="text-sm font-sans text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default BankAccount;
