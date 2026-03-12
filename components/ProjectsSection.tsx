"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
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
              Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <p className="text-zinc-500 mt-3 text-base max-w-md">
              Production tools and systems built for real-world clinical and
              operational use.
            </p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors self-start md:self-auto"
          >
            View all projects
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
