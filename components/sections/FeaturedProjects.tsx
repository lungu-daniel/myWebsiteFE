import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { featuredProjects } from "@/lib/content";

export default function FeaturedProjects() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {featuredProjects.map((project) => (
        <Card key={project.slug}>
          <div className="mb-4 flex gap-3 overflow-x-auto pb-2">
            {project.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                width={320}
                height={180}
                className="h-32 w-56 shrink-0 rounded-lg object-cover"
              />
            ))}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{project.title}</h3>
          <p className="mb-4 text-sm text-muted">{project.description}</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-accent hover:underline"
            >
              {project.linkText ?? "View Repository"} <FaArrowRight size={11} />
            </a>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
