// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/data";

// Sadə CORS helper funksiyası
function getCorsHeaders(req: NextRequest) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, role",
  };
}

// OPTIONS preflight handler
export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(req) });
}

// GET handler
export async function GET(req: NextRequest) {
  const headers = getCorsHeaders(req);
  const role = req.headers.get("role")?.trim();

  if (!role) {
    return NextResponse.json(
      { message: "No role provided" },
      { status: 401, headers },
    );
  }

  // Mentor görünüşü: yalnız id, name, price
  if (role === "mentor") {
    const mentorProducts = products.map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
    }));

    return NextResponse.json(
      {
        products: mentorProducts,
        stats: { total: mentorProducts.length, averagePrice: 866 },
      },
      { status: 200, headers },
    );
  }

  // Admin / meneger görünüşü: bütün məlumatlar
  if (role === "admin" || role === "meneger") {
    return NextResponse.json(
      {
        products,
        stats: { total: products.length, averagePrice: 866 },
      },
      { status: 200, headers },
    );
  }

  // Digər rollar üçün
  return NextResponse.json(
    { message: "Access denied" },
    { status: 403, headers },
  );
}
