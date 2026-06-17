import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

interface SocialLink {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface StickyFooterProps extends Omit<ComponentProps<"footer">, "children"> {
  brandName: string;
  brandLogo?: string;
  tagline?: string;
  sections: FooterLinkGroup[];
  socialLinks?: SocialLink[];
  copyrightText: string;
}

export function StickyFooter({
  className,
  brandName,
  brandLogo,
  tagline,
  sections,
  socialLinks = [],
  copyrightText,
  ...props
}: StickyFooterProps) {
  return (
    <footer
      className={cn(
        "relative w-full overflow-hidden bg-black border-t border-white/10 px-6 py-12 md:px-12 lg:px-24",
        className,
      )}
      {...props}
    >
      <div aria-hidden className="absolute inset-0 isolate z-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-[80rem] w-[35rem] -translate-y-[21.875rem] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(197,160,89,0.08)_0,hsla(40,40%,55%,0.02)_50%,rgba(197,160,89,0.01)_80%)]" />
        <div className="absolute top-0 left-0 h-[80rem] w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(197,160,89,0.05)_0,rgba(197,160,89,0.01)_80%,transparent_100%)]" />
        <div className="absolute top-0 left-0 h-[80rem] w-60 -translate-y-[21.875rem] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(197,160,89,0.05)_0,rgba(197,160,89,0.01)_80%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 md:flex-row">
        <AnimatedContainer className="w-full max-w-sm min-w-[16rem] space-y-4">
          {brandLogo ? (
            <img
              src={brandLogo}
              alt={brandName}
              className="h-8 w-auto brightness-0 invert"
            />
          ) : (
            <span className="font-display text-2xl tracking-tight text-secondary-foreground">
              {brandName}
            </span>
          )}
          {tagline && (
            <p className="text-secondary-foreground/55 text-sm leading-relaxed">{tagline}</p>
          )}
          {socialLinks.length > 0 && (
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <Button
                  key={link.title}
                  asChild
                  size="icon"
                  variant="outline"
                  className="size-8 border-white/15 bg-transparent text-secondary-foreground hover:bg-white/10 hover:text-primary"
                >
                  <a href={link.href} aria-label={link.title}>
                    <link.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
          )}
        </AnimatedContainer>

        {sections.map((group, index) => (
          <AnimatedContainer key={group.label} delay={0.1 + index * 0.1} className="w-full">
            <div>
              <h3 className="text-xs uppercase tracking-[0.14em] text-primary/80">{group.label}</h3>
              <ul className="text-secondary-foreground/50 mt-4 space-y-2 text-sm md:text-xs lg:text-sm">
                {group.links.map((link) => {
                  const Icon = link.icon;
                  const content = (
                    <>
                      {Icon && <Icon className="me-1 size-4" />}
                      {link.title}
                    </>
                  );
                  return (
                    <li key={link.title}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="hover:text-primary inline-flex items-center transition-all duration-300"
                        >
                          {content}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="hover:text-primary inline-flex items-center transition-all duration-300"
                        >
                          {content}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimatedContainer>
        ))}
      </div>

      <div className="text-secondary-foreground/40 relative z-10 mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs md:flex-row md:items-end">
        <p className="max-w-4xl leading-relaxed text-secondary-foreground/35">{copyrightText}</p>
        <p className="whitespace-nowrap">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

type AnimatedContainerProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
