import { LinkedinIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { StickyFooter } from "@/components/ui/sticky-footer";
import prosperaLogo from "@/assets/prospera-logo.png";

const footerSections = [
  {
    label: "Corporate Advisory",
    links: [
      { title: "Mainland Setup", href: "/corporate/mainland-setup" },
      { title: "Freezone Setup", href: "/corporate/freezone-setup" },
      { title: "Golden Visa", href: "/corporate/golden-visa" },
      { title: "Bank Account", href: "/corporate/bank-account" },
    ],
  },
  {
    label: "Real Estate Advisory",
    links: [
      { title: "Property Investment", href: "/real-estate/property-investment" },
      { title: "Off-Plan Opportunities", href: "/real-estate/off-plan" },
      { title: "Portfolio Advisory", href: "/real-estate/portfolio" },
      { title: "Property Management", href: "/real-estate/property-management" },
    ],
  },
  {
    label: "Mortgage & Financing",
    links: [
      { title: "Home Loan Advisory", href: "/mortgage/home-loan" },
      { title: "Mortgage for Investors", href: "/mortgage/investors" },
      { title: "Refinancing", href: "/mortgage/refinancing" },
      { title: "Bank Partnerships", href: "/mortgage/bank-partnerships" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Insights", href: "/insights" },
      { title: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { title: "LinkedIn", href: "#", icon: LinkedinIcon },
  { title: "Instagram", href: "#", icon: InstagramIcon },
  { title: "Twitter / X", href: "#", icon: TwitterIcon },
];

const Footer = () => {
  return (
    <div className="relative text-secondary-foreground">
      {/* Newsletter capture */}
      <div className="bg-secondary px-6 md:px-12 lg:px-24 py-20 border-b border-secondary-foreground/10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-display tracking-tight mb-3">
              Subscribe to UAE Market Intelligence.
            </h3>
            <p className="text-sm text-secondary-foreground/55 font-sans leading-relaxed">
              Weekly insights on Dubai real estate, corporate structuring, and capital markets.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-stretch gap-0 w-full md:w-auto min-w-[280px]"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 md:w-72 px-4 py-3 bg-background/5 border border-secondary-foreground/15 text-secondary-foreground placeholder:text-secondary-foreground/30 text-sm font-sans focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground text-xs font-sans uppercase tracking-[0.14em] hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <StickyFooter
        brandName="Prospera Global"
        brandLogo={prosperaLogo}
        tagline="Institutional-grade intelligence for navigating the UAE's investment landscape."
        sections={footerSections}
        socialLinks={socialLinks}
        copyrightText="Prospera is the brand of Prospera Partners Consulting FZ-LLC, registered in the United Arab Emirates. Advisory services are provided in accordance with applicable UAE regulatory frameworks. Figures shown across this site are indicative only and do not constitute financial advice. · Dubai, United Arab Emirates"
      />
    </div>
  );
};

export default Footer;
