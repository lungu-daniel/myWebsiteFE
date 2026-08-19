import SectionHeading from "@/components/ui/SectionHeading";
import { aboutParagraphs, cvHref, siteTitle, studies } from "@/lib/content";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 pt-36 pb-24 md:pt-48">
      <p className="mb-4 font-mono text-sm text-muted">Software Engineer</p>
      <h1 className="mb-6 max-w-3xl text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
        Lungu Daniel
      </h1>
      <p className="mb-10 max-w-xl text-lg text-muted md:text-xl">
        {siteTitle} building with Java &amp; Spring Boot — currently on the automation team at
        OpenText.
      </p>
      <div className="mb-32 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
        <a href="#projects" className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
          View Projects
        </a>
        <a href="#contact" className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
          Get in Touch
        </a>
        <a href={cvHref} download className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">
          Download CV
        </a>
      </div>

      <div className="grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-[1fr_2fr]">
        <div>
          <SectionHeading>Studies</SectionHeading>
          <ul className="list-none space-y-6 p-0">
            {studies.map((item) => (
              <li key={item.school}>
                <p className="font-medium text-foreground">{item.school}</p>
                <p className="text-sm text-muted">{item.program}</p>
                <p className="font-mono text-xs text-muted">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading>About</SectionHeading>
          <div className="space-y-4 text-foreground/85 leading-relaxed">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
