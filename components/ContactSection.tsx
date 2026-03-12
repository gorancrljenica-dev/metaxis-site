"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { t, type Locale } from "@/lib/i18n";

interface ContactSectionProps {
  locale?: Locale;
}

export default function ContactSection({ locale = "en" }: ContactSectionProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">
            {t("contact.label", locale)}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {t("contact.title", locale)}
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              {t("contact.p1", locale)}
            </p>
            <p className="text-zinc-600 text-base leading-relaxed">
              {t("contact.p2", locale)}
            </p>
          </motion.div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                  <Linkedin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t("contact.linkedin", locale)}</p>
                  <p className="text-zinc-600 text-xs">{t("contact.linkedin.sub", locale)}</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:hello@metaxis.dev"
              className="group flex items-center justify-between p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center">
                  <Mail size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t("contact.email", locale)}</p>
                  <p className="text-zinc-600 text-xs">hello@metaxis.dev</p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
