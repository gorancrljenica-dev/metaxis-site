import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Metaxis`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm transition-colors mb-10"
        >
          <ArrowLeft size={15} />
          Svi postovi
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug mb-4">
            {post.title}
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed mb-5">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-zinc-600 text-xs font-mono border-t border-zinc-800 pt-5">
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              {post.readTime}
            </span>
            <span>{post.date}</span>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-zinc max-w-none
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-zinc-300 prose-p:leading-[1.8] prose-p:mb-5
          prose-li:text-zinc-300 prose-li:leading-[1.7]
          prose-strong:text-white prose-strong:font-semibold
          prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300
          prose-code:text-blue-400 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
          prose-blockquote:border-l-violet-500 prose-blockquote:text-zinc-400
          prose-hr:border-zinc-800
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft size={15} />
            Svi postovi
          </Link>
        </div>

      </div>
    </div>
  );
}
