import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import ProjectsSection from "@/components/ProjectsSection";
import LabsSection from "@/components/LabsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts();
  return (
    <>
      <Hero locale="en" />
      <WhatIBuild locale="en" />
      <div className="border-t border-zinc-800/40" />
      <ProjectsSection locale="en" />
      <div className="border-t border-zinc-800/40" />
      <LabsSection locale="en" />
      <div className="border-t border-zinc-800/40" />
      <BlogSection locale="en" posts={posts} />
      <div className="border-t border-zinc-800/40" />
      <ContactSection locale="en" />
    </>
  );
}
