"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { t, type Locale } from "@/lib/i18n";

interface ProjectsPageContentProps {
  locale?: Locale;
}

export default function ProjectsPageContent({ locale = "en" }: ProjectsPageContentProps) {
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
            {t("projects.page.label", locale)}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t("projects.title", locale)}
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            {t("projects.page.description", locale)}
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap gap-6 mb-14"
        >
          {[
            { labelKey: "projects.stat.total", value: projects.length },
            {
              labelKey: "projects.stat.live",
              value: projects.filter((p) => p.status === "live").length,
            },
            {
              labelKey: "projects.stat.inProgress",
              value: projects.filter((p) => p.status === "in-progress").length,
            },
          ].map((stat) => (
            <div
              key={stat.labelKey}
              className="px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/40"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{t(stat.labelKey, locale)}</p>
            </div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} locale={locale} />
          ))}
        </div>
      </div>
    </div>
  );
}
