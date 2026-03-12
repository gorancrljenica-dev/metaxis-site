"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
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
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            Production AI systems and tools — clinical decision support,
            digital health instruments, and operational automation.
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
            { label: "Total Projects", value: projects.length },
            {
              label: "Live",
              value: projects.filter((p) => p.status === "live").length,
            },
            {
              label: "In Progress",
              value: projects.filter((p) => p.status === "in-progress").length,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/40"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-zinc-500 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
