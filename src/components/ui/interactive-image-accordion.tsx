import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Text_03 } from "@/components/ui/wave-text";

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const defaultItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Corporate Advisory",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Real Estate",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mortgage & Finance",
    imageUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Golden Visa",
    imageUrl:
      "https://images.unsplash.com/photo-1582407947092-5e71e4a38c87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Investment Strategy",
    imageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=2070&auto=format&fit=crop",
  },
];

const ImageAccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: AccordionItemProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isActive ? "flex-[3]" : "flex-[0.6]"
      } min-h-[350px] lg:min-h-[450px]`}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: isActive ? "scale(1.05)" : "scale(1)" }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x450/0A1128/C5A059?text=Prospera";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />

      <div
        className={`absolute bottom-0 left-0 right-0 p-4 lg:p-6 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-70"
        }`}
      >
        <span className="text-primary-foreground font-display text-sm lg:text-lg tracking-wide">
          {item.title}
        </span>
      </div>
    </div>
  );
};

interface LandingAccordionProps {
  items?: AccordionItemData[];
  heading?: string;
  subheading?: string;
  label?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function LandingAccordionItem({
  items = defaultItems,
  heading,
  subheading,
  label,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: LandingAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
      <div className="absolute top-0 left-12 lg:left-24 w-px h-32 bg-gradient-to-b from-primary/40 to-transparent" />

      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[45%] flex flex-col justify-center"
          >
            <span className="text-label text-primary mb-6 block">
              {label ?? "UAE Investment Intelligence"}
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8">
              {heading ?? (
                <>
                  The Architecture of
                  <br />
                  <span className="italic text-primary"><Text_03 text="UAE Wealth." /></span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-sans">
              {subheading ??
                "Strategic intelligence for Corporate Advisory, Real Estate Investment, and Capital Financing—built for discerning investors navigating the Emirates."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={ctaLink ?? "/contact"}
                className="inline-flex items-center gap-4 px-8 py-4 bg-secondary text-secondary-foreground border border-primary/20 text-sm font-sans uppercase tracking-widest hover:border-primary/40 transition-all duration-300 group"
              >
                <span>{ctaText ?? "Request Strategic Analysis"}</span>
                <ArrowRight
                  size={16}
                  className="text-primary group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              {(secondaryCtaText || !ctaText) && (
                <Link
                  to={secondaryCtaLink ?? "/about"}
                  className="inline-flex items-center gap-4 px-8 py-4 text-sm font-sans uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {secondaryCtaText ?? "Explore Our Ecosystem"}
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right: Image Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:w-[55%] w-full"
          >
            <div className="flex flex-row gap-1.5 h-[350px] lg:h-[450px]">
              {items.map((item, index) => (
                <ImageAccordionItem
                  key={item.id}
                  item={item}
                  isActive={activeIndex === index}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-primary/30 to-transparent hidden lg:block" />
    </section>
  );
}
