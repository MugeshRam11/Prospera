import { Link, type LinkProps } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

interface PillArrowButtonProps extends LinkProps {
  /** Background of the trailing icon circle. Defaults to `bg-primary`. */
  circleClassName?: string;
}

/**
 * Pill-shaped CTA: dark pill + circular icon that swaps a diagonal (↗)
 * arrow for a horizontal (→) arrow on hover, with a spring overshoot.
 */
const PillArrowButton = ({
  to,
  children,
  className,
  circleClassName,
  ...props
}: PillArrowButtonProps) => {
  return (
    <MotionLink
      to={to}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
      className={cn(
        "group flex items-center justify-between sm:justify-start gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-secondary text-secondary-foreground text-[11px] font-sans uppercase tracking-widest whitespace-nowrap transition-colors duration-300 hover:bg-secondary/90",
        className,
      )}
    >
      {children}
      <span
        className={cn(
          "relative w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 overflow-hidden",
          circleClassName,
        )}
      >
        <ArrowUpRight
          size={12}
          className="absolute text-primary-foreground transition-all duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-0 group-hover:translate-x-2 group-hover:-translate-y-2"
        />
        <ArrowRight
          size={12}
          className="absolute text-primary-foreground opacity-0 -translate-x-2 transition-all duration-[260ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 group-hover:translate-x-0"
        />
      </span>
    </MotionLink>
  );
};

export default PillArrowButton;
