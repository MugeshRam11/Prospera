import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Linkedin, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import SectionReveal from "@/components/shared/SectionReveal";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  fullName: z.string().trim().min(3, "Name must be at least 3 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  service: z.enum(["corporate", "real-estate", "mortgage", "other"], {
    errorMap: () => ({ message: "Please select an area of interest" }),
  }),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
  agree: z.literal(true, { errorMap: () => ({ message: "Please accept the privacy policy" }) }),
});
type FormValues = z.infer<typeof schema>;

const infoCards = [
  { icon: MapPin, label: "Office", value: "Dubai, United Arab Emirates", sub: "DIFC | ADGM | Mainland presence" },
  { icon: Mail, label: "Email", value: "hello@prospera-global.com", sub: "Senior advisory team" },
  { icon: Phone, label: "Phone", value: "+971 4 000 0000", sub: "Sun – Thu, 9:00 – 18:00 GST" },
  { icon: Clock, label: "Response", value: "Within 24 hours", sub: "All inquiries personally reviewed" },
];

const faqs = [
  { q: "What information do you need from me first?", a: "A short summary of your objective — corporate setup, property mandate, or financing — and your residency status. We tailor the next conversation from there." },
  { q: "Do you offer a free initial consultation?", a: "Yes. The first 30-minute strategic call is complimentary and covers a high-level assessment of your position." },
  { q: "How quickly can we begin a mandate?", a: "Most engagements move from intake to active execution within 5 – 10 business days, depending on documentation readiness." },
  { q: "How are your fees structured?", a: "Fees are mandate-specific and disclosed in writing before any engagement. We do not accept undisclosed referral commissions." },
];

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-prypco p-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left focus-ring"
        aria-expanded={open}
      >
        <span className="font-display text-lg tracking-tight">{q}</span>
        <ChevronDown size={18} className={`text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm text-muted-foreground leading-relaxed font-sans">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const [sent, setSent] = useState(false);

  const onSubmit = async (_values: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: "Inquiry received", description: "Our advisory team will respond within 24 hours." });
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full bg-[hsl(var(--foreground)/0.02)] rounded-lg px-4 py-3 text-base font-sans text-foreground placeholder:text-muted-foreground/60 focus-ring transition-colors";
  const inputStyle = { border: "0.5px solid hsl(var(--foreground) / 0.12)" } as const;

  return (
    <PageLayout>
      <PageHero
        label="Advisory Consultation"
        title={<>Let's <span className="italic">talk.</span></>}
        description="Tell us about your UAE investment objectives. Our senior advisory team responds personally — typically within 24 hours."
      />

      <section className="section-padding pt-0">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <SectionReveal className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-label text-muted-foreground mb-2 block">Full Name</label>
                  <input {...register("fullName")} className={inputClass} style={inputStyle} placeholder="Your full name" />
                  {errors.fullName && <p className="text-xs text-destructive mt-2 font-sans">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="text-label text-muted-foreground mb-2 block">Email</label>
                  <input {...register("email")} type="email" className={inputClass} style={inputStyle} placeholder="you@email.com" />
                  {errors.email && <p className="text-xs text-destructive mt-2 font-sans">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-label text-muted-foreground mb-2 block">Phone</label>
                  <input {...register("phone")} type="tel" className={inputClass} style={inputStyle} placeholder="+971 50 000 0000" />
                  {errors.phone && <p className="text-xs text-destructive mt-2 font-sans">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="text-label text-muted-foreground mb-2 block">Area of Interest</label>
                  <select {...register("service")} className={inputClass} style={inputStyle} defaultValue="">
                    <option value="" disabled>Select</option>
                    <option value="corporate">Corporate Advisory</option>
                    <option value="real-estate">Real Estate Investment</option>
                    <option value="mortgage">Mortgage & Financing</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                  {errors.service && <p className="text-xs text-destructive mt-2 font-sans">{errors.service.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-label text-muted-foreground mb-2 block">Your Investment Objectives</label>
                <textarea {...register("message")} rows={5} className={`${inputClass} resize-none`} style={inputStyle} placeholder="Tell us about your goals, timeline, and current position…" />
                {errors.message && <p className="text-xs text-destructive mt-2 font-sans">{errors.message.message}</p>}
              </div>

              <label className="flex items-start gap-3 text-sm text-muted-foreground font-sans cursor-pointer">
                <input type="checkbox" {...register("agree")} className="mt-1 accent-[hsl(var(--primary))]" />
                <span>I agree to the privacy policy and consent to being contacted by Prospera Global's advisory team.</span>
              </label>
              {errors.agree && <p className="text-xs text-destructive font-sans">{errors.agree.message}</p>}

              <motion.button
                type="submit"
                disabled={isSubmitting || sent}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground text-sm font-sans uppercase tracking-[0.18em] hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed focus-ring"
              >
                {sent ? (<><CheckCircle2 size={16} /> Sent</>) : isSubmitting ? "Sending…" : (<>Request Strategic Advisory <ArrowRight size={16} /></>)}
              </motion.button>
            </form>
          </SectionReveal>

          {/* Info cards */}
          <SectionReveal delay={0.1} className="lg:col-span-2">
            <div className="grid gap-4">
              {infoCards.map((c) => (
                <div key={c.label} className="card-prypco p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0" style={{ border: "0.5px solid hsl(var(--primary) / 0.25)" }}>
                    <c.icon size={18} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-sans mb-1">{c.label}</p>
                    <p className="text-sm font-display tracking-tight text-foreground truncate">{c.value}</p>
                    <p className="text-xs text-muted-foreground font-sans mt-1">{c.sub}</p>
                  </div>
                </div>
              ))}
              <div className="card-prypco p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-sans mb-3">Follow</p>
                <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary font-sans focus-ring">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding pt-0">
        <SectionReveal>
          <span className="text-label text-primary mb-4 block">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight mb-10">Before you reach out.</h2>
        </SectionReveal>
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
          {faqs.map((f, i) => (
            <SectionReveal key={f.q} delay={i * 0.06}>
              <FaqItem {...f} />
            </SectionReveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
