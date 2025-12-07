import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const user = auth();
    if (!user.userId) {
      return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, templateUsed } = body ?? {};

    if (!description || !templateUsed) {
      return NextResponse.json({ error: "Missing required fields: description or templateUsed" }, { status: 400 });
    }

    const created = await db.ai_output.create({
      data: {
        userId: user.userId,
        title: title ?? null,
        description,
        templateUsed,
      },
    });

    return NextResponse.json({ success: true, id: created.id });
  } catch (err: any) {
    console.error("[/api/save-content] error:", err?.stack ?? err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}