import React, { useState, useEffect, useRef } from "react";

interface FeatureCard {
  title: string;
  description: string;
  imageUrl: string;
}

interface StickyFeatureSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
  className?: string;
}

const useScrollAnimation = (): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

export function StickyFeatureSection({
  badge = "Features",
  title = "Why Choose Us",
  subtitle = "Built for precision and performance.",
  features = [],
  className = "",
}: StickyFeatureSectionProps) {
  const [headerRef, headerInView] = useScrollAnimation();
  const [subtitleRef, subtitleInView] = useScrollAnimation();

  if (features.length === 0) return null;

  return (
    <section className={`section-padding ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            ref={headerRef}
            className={`transition-all duration-700 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-label text-primary mb-4 block">{badge}</span>
            <h2 className="text-4xl md:text-5xl tracking-tight mb-6">{title}</h2>
          </div>
          <div
            ref={subtitleRef}
            className={`transition-all duration-700 delay-150 ${
              subtitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-sans max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Sticky Cards */}
        <div className="relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="sticky mb-8 last:mb-0"
              style={{ top: `${100 + index * 40}px` }}
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-background border border-foreground/[0.10] p-8 lg:p-12 shadow-sm"
                style={{
                  transform: `scale(${1 - index * 0.02})`,
                }}
              >
                {/* Text */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-display tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>

                {/* Image */}
                <div className="overflow-hidden aspect-[3/2]">
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://placehold.co/600x400/0A1128/C5A059?text=Prospera";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
