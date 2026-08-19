import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaEnvelope, FaFileAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactLinks, cvDownloadName, cvHref, email } from "@/lib/content";

const ICONS: Record<string, IconType> = {
  "bi-linkedin": FaLinkedin,
  "bi-instagram": FaInstagram,
};

type Row = {
  key: string;
  icon: IconType;
  label: string;
  value: string;
  href: string;
  download?: string;
};

export default function ContactSection() {
  const rows: Row[] = [
    ...contactLinks.map((link) => ({
      key: link.href,
      icon: ICONS[link.icon],
      label: link.label,
      value: link.href.replace(/^https?:\/\/(www\.)?/, ""),
      href: link.href,
    })),
    {
      key: "email",
      icon: FaEnvelope,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      key: "cv",
      icon: FaFileAlt,
      label: "Resume",
      value: "Download CV",
      href: cvHref,
      download: cvDownloadName,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-20 pb-28">
      <SectionHeading>Contact</SectionHeading>
      <div className="max-w-xl divide-y divide-border">
        {rows.map((row) => (
          <a
            key={row.key}
            href={row.href}
            target={row.href.startsWith("http") ? "_blank" : undefined}
            rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
            download={row.download}
            className="group flex items-center justify-between gap-4 py-4"
          >
            <div className="flex items-center gap-3">
              <row.icon size={17} className="text-muted" />
              <span className="text-foreground">{row.value}</span>
            </div>
            <FaArrowUpRightFromSquare
              size={12}
              className="text-muted transition-colors group-hover:text-accent"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
