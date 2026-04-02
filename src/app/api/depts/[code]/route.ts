// app/api/electric-depts/[code]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { electricDepts } from "@/lib/data";

// Sadə CORS helper
function getCorsHeaders(_req: NextRequest) {
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

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ code: string }> },
) {
  const headers = getCorsHeaders(req);

  // 👇 ƏN VACİB HİSSƏ
  const { code } = await context.params;

  const deptUser = electricDepts.find(
    (f) => String(f.electricCode) === code || String(f.id) === code,
  );

  if (!deptUser) {
    return NextResponse.json(
      { message: "This dept code data not found" },
      { status: 404, headers },
    );
  }

  return NextResponse.json(deptUser, { status: 200, headers });
}
