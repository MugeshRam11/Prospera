import GenericSubpage from "@/components/shared/GenericSubpage";

const BankPartnerships = () => (
  <GenericSubpage
    label="Mortgage & Financing — Banking"
    title={<>Bank <span className="italic">Partnerships.</span></>}
    description="Direct relationships with Tier-1 UAE banks for preferential mortgage rates, expedited processing, and exclusive product access."
    content={[
      { heading: "Partner Network", text: "Direct relationships with Emirates NBD, ADCB, FAB, Mashreq, ENBD, DIB, and RAK Bank—ensuring our clients access the best rates and terms available in the market." },
      { heading: "Preferential Terms", text: "Our volume-based partnerships deliver preferential interest rates, reduced processing fees, and expedited approval timelines not available through standard channels." },
      { heading: "Product Access", text: "Early access to new mortgage products, special promotions, and limited-availability financing solutions exclusively through our banking partnerships." },
    ]}
  />
);

export default BankPartnerships;
