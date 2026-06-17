import { useMemo, useState } from "react";
import { Search, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionReveal from "@/components/shared/SectionReveal";

const categories = ["All", "Market Insight", "Business Setup", "Real Estate", "Mortgage", "Residency"];

const articles = [
  {
    id: 1,
    title: "Dubai Property Yields Outperform Global Averages in 2025",
    excerpt: "Average rental yields in key Dubai corridors have risen to 7.2%, surpassing London, Singapore, and Hong Kong across residential and commercial segments.",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=600&fit=crop",
    date: "Mar 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "DIFC vs ADGM: Choosing the Right Financial Freezone",
    excerpt: "A comparative analysis of regulatory frameworks, costs, and strategic advantages for financial services firms establishing in the UAE.",
    category: "Business Setup",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e6f0bf90?w=900&h=600&fit=crop",
    date: "Mar 10, 2026",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Golden Visa 2025: The Complete Investor Pathway",
    excerpt: "Updated eligibility criteria, property thresholds, and strategic approaches to securing long-term UAE residency through the Golden Visa.",
    category: "Residency",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=600&fit=crop",
    date: "Mar 5, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Mortgage Rate Trends: What Investors Need to Know",
    excerpt: "Analysis of current lending rates across UAE banks and how they impact investment ROI calculations for resident and non-resident borrowers.",
    category: "Mortgage",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&h=600&fit=crop",
    date: "Feb 28, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Off-Plan vs Ready: A Framework for UAE Property Investors",
    excerpt: "Timing, risk, and return analysis for investors weighing early-stage developer projects against immediate-income ready properties.",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=900&h=600&fit=crop",
    date: "Feb 20, 2026",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Corporate Tax in the UAE: What Investors Need to Know",
    excerpt: "The 9% corporate tax framework, freezone exemptions, and strategic structuring for tax-efficient operations in the Emirates.",
    category: "Business Setup",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=600&fit=crop",
    date: "Feb 12, 2026",
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "Abu Dhabi's Emerging Investment Corridors",
    excerpt: "Saadiyat, Yas, and Reem Islands are reshaping Abu Dhabi's property market with institutional-grade developments and competitive yields.",
    category: "Market Insight",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&h=600&fit=crop",
    date: "Jan 30, 2026",
    readTime: "5 min read",
  },
  {
    id: 8,
    title: "Economic Diversification: Why the UAE Matters",
    excerpt: "How the UAE's strategic pivot away from oil creates compounding investment opportunities across logistics, tech, and finance.",
    category: "Market Insight",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop",
    date: "Jan 18, 2026",
    readTime: "9 min read",
  },
  {
    id: 9,
    title: "Tax-Efficient Structuring for Expat Investors",
    excerpt: "Strategic planning to minimize tax burden while maximizing returns on UAE-based investments through holding structures.",
    category: "Business Setup",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=600&fit=crop",
    date: "Jan 8, 2026",
    readTime: "7 min read",
  },
];

const Insights = () => {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = active === "All" || a.category === active;
      const matchQ = !query || (a.title + a.excerpt).toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <PageLayout>
      <PageHero
        label="Market Intelligence"
        title={<>Insights & <span className="italic">Analysis.</span></>}
        description="Strategic intelligence on the UAE investment landscape — market analysis, regulatory updates, and advisory perspectives from our senior team."
      />

      <section className="section-padding pt-0">
        {/* Search + filters */}
        <SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-10">
            <div className="relative flex-1 max-w-xl">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search insights…"
                className="w-full bg-[hsl(var(--foreground)/0.02)] rounded-lg pl-11 pr-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus-ring"
                style={{ border: "0.5px solid hsl(var(--foreground) / 0.12)" }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 py-2 rounded-full text-[11px] font-sans uppercase tracking-[0.14em] transition-all duration-300 focus-ring ${
                      isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                    }`}
                    style={{ border: `0.5px solid hsl(var(--${isActive ? "primary" : "foreground"}) / ${isActive ? 0.4 : 0.12})` }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
              className="card-prypco overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                <span className="badge-prypco absolute top-4 left-4 backdrop-blur-sm bg-background/70">{a.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground font-sans mb-3 uppercase tracking-[0.12em]">
                  <span>{a.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {a.readTime}</span>
                </div>
                <h3 className="text-xl font-display tracking-tight leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans line-clamp-2 flex-1">{a.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs text-primary uppercase tracking-[0.16em] font-sans mt-5">
                  Read analysis <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground font-sans py-20">No insights match your search yet.</p>
        )}
      </section>
    </PageLayout>
  );
};

export default Insights;
