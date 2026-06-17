import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionReveal from "@/components/shared/SectionReveal";
import ConsultationCTA from "@/components/home/ConsultationCTA";

const HomeLoan = () => {
  const [income, setIncome] = useState("");
  const [propPrice, setPropPrice] = useState("");
  const [downPayment, setDownPayment] = useState("20");
  const [interestRate, setInterestRate] = useState("4.5");

  const monthlyIncome = Number(income) || 0;
  const price = Number(propPrice) || 0;
  const dp = Number(downPayment) || 20;
  const rate = Number(interestRate) || 4.5;

  const loanAmount = price * (1 - dp / 100);
  const monthlyRate = rate / 100 / 12;
  const tenure = 25 * 12;
  const emi = loanAmount > 0 && monthlyRate > 0
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1)
    : 0;
  const maxLoan = monthlyIncome * 0.5 * 12 * 20; // simplified eligibility
  const isComplete = monthlyIncome > 0 && price > 0;

  return (
    <PageLayout>
      <PageHero
        label="Mortgage & Financing — Home Loans"
        title={<>Home Loan <span className="italic">Advisory.</span></>}
        description="Comprehensive mortgage advisory with rate comparison across UAE banks, eligibility analysis, and optimized application strategy."
      />

      <section className="section-padding pt-0">
        <SectionReveal>
          <div className="max-w-4xl">
            <div className="bg-secondary text-secondary-foreground p-8 md:p-12">
              <span className="text-label text-primary/80 mb-6 block">Mortgage Affordability Calculator</span>
              <h3 className="text-2xl font-display tracking-tight mb-8">Estimate Your Mortgage</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <label className="text-label text-secondary-foreground/50 mb-2 block">Monthly Income (AED)</label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="e.g. 30,000"
                    className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm font-sans text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary/50 outline-none"
                  />
                </div>
                <div>
                  <label className="text-label text-secondary-foreground/50 mb-2 block">Property Price (AED)</label>
                  <input
                    type="number"
                    value={propPrice}
                    onChange={(e) => setPropPrice(e.target.value)}
                    placeholder="e.g. 1,500,000"
                    className="w-full bg-transparent border border-primary/20 px-4 py-3 text-sm font-sans text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary/50 outline-none"
                  />
                </div>
                <div>
                  <label className="text-label text-secondary-foreground/50 mb-2 block">Down Payment (%)</label>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="w-full accent-primary"
                  />
                  <span className="text-sm text-secondary-foreground/60 font-sans tabular-nums">{downPayment}%</span>
                </div>
                <div>
                  <label className="text-label text-secondary-foreground/50 mb-2 block">Interest Rate (%)</label>
                  <input
                    type="range"
                    min={2}
                    max={8}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full accent-primary"
                  />
                  <span className="text-sm text-secondary-foreground/60 font-sans tabular-nums">{interestRate}%</span>
                </div>
              </div>

              {isComplete && (
                <div className="border-t border-primary/20 pt-8 space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <span className="text-label text-secondary-foreground/50 block mb-1">Estimated EMI</span>
                      <span className="text-2xl font-display text-primary tabular-nums">AED {Math.round(emi).toLocaleString()}</span>
                      <span className="text-xs text-secondary-foreground/40 block font-sans">/month over 25 years</span>
                    </div>
                    <div>
                      <span className="text-label text-secondary-foreground/50 block mb-1">Indicative Loan Eligibility</span>
                      <span className="text-2xl font-display text-primary tabular-nums">AED {maxLoan.toLocaleString()}</span>
                      <span className="text-xs text-secondary-foreground/40 block font-sans">Based on 50% DBR</span>
                    </div>
                  </div>
                  <p className="text-sm text-secondary-foreground/40 font-sans mt-4">
                    Indicative figures only. Actual eligibility depends on credit profile, employer category, and bank-specific criteria.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 mt-2 px-8 py-4 bg-background text-foreground text-sm font-sans uppercase tracking-widest group"
                  >
                    <span>Get Full Mortgage Advisory</span>
                    <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </SectionReveal>
      </section>

      <ConsultationCTA />
    </PageLayout>
  );
};

export default HomeLoan;
