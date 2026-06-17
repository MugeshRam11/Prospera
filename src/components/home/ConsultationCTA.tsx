import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionReveal from "../shared/SectionReveal";
import Section, { BAND } from "./Section";

const ConsultationCTA = () => {
  // Shared component: on the home page it rides the morphing scroll-canvas
  // (transparent → navy band); on inner pages there is no canvas, so it keeps
  // its own solid dark surface.
  const isHome = useLocation().pathname === "/";
  return (
    <Section
      theme="dark"
      bandColor={BAND.NAVY}
      style={isHome ? undefined : { backgroundColor: "hsl(var(--secondary))" }}
      className="section-padding text-secondary-foreground"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/20" />

      <SectionReveal>
        <div className="max-w-2xl mx-auto text-center">
          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["DLD Licensed", "ADGM Partner", "40+ Bank Partnerships"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06] text-[10px] font-sans uppercase tracking-[0.14em] text-primary/90"
              >
                {chip}
              </span>
            ))}
          </div>

          <span className="text-label text-primary/80 mb-6 block">Begin Your Analysis</span>
          <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
            Ready to build your future in the UAE?
            <br />
            <span className="text-primary">Let's begin.</span>
          </h2>
          <p className="text-secondary-foreground/50 text-base mb-12 font-sans leading-relaxed">
            Whether you're setting up a company, acquiring property, or securing financing —
            our senior advisory team coordinates your entire UAE mandate from day one.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-10 py-5 rounded-xl bg-primary text-primary-foreground border border-primary text-sm font-sans uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 group"
              >
                <span>Request Advisory</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-5 rounded-xl border border-secondary-foreground/20 text-secondary-foreground text-sm font-sans uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-colors duration-300"
            >
              Learn about our model
            </Link>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
};

export default ConsultationCTA;
