"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen, Rss } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
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
            Writing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            Thoughts on AI systems design, clinical informatics, automation
            patterns, and building tools that matter.
          </p>
        </motion.div>

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex items-center gap-3 p-4 rounded-lg border border-violet-500/20 bg-violet-500/5 mb-14 max-w-2xl"
        >
          <Rss size={16} className="text-violet-400 shrink-0" />
          <div>
            <p className="text-violet-300 text-sm font-medium">
              Blog launching soon
            </p>
            <p className="text-zinc-600 text-xs mt-0.5">
              First posts in development. Previews below.
            </p>
          </div>
        </motion.div>

        {/* Posts list */}
        <div className="flex flex-col gap-4 max-w-3xl">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row sm:items-start gap-5 p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center shrink-0">
                <BookOpen size={16} className="text-zinc-500" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-800/60 border border-zinc-700/50 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-white font-semibold text-base mb-1.5 leading-snug group-hover:text-zinc-200 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed mb-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-zinc-700 text-xs">
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/50">
                    {post.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
