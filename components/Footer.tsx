import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <span className="text-zinc-400 text-sm">Metaxis</span>
        </div>

        <p className="text-zinc-600 text-sm">
          Building AI systems that support human decisions.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/projects"
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/labs"
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            Labs
          </Link>
          <Link
            href="/contact"
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
