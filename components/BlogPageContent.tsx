"use client";

import { motion } from "framer-motion";
import { Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { t, type Locale } from "@/lib/i18n";

interface BlogPageContentProps {
  locale?: Locale;
  posts: BlogPost[];
}

export default function BlogPageContent({ locale = "en", posts }: BlogPageContentProps) {
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
            {t("blog.label", locale)}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {t("blog.title", locale)}
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed">
            {t("blog.page.description", locale)}
          </p>
        </motion.div>

        {/* Posts list */}
        {posts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-zinc-600 text-sm"
          >
            Postovi uskoro.
          </motion.p>
        ) : (
          <div className="flex flex-col gap-4 max-w-3xl">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-start gap-5 p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center shrink-0 group-hover:border-zinc-700 transition-colors">
                    <BookOpen size={16} className="text-zinc-500 group-hover:text-zinc-400 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
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
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
