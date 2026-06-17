import { useRef, useEffect } from "react";
import gsap from "gsap";
import prosperaLogo from "@/assets/prospera-logo.png";
import dmccLogo from "@/assets/logos/dmcc.png";
import difcLogo from "@/assets/logos/difc.png";
import jafzaLogo from "@/assets/logos/jafza.png";
import rakezLogo from "@/assets/logos/rakez.png";
import dldLogo from "@/assets/logos/dld.png";
import adgmLogo from "@/assets/logos/adgm.png";
import emaarLogo from "@/assets/logos/emaar.png";
import damacLogo from "@/assets/logos/damac.png";

/* ── Segment data ── */
const segments = [
  {
    label: "Corporate",
    startAngle: 0,
    sweep: 90,
    children: ["Mainland", "Freezone", "Offshore", "Bank Account"],
  },
  {
    label: "Residency",
    startAngle: 90,
    sweep: 90,
    children: ["Golden Visa", "Migration", "Compliance", "Gov. Services"],
  },
  {
    label: "Real Estate",
    startAngle: 180,
    sweep: 90,
    children: ["Off-Plan", "Ready", "Portfolio", "Investment"],
  },
  {
    label: "Capital",
    startAngle: 270,
    sweep: 90,
    children: ["Mortgage", "Refinancing", "Investors", "Bank Partners"],
  },
];

const outerEntities: { label: string; logo?: string }[] = [
  { label: "DMCC", logo: dmccLogo },
  { label: "DIFC", logo: difcLogo },
  { label: "ADGM", logo: adgmLogo },
  { label: "JAFZA", logo: jafzaLogo },
  { label: "DLD", logo: dldLogo },
  { label: "RERA" },
  { label: "Emirates NBD" },
  { label: "FAB" },
  { label: "Mashreq" },
  { label: "RAKEZ", logo: rakezLogo },
  { label: "Emaar", logo: emaarLogo },
  { label: "DAMAC", logo: damacLogo },
];

