import { useState, useEffect, useRef } from "react";
import prosperaLogo from "@/assets/prospera-logo.png";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe, ArrowUpRight, Clock3Icon,
  FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon,
} from "lucide-react";
import corporateAdvisoryImg from "@/assets/nav bar images/corporate-advisory_1.jpg";
import realEstateImg from "@/assets/nav bar images/real-estate.webp";
import mortgageImg from "@/assets/nav bar images/mortgage.jpeg";

const serviceColumns = [
  {
    title: "Corporate Advisory",
    description: "Business setup & structuring",
    link: "/corporate",
    image: corporateAdvisoryImg,
  },
  {
    title: "Real Estate Advisory",
    description: "Investment & portfolio guidance",
    link: "/real-estate",
    image: realEstateImg,
  },
  {
    title: "Mortgage & Financing",
    description: "Funding & capital solutions",
    link: "/mortgage",
    image: mortgageImg,
  },
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const legalLinks = [
  { label: "Careers", path: "#" },
  { label: "Terms & Conditions", path: "#" },
  { label: "Privacy Statement", path: "#" },
  { label: "Cookie Policy", path: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Twitter / X", href: "#", icon: TwitterIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

const ServiceCard = ({
  col,
  onNavigate,
}: {
  col: (typeof serviceColumns)[number];
  onNavigate: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  const springRadius = useSpring(radius, { stiffness: 220, damping: 28 });
  const clipPath = useTransform(
    [springX, springY, springRadius],
    ([x, y, r]) => `circle(${r}px at ${x}px ${y}px)`
  );

  useEffect(() => {
    radius.set(hovered ? 160 : 0);
  }, [hovered, radius]);

  return (
    <Link
      to={col.link}
      onClick={onNavigate}
      onMouseEnter={(e) => {
        setHovered(true);
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.025] p-6 transition-colors duration-300 hover:border-foreground/20"
    >
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ clipPath }}>
        <img
          src={col.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
      </motion.div>

      <div className="relative z-10">
        <h3 className="text-base font-display tracking-wide mb-1.5 text-foreground transition-colors duration-300 group-hover:text-white">
          {col.title}
        </h3>
        <p className="text-[10px] font-sans tracking-wider uppercase text-muted-foreground transition-colors duration-300 group-hover:text-white/70">
          {col.description}
        </p>
      </div>
      <span
        className="relative z-10 mt-4 inline-flex h-9 w-9 items-center justify-center self-start rounded-full bg-primary text-primary-foreground transition-all duration-300 group-hover:bg-primary/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <ArrowUpRight size={14} />
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(() => new Date());
  const headerRef    = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef      = useRef<HTMLImageElement>(null);
  const menuBodyRef  = useRef<HTMLDivElement>(null);
  const linksRef     = useRef<HTMLDivElement>(null);
  const columnsRef   = useRef<HTMLDivElement>(null);
  const footerRef    = useRef<HTMLDivElement>(null);
  const backdropRef  = useRef<HTMLDivElement>(null);
  const location     = useLocation();
  const isHome       = location.pathname === "/";

  // Keep a ref so menu close callback always sees latest scroll state
  const scrolledRef = useRef(scrolled);
  const isHomeRef   = useRef(isHome);
  useEffect(() => { scrolledRef.current = scrolled; }, [scrolled]);
  useEffect(() => { isHomeRef.current = isHome; }, [isHome]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Live clock for the mega-menu utility bar
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY > 60;
      if (s !== scrolled) setScrolled(s);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // ── Floating pill morph on scroll ─────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || !logoRef.current || !headerRef.current || menuOpen) return;

    // Non-home pages always float; home page floats only after scroll
    const shouldFloat = scrolled || !isHome;
    const tl = gsap.timeline({ defaults: { duration: 0.45, ease: "power3.out" } });

    if (shouldFloat) {
      tl.to(headerRef.current,  { paddingTop: 14 }, 0)
        .to(containerRef.current, { paddingLeft: 20, paddingRight: 20, marginLeft: 48, marginRight: 48, borderRadius: 16 }, 0)
        .to(logoRef.current,    { height: 44 }, 0);
    } else {
      // Home at top: full-width, no pill
      tl.to(headerRef.current,  { paddingTop: 0 }, 0)
        .to(containerRef.current, { paddingLeft: 32, paddingRight: 32, marginLeft: 0, marginRight: 0, borderRadius: 0 }, 0)
        .to(logoRef.current,    { height: 36 }, 0);
    }
  }, [scrolled, menuOpen, isHome]);

  // ── Menu open / close ─────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || !menuBodyRef.current || !backdropRef.current || !headerRef.current) return;

    const ctx = gsap.context(() => {
      if (menuOpen) {
        gsap.set(backdropRef.current, { display: "block" });
        gsap.set(menuBodyRef.current, { display: "block" });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0);

        // Always float when menu opens
        tl.to(headerRef.current, { paddingTop: 14, duration: 0.5 }, 0);
        tl.to(containerRef.current, {
          marginLeft: 48, marginRight: 48,
          paddingLeft: 28, paddingRight: 28,
          borderRadius: 16, duration: 0.5,
        }, 0);

        tl.fromTo(menuBodyRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.55 },
          0.08
        );

        if (linksRef.current) {
          tl.fromTo(linksRef.current.children,
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.04 },
            0.25
          );
        }
        if (columnsRef.current) {
          tl.fromTo(columnsRef.current.children,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.07 },
            0.28
          );
        }
        if (footerRef.current) {
          tl.fromTo(footerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35 }, 0.45);
        }
      } else {
        const shouldFloat = scrolledRef.current || !isHomeRef.current;

        const tl = gsap.timeline({
          defaults: { ease: "power3.in" },
          onComplete: () => {
            gsap.set(backdropRef.current, { display: "none" });
            gsap.set(menuBodyRef.current, { display: "none" });
          },
        });

        tl.to(menuBodyRef.current, { height: 0, opacity: 0, duration: 0.3 }, 0)
          .to(backdropRef.current, { opacity: 0, duration: 0.3 }, 0.05);

        // Restore header and container to correct floating/flat state
        tl.to(headerRef.current, {
          paddingTop: shouldFloat ? 14 : 0,
          duration: 0.4, ease: "power3.out",
        }, 0.05);
        tl.to(containerRef.current, {
          marginLeft:   shouldFloat ? 48 : 0,
          marginRight:  shouldFloat ? 48 : 0,
          paddingLeft:  shouldFloat ? 20 : 32,
          paddingRight: shouldFloat ? 20 : 32,
          borderRadius: shouldFloat ? 16 : 0,
          duration: 0.4, ease: "power3.out",
        }, 0.05);
      }
    });

    return () => ctx.revert();
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 z-40 bg-foreground/55 backdrop-blur-sm"
        style={{ display: "none" }}
      />

      {/* Navigation */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ paddingTop: 0 }}
      >
        <div
          ref={containerRef}
          className={`pointer-events-auto transition-all duration-[450ms] border overflow-hidden ${
            isTransparent
              ? "bg-transparent border-transparent shadow-none"
              : menuOpen
                ? "bg-background/95 border-border backdrop-blur-2xl shadow-[0_8px_40px_-8px_hsl(var(--foreground)/0.14)]"
                : "bg-background/30 border-white/15 backdrop-blur-2xl shadow-[0_8px_40px_-8px_hsl(var(--foreground)/0.14)]"
          }`}
          style={{
            paddingLeft: 32,
            paddingRight: 32,
            marginLeft: 0,
            marginRight: 0,
            borderRadius: 0,
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between h-[64px]">
            {/* Language */}
            <div className="flex items-center w-[100px]">
              <button
                className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ${
                  isTransparent
                    ? "border-white/20 text-white/70 hover:text-white hover:border-white/40"
                    : "border-border text-foreground/50 hover:text-foreground hover:border-foreground/20"
                }`}
                aria-label="Language"
              >
                <Globe size={16} />
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center justify-center relative z-[60]">
              <img
                ref={logoRef}
                src={prosperaLogo}
                alt="Prospera Global"
                className={`w-auto transition-[filter] duration-300 ${
                  isTransparent ? "brightness-0 invert" : ""
                }`}
                style={{ height: 36 }}
              />
            </Link>

            {/* Menu toggle */}
            <div className="flex items-center justify-end w-[100px]">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`relative z-[60] flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-500 ${
                  isTransparent
                    ? "border-white/20 hover:border-white/40 hover:bg-white/[0.06]"
                    : "border-border hover:border-foreground/20 hover:bg-secondary/[0.04]"
                }`}
                aria-label="Toggle menu"
              >
                <span
                  className={`text-xs font-sans tracking-[0.12em] uppercase transition-colors duration-300 ${
                    isTransparent ? "text-white/80" : "text-foreground/60"
                  }`}
                >
                  {menuOpen ? "Close" : "Menu"}
                </span>
                <div className="flex flex-col items-center justify-center gap-[4px]">
                  <span
                    className={`block h-[1.5px] w-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${
                      isTransparent ? "bg-white" : "bg-foreground"
                    } ${menuOpen ? "rotate-45 translate-y-[2.75px]" : ""}`}
                  />
                  <span
                    className={`block h-[1.5px] w-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${
                      isTransparent ? "bg-white" : "bg-foreground"
                    } ${menuOpen ? "-rotate-45 -translate-y-[2.75px]" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mega menu */}
          <div
            ref={menuBodyRef}
            className="overflow-hidden border-t border-border"
            style={{ display: "none", height: 0 }}
          >
            <div className="flex flex-col lg:flex-row">
            {/* Left: quick links + legal links */}
            <div className="flex flex-col justify-between gap-10 p-6 lg:w-[240px] lg:border-r lg:border-border lg:p-8">
              <div ref={linksRef} className="flex flex-col gap-1">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Navigate
                </span>
                {quickLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
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

              <div className="flex flex-col gap-2.5 pt-6 border-t border-border">
                {legalLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs font-sans text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: service cards */}
            <div
              ref={columnsRef}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 lg:p-8"
            >
              {serviceColumns.map((col) => (
                <ServiceCard key={col.title} col={col} onNavigate={() => setMenuOpen(false)} />
              ))}
            </div>
          </div>

          {/* Utility bar — live clock + socials + CTA */}
          <div
            ref={footerRef}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-border lg:px-8"
          >
            <div className="flex items-center gap-2 text-xs font-sans text-muted-foreground tabular-nums">
              <Clock3Icon size={14} />
              <span>{time.toLocaleTimeString()}</span>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-colors duration-300"
                  >
                    <Icon size={13} />
                  </a>
                );
              })}
            </div>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-sans tracking-widest uppercase rounded-full hover:bg-primary/90 transition-colors duration-300"
            >
              Request Advisory
              <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
