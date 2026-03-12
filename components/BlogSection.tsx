"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { t, localePath, type Locale } from "@/lib/i18n";

interface BlogSectionProps {
  locale?: Locale;
}

export default function BlogSection({ locale = "en" }: BlogSectionProps) {
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
              {t("blog.label", locale)}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {t("blog.title", locale)}
            </h2>
            <p className="text-zinc-500 mt-3 text-base max-w-md">
              {t("blog.description", locale)}
            </p>
          </div>
          <Link
            href={localePath("/blog", locale)}
            className="group flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors self-start md:self-auto"
          >
            {t("blog.viewAll", locale)}
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Coming soon banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/40 flex items-center gap-3"
        >
          <BookOpen size={15} className="text-zinc-500 shrink-0" />
          <p className="text-zinc-500 text-sm">
            {t("blog.banner", locale)}
          </p>
        </motion.div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 cursor-default"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs text-zinc-500 bg-zinc-800/60 border border-zinc-700/50 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base mb-2 leading-snug group-hover:text-zinc-200 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-zinc-600 text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-zinc-700 text-xs">
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {post.readTime}
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/50 text-zinc-600">
                  {post.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
