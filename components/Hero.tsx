"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { t, localePath, type Locale } from "@/lib/i18n";

interface HeroProps {
  locale?: Locale;
}

export default function Hero({ locale = "en" }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(0,0,0,0.8),transparent)]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-zinc-950/40" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 py-28 md:py-0 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 md:mb-8 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-zinc-400 text-xs tracking-wide">
            {t("hero.badge", locale)}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-4 md:mb-6 leading-none"
        >
          <span className="gradient-text">Metaxis</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          {t("hero.subtitle", locale)}
          <br className="hidden md:block" />
          <span className="text-zinc-500">
            {" "}{t("hero.subtitle2", locale)}
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={localePath("/projects", locale)}
            className="group flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-lg font-medium text-sm hover:bg-zinc-100 transition-all duration-200 hover:shadow-lg hover:shadow-white/10"
          >
            {t("hero.cta.projects", locale)}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
          <Link
            href={localePath("/labs", locale)}
            className="flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 rounded-lg font-medium text-sm hover:border-zinc-500 hover:text-white transition-all duration-200"
          >
            {t("hero.cta.labs", locale)}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — outside content div, positioned to section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">
          {t("hero.scroll", locale)}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-6 bg-gradient-to-b from-zinc-600 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
