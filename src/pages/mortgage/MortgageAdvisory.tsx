import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import ConsultationCTA from "@/components/home/ConsultationCTA";

const services = [
  { label: "Home Loans", title: "Home Loan Advisory", description: "Comprehensive mortgage advisory with rate comparison, eligibility analysis, and bank-specific application strategy.", path: "/mortgage/home-loan" },
  { label: "Investor Finance", title: "Mortgage for Investors", description: "Leveraged property acquisition strategies with multi-property financing and portfolio-level debt optimization.", path: "/mortgage/investors" },
  { label: "Refinancing", title: "Refinancing", description: "Rate optimization and equity release strategies for existing mortgages with bank transfer facilitation.", path: "/mortgage/refinancing" },
  { label: "Partnerships", title: "Bank Partnerships", description: "Direct relationships with Tier-1 UAE banks for preferential rates, expedited processing, and exclusive product access.", path: "/mortgage/bank-partnerships" },
];

const MortgageAdvisory = () => {
  return (
    <PageLayout>
      <PageHero
        label="Mortgage & Financing"
        title={<>Capitalize with <span className="italic">Precision.</span></>}
        description="Strategic mortgage advisory with direct bank partnerships—optimizing your financing structure for maximum leverage and minimum cost of capital."
        ctaText="Speak to a Mortgage Advisor"
        ctaPath="/contact"
      />
      <section className="section-curve section-padding pt-0 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/[0.04]">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>
      <ConsultationCTA />
    </PageLayout>
  );
};

export default MortgageAdvisory;
