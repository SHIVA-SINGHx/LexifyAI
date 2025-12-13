import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const missing = [] as string[];
    const keys = ["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY", "CLERK_SECRET_KEY"];
    const values: Record<string, string | null> = {};
    for (const k of keys) {
      const v = process.env[k] ?? null;
      values[k] = v;
      if (!v) missing.push(k);
    }

    return NextResponse.json({ missing, values });
  } catch (err) {
    console.error("[/api/debug-env] error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
