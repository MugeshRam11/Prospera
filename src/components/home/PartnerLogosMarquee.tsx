import SectionReveal from "../shared/SectionReveal";
import Section from "./Section";
import { Sparkles } from "../ui/sparkles";
import { InfiniteSlider } from "../ui/infinite-slider";
import { ProgressiveBlur } from "../ui/progressive-blur";

import adgmLogo from "@/assets/logos/adgm.png";
import damacLogo from "@/assets/logos/damac.png";
import difcLogo from "@/assets/logos/difc.png";
import dldLogo from "@/assets/logos/dld.png";
import dmccLogo from "@/assets/logos/dmcc.png";
import emaarLogo from "@/assets/logos/emaar.png";
import jafzaLogo from "@/assets/logos/jafza.png";
import rakezLogo from "@/assets/logos/rakez.png";

const logos = [
  { src: dldLogo, alt: "Dubai Land Department" },
  { src: adgmLogo, alt: "Abu Dhabi Global Market" },
  { src: difcLogo, alt: "Dubai International Financial Centre" },
  { src: dmccLogo, alt: "DMCC" },
  { src: jafzaLogo, alt: "Jafza" },
  { src: rakezLogo, alt: "RAKEZ" },
  { src: emaarLogo, alt: "Emaar" },
  { src: damacLogo, alt: "DAMAC" },
];

const PartnerLogosMarquee = () => {
  return (
    <Section theme="dark" bandColor="#000000" className="py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Sparkles
          density={400}
          size={1}
          speed={0.4}
          opacity={0.4}
          color="hsl(var(--brand-gold))"
          className="h-full w-full"
        />
      </div>

      {/* Ambient gold glow */}
      <div
        className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 translate-y-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(197,160,89,0.35) 0%, rgba(197,160,89,0.12) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 mb-14 text-center">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Trusted Network</span>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            In partnership with <span className="text-primary">industry leaders.</span>
          </h2>
        </SectionReveal>
      </div>

      <div className="relative z-10 w-full">
        <InfiniteSlider gap={64} duration={32} durationOnHover={75} className="py-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-8 w-20 items-center justify-center shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-5 max-w-full w-auto h-auto object-contain brightness-0 invert opacity-40 hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          direction="left"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 md:w-40"
        />
        <ProgressiveBlur
          direction="right"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 md:w-40"
        />

        <div className="absolute inset-y-0 left-0 z-10 w-24 md:w-40 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 md:w-40 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none" />
      </div>
    </Section>
  );
};

export default PartnerLogosMarquee;
