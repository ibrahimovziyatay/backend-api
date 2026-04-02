// app/api/electric-depts/[code]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { electricDepts } from "@/lib/data";

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

// GET handler
export async function GET(
  req: NextRequest,
  context: { params: { code: string } }, // context.params artıq Promise deyil
) {
  const headers = getCorsHeaders(req);
  const { code } = context.params;

  // electricCode ilə müqayisə üçün stringə çevirək
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
