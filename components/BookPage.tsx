"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import BrevoSignupForm from "@/components/BrevoSignupForm";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as const },
};
const viewport = { once: true, margin: "-60px" };

// ── Book Cover ────────────────────────────────────────────────────────────────

function BookCover() {
  return (
    <div className="relative shrink-0">
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl bg-blue-600/20 rounded-2xl scale-110" />

      {/* Cover */}
      <div
        className="relative w-52 h-72 md:w-64 md:h-88 rounded-xl overflow-hidden shadow-2xl shadow-black/60"
        style={{
          background: "linear-gradient(160deg, #0b1e3d 0%, #0d2247 55%, #081428 100%)",
        }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(circle, #60a5fa 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />

        {/* Content */}
        <div className="relative z-10 p-5 h-full flex flex-col justify-between">
          <div>
            <p className="text-blue-300/50 text-[9px] font-mono uppercase tracking-[4px] mb-5">
              Metaxis · 2026
            </p>
            <h2 className="text-white font-bold text-[22px] md:text-2xl leading-[1.15] mb-1">
              Operativni<br />Sistem
            </h2>
            <p className="text-white/40 text-sm mb-3">za rad sa</p>
            <p
              className="font-bold text-[56px] md:text-[64px] leading-none"
              style={{ color: "#60a5fa" }}
            >
              AI
            </p>
          </div>

          <div>
            <div className="w-12 h-px bg-white/20 mb-3" />
            <p className="text-white/75 text-[13px] font-medium">Goran Crljenica</p>
            <p className="text-white/30 text-[10px] mt-0.5 font-mono">
              Prvo izdanje · 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Buy Button ────────────────────────────────────────────────────────────────

const PAYPAL_URL = "https://www.paypal.com/ncp/payment/G3Q2HE54HA55G";

function BuyButton({ size = "default" }: { size?: "default" | "large" }) {
  const isLarge = size === "large";
  return (
    <a
      href={PAYPAL_URL}
      className={`inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 ${
        isLarge ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"
      }`}
    >
      Kupi — 20 EUR <ArrowRight size={isLarge ? 18 : 16} />
    </a>
  );
}

// ── Topic Cards ───────────────────────────────────────────────────────────────

const topics = [
  {
    num: "01",
    title: "Kontrola outputa",
    items: ["Komande i kompozicija", "Šabloni i recepti", "Output format", "Meta-jezik"],
  },
  {
    num: "02",
    title: "Mentalni modeli",
    items: ["Flipped Interaction", "Few-shot učenje", "Game-play pristup", "Uloge i persone"],
  },
  {
    num: "03",
    title: "Sigurnost i granice",
    items: ["Guardrails i hard-stop", "Nesigurnost modela", "Granice alata", "Evaluacija outputa"],
  },
  {
    num: "04",
    title: "Od prompta do sistema",
    items: ["Agent loopovi", "Planiranje i task grafovi", "Orchestration", "Production readiness"],
  },
  {
    num: "05",
    title: "Rad sa podacima",
    items: ["JSON structuring", "Data transformation", "OCR i vizualni input", "Tabular reasoning"],
  },
  {
    num: "06",
    title: "Napredni obrasci",
    items: ["ReAct (Reasoning + Acting)", "Self-correction loops", "RAG i memorija", "Multi-modal reasoning"],
  },
];

// ── Main Component ────────────────────────────────────────────────────────────

export default function BookPage() {
  return (
    <div className="bg-[#09090b] pt-20">

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

            {/* Cover */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BookCover />
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex-1"
            >
              <motion.p
                variants={fadeUp}
                className="text-[13px] uppercase text-blue-500 tracking-[2px] font-medium mb-4"
              >
                Knjiga · Prvo izdanje · 2026
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl text-white font-bold leading-[1.1] tracking-tight mb-4"
              >
                Operativni Sistem<br />
                <span className="text-blue-400">za rad sa AI</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base text-[#aaaaaa] leading-[1.7] mb-3"
              >
                Mentalni obrasci za rad sa vještačkom inteligencijom.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base text-[#cccccc] leading-[1.7] mb-8 max-w-lg"
              >
                Ne hype. Ne trendovi. Sistem za kontrolu, provjeru i
                ponovljive rezultate — 57 lekcija iz operativne prakse.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <BuyButton />
                <p className="text-[12px] text-[#555] font-mono">
                  PDF · Digitalni download · PayPal
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-zinc-800/60"
              >
                {[
                  { val: "57", label: "lekcija" },
                  { val: "6", label: "tematskih blokova" },
                  { val: "2", label: "verzije (BS · EN)" },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="text-white text-xl font-bold">{val}</p>
                    <p className="text-[#555] text-[12px] font-mono">{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ZA KOGA JE ──────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="text-[13px] uppercase text-blue-500 tracking-[2px] font-medium mb-3">
              Čitalac
            </p>
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Za koga je ova knjiga
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Jest */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <p className="text-[12px] font-mono uppercase tracking-[1px] text-blue-400 mb-4">
                Jest za tebe ako
              </p>
              <ul className="space-y-3">
                {[
                  "Koristiš AI u stvarnom radu — svakodnevno",
                  "Umoran si od nepredvidivih, nestabilnih outputa",
                  "Razmišljaš u sistemima, ne u trikovima",
                  "Hoćeš razumjeti model, ne samo ga koristiti",
                  "Gradiš procese u kojima AI ima definisanu ulogu",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={15} className="text-blue-400 shrink-0 mt-[3px]" />
                    <span className="text-[#cccccc] text-sm leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Nije */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={{ ...fadeUp, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1, ease: "easeOut" } } }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <p className="text-[12px] font-mono uppercase tracking-[1px] text-[#555] mb-4">
                Nije za tebe ako
              </p>
              <ul className="space-y-3">
                {[
                  "Tražiš zbirku gotovih promptova za kopiranje",
                  "Hoćeš brze trikove bez razumijevanja",
                  "Čekaš da AI postane \"dovoljno dobar\" sam od sebe",
                  "Nisi spreman mijenjati način na koji razmišljaš",
                  "Pitanje ti je \"koji je najbolji AI\" — ne \"kako ga kontrolirati\"",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={15} className="text-zinc-600 shrink-0 mt-[3px]" />
                    <span className="text-[#666666] text-sm leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ŠTA JE UNUTRA ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="text-[13px] uppercase text-blue-500 tracking-[2px] font-medium mb-3">
              Sadržaj
            </p>
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-3">
              57 lekcija u 6 blokova
            </h2>
            <p className="text-[#888] text-base max-w-xl">
              Svaka lekcija je operativna — definicija, struktura prompta,
              primjeri upotrebe, gotovi primjeri.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.num}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" } },
                }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 hover:border-zinc-700 transition-colors"
              >
                <p className="text-[12px] font-mono text-blue-500/60 mb-2">{topic.num}</p>
                <h3 className="text-white font-semibold text-base mb-3">{topic.title}</h3>
                <ul className="space-y-1.5">
                  {topic.items.map((item) => (
                    <li key={item} className="text-[#777] text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── O AUTORU ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
            >
              <p className="text-[13px] uppercase text-blue-500 tracking-[2px] font-medium mb-3">
                Autor
              </p>
              <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
                Goran Crljenica
              </h2>
              <div className="space-y-4">
                <p className="text-base text-[#cccccc] leading-[1.7]">
                  Profesionalni put kroz više industrija i organizacijskih
                  nivoa — od operativnih pozicija do strateških odgovornosti.
                  Iskustvo obuhvata prodaju, logistiku, koordinaciju procesa i rad
                  u strukturiranim industrijskim i zdravstvenim okruženjima.
                </p>
                <p className="text-base text-[#cccccc] leading-[1.7]">
                  Ulazak u oblast vještačke inteligencije nije bio vođen
                  trendovima ili hype-om, već načinom razmišljanja zasnovanim
                  na sistemima. Umjesto da jezičke modele posmatra kao alat za
                  brze odgovore, pristupio im je kao kompleksnim operativnim
                  sistemima — kroz definisanje ograničenja, mapiranje zavisnosti
                  i izgradnju ponovljivih procesa.
                </p>
                <p className="text-base text-[#aaaaaa] leading-[1.7]">
                  Ova knjiga je rezultat tog pristupa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EMAIL SIGNUP ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
            >
              <p className="text-[13px] uppercase text-blue-500 tracking-[2px] font-medium mb-3">
                Besplatno
              </p>
              <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
                Preuzmi prvo poglavlje
              </h2>
              <p className="text-[#888] text-base leading-relaxed">
                Upiši email i dobij prvi blok knjige — 10 lekcija o kontroli
                outputa — besplatno. Bez spama, samo sadržaj.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
            >
              <BrevoSignupForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── END CTA ─────────────────────────────────────────────────────── */}
      <section id="purchase" className="py-20 px-6 border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-10 md:p-14 text-center"
          >
            <p className="text-[13px] uppercase text-blue-500 tracking-[2px] font-medium mb-4">
              Dostupno odmah
            </p>
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
              Preuzmi odmah
            </h2>
            <p className="text-[#888] text-base leading-relaxed mb-6 max-w-md mx-auto">
              Bosanska verzija dostupna kao PDF download.
              57 lekcija operativnih obrazaca za rad sa AI.
            </p>
            <p className="text-white text-3xl font-bold mb-6">
              20 EUR
            </p>
            <div className="flex justify-center mb-4">
              <BuyButton size="large" />
            </div>
            <p className="text-[#444] text-xs font-mono">
              Nakon plaćanja dobit ćeš link za preuzimanje.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Small footer spacing */}
      <div className="h-12" />
    </div>
  );
}
