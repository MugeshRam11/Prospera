import { useId } from "react";

interface IconProps {
  size?: number;
  className?: string;
}

/* ── Shared CSS for all looping icon animations ──
   Injected once alongside `floatCSS` in HeroAnimatedScene. */
export const iconLoopCSS = `
@keyframes window-glow {
  0%, 100% { opacity: 0.25; }
  50%      { opacity: 1; }
}
@keyframes smoke-rise {
  0%   { opacity: 0; transform: translateY(0) scale(0.6); }
  25%  { opacity: 0.8; }
  100% { opacity: 0; transform: translateY(-5px) scale(1.3); }
}
@keyframes card-shimmer {
  0%   { transform: translateX(0); opacity: 0; }
  15%  { opacity: 0.35; }
  55%  { opacity: 0.35; }
  85%  { opacity: 0; }
  100% { transform: translateX(40px); opacity: 0; }
}
@keyframes bar-grow {
  0%   { transform: scaleY(0.55); opacity: 0.55; }
  100% { transform: scaleY(1); opacity: 1; }
}
@keyframes check-draw {
  0%   { stroke-dashoffset: 1; }
  35%  { stroke-dashoffset: 0; }
  70%  { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 1; }
}
@keyframes ring-pulse {
  0%   { transform: scale(0.85); opacity: 0.35; }
  60%  { transform: scale(1.15); opacity: 0; }
  100% { transform: scale(1.15); opacity: 0; }
}
.icon-window {
  fill: currentColor;
  opacity: 0.25;
  animation: window-glow 2.4s ease-in-out infinite;
}
.icon-smoke {
  fill: currentColor;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  animation: smoke-rise 3s ease-out infinite;
}
.icon-shimmer {
  fill: currentColor;
  transform-box: fill-box;
  animation: card-shimmer 2.6s ease-in-out infinite;
}
.icon-bar {
  fill: currentColor;
  transform-box: fill-box;
  transform-origin: bottom;
  animation: bar-grow 2.2s ease-in-out infinite alternate;
}
.icon-check {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: check-draw 2.8s ease-in-out infinite;
}
.icon-ring {
  transform-box: fill-box;
  transform-origin: center;
  animation: ring-pulse 2.8s ease-out infinite;
}
`;

/* ── Corporate Setup — skyscraper with glowing windows ── */
export const BuildingIcon = ({ size = 14, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <rect className="icon-window" x="7" y="5" width="2.4" height="2.4" style={{ animationDelay: "0s" }} />
    <rect className="icon-window" x="14.6" y="5" width="2.4" height="2.4" style={{ animationDelay: "0.3s" }} />
    <rect className="icon-window" x="7" y="10.3" width="2.4" height="2.4" style={{ animationDelay: "0.6s" }} />
    <rect className="icon-window" x="14.6" y="10.3" width="2.4" height="2.4" style={{ animationDelay: "0.9s" }} />
    <rect className="icon-window" x="7" y="15.6" width="2.4" height="2.4" style={{ animationDelay: "1.2s" }} />
    <rect className="icon-window" x="14.6" y="15.6" width="2.4" height="2.4" style={{ animationDelay: "1.5s" }} />
  </svg>
);

/* ── Real Estate — house with rising chimney smoke ── */
export const HouseIcon = ({ size = 14, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
    <path d="M9 20v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
    <path d="M15.5 7.5V4h2v5" />
    <circle className="icon-smoke" cx="18" cy="2.6" r="0.9" style={{ animationDelay: "0s" }} />
    <circle className="icon-smoke" cx="19.3" cy="1.6" r="0.7" style={{ animationDelay: "0.6s" }} />
    <circle className="icon-smoke" cx="17.4" cy="0.9" r="0.6" style={{ animationDelay: "1.2s" }} />
  </svg>
);

/* ── Mortgage — credit card with shimmer sweep ── */
export const CardIcon = ({ size = 14, className }: IconProps) => {
  const clipId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
        </clipPath>
      </defs>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <g clipPath={`url(#${clipId})`}>
        <rect className="icon-shimmer" x="-8" y="5" width="6" height="14" stroke="none" />
      </g>
    </svg>
  );
};

/* ── AED stat — ascending bar chart ── */
export const ChartIcon = ({ size = 14, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="21" x2="21" y2="21" />
    <rect className="icon-bar" x="5" y="14" width="3" height="7" stroke="none" style={{ animationDelay: "0s" }} />
    <rect className="icon-bar" x="10.5" y="10" width="3" height="11" stroke="none" style={{ animationDelay: "0.2s" }} />
    <rect className="icon-bar" x="16" y="6" width="3" height="15" stroke="none" style={{ animationDelay: "0.4s" }} />
  </svg>
);

/* ── Response time — drawing checkmark with pulse ring ── */
export const CheckIcon = ({ size = 14, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle className="icon-ring" cx="12" cy="12" r="10" opacity={0.35} />
    <circle cx="12" cy="12" r="10" />
    <path className="icon-check" d="M7 12.5l3 3 7-7" pathLength={1} />
  </svg>
);
