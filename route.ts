import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  const arUrl = process.env.NEXT_PUBLIC_AR_URL || "/ar";
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || "";
  return NextResponse.json({ ok: true, env: { NEXT_PUBLIC_AR_URL: arUrl, NEXT_PUBLIC_WHATSAPP: wa ? "set" : "missing" } });
}
