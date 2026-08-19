import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OpportunitiesSection from "@/components/sections/OpportunitiesSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroGeometryLoader from "@/components/three/HeroGeometryLoader";

export default function Home() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[80vh] min-h-[520px] opacity-70 [mask-image:radial-gradient(60%_60%_at_68%_38%,black,transparent)]">
        <HeroGeometryLoader />
      </div>
      <Container>
        <AboutSection />
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <OpportunitiesSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </Container>
    </div>
  );
}
