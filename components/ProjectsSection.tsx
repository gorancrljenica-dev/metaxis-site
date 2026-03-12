"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";
import { t, localePath, type Locale } from "@/lib/i18n";

interface ProjectsSectionProps {
  locale?: Locale;
}

export default function ProjectsSection({ locale = "en" }: ProjectsSectionProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">
              {t("projects.label", locale)}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t("projects.title", locale)}
            </h2>
            <p className="text-zinc-500 mt-3 text-base max-w-md">
              {t("projects.description", locale)}
            </p>
          </div>
          <Link
            href={localePath("/projects", locale)}
            className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors self-start md:self-auto"
          >
            {t("projects.viewAll", locale)}
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
