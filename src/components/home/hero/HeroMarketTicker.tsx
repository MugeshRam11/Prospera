/* ──────────────────────────────────────────────────────────────────────────
   HERO MARKET TICKER
   Thin "market pulse" strip at the base of the hero — positions Prospera
   as a capital-intelligence platform, not a service brochure.
   Figures are indicative; keep in sync with MarketIntelligence section.
   ────────────────────────────────────────────────────────────────────────── */

const ITEMS = [
  "Dubai avg. rental yield — 7.2%",
  "Avg. prime price — AED 1,750 / sq.ft",
  "0% personal income tax",
  "Golden Visa — from AED 2M investment",
  "40+ freezones, one gateway",
  "AED 2Bn+ transactions advised",
];

const TickerRun = () => (
  <>
    {ITEMS.map((item) => (
      <span
        key={item}
        className="inline-flex items-center gap-6 pr-6 text-[11px] font-sans text-white/45 whitespace-nowrap"
      >
        {item}
        <span className="w-1 h-1 rounded-full bg-brand-gold/60 flex-shrink-0" />
      </span>
    ))}
  </>
);

const HeroMarketTicker = () => {
  return (
    <div className="relative border-t border-white/[0.07]">
      <div className="flex items-center">
        {/* Pinned label */}
        <div className="flex-shrink-0 flex items-center gap-2 px-6 md:px-12 lg:px-24 py-3.5 border-r border-white/[0.07]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold/60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-gold" />
          </span>
          <span className="text-[9px] font-vayu uppercase tracking-[0.2em] text-brand-gold/90 whitespace-nowrap">
            Market pulse
          </span>
        </div>

        {/* Marquee */}
        <div
          className="flex-1 overflow-hidden py-3.5 pl-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee-slow">
            <TickerRun />
            <TickerRun />
            <TickerRun />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMarketTicker;
