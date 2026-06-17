import { useState, useEffect, useRef, useCallback } from "react";

const CARDS = [
  {
    label: "Company Formation",
    body: "Set up your UAE company with our end-to-end licensing, legal structuring, and government liaison support under one mandate.",
  },
  {
    label: "Banking & Residency",
    body: "Open business and personal bank accounts, apply for UAE residency visas, and secure your Emirates ID — all in one portal.",
  },
  {
    label: "Property & Financing",
    body: "Browse curated UAE real estate, get mortgage financing, and close property deals without dealing with multiple brokers.",
  },
];

type CardState = "active" | "prev" | "next" | "hidden-left" | "hidden-right";

function getCardState(idx: number, active: number, total: number): CardState {
  if (idx === active) return "active";
  if (idx === (active - 1 + total) % total) return "prev";
  if (idx === (active + 1) % total) return "next";
  // Determine which side the remaining cards are on
  const distRight = (idx - active + total) % total;
  return distRight < total / 2 ? "hidden-right" : "hidden-left";
}

function stateToTransform(s: CardState): string {
  switch (s) {
    case "active":       return "translateX(0px) scale(1) translateZ(0px)";
    case "prev":         return "translateX(-65%) scale(0.82) translateZ(-60px)";
    case "next":         return "translateX(65%) scale(0.82) translateZ(-60px)";
    case "hidden-left":  return "translateX(-110%) scale(0.70) translateZ(-100px)";
    case "hidden-right": return "translateX(110%) scale(0.70) translateZ(-100px)";
  }
}

function stateToOpacity(s: CardState): number {
  if (s === "active") return 1;
  if (s === "prev" || s === "next") return 0.5;
  return 0;
}

function stateToZIndex(s: CardState): number {
  if (s === "active") return 10;
  if (s === "prev" || s === "next") return 5;
  return 1;
}

function stateToFilter(s: CardState): string {
  if (s === "active") return "brightness(1)";
  if (s === "prev" || s === "next") return "brightness(0.92)";
  return "brightness(0.85)";
}

const WhatWhyHowSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const advance = useCallback(
    (direction: "next" | "prev") => {
      if (isTransitioning) return;

      if (reducedMotion) {
        setActiveIndex((i) =>
          direction === "next"
            ? (i + 1) % CARDS.length
            : (i - 1 + CARDS.length) % CARDS.length
        );
        return;
      }

      setIsTransitioning(true);
      setTextVisible(false);

      const t1 = setTimeout(() => {
        setActiveIndex((i) =>
          direction === "next"
            ? (i + 1) % CARDS.length
            : (i - 1 + CARDS.length) % CARDS.length
        );
        setTextVisible(true);
      }, 220);

      const t2 = setTimeout(() => {
        setIsTransitioning(false);
      }, 570);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    },
    [isTransitioning, reducedMotion]
  );

  const startInterval = useCallback(() => {
    if (reducedMotion) return;
    intervalRef.current = setInterval(() => advance("next"), 5000);
  }, [advance, reducedMotion]);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startInterval();
    return stopInterval;
  }, [startInterval, stopInterval]);

  return (
    <section
      ref={sectionRef}
      role="region"
      aria-label="What We Do carousel"
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
      style={{
        background: "#E8E0D0",
        padding: "80px 80px 100px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      className="px-6 md:px-12 lg:px-20 py-16 lg:py-0"
    >
      {/* Dotted texture — right side */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "55%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle, rgba(180,155,100,0.15) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Grid */}
      <div
        style={{ position: "relative", zIndex: 1, width: "100%" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-10 lg:gap-16 items-center"
      >
        {/* ── LEFT COLUMN ──────────────────────────────────────────────── */}
        <div>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span
              style={{
                display: "inline-block",
                width: 32,
                height: 2,
                background: "#B8963E",
                borderRadius: 1,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontFamily: "inherit",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#B8963E",
              }}
            >
              WHAT WE DO?
            </span>
          </div>

          {/* H2 — static, never changes */}
          <h2
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#1A1A2E",
              margin: 0,
            }}
          >
            We consolidate{" "}
            <span style={{ color: "#B8963E" }}>your UAE entry.</span>
          </h2>

          {/* Body — cross-fades on card change */}
          <p
            aria-live="polite"
            style={{
              fontSize: 16,
              color: "#6B5A3E",
              lineHeight: 1.7,
              maxWidth: 380,
              marginTop: 20,
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0)" : "translateY(8px)",
              transition: reducedMotion
                ? "none"
                : "opacity 280ms ease, transform 280ms ease",
            }}
          >
            {CARDS[activeIndex].body}
          </p>

          {/* Dot pagination */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginTop: 32,
            }}
          >
            {CARDS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to card ${i + 1}`}
                aria-current={i === activeIndex ? "true" : undefined}
                onClick={() => {
                  if (isTransitioning) return;
                  const dir = i > activeIndex ? "next" : "prev";
                  // Jump directly for multi-step
                  setIsTransitioning(true);
                  setTextVisible(false);
                  setTimeout(() => {
                    setActiveIndex(i);
                    setTextVisible(true);
                  }, 220);
                  setTimeout(() => setIsTransitioning(false), 570);
                  void dir;
                }}
                style={{
                  width: i === activeIndex ? 22 : 8,
                  height: 6,
                  borderRadius: 3,
                  background:
                    i === activeIndex ? "#B8963E" : "rgba(0,0,0,0.18)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: reducedMotion
                    ? "none"
                    : "width 300ms ease, background 300ms ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — CAROUSEL STAGE ────────────────────────────── */}
        <div style={{ position: "relative" }}>
          {/* Prev arrow */}
          <button
            aria-label="Previous card"
            onClick={() => advance("prev")}
            className="hidden sm:flex"
            style={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0,0,0,0.10)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 200ms ease, transform 200ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.92)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-50%) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.6)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-50%) scale(1)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8l5 5"
                stroke="#1A1A2E"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            aria-label="Next card"
            onClick={() => advance("next")}
            className="hidden sm:flex"
            style={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 20,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(0,0,0,0.10)",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 200ms ease, transform 200ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.92)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-50%) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.6)";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "translateY(-50%) scale(1)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3l5 5-5 5"
                stroke="#1A1A2E"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Carousel stage */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 420,
              perspective: "1200px",
              transformStyle: "preserve-3d",
              overflow: "hidden",
            }}
            className="h-[320px] lg:h-[420px]"
          >
            {CARDS.map((card, index) => {
              const state = getCardState(index, activeIndex, CARDS.length);
              return (
                <div
                  key={card.label}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 520,
                    height: 390,
                    marginTop: -195,
                    marginLeft: -260,
                    borderRadius: 28,
                    background: "#FFFFFF",
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow:
                      "0 16px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: stateToTransform(state),
                    opacity: stateToOpacity(state),
                    zIndex: stateToZIndex(state),
                    filter: stateToFilter(state),
                    pointerEvents: state === "active" ? "all" : "none",
                    transition: reducedMotion
                      ? "none"
                      : "transform 520ms cubic-bezier(0.65, 0, 0.35, 1), opacity 400ms cubic-bezier(0.65, 0, 0.35, 1), filter 400ms ease",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Card label */}
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#B8963E",
                      marginBottom: 24,
                    }}
                  >
                    {card.label}
                  </p>

                  {/* Play button circle */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      border: "1.5px solid rgba(0,0,0,0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid rgba(0,0,0,0.38)",
                        borderTop: "7px solid transparent",
                        borderBottom: "7px solid transparent",
                        marginLeft: 3,
                      }}
                    />
                  </div>

                  {/* VIDEO SLOT label */}
                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(0,0,0,0.32)",
                      fontWeight: 500,
                    }}
                  >
                    VIDEO SLOT
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reduced-motion style override */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .carousel-card { transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default WhatWhyHowSection;
