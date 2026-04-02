// app/api/electric-depts/route.ts
import { NextRequest, NextResponse } from "next/server";
import { electricDepts } from "@/lib/data";

// Sadə CORS helper funksiyası
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
export async function GET(req: NextRequest) {
  const headers = getCorsHeaders(req);
  return NextResponse.json(electricDepts, { status: 200, headers });
}
