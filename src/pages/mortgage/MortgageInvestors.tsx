import GenericSubpage from "@/components/shared/GenericSubpage";

const MortgageInvestors = () => (
  <GenericSubpage
    label="Mortgage & Financing — Investors"
    title={<>Mortgage for <span className="italic">Investors.</span></>}
    description="Leveraged property acquisition strategies with multi-property financing, portfolio-level debt optimization, and investor-specific banking products."
    content={[
      { heading: "Leverage Strategy", text: "We structure multi-property financing to maximize portfolio leverage while maintaining healthy debt service ratios and bank compliance across your holdings." },
      { heading: "Investor Products", text: "Access to investor-specific mortgage products including buy-to-let, equity release, and bridge financing through our direct bank partnerships." },
      { heading: "Portfolio Financing", text: "Consolidated mortgage strategy across your property portfolio—rate optimization, tenure alignment, and refinancing timing for maximum capital efficiency." },
    ]}
  />
);

export default MortgageInvestors;
