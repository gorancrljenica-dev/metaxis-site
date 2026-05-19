"use client";

import { motion } from "framer-motion";
import { t, type Locale } from "@/lib/i18n";

interface HowWeThinkProps {
  locale?: Locale;
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function HowWeThink({ locale = "en" }: HowWeThinkProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12 md:mb-14"
          >
            {t("how.title", locale)}
          </motion.h2>

          <div className="space-y-6 md:space-y-7 text-zinc-400 text-base md:text-lg leading-relaxed">
            <motion.p variants={fadeUp}>{t("how.p1", locale)}</motion.p>
            <motion.p variants={fadeUp}>{t("how.p2", locale)}</motion.p>
            <motion.p variants={fadeUp} className="text-white">
              {t("how.p3", locale)}
            </motion.p>
            <motion.p variants={fadeUp}>{t("how.p4", locale)}</motion.p>
            <motion.p variants={fadeUp}>{t("how.p5", locale)}</motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
