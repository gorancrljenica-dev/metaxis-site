"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { detectLocale, basePath, localePath } from "@/lib/i18n";

const navItems = [
  { label: "Work",    href: "/#work",    id: "work",    type: "anchor" },
  { label: "Book",    href: "/book",     id: "book",    type: "route"  },
  { label: "About",   href: "/#about",   id: "about",   type: "anchor" },
  { label: "Contact", href: "/#contact", id: "contact", type: "anchor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = detectLocale(pathname);
  const isHome = pathname === "/" || pathname === "/bs";

  function switchLanguage() {
    const base = basePath(pathname);
    const target = locale === "en" ? localePath(base, "bs") : localePath(base, "en");
    router.push(target);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy — only on homepage
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = ["home", "work", "about", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/#home"
          className="text-white font-semibold text-base tracking-tight hover:text-zinc-300 transition-colors"
        >
          Metaxis
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              item.type === "route"
                ? pathname === item.href
                : isHome && activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-all duration-200 pb-0.5 ${
                  isActive
                    ? "text-white border-b border-violet-500"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={switchLanguage}
            className="text-sm text-zinc-500 hover:text-white transition-colors border border-zinc-700 hover:border-zinc-500 rounded px-2 py-0.5"
          >
            {locale === "en" ? "BS" : "EN"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive =
                  item.type === "route"
                    ? pathname === item.href
                    : isHome && activeSection === item.id;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm transition-colors ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <button
                onClick={() => { switchLanguage(); setMenuOpen(false); }}
                className="px-3 py-2 rounded-md text-sm text-zinc-500 hover:text-white transition-colors text-left"
              >
                {locale === "en" ? "Bosanski" : "English"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
