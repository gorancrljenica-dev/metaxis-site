"use client";

import { motion } from "framer-motion";
import { Brain, Zap, HeartPulse } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI Decision Support",
    description:
      "Computable clinical guidelines and evidence-based decision tools that augment clinician judgment — not replace it.",
    gradient: "from-violet-500/10 to-purple-500/5",
    border: "hover:border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "End-to-end workflow automation for operations, communications, and data pipelines — built to scale cleanly.",
    gradient: "from-indigo-500/10 to-blue-500/5",
    border: "hover:border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
  {
    icon: HeartPulse,
    title: "Digital Health Tools",
    description:
      "Patient-facing and clinical digital tools — screening instruments, monitoring dashboards, health applications.",
    gradient: "from-sky-500/10 to-cyan-500/5",
    border: "hover:border-sky-500/30",
    iconColor: "text-sky-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhatIBuild() {
  return (
    <section className="py-32 px-6">
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
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What I Build
          </h2>
          <p className="text-zinc-500 mt-3 max-w-lg text-base">
            Systems where structured intelligence and human decision-making
            intersect.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className={`group relative p-6 rounded-xl border border-zinc-800 bg-gradient-to-br ${item.gradient} bg-zinc-900/40 ${item.border} transition-all duration-300 card-glow cursor-default`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 ${item.iconColor}`}
                >
                  <Icon size={20} />
                </div>

                {/* Text */}
                <h3 className="text-white font-semibold text-lg mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-white/3 to-transparent" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
