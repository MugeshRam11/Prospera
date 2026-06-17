import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} className={`section-padding overflow-hidden ${className ?? ""}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              {badgeText && (
                <div className="inline-flex items-center gap-2 text-label text-primary">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  {badgeText}
                </div>
              )}

              <h2 className="text-4xl md:text-5xl tracking-tight">
                {title}
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed font-sans max-w-md">
                {subtitle}
              </p>

              <div className="flex items-center gap-2 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-primary" : "w-2.5 bg-muted-foreground/30"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div variants={itemVariants} className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 20,
                  position: activeIndex === index ? "relative" as const : "absolute" as const,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`${activeIndex === index ? "" : "pointer-events-none top-0 left-0 right-0"}`}
              >
                <div className="bg-secondary/5 border border-foreground/[0.10] p-8 lg:p-10 space-y-6">
                  <div className="flex gap-1">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                  </div>

                  <div className="flex gap-3">
                    <Quote className="h-6 w-6 text-primary/40 shrink-0 mt-1" />
                    <p className="text-foreground text-lg leading-relaxed font-sans italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <Separator className="bg-foreground/[0.06]" />

                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-sm font-sans">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-sans font-medium text-sm">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs font-sans">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 -z-10" />
          </motion.div>
        </div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} className="mt-20 pt-12 border-t border-foreground/[0.10]">
            <p className="text-center text-muted-foreground text-sm font-sans mb-8">
              {trustedCompaniesTitle}
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {trustedCompanies.map((company) => (
                <span
                  key={company}
                  className="text-muted-foreground/50 font-display text-xl tracking-tight hover:text-foreground transition-colors duration-300"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
