import { Fragment } from "react";
import founderVisualVideo from "@/assets/prospera_transformed.mp4";
import founderImage from "@/assets/founder.jpeg";
import Section, { BAND } from "./Section";

const paragraph =
  "Prospera was built because navigating the UAE market — from corporate structuring to " +
  "real estate acquisition to financing — was unnecessarily fragmented. We integrated " +
  "all three verticals under one strategic roof so our clients never have to start over.";

const RevealWords = ({ text }: { text: string }) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span
            className="scroll-text"
            style={{
              animationRange: `entry ${Math.min(i * 0.8, 30)}% cover ${Math.min(50 + i * 0.8, 90)}%`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
};

const FounderSection = () => {
  return (
    <Section
      theme="dark"
      bandColor={BAND.CHARCOAL}
      className="section-padding text-secondary-foreground"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* LEFT — Quote */}
        <div>
          <span className="scroll-text text-label text-primary/80 mb-6 block">
            A Message From Our Founder
          </span>

          <p className="scroll-type text-3xl md:text-4xl font-display tracking-tight leading-[1.2] mb-8">
            "We believe every serious investor deserves{" "}
            <span className="scroll-glow">institutional-grade intelligence</span>{" "}
            — not just a broker and a brochure."
          </p>

          <p className="text-secondary-foreground/60 text-base leading-relaxed font-sans mb-10 max-w-xl">
            <RevealWords text={paragraph} />
          </p>

          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border border-primary/30 shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.35)] shrink-0">
              <img
                src={founderImage}
                alt="Mr. Ragunath Bose"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-sans text-secondary-foreground">
                Mr. Ragunath Bose
              </div>
              <div className="text-xs font-sans uppercase tracking-[0.14em] text-secondary-foreground/50 mt-1">
                Founder & Managing Director
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Visual */}
        <div className="scroll-media relative w-full aspect-square lg:aspect-auto lg:h-full lg:min-h-[480px] rounded-2xl overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-contain"
            src={founderVisualVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </Section>
  );
};

export default FounderSection;
