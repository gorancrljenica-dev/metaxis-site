"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { t, type Locale } from "@/lib/i18n";

interface ProjectCardProps {
  project: Project;
  index?: number;
  locale?: Locale;
}

export default function ProjectCard({ project, index = 0, locale = "en" }: ProjectCardProps) {
  const statusConfig = {
    live: { labelKey: "projects.status.live", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
    "in-progress": { labelKey: "projects.status.inProgress", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    "coming-soon": { labelKey: "projects.status.comingSoon", color: "text-zinc-400 bg-zinc-400/10 border-zinc-400/20" },
  };

  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300 card-glow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg tracking-tight group-hover:text-violet-200 transition-colors">
            {project.title}
          </h3>
          <span
            className={`inline-block mt-1.5 px-2 py-0.5 text-xs rounded-md border font-medium ${status.color}`}
          >
            {t(status.labelKey, locale)}
          </span>
        </div>
        {project.demoUrl && (
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-zinc-600 hover:text-zinc-300 transition-colors mt-1"
            aria-label="Open demo"
          >
            <ArrowUpRight size={18} />
          </motion.a>
        )}
      </div>

      {/* Description */}
      <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs text-zinc-400 bg-zinc-800/80 border border-zinc-700/50 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/60">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ExternalLink size={13} />
            {t("projects.demo", locale)}
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-xs text-zinc-600 cursor-not-allowed">
            <ExternalLink size={13} />
            {t("projects.demoUnavailable", locale)}
          </span>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <Github size={13} />
            {t("projects.github", locale)}
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-xs text-zinc-700 cursor-not-allowed">
            <Github size={13} />
            {t("projects.githubSoon", locale)}
          </span>
        )}
      </div>
    </motion.div>
  );
}
