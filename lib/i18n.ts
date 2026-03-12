import en from "@/locales/en.json";
import bs from "@/locales/bs.json";

export type Locale = "en" | "bs";

const translations: Record<Locale, Record<string, string>> = { en, bs };

export function t(key: string, locale: Locale = "en"): string {
  return translations[locale][key] ?? translations["en"][key] ?? key;
}

/** Prepend /bs prefix for non-English routes. Handles "/" correctly. */
export function localePath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return `/bs${path === "/" ? "" : path}`;
}

/** Detect locale from a pathname string. */
export function detectLocale(pathname: string): Locale {
  return pathname.startsWith("/bs") ? "bs" : "en";
}

/** Strip /bs prefix to get the base path. */
export function basePath(pathname: string): string {
  if (pathname.startsWith("/bs")) {
    return pathname.slice(3) || "/";
  }
  return pathname;
}
