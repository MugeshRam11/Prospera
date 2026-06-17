import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

/* ──────────────────────────────────────────────────────────────────────────
   HOMEPAGE TESTIMONIALS — Prypco's "Clients who ❤︎ us" analog.
   Replace with real client stories as they come in (per 11/01 discussion:
   numbers/testimonials must stay believable).
   ────────────────────────────────────────────────────────────────────────── */

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
      "Their real estate advisory is world-class. Prospera identified off-plan opportunities in Dubai that delivered strong returns within 18 months. The level of market insight they bring is unmatched in the region.",
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

const TestimonialsSection = () => (
  <AnimatedTestimonials
    badgeText="Client Stories"
    title="Trusted by Discerning Investors."
    subtitle="Our clients span founders, family offices, and enterprises navigating the UAE's investment landscape."
    testimonials={testimonials}
    autoRotateInterval={7000}
    className="motion-reduce:bg-[#FCFAF7]"
  />
);

export default TestimonialsSection;
