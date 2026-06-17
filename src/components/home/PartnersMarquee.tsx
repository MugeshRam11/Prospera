import adgm from "@/assets/logos/adgm.png";
import damac from "@/assets/logos/damac.png";
import difc from "@/assets/logos/difc.png";
import dld from "@/assets/logos/dld.png";
import dmcc from "@/assets/logos/dmcc.png";
import emaar from "@/assets/logos/emaar.png";
import jafza from "@/assets/logos/jafza.png";
import rakez from "@/assets/logos/rakez.png";

/* ──────────────────────────────────────────────────────────────────────────
   PARTNERS MARQUEE — Prypco "In partnership with leaders" pattern.
   Infinite strip, grayscale → full color on hover, pauses on hover.
   ────────────────────────────────────────────────────────────────────────── */

const LOGOS = [
  { src: dld, alt: "Dubai Land Department" },
  { src: difc, alt: "DIFC" },
  { src: adgm, alt: "ADGM" },
  { src: dmcc, alt: "DMCC" },
  { src: emaar, alt: "Emaar" },
  { src: damac, alt: "DAMAC" },
  { src: jafza, alt: "JAFZA" },
  { src: rakez, alt: "RAKEZ" },
];

const LogoRun = () => (
  <>
    {LOGOS.map((logo) => (
      <div
        key={logo.alt}
        className="flex items-center justify-center flex-shrink-0 w-[140px] md:w-[170px] px-6"
      >
        <img
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          className="max-h-9 md:max-h-11 w-auto object-contain grayscale opacity-45 transition-all duration-400 hover:grayscale-0 hover:opacity-100"
        />
      </div>
    ))}
  </>
);

const PartnersMarquee = () => {
  return (
    <section className="py-14 md:py-18 overflow-hidden">
      <p className="text-center text-[10px] font-vayu uppercase tracking-[0.24em] text-foreground/35 mb-9">
        In partnership with leaders across the Emirates
      </p>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <LogoRun />
          <LogoRun />
          <LogoRun />
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
