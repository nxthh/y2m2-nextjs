import { NextResponse } from "next/server";

export function GET(req: NextResponse) {
  const cookies = req.cookies.get("secret");

  return NextResponse.json(cookies);
}
