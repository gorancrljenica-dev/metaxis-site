"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { labProjects } from "@/lib/data";

const statusConfig = {
  experimental: {
    label: "Experimental",
    color: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
  prototype: {
    label: "Prototype",
    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  archived: {
    label: "Archived",
    color: "text-zinc-500 bg-zinc-500/10 border-zinc-500/20",
  },
};

export default function LabsSection() {
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
              Experiments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Labs
            </h2>
            <p className="text-zinc-500 mt-3 text-base max-w-md">
              Smaller, experimental AI projects — prototypes, proofs-of-concept,
              and novel ideas.
            </p>
          </div>
          <Link
            href="/labs"
            className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors self-start md:self-auto"
          >
            View all experiments
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {labProjects.map((lab, i) => {
            const status = statusConfig[lab.status];
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <FlaskConical size={15} className="text-zinc-600" />
                  <span
                    className={`px-2 py-0.5 text-xs rounded-md border font-medium ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>

                <h3 className="text-white font-medium text-sm mb-2 group-hover:text-violet-200 transition-colors">
                  {lab.title}
                </h3>
                <p className="text-zinc-600 text-xs leading-relaxed mb-4">
                  {lab.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {lab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 text-xs text-zinc-600 bg-zinc-800/60 rounded"
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
    </section>
  );
}
