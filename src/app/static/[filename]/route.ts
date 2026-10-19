import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;
  const upstreamUrl = `https://mosano.eu/static/${ encodeURIComponent(filename) }`;

  try {
    const res = await fetch(upstreamUrl, {
      cache: "force-cache",
    });

    if (!res.ok) {
      return new NextResponse("Not found", { status: res.status });
    }

    const buffer = await res.arrayBuffer();
    const contentType = filename.endsWith(".otf")
      ? "font/otf"
      : filename.endsWith(".woff2")
      ? "font/woff2"
      : filename.endsWith(".woff")
      ? "font/woff"
      : res.headers.get("content-type") || "application/octet-stream";

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch {
    return new NextResponse("Error fetching static asset", { status: 502 });
  }
}
