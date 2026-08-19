import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { opportunities } from "@/lib/content";

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="scroll-mt-24 border-t border-border py-20">
      <SectionHeading>Open to</SectionHeading>
      <h2 className="mb-5 max-w-2xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {opportunities.heading}
      </h2>
      <p className="mb-6 max-w-2xl leading-relaxed text-foreground/80">
        {opportunities.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {opportunities.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </section>
  );
}
