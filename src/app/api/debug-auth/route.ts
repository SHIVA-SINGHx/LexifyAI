import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
  try {
    const user = await auth();
    const cookieHeader = req.headers.get("cookie");

    return NextResponse.json({
      isSignedIn: !!user.userId,
      userId: user.userId ?? null,
      cookies: cookieHeader ?? null,
    });
  } catch (err: unknown) {
    console.error("[/api/debug-auth] error:", (err as Error)?.stack ?? err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
