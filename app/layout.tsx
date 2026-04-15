import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metaxis",
  description: "AI systems and decision tools for complex problems.",
  keywords: ["AI", "clinical decision support", "automation", "digital health"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
