import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import ProjectsSection from "@/components/ProjectsSection";
import LabsSection from "@/components/LabsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function BsHomePage() {
  return (
    <>
      <Hero locale="bs" />
      <WhatIBuild locale="bs" />
      <div className="border-t border-zinc-800/40" />
      <ProjectsSection locale="bs" />
      <div className="border-t border-zinc-800/40" />
      <LabsSection locale="bs" />
      <div className="border-t border-zinc-800/40" />
      <BlogSection locale="bs" />
      <div className="border-t border-zinc-800/40" />
      <ContactSection locale="bs" />
    </>
  );
}
