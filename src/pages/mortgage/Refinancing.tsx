import GenericSubpage from "@/components/shared/GenericSubpage";

const Refinancing = () => (
  <GenericSubpage
    label="Mortgage & Financing — Refinancing"
    title={<>Refinancing <span className="italic">Advisory.</span></>}
    description="Rate optimization and equity release strategies for existing mortgages with bank transfer facilitation and early settlement advisory."
    content={[
      { heading: "Rate Optimization", text: "We benchmark your existing mortgage against current market rates across our banking partners to identify refinancing opportunities that reduce your cost of capital." },
      { heading: "Equity Release", text: "Strategic equity release through refinancing—unlocking capital from existing properties for reinvestment, business funding, or portfolio expansion." },
      { heading: "Transfer Management", text: "End-to-end mortgage transfer management including early settlement calculations, NOC processing, and new bank documentation." },
    ]}
  />
);

export default Refinancing;
