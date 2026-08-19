import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience, skillGroups } from "@/lib/content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border py-20">
      <SectionHeading>Experience</SectionHeading>

      <ol className="mb-16 space-y-12">
        {experience.map((job) => (
          <li key={job.company} className="flex gap-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={40}
                height={40}
                className="h-full w-full object-contain p-1.5"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-medium text-foreground">
                  {job.role} <span className="text-muted">·</span>{" "}
                  <span className="text-accent">{job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <ul className="mt-3 list-none space-y-1.5 p-0 text-sm text-foreground/70">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <p className="w-40 shrink-0 text-sm text-muted">{group.label}</p>
            <p className="text-sm text-foreground/85">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
