import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";
import Section, { BAND } from "./Section";

const faqs = [
  {
    q: "What is Prospera Global?",
    a: "Prospera Global is a next-generation UAE advisory platform that coordinates corporate structuring, real estate investment, and mortgage financing under one integrated mandate. We serve HNWIs, family offices, and multinational enterprises seeking to establish or expand in the Emirates.",
  },
  {
    q: "How is Prospera different from a traditional real estate agent or business setup consultant?",
    a: "Most advisors operate in silos — your business setup consultant doesn't speak to your property advisor, who doesn't speak to your mortgage broker. Prospera integrates all three verticals, meaning every decision is informed by your complete financial picture. We provide strategy, not just execution.",
  },
  {
    q: "Who do you typically work with?",
    a: "Our clients include high-net-worth individuals relocating to Dubai, international founders setting up UAE entities, family offices diversifying into UAE real estate, and multinational executives seeking Golden Visa pathways. We serve clients from 40+ nationalities.",
  },
  {
    q: "What does the advisory mandate involve?",
    a: "An advisory mandate is a structured engagement where we assess your objectives across corporate, real estate, and financing dimensions, then coordinate execution across all three. This may include company formation, property acquisition, mortgage structuring, and residency — managed as a single integrated project.",
  },
  {
    q: "How quickly can I set up a UAE company or get mortgage pre-approval?",
    a: "Freezone company formation typically takes 7–15 business days. Mortgage pre-approval can be obtained in 48–72 hours through our direct bank partnerships. Golden Visa processing takes 4–6 weeks once documents are complete.",
  },
  {
    q: "Is Prospera regulated?",
    a: "Prospera operates in compliance with UAE regulatory frameworks including DLD (Dubai Land Department), RERA, and relevant freezone authorities. All mortgage and financial advisory services are conducted through regulated banking partnerships.",
  },
  {
    q: "Do you work with international clients who are not yet in the UAE?",
    a: "Yes — a significant portion of our clients are based internationally when they begin their mandate. We manage the full process remotely, requiring travel to Dubai only for specific government registrations where physical presence is mandatory.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 px-6 py-6 text-left group"
      >
        <span className="text-base md:text-lg font-display tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {q}
        </span>
        <span className="shrink-0 mt-1 text-primary">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 pr-10 -mt-2">
          <p className="text-sm text-muted-foreground leading-relaxed font-sans">
            {a}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <Section theme="light" bandColor={BAND.IVORY} className="section-padding">
      <SectionReveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <span className="text-label text-primary mb-4 block">FAQs</span>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
              Frequently asked <span className="text-primary">questions.</span>
            </h2>
            <p className="text-muted-foreground text-base font-sans leading-relaxed">
              Can't find what you're looking for? Reach out to our advisory team directly.
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-foreground/[0.10] bg-card overflow-hidden divide-y divide-foreground/[0.08]">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
};

export default FAQSection;
