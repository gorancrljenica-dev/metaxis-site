"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MessageSquare } from "lucide-react";
import { t, type Locale } from "@/lib/i18n";

interface ContactPageContentProps {
  locale?: Locale;
}

export default function ContactPageContent({ locale = "en" }: ContactPageContentProps) {
  const interestKeys = [
    "contact.page.item1",
    "contact.page.item2",
    "contact.page.item3",
    "contact.page.item4",
    "contact.page.item5",
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">
            {t("contact.label", locale)}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t("contact.title", locale)}
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            {t("contact.page.description", locale)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Left — about */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
                <MessageSquare size={18} className="text-violet-400" />
              </div>
              <h3 className="text-white font-semibold mb-3">
                {t("contact.page.cardTitle", locale)}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                {t("contact.page.cardIntro", locale)}
              </p>
              <ul className="space-y-2 text-zinc-600 text-sm">
                {interestKeys.map((key) => (
                  <li key={key} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    {t(key, locale)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 flex flex-col gap-4"
          >
            {/* Email */}
            <a
              href="mailto:hello@metaxis.io"
              className="group flex items-center justify-between p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center">
                  <Mail size={20} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{t("contact.email", locale)}</p>
                  <p className="text-zinc-500 text-sm mt-0.5">
                    hello@metaxis.io
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            {/* Response note */}
            <p className="text-zinc-700 text-xs px-2">
              {t("contact.response", locale)}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
