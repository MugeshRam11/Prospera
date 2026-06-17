import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import prosperaLogo from "@/assets/prospera-logo.png";
import {
  Building2, Globe, Landmark, CreditCard, Award,
  TrendingUp, FileText, Home, BarChart3, Settings,
  DollarSign, Users, RefreshCw, Handshake, ArrowUpRight, X,
} from "lucide-react";

const serviceColumns = [
  {
    title: "Corporate Advisory",
    description: "Business setup & structuring",
    link: "/corporate",
    items: [
      { label: "Mainland Setup", icon: Building2, link: "/corporate/mainland-setup" },
      { label: "Freezone Setup", icon: Globe, link: "/corporate/freezone-setup" },
      { label: "Offshore Formation", icon: Landmark, link: "/corporate/offshore-formation" },
      { label: "Bank Account", icon: CreditCard, link: "/corporate/bank-account" },
      { label: "Golden Visa", icon: Award, link: "/corporate/golden-visa" },
    ],
  },
  {
    title: "Real Estate Advisory",
    description: "Investment & portfolio guidance",
    link: "/real-estate",
    items: [
      { label: "Property Investment", icon: TrendingUp, link: "/real-estate/property-investment" },
      { label: "Off-Plan", icon: FileText, link: "/real-estate/off-plan" },
      { label: "Ready Property", icon: Home, link: "/real-estate/ready-property" },
      { label: "Portfolio Advisory", icon: BarChart3, link: "/real-estate/portfolio" },
      { label: "Property Management", icon: Settings, link: "/real-estate/property-management" },
    ],
  },
  {
    title: "Mortgage & Financing",
    description: "Funding & capital solutions",
    link: "/mortgage",
    items: [
      { label: "Home Loan Advisory", icon: DollarSign, link: "/mortgage/home-loan" },
      { label: "Mortgage for Investors", icon: Users, link: "/mortgage/investors" },
      { label: "Refinancing", icon: RefreshCw, link: "/mortgage/refinancing" },
      { label: "Bank Partnerships", icon: Handshake, link: "/mortgage/bank-partnerships" },
    ],
  },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const OverlayMenu = ({ isOpen, onClose }: OverlayMenuProps) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backdropRef.current || !panelRef.current) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.set(backdropRef.current, { display: "block" });
        gsap.set(panelRef.current, { display: "flex" });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.45 }, 0)
          .fromTo(panelRef.current, { opacity: 0, y: -30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.55 }, 0.08);

        if (logoRef.current) {
          tl.fromTo(logoRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 }, 0.2);
        }

        if (linksRef.current) {
          tl.fromTo(
            linksRef.current.children,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.05 },
            0.25
          );
        }

        if (columnsRef.current) {
          tl.fromTo(
            columnsRef.current.children,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
            0.3
          );
        }

        if (footerRef.current) {
          tl.fromTo(footerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.5);
        }
      } else {
        const tl = gsap.timeline({
          defaults: { ease: "power3.in" },
          onComplete: () => {
            gsap.set(backdropRef.current, { display: "none" });
            gsap.set(panelRef.current, { display: "none" });
          },
        });

        tl.to(panelRef.current, { opacity: 0, y: -16, scale: 0.97, duration: 0.3 }, 0)
          .to(backdropRef.current, { opacity: 0, duration: 0.35 }, 0.06);
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-foreground/55 backdrop-blur-sm"
        style={{ display: "none" }}
      />

      {/* Floating Panel */}
      <div
        ref={panelRef}
        className="fixed z-50 top-[100px] left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[1060px] max-h-[calc(100vh-140px)] overflow-y-auto flex-col bg-background border border-border rounded-3xl shadow-[0_30px_80px_-20px_hsl(var(--foreground)/0.18)]"
        style={{ display: "none" }}
      >
        {/* Panel Header — Centered Logo + Close */}
        <div className="relative flex items-center justify-center px-8 pt-7 pb-5 border-b border-border">
          <div ref={logoRef}>
            <img
              src={prosperaLogo}
              alt="Prospera Global"
              className="h-8 w-auto"
            />
          </div>
          <button
            onClick={onClose}
            className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full border border-border text-foreground/50 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            aria-label="Close menu"
          >
            <X size={15} />
          </button>
        </div>

        {/* Panel Body */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 px-8 lg:px-10 py-8 lg:py-10">
          {/* Left: Quick Links */}
          <div ref={linksRef} className="lg:w-[200px] lg:border-r lg:border-border lg:pr-10 flex flex-col gap-1">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Navigate
            </span>
            {quickLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="group flex items-center justify-between py-3 text-lg font-display tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {item.label}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-300"
                />
              </Link>
            ))}
          </div>

          {/* Right: Service Columns */}
          <div
            ref={columnsRef}
            className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 lg:pl-10"
          >
            {serviceColumns.map((col) => (
              <div key={col.title}>
                <Link
                  to={col.link}
                  onClick={onClose}
                  className="group flex items-center gap-1.5 mb-1.5"
                >
                  <h3 className="text-sm font-display text-foreground tracking-wide">
                    {col.title}
                  </h3>
                  <ArrowUpRight
                    size={12}
                    className="text-primary/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </Link>
                <p className="text-[10px] font-sans text-muted-foreground mb-4 tracking-wider uppercase">
                  {col.description}
                </p>
                <div className="space-y-0.5">
                  {col.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        to={item.link}
                        onClick={onClose}
                        className="flex items-center gap-2.5 px-2.5 py-2 -mx-2.5 group/item hover:bg-secondary/[0.04] rounded-lg transition-colors duration-200"
                      >
                        <Icon
                          size={14}
                          className="text-primary/40 group-hover/item:text-primary transition-colors duration-200"
                        />
                        <span className="text-sm font-sans text-foreground/60 group-hover/item:text-foreground transition-colors duration-200">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel Footer */}
        <div ref={footerRef} className="px-8 lg:px-10 py-5 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs font-sans text-muted-foreground">
              Ready to build your future in the UAE?
            </p>
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-sans tracking-widest uppercase rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Request Advisory
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayMenu;
