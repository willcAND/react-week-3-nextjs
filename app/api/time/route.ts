import { NextResponse } from "next/server";

// Force this route handler to run on every request so the timestamp is fresh.
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    time: new Date().toLocaleString(),
    message: "Hello from a Next.js route api/time.",
  });
}
