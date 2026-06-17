import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";

const features = [
  {
    title: "Corporate Advisory Excellence",
    description:
      "15+ years navigating UAE's regulatory landscape. From mainland and freezone setup to Golden Visa processing and bank account opening—we handle the complexity so you can focus on growth.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Real Estate Intelligence",
    description:
      "500+ advisory engagements across Dubai and Abu Dhabi. Our data-driven approach to property investment, off-plan opportunities, and portfolio management delivers measurable returns for discerning investors.",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Capital & Mortgage Structuring",
    description:
      "Integrated financing solutions across our banking partnerships. Whether it's home loans, investor mortgages, or refinancing, we structure capital to maximize your investment potential.",
    imageUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
  },
  {
    title: "Three Verticals, One Strategy",
    description:
      "Corporate, Real Estate, and Financing advisory under one strategic roof. Our integrated ecosystem means every decision is informed by the full picture—not isolated silos.",
    imageUrl:
      "https://images.unsplash.com/photo-1582407947092-5e71e4a38c87?q=80&w=2070&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Khalid Al-Rashid",
    role: "Managing Director",
    company: "Gulf Capital Partners",
    content:
      "Prospera's strategic intelligence on the UAE market was invaluable. Their corporate advisory team guided our freezone setup flawlessly, saving us months of complexity and ensuring full regulatory compliance.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Elena Vasquez",
    role: "Head of Investments",
    company: "Meridian Wealth",
    content:
      "Their real estate advisory is world-class. Prospera identified off-plan opportunities in Dubai that delivered 28% ROI within 18 months. The level of market insight they bring is unmatched in the region.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "James Thornton",
    role: "CFO",
    company: "Atlas Group International",
    content:
      "From mortgage structuring to Golden Visa processing, Prospera handled everything with precision. Their integrated approach across corporate, real estate, and financing made our UAE expansion seamless.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const WhyProspera = () => {
  return (
    <>
      <StickyFeatureSection
        badge="Why Prospera"
        title="The Advisory Difference."
        subtitle="We don't sell products. We provide the institutional-grade intelligence required to navigate the Emirates' complex investment landscape."
        features={features}
      />

      <AnimatedTestimonials
        badgeText="Client Testimonials"
        title="Trusted by Discerning Investors."
        subtitle="Our clients span HNWIs, family offices, and multinational enterprises navigating the UAE's investment landscape."
        testimonials={testimonials}
        autoRotateInterval={7000}
        trustedCompanies={["Gulf Capital", "Meridian Wealth", "Atlas Group", "Crescent Holdings", "Falcon Equity"]}
        trustedCompaniesTitle="Trusted by leading firms across the region"
      />
    </>
  );
};

export default WhyProspera;
