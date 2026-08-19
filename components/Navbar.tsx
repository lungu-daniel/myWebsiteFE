"use client";

import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navSections, siteName } from "@/lib/content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(navSections[0].id);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = navSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    let ticking = false;
    const updateActive = () => {
      ticking = false;

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const threshold = window.innerHeight * 0.3;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section;
      }
      if (current) setActive(current.id);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <a href="#about" className="font-mono text-sm font-medium text-foreground">
            {siteName}
          </a>

          <ul className="hidden gap-8 md:flex">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`text-sm transition-colors hover:text-foreground ${
                    active === section.id ? "text-foreground" : "text-muted"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-foreground md:hidden"
          >
            <HiBars3 size={28} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 md:hidden">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-foreground">{siteName}</h3>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={closeMenu}
              className="text-foreground"
            >
              <HiXMark size={28} />
            </button>
          </div>
          <ul className="flex flex-col gap-2 p-4">
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={closeMenu}
                  className={`block py-2 text-lg ${
                    active === section.id ? "text-foreground" : "text-muted"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
