"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { t, detectLocale, localePath, basePath } from "@/lib/i18n";

const navKeys = [
  { key: "nav.home", path: "/" },
  { key: "nav.projects", path: "/projects" },
  { key: "nav.labs", path: "/labs" },
  { key: "nav.blog", path: "/blog" },
  { key: "nav.contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const base = basePath(pathname);

  const navLinks = navKeys.map((item) => ({
    name: t(item.key, locale),
    href: localePath(item.path, locale),
    active: base === item.path || (item.path !== "/" && base.startsWith(item.path)),
  }));

  const switchLocale = locale === "en" ? "bs" : "en";
  const switchHref =
    locale === "en"
      ? `/bs${pathname === "/" ? "" : pathname}`
      : basePath(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={localePath("/", locale)} className="group flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <span className="text-white font-semibold text-base tracking-tight">
            Metaxis
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                link.active
                  ? "text-white bg-zinc-800/60"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language switcher */}
          <Link
            href={switchHref}
            className="ml-2 px-3 py-1.5 rounded-md text-xs font-medium border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all duration-200"
            aria-label={`Switch to ${t("lang.switch.label", locale)}`}
          >
            {t("lang.switch", locale)}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-zinc-400 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm transition-colors ${
                    link.active
                      ? "text-white bg-zinc-800"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Language switcher */}
              <Link
                href={switchHref}
                className="px-3 py-2 rounded-md text-sm text-zinc-500 hover:text-white transition-colors border-t border-zinc-800 mt-1 pt-3"
                onClick={() => setMenuOpen(false)}
              >
                {t("lang.switch.label", locale)}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
