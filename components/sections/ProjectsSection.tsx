import { Suspense } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import GithubProjectsGrid from "@/components/sections/GithubProjectsGrid";
import GithubProjectsSkeleton from "@/components/sections/GithubProjectsSkeleton";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-20">
      <SectionHeading>Featured Projects</SectionHeading>
      <FeaturedProjects />

      <div className="mt-16">
        <SectionHeading>More on GitHub</SectionHeading>
        <Suspense fallback={<GithubProjectsSkeleton />}>
          <GithubProjectsGrid />
        </Suspense>
      </div>
    </section>
  );
}
