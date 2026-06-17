import GenericSubpage from "@/components/shared/GenericSubpage";

const ReadyProperty = () => (
  <GenericSubpage
    label="Real Estate Advisory — Ready"
    title={<>Ready Property <span className="italic">Investments.</span></>}
    description="Immediate-income property acquisition with tenant analysis, rental projection, and operational handover for income-focused investors."
    content={[
      { heading: "Yield-First Selection", text: "We screen ready properties through a yield-first lens—analyzing location premiums, tenant demand metrics, and comparable rental data to identify optimal acquisition targets." },
      { heading: "Due Diligence", text: "Comprehensive property due diligence including title deed verification, service charge analysis, community management assessment, and physical condition evaluation." },
      { heading: "Tenant & Income Strategy", text: "Pre-acquisition tenant analysis, lease structuring advisory, and income projection modeling to ensure your ready property delivers from day one." },
    ]}
  />
);

export default ReadyProperty;
