// app/api/login/route.ts (Next.js 13+ App Router)
import { NextRequest, NextResponse } from "next/server";
import { users } from "@/lib/data";

// Sadə CORS helper
function getCorsHeaders(req: NextRequest) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// OPTIONS preflight handler
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(req) });
}

// POST handler
export async function POST(req: NextRequest) {
  const headers = getCorsHeaders(req);

  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json(
      { message: "Invalid JSON" },
      { status: 400, headers },
    );
  }

  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json(
      { message: "Username and password required" },
      { status: 400, headers },
    );
  }

  // Trim və case-sensitive yoxlama
  const isUserExist = users.find(
    (u) =>
      u.username.trim() === username.trim() &&
      u.password.trim() === password.trim(),
  );

  if (!isUserExist) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401, headers },
    );
  }

  return NextResponse.json(
    { username: isUserExist.username, role: isUserExist.role },
    { status: 200, headers },
  );
}
