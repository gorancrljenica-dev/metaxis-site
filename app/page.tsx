import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import ProjectsSection from "@/components/ProjectsSection";
import LabsSection from "@/components/LabsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <div className="border-t border-zinc-800/40" />
      <ProjectsSection />
      <div className="border-t border-zinc-800/40" />
      <LabsSection />
      <div className="border-t border-zinc-800/40" />
      <BlogSection />
      <div className="border-t border-zinc-800/40" />
      <ContactSection />
    </>
  );
}
