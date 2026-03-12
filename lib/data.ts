export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
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
      "Clinical decision support tool for heart failure with reduced ejection fraction. Assists clinicians in evidence-based treatment decisions using validated guideline algorithms.",
    tags: ["Clinical AI", "Decision Support", "Cardiology"],
    demoUrl: "#",
    githubUrl: undefined,
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
    id: "sports-club-manager",
    title: "Sports Club Manager",
    description:
      "Full-stack automation system for sports club operations — member management, scheduling, communications, and analytics in one unified platform.",
    tags: ["Automation", "Full-Stack", "SaaS"],
    demoUrl: "#",
    githubUrl: undefined,
    status: "in-progress",
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
