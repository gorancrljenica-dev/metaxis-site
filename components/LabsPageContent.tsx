"use client";

import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import { labProjects } from "@/lib/data";
import { t, type Locale } from "@/lib/i18n";

interface LabsPageContentProps {
  locale?: Locale;
}

export default function LabsPageContent({ locale = "en" }: LabsPageContentProps) {
  const statusConfig = {
    experimental: {
      labelKey: "labs.status.experimental",
      color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    },
    prototype: {
      labelKey: "labs.status.prototype",
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    },
    archived: {
      labelKey: "labs.status.archived",
      color: "text-zinc-500 bg-zinc-500/10 border-zinc-500/20",
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">
            {t("labs.label", locale)}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t("labs.title", locale)}
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            {t("labs.page.description", locale)}
          </p>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-start gap-3 p-4 rounded-lg border border-zinc-800 bg-zinc-900/30 mb-14 max-w-2xl"
        >
          <FlaskConical size={16} className="text-zinc-500 mt-0.5 shrink-0" />
          <p className="text-zinc-500 text-sm leading-relaxed">
            {t("labs.note", locale)}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {labProjects.map((lab, i) => {
            const status = statusConfig[lab.status];
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <FlaskConical size={18} className="text-zinc-600" />
                  <span
                    className={`px-2 py-0.5 text-xs rounded-md border font-medium ${status.color}`}
                  >
                    {t(status.labelKey, locale)}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-violet-200 transition-colors">
                  {lab.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {lab.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {lab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-800/60 border border-zinc-700/50 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
