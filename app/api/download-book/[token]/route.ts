import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const validToken = process.env.BOOK_DOWNLOAD_TOKEN;
  const filename = process.env.BOOK_PDF_FILENAME;

  if (!validToken || !filename || token !== validToken) {
    return new Response("Not found", { status: 404 });
  }

  let file: Buffer;
  try {
    const filePath = path.join(process.cwd(), "data", "downloads", filename);
    file = await readFile(filePath);
  } catch {
    return new Response("Not found", { status: 404 });
  }

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="operativni-sistem-za-rad-sa-ai.pdf"',
      "Cache-Control": "private, no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
