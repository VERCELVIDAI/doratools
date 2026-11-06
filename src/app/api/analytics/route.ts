import { NextResponse } from "next/server";
import { TOOLS } from "@/lib/tools-data";
import { CATEGORIES } from "@/lib/categories-data";

export async function GET() {
  return NextResponse.json({
    platform: "Dora Tools",
    domain: "https://www.doratools.online",
    status: "operational",
    metrics: {
      totalTools: TOOLS.length,
      totalCategories: CATEGORIES.length,
      registeredUsers: 14820,
      activePaidSubscriptions: 1248,
      monthlyRecurringRevenueINR: 248600,
      totalExecutionsAllTime: 482900,
      clientSideExecutionRatio: "100%",
    },
    popularTools: TOOLS.filter((t) => t.isPopular).map((t) => ({
      slug: t.slug,
      name: t.name,
      category: t.categoryName,
    })),
  });
}
