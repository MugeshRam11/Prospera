import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/shared/PageHero";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import SectionReveal from "@/components/shared/SectionReveal";

interface GenericSubpageProps {
  label: string;
  title: React.ReactNode;
  description: string;
  content: { heading: string; text: string }[];
}

const GenericSubpage = ({ label, title, description, content }: GenericSubpageProps) => {
  return (
    <PageLayout>
      <PageHero label={label} title={title} description={description} ctaText="Speak to an Advisor" ctaPath="/contact" />
      <section className="section-padding pt-0">
        <div className="max-w-3xl space-y-12">
          {content.map((block, i) => (
            <SectionReveal key={block.heading} delay={i * 0.1}>
              <h3 className="text-2xl font-display tracking-tight mb-3">{block.heading}</h3>
              <p className="text-muted-foreground leading-relaxed font-sans">{block.text}</p>
            </SectionReveal>
          ))}
        </div>
      </section>
      <ConsultationCTA />
    </PageLayout>
  );
};

export default GenericSubpage;
