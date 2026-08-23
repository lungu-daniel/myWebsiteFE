export const studies = [
  {
    school: "Technical University of Cluj-Napoca",
    program: "Bachelor's in Computer Science",
    period: "2020 – 2024",
  },
  {
    school: "Lucian Blaga Technological High School",
    program: "Mathematics-Informatics",
    period: "2016 – 2020",
  },
];

export const experience = [
  {
    company: "OpenText",
    logo: "/assets/opentext-logo.png",
    role: "Software Engineer",
    period: "09.2025 – present",
    bullets: [
      "IT automation with OpenText OO, workflow orchestration and process integration.",
      "Helped developing new features, solving bugs, and security audits.",
      "Contributed to the development of an MCP server.",
    ],
  },
  {
    company: "SC Reea SRL",
    logo: "/assets/reea-logo.png",
    role: "Software Engineer",
    period: "2021 – 2025",
    bullets: [
      "Developed backend features for airline industry projects using Java as the core language.",
      "Utilized Spring Boot for microservices architecture, Jenkins for CI/CD, and AWS for deploying scalable cloud solutions.",
      "Collaborated cross-functionally using JIRA for agile project management.",
    ],
  },
];

export const skillGroups = [
  { label: "Languages", items: ["Java", "JavaScript", "Python", "C/C++"] },
  {
    label: "Frameworks & Libraries",
    items: ["Spring Boot", "ReactJS", "Flask", "JUnit", "Hibernate"],
  },
  { label: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL"] },
  {
    label: "DevOps & Tools",
    items: ["Jenkins", "Docker", "AWS", "Git", "Maven", "RabbitMQ", "Postman"],
  },
];

export const featuredProjects = [
  {
    slug: "blockcraft-coding",
    title: "BlockCraft Coding",
    description:
      "Visual, block-based coding platform that teaches programming fundamentals — loops, conditionals, graph traversal — through robot-and-grid puzzles that compile down to real C code.",
    stack: ["TypeScript", "React"],
    repo: "https://github.com/Daniel17-Byte/BlockCraft-Coding",
    images: [
      "/assets/blockcraft-coding/blockcraft.png",
      "/assets/blockcraft-coding/blockcraft2.png",
      "/assets/blockcraft-coding/blockcraft3.png",
      "/assets/blockcraft-coding/blockcraft4.png",
      "/assets/blockcraft-coding/blockcraft5.png",
    ],
  },
  {
    slug: "zombies-vs-plants",
    title: "Garden of the Dead",
    description:
      "Reverse tower-defense game — you play as the Rotten King defending your house from waves of attacking plants, managing brain resources and placing the rotten strategically.",
    stack: ["C#"],
    repo: "https://github.com/Daniel17-Byte/ZombiesVsPlants",
    images: [
      "/assets/ZombiesVsPlants/zvp1.png",
      "/assets/ZombiesVsPlants/zvp2.png",
      "/assets/ZombiesVsPlants/zvp3.png",
      "/assets/ZombiesVsPlants/zvp4.png",
      "/assets/ZombiesVsPlants/zvp5.png",
    ],
  },
];

export const personalProjectLinks = [
  { label: "Github", href: "https://github.com/Daniel17-Byte", icon: "bi-github" },
  { label: "Gitlab", href: "https://gitlab.com/Daniel17-Byte", icon: "bi-gitlab" },
];

export const aboutParagraphs = [
  "I'm a Software Engineer with a strong focus on web and backend development, primarily using Java and Spring Boot, and a growing interest in Python, cloud infrastructure, and AI-driven systems. I hold a Bachelor's in Computer Science from the Technical University of Cluj-Napoca, and over the past five years I've worked on everything from airline-industry microservices to IT automation and workflow orchestration.",
  "I care about practical problem-solving over theoretical complexity — building things that work reliably, scale sensibly, and are pleasant to maintain. I'm currently exploring how AI tools fit into modern, distributed system design, and I enjoy taking a project from a rough idea through to something people actually use.",
  "Outside of engineering, I enjoy football, traveling, and a good cup of coffee — usually while thinking through the next problem worth solving.",
];

export const opportunities = {
  heading: "Open to new opportunities",
  description:
    "I'm increasingly drawn to AI-driven products and automation — problems where the interesting part isn't just writing code, but figuring out what should be built in the first place. Alongside my full-time role, I take on freelance work end-to-end: from a rough idea or a whiteboard sketch to a deployed, working product.",
  tags: ["AI & Automation", "Freelance", "Idea → Production", "Remote / Hybrid"],
};

export const contactLinks = [
  { label: "My LinkedIn", href: "https://www.linkedin.com/in/daniel-lungu-207363211/", icon: "bi-linkedin" },
  { label: "Instagram", href: "http://www.instagram.com/_lungudaniel_", icon: "bi-instagram" },
];

export const email = "lungud995@gmail.com";
export const cvHref = "/assets/daniel-lungu-cv.pdf";
export const cvDownloadName = "Daniel-Lungu-CV.pdf";

export const githubUsername = "Daniel17-Byte";
export const featuredRepoNames = featuredProjects.map((p) => p.repo.split("/").pop());
export const excludedRepoNames = [
  "Algorithms-H10",
  "Algorithms-H9",
  "Algorithms-DataStructures",
  "e-shopXAMPP",
  "cinemaBE",
  "Movies",
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "opportunities", label: "Open to" },
  { id: "contact", label: "Contact" },
];

export const siteName = "Lungu Daniel";
export const siteTitle = "Software Engineer";
export const siteUrl = "https://lungudaniel.com";
export const siteDescription =
  "Personal portfolio of Daniel Lungu, Software Engineer specializing in Java and Spring Boot, sharing projects, experience and contact info.";
