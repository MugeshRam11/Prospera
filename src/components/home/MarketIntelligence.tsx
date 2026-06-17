import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";
import Section from "./Section";

const articles = [
  {
    category: "Market Insight",
    title: "Dubai Property Yields Outperform Global Averages in 2025",
    excerpt: "Average rental yields in key Dubai corridors have risen to 7.2%, surpassing London, Singapore, and Hong Kong.",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min",
    date: "May 2025",
  },
  {
    category: "Business Setup",
    title: "DIFC vs ADGM: Choosing the Right Financial Freezone",
    excerpt: "A comparative analysis of regulatory frameworks, costs, and strategic advantages for financial services firms.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    readTime: "8 min",
    date: "Apr 2025",
  },
  {
    category: "Residency",
    title: "Golden Visa 2025: The Complete Investor Pathway",
    excerpt: "Updated eligibility criteria, property thresholds, and strategic approaches to long-term UAE residency.",
    imageUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
    readTime: "6 min",
    date: "Apr 2025",
  },
  {
    category: "Mortgage",
    title: "UAE Mortgage Rates: Fixed vs Variable in a Shifting Rate Environment",
    excerpt: "With central bank rates stabilizing, we analyze whether fixed or variable structures deliver better long-term value.",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min",
    date: "Mar 2025",
  },
  {
    category: "Corporate",
    title: "Mainland vs Freezone: The 2025 Decision Framework",
    excerpt: "Post-corporate tax implementation, the calculus for business setup location has shifted significantly.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
    readTime: "9 min",
    date: "Mar 2025",
  },
  {
    category: "Real Estate",
    title: "Off-Plan vs Ready Property: Risk-Return Analysis for Dubai Investors",
    excerpt: "Off-plan offers entry price advantages; ready assets deliver immediate yield. We model the break-even scenarios.",
    imageUrl: "https://images.unsplash.com/photo-1582407947092-5e71e4a38c87?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min",
    date: "Feb 2025",
  },
];

const ArticleCard = ({ article }: { article: typeof articles[0] }) => (
  <Link
    to="/insights"
    className="group flex-shrink-0 w-[300px] md:w-[340px] xl:w-[380px] overflow-hidden rounded-2xl bg-secondary-foreground/[0.04] border-[0.5px] border-secondary-foreground/10 backdrop-blur-sm hover:border-primary/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_hsl(var(--primary)/0.18)]"
  >
    <div className="relative w-full h-48 overflow-hidden">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/25 to-transparent" />
      <div className="absolute top-3 left-3">
        <span className="text-[10px] font-sans uppercase tracking-[0.14em] text-primary bg-[#000000]/80 backdrop-blur-sm border border-primary/20 px-2.5 py-1 rounded-full">
          {article.category}
        </span>
      </div>
      <div className="absolute bottom-3 right-3">
        <span className="text-[10px] font-sans text-secondary-foreground/60 bg-[#000000]/70 backdrop-blur-sm px-2 py-1 rounded-full">
          {article.readTime} read
        </span>
      </div>
    </div>

    <div className="p-5">
      <p className="text-[10px] font-sans uppercase tracking-[0.14em] text-secondary-foreground/35 mb-2">
        {article.date}
      </p>
      <h3 className="text-base font-display tracking-tight text-secondary-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
        {article.title}
      </h3>
      <p className="text-xs font-sans text-secondary-foreground/55 leading-relaxed line-clamp-2 mb-4">
        {article.excerpt}
      </p>
      <span className="inline-flex items-center gap-1.5 text-xs font-sans text-primary/70 group-hover:text-primary group-hover:gap-2.5 transition-all duration-300">
        Read article
        <ArrowRight size={12} />
      </span>
    </div>
  </Link>
);

const MarketIntelligence = () => {
  return (
    <Section
      theme="dark"
      bandColor="#000000"
      className="py-24 md:py-32 overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-24 mb-12">
        <SectionReveal>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-label text-primary mb-4 block">Market Intelligence</span>
              <h2 className="text-4xl md:text-5xl tracking-tight">
                Latest <span className="text-primary">Insights.</span>
              </h2>
            </div>
            <Link
              to="/insights"
              className="hidden md:inline-flex items-center gap-2 text-sm font-sans text-secondary-foreground/50 hover:text-primary transition-colors duration-300 mb-2 group"
            >
              View all insights
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </SectionReveal>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee-slow" style={{ width: "max-content" }}>
          {[1, 2, 3].map((set) =>
            articles.map((article) => (
              <ArticleCard key={`${article.title}-${set}`} article={article} />
            ))
          )}
        </div>
      </div>

      <div className="px-6 md:hidden mt-8 text-center">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-sm font-sans text-primary"
        >
          View all insights <ArrowUpRight size={14} />
        </Link>
      </div>
    </Section>
  );
};

export default MarketIntelligence;
