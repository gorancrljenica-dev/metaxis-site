import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download — Operativni Sistem za rad sa AI",
  robots: "noindex, nofollow",
};

// Server-side only — never exposed to client bundle
const SECRET_TOKEN = "m8Xp2kQz9vR4nL7s";
const PDF_FILENAME = "b3f9a2c7e5d8f1b4.pdf";

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  if (token !== SECRET_TOKEN) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[13px] uppercase text-zinc-600 tracking-[2px] font-mono mb-4">
            404
          </p>
          <h1 className="text-2xl text-white font-bold mb-3">
            Link nije validan
          </h1>
          <p className="text-zinc-500 text-sm mb-8">
            Ovaj download link ne postoji ili je istekao.
          </p>
          <a
            href="/book"
            className="text-blue-500 hover:text-blue-400 text-sm transition-colors"
          >
            ← Nazad na stranicu knjige
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-6">
      <div className="max-w-md w-full">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[13px] uppercase text-blue-500 tracking-[2px] font-mono mb-4">
            Hvala na kupovini
          </p>
          <h1 className="text-2xl md:text-3xl text-white font-bold mb-3">
            Tvoja knjiga je spremna
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Klikni dugme ispod da preuzmete PDF.
            Sačuvaj link — možeš preuzeti u bilo koje vrijeme.
          </p>
        </div>

        {/* Download card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            {/* Mini cover */}
            <div
              className="shrink-0 w-12 h-16 rounded-md overflow-hidden shadow-lg"
              style={{
                background: "linear-gradient(160deg, #0b1e3d 0%, #0d2247 55%, #081428 100%)",
              }}
            >
              <div className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />
              <div className="p-1.5 pt-2">
                <p className="text-white font-bold text-[7px] leading-tight mb-0.5">Operativni<br />Sistem</p>
                <p className="text-blue-400 font-bold text-[12px] leading-none">AI</p>
              </div>
            </div>

            <div>
              <p className="text-white font-semibold text-sm mb-0.5">
                Operativni Sistem za rad sa AI
              </p>
              <p className="text-zinc-500 text-xs font-mono">
                Goran Crljenica · PDF · Bosanska verzija
              </p>
            </div>
          </div>

          <a
            href={`/dl/${PDF_FILENAME}`}
            download="Operativni-Sistem-za-rad-sa-AI.pdf"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Preuzmi PDF
          </a>
        </div>

        <p className="text-zinc-700 text-xs text-center font-mono leading-relaxed">
          Pitanja? hello@metaxis.io
        </p>

      </div>
    </div>
  );
}
