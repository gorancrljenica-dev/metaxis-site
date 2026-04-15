"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as const },
};

const viewportOpts = { once: true, margin: "-80px" };

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] uppercase text-red-600 tracking-[2px] font-medium mb-3">
      {children}
    </p>
  );
}

function BlockHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] md:text-[26px] text-white font-bold leading-tight mb-5">
      {children}
    </h2>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-base text-[#cccccc] leading-[1.7] ${className}`}>
      {children}
    </p>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] text-[#555555] font-mono uppercase tracking-[1px] mb-1">
      {children}
    </p>
  );
}

export default function MinisitePage() {
  return (
    <div className="bg-[#09090b]">

      {/* ─── #HOME ───────────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center scroll-mt-16"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-7xl md:text-8xl font-bold tracking-tight text-white mb-6"
          >
            Metaxis
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-[#cccccc] leading-relaxed mb-2">
            AI systems and decision tools for complex problems.
          </motion.p>
          <motion.p variants={fadeUp} className="text-base text-[#777777] leading-relaxed mb-10">
            For organizations where stakes are high and choices are hard.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-colors duration-200"
            >
              See the work <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── #WORK ───────────────────────────────────────────────────── */}
      <section
        id="work"
        className="py-24 px-6 border-t border-zinc-800/40 scroll-mt-16"
      >
        <div className="max-w-2xl mx-auto">
          <SectionLabel>Case Study</SectionLabel>
          <h1 className="text-3xl md:text-4xl text-white font-bold leading-snug mb-20">
            Clinical Decision Support<br />for HFrEF
          </h1>

          {/* 1. CLIENT CONTEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
            className="mb-16"
          >
            <SectionLabel>Client Context</SectionLabel>
            <BlockHeading>Who they are and what they needed</BlockHeading>
            <Body>
              CDS is a clinical research team building evidence-based tools for
              cardiologists managing heart failure with reduced ejection fraction
              (HFrEF). They needed a structured, computable version of the ESC 2021
              treatment algorithm — one clinicians could use at the point of care to
              generate patient-specific therapy recommendations without manual
              guideline lookup.
            </Body>
          </motion.div>

          {/* 2. PROBLEM STATEMENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
            className="mb-16"
          >
            <SectionLabel>Problem</SectionLabel>
            <BlockHeading>The situation before</BlockHeading>
            <div className="space-y-4">
              {[
                {
                  tag: "Before",
                  text: "Cardiologists manually cross-referenced patient data against a multi-step ESC guideline flowchart — a process taking 10–15 minutes per patient.",
                },
                {
                  tag: "Gap",
                  text: "No tool translated the full guideline logic into real-time, patient-specific therapy recommendations.",
                },
                {
                  tag: "Stakes",
                  text: "Delayed or inconsistent initiation of guideline-directed therapy in HFrEF is directly linked to preventable hospitalizations and increased mortality.",
                },
              ].map(({ tag, text }) => (
                <div key={tag} className="flex gap-4">
                  <span className="shrink-0 w-[52px] text-[13px] text-red-600 font-mono uppercase tracking-[1px] pt-[3px]">
                    {tag}
                  </span>
                  <Body>{text}</Body>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. WHAT WAS DONE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
            className="mb-16"
          >
            <SectionLabel>Deliverables</SectionLabel>
            <BlockHeading>What was built</BlockHeading>
            <ul className="space-y-3">
              {[
                "Rule-based decision engine encoding the full ESC 2021 HFrEF treatment algorithm",
                "Structured patient input form capturing EF%, NYHA class, comorbidities, and current medications",
                "Therapy recommendation engine producing ranked, prioritized drug-class suggestions with dosing targets",
                "Web-based interface deployable in a clinical browser environment",
                "Exportable clinical summary output formatted for patient records",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-[11px] w-1 h-1 rounded-full bg-red-600 block" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. HOW IT WAS DONE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
            className="mb-16"
          >
            <SectionLabel>Process</SectionLabel>
            <BlockHeading>How it was done</BlockHeading>
            <ul className="space-y-3">
              {[
                "Parsed ESC 2021 guideline text and structured it into computable decision logic with explicit branching conditions",
                "Built in Next.js and TypeScript to ensure type-safe, reliable handling of clinical data",
                "Implemented input validation preventing incomplete or contradictory patient profiles from producing recommendations",
                "Tested against 20 de-identified HFrEF patient scenarios to verify guideline concordance before delivery",
                "Used component-based architecture to support future guideline version updates without full rewrites",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="shrink-0 mt-[11px] w-1 h-1 rounded-full bg-red-600 block" />
                  <Body>{item}</Body>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 5. RESULT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
            className="mb-8"
          >
            <SectionLabel>Result</SectionLabel>
            <BlockHeading>What changed</BlockHeading>
            <div className="space-y-5">
              {[
                {
                  tag: "Before",
                  muted: true,
                  text: "10–15 minutes per patient to manually map clinical data to guideline recommendations. Accuracy dependent on individual clinician recall of the full algorithm.",
                },
                {
                  tag: "After",
                  muted: false,
                  text: "Guideline-concordant therapy recommendation generated in under 30 seconds. Any clinician on the team can now assess a patient consistently, regardless of HFrEF experience level.",
                },
                {
                  tag: "Impact",
                  muted: false,
                  text: "The clinical team can screen and stage HFrEF patients at scale, with consistent guideline adherence across every encounter.",
                },
              ].map(({ tag, muted, text }) => (
                <div key={tag} className="flex gap-4">
                  <span
                    className={`shrink-0 w-[52px] text-[13px] font-mono uppercase tracking-[1px] pt-[3px] ${
                      muted ? "text-[#555555]" : "text-white"
                    }`}
                  >
                    {tag}
                  </span>
                  <Body>{text}</Body>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CREDIBILITY BLOCK */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
            className="mt-10 mb-16 border border-zinc-800 rounded-lg p-6 flex flex-wrap gap-8"
          >
            <div>
              <Meta>Duration</Meta>
              <p className="text-white text-sm font-medium">4-week engagement</p>
            </div>
            <div>
              <Meta>Stack</Meta>
              <p className="text-white text-sm font-medium">Next.js · TypeScript · ESC 2021 Guidelines</p>
            </div>
            <div>
              <Meta>Format</Meta>
              <p className="text-white text-sm font-medium">One-time delivery</p>
            </div>
          </motion.div>

          {/* 6. WHAT THIS MEANS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
            className="mb-16 pl-5 border-l-2 border-red-600"
          >
            <SectionLabel>What this means</SectionLabel>
            <p className="text-base text-white leading-[1.7] font-medium">
              Metaxis can encode complex clinical protocols into production-ready decision tools.
            </p>
          </motion.div>

          {/* END CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
            className="border border-zinc-800 rounded-lg p-8 text-center"
          >
            <h3 className="text-white text-xl font-bold mb-2">
              Working on something similar?
            </h3>
            <p className="text-[#777777] text-sm mb-6">
              Clinical decision support, AI systems, or knowledge tooling.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-colors duration-200"
            >
              Get in touch <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── #ABOUT ──────────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-24 px-6 border-t border-zinc-800/40 scroll-mt-16"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
          >
            <SectionLabel>About</SectionLabel>
            <BlockHeading>What Metaxis is</BlockHeading>
            <div className="space-y-5">
              <Body>
                Metaxis builds AI systems for decisions that matter. The focus is on
                structured intelligence — encoding human expertise and clinical evidence
                into tools that are precise, reliable, and ready to deploy.
              </Body>
              <Body>
                Work spans clinical decision support, knowledge management, and
                operational automation. The common thread: problems where complexity is
                high, stakes are real, and off-the-shelf software falls short.
              </Body>
              <Body>
                Every engagement starts with the problem, not the technology. The output
                is a tool that works in the environment it was built for — whether that&apos;s
                a clinical browser, an internal ops dashboard, or a research workflow.
              </Body>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── #CONTACT ────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 px-6 border-t border-zinc-800/40 scroll-mt-16"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            variants={fadeUp}
          >
            <SectionLabel>Contact</SectionLabel>
            <BlockHeading>Get in touch</BlockHeading>
            <Body className="mb-8">
              Open to consulting engagements, research collaborations, and
              conversations about applying AI to complex problems.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="mailto:hello@metaxis.dev"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-colors duration-200"
              >
                hello@metaxis.dev <ArrowRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/metaxis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 rounded-lg font-medium text-sm hover:border-zinc-500 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-[12px] text-[#555555]">
              © {new Date().getFullYear()} Metaxis
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
