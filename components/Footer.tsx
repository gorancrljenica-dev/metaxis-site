"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t, detectLocale, localePath } from "@/lib/i18n";

export default function Footer() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);

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
          {t("footer.tagline", locale)}
        </p>

        <div className="flex items-center gap-6">
          <Link
            href={localePath("/projects", locale)}
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            {t("footer.projects", locale)}
          </Link>
          <Link
            href={localePath("/labs", locale)}
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            {t("footer.labs", locale)}
          </Link>
          <Link
            href={localePath("/contact", locale)}
            className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
          >
            {t("footer.contact", locale)}
          </Link>
        </div>
      </div>
    </footer>
  );
}
