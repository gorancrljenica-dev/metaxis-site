"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  // Homepage and BS homepage have their own contact/footer section
  if (pathname === "/" || pathname === "/bs") return null;
  return <Footer />;
}
