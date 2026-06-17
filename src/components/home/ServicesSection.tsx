import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionReveal from "../shared/SectionReveal";
import { InteractiveTravelCard } from "../ui/3d-card";
import corporateAdvisoryImg from "@/assets/nav bar images/corporate-advisory_1.jpg";
import realEstateImg from "@/assets/nav bar images/real-estate.webp";
import mortgageImg from "@/assets/nav bar images/mortgage.jpeg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Structure. Establish. Scale.",
    subtitle: "Corporate Advisory",
    image: corporateAdvisoryImg,
    path: "/corporate",
    cta: "Explore Strategy",
  },
  {
    title: "Invest with Intelligence.",
    subtitle: "Real Estate Advisory",
    image: realEstateImg,
    path: "/real-estate",
    cta: "View Intelligence",
  },
  {
    title: "Capitalize with Precision.",
    subtitle: "Mortgage & Financing",
    image: mortgageImg,
    path: "/mortgage",
    cta: "Analyze Options",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    gsap.set(cards, {
      y: 80,
      opacity: 0,
      scale: 0.96,
    });

    cards.forEach((card, i) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          end: "top 55%",
          toggleActions: "play reverse play reverse",
        },
        delay: i * 0.15,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <SectionReveal>
        <h2 className="text-4xl md:text-5xl tracking-tight mb-16">
          Three Pillars of <span className="italic">Advisory.</span>
        </h2>
      </SectionReveal>

      <div className="flex flex-wrap justify-center gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
        {services.map((service, i) => (
          <div
            key={service.path}
            ref={(el) => { cardsRef.current[i] = el; }}
          >
            <InteractiveTravelCard
              title={service.title}
              subtitle={service.subtitle}
              imageUrl={service.image}
              actionText={service.cta}
              href={service.path}
              onActionClick={() => navigate(service.path)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
