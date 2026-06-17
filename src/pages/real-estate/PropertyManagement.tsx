import GenericSubpage from "@/components/shared/GenericSubpage";

const PropertyManagement = () => (
  <GenericSubpage
    label="Real Estate Advisory — Management"
    title={<>Property <span className="italic">Management.</span></>}
    description="Full-service property management including tenant sourcing, maintenance coordination, and yield optimization for hands-off investors."
    content={[
      { heading: "Tenant Management", text: "Professional tenant sourcing, screening, and relationship management with market-rate rental pricing and occupancy optimization strategies." },
      { heading: "Maintenance & Operations", text: "Preventive maintenance scheduling, emergency response coordination, and vendor management to protect asset value and tenant satisfaction." },
      { heading: "Financial Reporting", text: "Transparent monthly financial reporting with income statements, expense tracking, and yield analysis for your complete property portfolio." },
    ]}
  />
);

export default PropertyManagement;