/* ── SVG arc helper ── */
const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const describeWedge = (cx: number, cy: number, r1: number, r2: number, startAngle: number, endAngle: number) => {
  const outerStart = polarToCartesian(cx, cy, r2, startAngle);
  const outerEnd = polarToCartesian(cx, cy, r2, endAngle);
  const innerEnd = polarToCartesian(cx, cy, r1, endAngle);
  const innerStart = polarToCartesian(cx, cy, r1, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${r2} ${r2} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${r1} ${r1} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
};

const CX = 400;
const CY = 400;

const ProsperaEcosystemVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 3,
        defaults: { ease: "power3.out" },
      });

      tl.set(".wheel-center", { scale: 0, opacity: 0, transformOrigin: "center" })
        .set(".wheel-center-ring", { scale: 0, opacity: 0, transformOrigin: `${CX}px ${CY}px` })
        .set(".wheel-segment", { opacity: 0, scale: 0.7, transformOrigin: `${CX}px ${CY}px` })
        .set(".wheel-separator", { opacity: 0 })
        .set(".wheel-label", { opacity: 0 })
        .set(".wheel-sub", { opacity: 0, scale: 0.5 })
        .set(".wheel-outer-entity", { opacity: 0, y: 12 })
        .set(".wheel-outer-ring", { opacity: 0 })
        .set(".wheel-connector", { opacity: 0, strokeDashoffset: 30 })
        .set(".wheel-unified-text", { opacity: 0, y: 8 })
        .set(".wheel-center-glow", { opacity: 0, scale: 0.5, transformOrigin: `${CX}px ${CY}px` });

      tl.to(".wheel-center-glow", { scale: 1, opacity: 0.2, duration: 1.2 }, 0.1);
      tl.to(".wheel-center", { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.4)" }, 0.2);
      tl.to(".wheel-center-ring", { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.2)" }, 0.4);
      tl.to(".wheel-segment", { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "power2.out" }, 1.2);
      tl.to(".wheel-separator", { opacity: 0.4, duration: 0.6, stagger: 0.1 }, 1.8);
      tl.to(".wheel-label", { opacity: 1, duration: 0.6, stagger: 0.15 }, 2.0);
      tl.to(".wheel-sub", { opacity: 1, scale: 1, duration: 0.5, stagger: 0.04, ease: "back.out(1.2)" }, 2.8);
      tl.to(".wheel-outer-ring", { opacity: 0.2, duration: 0.8 }, 3.8);
      tl.to(".wheel-outer-entity", { opacity: 0.85, y: 0, duration: 0.6, stagger: 0.06, ease: "power2.out" }, 4.0);
      tl.to(".wheel-connector", { opacity: 0.3, strokeDashoffset: 0, duration: 0.8, stagger: 0.04 }, 4.8);
      tl.to(".wheel-center-glow", { opacity: 0.45, scale: 1.4, duration: 1.2, ease: "power2.inOut" }, 5.2);
      tl.to(".wheel-unified-text", { opacity: 1, y: 0, duration: 0.8 }, 5.5);
      tl.to({}, { duration: 4 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const innerR = 90;
  const mainR1 = 110;
  const mainR2 = 210;
  const subR1 = 216;
  const subR2 = 256;
  const outerR = 270;
  const outerEntityR = outerR + 56;

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[480px] lg:min-h-[600px] flex items-center justify-center">
      <svg
        viewBox="0 0 800 800"
        className="w-full h-full max-w-[800px] max-h-[800px]"
        style={{ filter: "drop-shadow(0 0 80px hsla(40,40%,55%,0.06))" }}
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(40, 40%, 55%)" stopOpacity="0.35" />
            <stop offset="60%" stopColor="hsl(40, 40%, 55%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(40, 40%, 55%)" stopOpacity="0" />
          </radialGradient>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Center glow */}
        <circle className="wheel-center-glow" cx={CX} cy={CY} r={140} fill="url(#centerGlow)" opacity="0" />

        {/* Outer ring */}
        <circle className="wheel-outer-ring" cx={CX} cy={CY} r={outerR} fill="none" stroke="hsl(40, 40%, 55%)" strokeWidth="0.6" strokeDasharray="4 8" opacity="0" />

        {/* Main segments */}
        {segments.map((seg, i) => {
          const gap = 2;
          const s = seg.startAngle + gap;
          const e = seg.startAngle + seg.sweep - gap;
          return (
            <path
              key={`seg-${i}`}
              className="wheel-segment"
              d={describeWedge(CX, CY, mainR1, mainR2, s, e)}
              fill={`hsla(222, 30%, ${92 - i * 3}%, 0.9)`}
              stroke="hsl(40, 40%, 55%)"
              strokeWidth="0.6"
              opacity="0"
            />
          );
        })}

        {/* Segment separators */}
        {segments.map((seg, i) => {
          const p1 = polarToCartesian(CX, CY, mainR1, seg.startAngle);
          const p2 = polarToCartesian(CX, CY, mainR2, seg.startAngle);
          return (
            <line key={`sep-${i}`} className="wheel-separator" x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="hsl(40, 40%, 55%)" strokeWidth="0.5" opacity="0" />
          );
        })}

        {/* Segment labels */}
        {segments.map((seg, i) => {
          const midAngle = seg.startAngle + seg.sweep / 2;
          const labelR = (mainR1 + mainR2) / 2;
          const pos = polarToCartesian(CX, CY, labelR, midAngle);
          return (
            <text
              key={`label-${i}`}
              className="wheel-label"
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="hsl(224, 60%, 11%)"
              fontSize="16"
              fontFamily="'Geist', sans-serif"
              fontWeight="600"
              letterSpacing="0.15em"
              opacity="0"
              filter="url(#goldGlow)"
            >
              {seg.label.toUpperCase()}
            </text>
          );
        })}

        {/* Sub-service arcs */}
        {segments.map((seg, ci) => {
          const subSweep = seg.sweep / seg.children.length;
          return seg.children.map((child, si) => {
            const gap = 1;
            const s = seg.startAngle + si * subSweep + gap;
            const e = seg.startAngle + (si + 1) * subSweep - gap;
            const midAngle = (s + e) / 2;
            const labelPos = polarToCartesian(CX, CY, (subR1 + subR2) / 2, midAngle);

            return (
              <g key={`sub-${ci}-${si}`} className="wheel-sub" opacity="0">
                <path
                  d={describeWedge(CX, CY, subR1, subR2, s, e)}
                  fill="hsla(222, 30%, 88%, 0.7)"
                  stroke="hsl(40, 40%, 55%)"
                  strokeWidth="0.3"
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="hsl(224, 60%, 11%)"
                  fontSize="10"
                  fontFamily="'Geist', sans-serif"
                  fontWeight="400"
                  opacity="0.75"
                >
                  {child}
                </text>
              </g>
            );
          });
        })}

        {/* Outer entities — logos on subtle green glow, text fallback */}
        {outerEntities.map((entity, i) => {
          const angle = (i / outerEntities.length) * 360;
          const pos = polarToCartesian(CX, CY, outerEntityR, angle);
          const logoSize = 80;

          if (entity.logo) {
            return (
              <g key={`outer-${i}`} className="wheel-outer-entity" opacity="0">
                <image
                  href={entity.logo}
                  x={pos.x - logoSize / 2}
                  y={pos.y - logoSize / 2}
                  width={logoSize}
                  height={logoSize}
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))",
                  }}
                />
              </g>
            );
          }

          return (
            <g key={`outer-${i}`} className="wheel-outer-entity" opacity="0">
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill="hsl(224, 60%, 11%)"
                fontSize="15"
                fontFamily="'Geist', sans-serif"
                fontWeight="600"
                letterSpacing="0.06em"
              >
                {entity.label}
              </text>
            </g>
          );
        })}

        {/* Connectors: outer entities → outer ring */}
        {outerEntities.map((_, i) => {
          const angle = (i / outerEntities.length) * 360;
          const p1 = polarToCartesian(CX, CY, outerR, angle);
          const p2 = polarToCartesian(CX, CY, outerR + 20, angle);
          return (
            <line key={`conn-${i}`} className="wheel-connector" x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="hsl(40, 40%, 55%)" strokeWidth="0.5" strokeDasharray="30" strokeDashoffset="30" opacity="0" />
          );
        })}

        {/* Center ring border */}
        <circle className="wheel-center-ring" cx={CX} cy={CY} r={innerR + 5} fill="none" stroke="hsl(40, 40%, 55%)" strokeWidth="0.6" opacity="0" />

        {/* Center circle */}
        <circle className="wheel-center" cx={CX} cy={CY} r={innerR} fill="hsla(37, 33%, 97%, 0.95)" stroke="hsla(40, 40%, 55%, 0.4)" strokeWidth="1" opacity="0" />

        {/* Center logo */}
        <image
          className="wheel-center"
          href={prosperaLogo}
          x={CX - 60}
          y={CY - 42}
          width="120"
          height="84"
          style={{
            filter: "drop-shadow(0 2px 12px rgba(197,160,89,0.4)) drop-shadow(0 0 20px rgba(0,0,0,0.1))",
          }}
        />

        {/* "One Unified Mandate" text */}
        <text
          className="wheel-unified-text"
          x={CX}
          y={CY + 62}
          textAnchor="middle"
          fill="hsl(40, 40%, 55%)"
          fontSize="11"
          fontFamily="'Geist', sans-serif"
          fontWeight="500"
          letterSpacing="0.22em"
          opacity="0"
          filter="url(#goldGlow)"
        >
          ONE UNIFIED MANDATE
        </text>
      </svg>
    </div>
  );
};

export default ProsperaEcosystemVisual;
