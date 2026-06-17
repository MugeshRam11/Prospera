import GenericSubpage from "@/components/shared/GenericSubpage";

const Portfolio = () => (
  <GenericSubpage
    label="Real Estate Advisory — Portfolio"
    title={<>Portfolio <span className="italic">Advisory.</span></>}
    description="Multi-asset portfolio construction and rebalancing strategies for UAE property investors seeking diversified, risk-adjusted returns."
    content={[
      { heading: "Portfolio Construction", text: "We build property portfolios across asset classes—residential, commercial, hospitality—balancing yield, capital appreciation, and liquidity based on your investment mandate." },
      { heading: "Risk Management", text: "Geographic diversification across emirates, sector allocation, and tenure mix optimization to manage concentration risk in your UAE property holdings." },
      { heading: "Performance Monitoring", text: "Ongoing portfolio performance analysis with quarterly yield reports, market benchmarking, and proactive rebalancing recommendations." },
    ]}
  />
);

export default Portfolio;
