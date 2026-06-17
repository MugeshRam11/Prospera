import VideoSlot from "@/components/shared/VideoSlot";

/* ──────────────────────────────────────────────────────────────────────────
   WHAT / WHY / HOW — Prypco scroll-story pattern.
   Sticky-stacked full-screen panels: each panel pins, the next slides over
   it. Alternating ivory/navy for the "gateway of sophistication" rhythm.
   ADD VIDEOS: import files and set `video` per panel.
   ────────────────────────────────────────────────────────────────────────── */

interface Panel {
  label: string;
  title: string;
  titleAccent: string;
  text: string;
  video: string; // ← drop video imports here manually
  dark: boolean;
}

const PANELS: Panel[] = [
  {
    label: "What we do?",
    title: "We consolidate",
    titleAccent: "your UAE entry.",
    text: "Company formation, banking, residency, property, and financing — one portal gives you access to the entire investment ecosystem. Whatever you need, we make it happen under one mandate.",
    video: "",
    dark: false,
  },
  {
    label: "Why we do it?",
    title: "Because fragmentation",
    titleAccent: "costs fortunes.",
    text: "Five disconnected agencies mean lost months, duplicated paperwork, and stalled banking. We built Prospera to remove the noise of the market — so you focus exclusively on the opportunity.",
    video: "",
    dark: true,
  },
  {
    label: "How we do it?",
    title: "Advisory first.",
    titleAccent: "Execution in parallel.",
    text: "Your mandate runs structuring, compliance, visas, financing, and acquisition together — not in sequence. Clear timelines, honest expectations, and a single team accountable for the outcome.",
    video: "",
    dark: false,
  },
];

const WhatWhyHowSection = () => {
  return (
    <section aria-label="What, why and how we work">
      {PANELS.map((p, i) => (
        <div
          key={p.label}
          className="sticky top-0 min-h-screen flex items-center"
          style={{
            zIndex: i + 1,
            backgroundColor: p.dark ? "#1A1814" : "#EDE3CF",
            color: p.dark ? "hsl(var(--brand-ivory))" : "hsl(var(--foreground))",
          }}
        >
          <div className="w-full px-6 md:px-12 lg:px-24 py-20">
            <div
              className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Copy */}
              <div className="lg:[direction:ltr]">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`h-px w-10 ${
                      p.dark ? "bg-brand-gold/60" : "bg-primary/50"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-vayu uppercase tracking-[0.24em] ${
                      p.dark ? "text-brand-gold" : "text-primary"
                    }`}
                  >
                    {p.label}
                  </span>
                </div>

                <h2
                  className={`font-display text-4xl md:text-5xl lg:text-[3.6rem] tracking-tight leading-[1.06] ${
                    p.dark ? "text-brand-ivory" : "text-foreground"
                  }`}
                >
                  {p.title}{" "}
                  <span
                    className={p.dark ? "text-brand-gold" : "text-primary"}
                  >
                    {p.titleAccent}
                  </span>
                </h2>

                <p
                  className={`mt-6 text-sm md:text-[15px] font-sans leading-relaxed max-w-[52ch] ${
                    p.dark ? "text-white/55" : "text-foreground/55"
                  }`}
                >
                  {p.text}
                </p>

                {/* Step indicator */}
                <div className="mt-10 flex items-center gap-2">
                  {PANELS.map((_, j) => (
                    <span
                      key={j}
                      className={`rounded-full transition-all ${
                        j === i
                          ? `w-6 h-1.5 ${p.dark ? "bg-brand-gold" : "bg-primary"}`
                          : `w-1.5 h-1.5 ${p.dark ? "bg-white/20" : "bg-foreground/15"}`
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Video slot */}
              <div className="lg:[direction:ltr]">
                <div
                  className={`aspect-[4/3] rounded-3xl overflow-hidden border ${
                    p.dark ? "border-white/[0.08]" : "border-foreground/[0.08]"
                  } shadow-[0_30px_80px_-24px_rgba(10,17,40,0.35)]`}
                >
                  <VideoSlot src={p.video} dark={p.dark} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhatWhyHowSection;
