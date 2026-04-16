import type { Metadata } from "next";
import BookPage from "@/components/BookPage";

export const metadata: Metadata = {
  title: "Operativni Sistem za rad sa AI — Goran Crljenica | Metaxis",
  description:
    "57 lekcija o mentalnim obrascima za rad sa vještačkom inteligencijom. Kontrola outputa, agent loopovi, guardrails, RAG — operativni vodič za ljude koji AI koriste u stvarnom radu.",
};

export default function BookRoute() {
  return <BookPage />;
}
