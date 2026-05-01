export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  images?: string[];
  status: "live" | "in-progress" | "coming-soon";
}

export interface LabProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "experimental" | "prototype" | "archived";
}

export const projects: Project[] = [
  {
    id: "cds-hfref",
    title: "CDS HFrEF",
    description:
      "Web application for clinical decision support in heart failure with reduced ejection fraction. Encodes ESC 2021 guidelines into an interactive rule engine — 8 clinical inputs (EF%, NYHA class, blood pressure, heart rate, renal function, potassium, current therapy, clinical limitations) processed through 5 decision rules and 6 safety gates. Outputs 4 structured cards: clinical summary, therapy considerations with rationale, safety warnings, and follow-up recommendations. Zero-backend — fully client-side, no patient data stored.",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui", "ESC 2021"],
    demoUrl: "https://hfref.metaxis.io",
    githubUrl: undefined,
    images: ["/screenshots/cds-hfref.png", "/screenshots/cds-hfref 1.png"],
    status: "live",
  },
  {
    id: "zung-depression",
    title: "Zung Depression Screening",
    description:
      "Digital implementation of the Zung Self-Rating Depression Scale. Provides structured screening, automated scoring, and clinical interpretation guidance.",
    tags: ["Mental Health", "Screening", "Digital Health"],
    demoUrl: "#",
    githubUrl: undefined,
    status: "live",
  },
  {
    id: "metaxis-llm-brain",
    title: "Metaxis LLM Brain",
    description:
      "Personal AI knowledge companion built on the Karpathy-style wiki compilation method — 106 raw source documents distilled into 70 structured knowledge nodes with 857 explicit connections. The graph layer uses a custom Python pipeline to build a navigable wiki with typed relationships. Brain UI exposes three interaction modes: Graph Explorer (vis-network force-directed visualization with live node filtering), Node Reader (markdown rendering with wikilink traversal), and Brain Chat (Claude Sonnet grounded in full vault context — not a generic assistant, but a thinking partner that reasons from your own compiled knowledge). Thinking patterns encoded directly into the system prompt: Flipped Interaction, Role Thinking, Task Planning, Verification.",
    tags: ["Next.js 16", "TypeScript", "Claude API", "Python", "vis-network", "Knowledge Graph", "Obsidian"],
    demoUrl: "https://metaxis-llm-brain-ka8j7baxu-gorancrljenica-devs-projects.vercel.app",
    githubUrl: undefined,
    images: ["/screenshots/brain-graph.png", "/screenshots/brain-chat.png"],
    status: "live",
  },
  {
    id: "therapy-dose-tracker",
    title: "Therapy Dose Tracker",
    description:
      "Installable clinical PWA for managing long-term injection therapy in outpatient practice. Encodes the dosing protocol into a deterministic scheduling engine — handling delays, automatic schedule recalculation, and full therapy resets with complete history preserved. Offline-first with cloud sync (Supabase), multi-user auth, lipid panel tracking per dose, and clinical reports — charts, CSV export, and print. In active clinical use.",
    tags: ["Next.js 16", "TypeScript", "PWA", "Supabase", "Dexie.js", "Recharts", "Offline-first"],
    demoUrl: "https://inclisiran-pwa.vercel.app/",
    githubUrl: undefined,
    images: ["/screenshots/dose-tracker-1.png", "/screenshots/dose-tracker-2.png"],
    status: "live",
  },
];

export const labProjects: LabProject[] = [
  {
    id: "prompt-optimizer",
    title: "Prompt Optimizer",
    description:
      "Experimental tool that iteratively refines LLM prompts using automated evaluation and adversarial testing.",
    tags: ["LLM", "Prompting", "Evaluation"],
    status: "experimental",
  },
  {
    id: "decision-tree-viz",
    title: "Decision Tree Visualizer",
    description:
      "Interactive visualization of clinical decision trees, making complex branching logic auditable and explainable.",
    tags: ["Visualization", "XAI", "Clinical"],
    status: "prototype",
  },
  {
    id: "rag-medlit",
    title: "RAG Medical Literature",
    description:
      "Retrieval-augmented generation over medical literature. Ask clinical questions, get cited answers from PubMed abstracts.",
    tags: ["RAG", "NLP", "Medical"],
    status: "experimental",
  },
  {
    id: "habit-loop",
    title: "Habit Loop AI",
    description:
      "AI-assisted habit tracking that identifies patterns in behavior data and suggests personalized intervention strategies.",
    tags: ["Behavioral AI", "Tracking", "Mobile"],
    status: "prototype",
  },
];

export const blogPosts = [
  {
    id: "building-cds-systems",
    title: "Building Clinical Decision Support Systems",
    excerpt:
      "Lessons learned from translating evidence-based guidelines into computable logic that clinicians can trust.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["CDS", "AI in Medicine"],
  },
  {
    id: "ai-decision-frameworks",
    title: "Decision Frameworks for AI Applications",
    excerpt:
      "How to structure AI systems that support human decision-making without replacing human judgment.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["AI Design", "Ethics"],
  },
  {
    id: "automation-patterns",
    title: "Automation Patterns That Scale",
    excerpt:
      "The recurring patterns I use to build automation systems that remain maintainable as complexity grows.",
    date: "Coming Soon",
    readTime: "10 min read",
    tags: ["Automation", "Engineering"],
  },
];
