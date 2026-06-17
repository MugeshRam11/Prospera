import { TrendingUp, Handshake, Building2, Star } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";
import AnimatedCounter from "../shared/AnimatedCounter";
import Section from "./Section";
import { Sparkles } from "../ui/sparkles";

const stats = [
  { icon: TrendingUp, value: 2, suffix: "Bn+", prefix: "AED ", label: "In mandates advised", decimals: 0 },
  { icon: Handshake, value: 500, suffix: "+", prefix: "", label: "Advisory engagements", decimals: 0 },
  { icon: Building2, value: 40, suffix: "+", prefix: "", label: "Bank & freezone partners", decimals: 0 },
  { icon: Star, value: 4.9, suffix: "", prefix: "", label: "Google rating", decimals: 1 },
];

const StatsBar = () => {
  return (
    <Section theme="dark" bandColor="#000000" className="overflow-hidden">
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
        className="absolute top-0 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(197,160,89,0.35) 0%, rgba(197,160,89,0.12) 45%, transparent 75%)",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16 lg:py-20">
        {/* Stats row */}
        <SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-[var(--prospera-white)] border border-black/5 px-6 py-7 lg:p-8 min-h-[180px] lg:min-h-[230px] flex flex-col justify-between transition-all duration-500 ease-[var(--ease-glide)] hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_hsl(var(--primary)/0.4)]"
                >
                  {/* Ambient glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-primary/10 blur-3xl transition-colors duration-500 group-hover:bg-primary/20" />

                  <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon size={18} />
                  </div>

                  <div className="relative">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-primary">
                      {stat.prefix}
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </div>
                    <div className="mt-2 text-xs font-sans uppercase tracking-[0.14em] text-[#0a0a0a]/45">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </Section>
  );
};

export default StatsBar;
