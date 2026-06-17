interface SectionTransitionProps {
  direction: "dark-to-light" | "light-to-dark";
  className?: string;
}

/**
 * Full-width SVG curve divider that bleeds one section's background colour
 * into the next via a gentle wave path.
 */
const SectionTransition = ({ direction, className = "" }: SectionTransitionProps) => {
  const topColor = direction === "dark-to-light" ? "#0a0a0a" : "#f0ede8";
  const bottomColor = direction === "dark-to-light" ? "#f8f6f2" : "#0a0a0a";

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ marginBottom: "-2px" }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="120"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[60px] sm:h-[90px] lg:h-[120px]"
      >
        <path d="M0,0 L1440,0 L1440,40 Q1080,120 720,100 Q360,80 0,120 Z" fill={topColor} />
        <path d="M0,120 Q360,80 720,100 Q1080,120 1440,40 L1440,120 L0,120 Z" fill={bottomColor} />
      </svg>
    </div>
  );
};

export default SectionTransition;
