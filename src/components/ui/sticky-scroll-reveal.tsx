"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StickyScrollItem = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: StickyScrollItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveCard(index);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [content.length]);

  return (
    <div className="relative flex justify-between gap-12">
      {/* LEFT — Normal document flow, scrolls with page */}
      <div className="flex-1 min-w-0">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="min-h-[60vh] flex flex-col justify-center py-16 first:pt-0 last:pb-0"
          >
            <motion.h2
              initial={false}
              animate={{ opacity: activeCard === index ? 1 : 0.35 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-display tracking-tight text-secondary-foreground"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={false}
              animate={{ opacity: activeCard === index ? 1 : 0.35 }}
              transition={{ duration: 0.4 }}
              className="text-base text-secondary-foreground/60 max-w-md mt-6 font-sans leading-relaxed"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* RIGHT — Truly sticky on the page scroll */}
      <div className="hidden lg:block w-[340px] xl:w-[380px] shrink-0">
        <div className={cn("sticky top-32", contentClassName)}>
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {content[activeCard]?.content ?? null}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
