import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  let res = NextResponse.next();
  const pathname = req.url;
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return;
  } else {
    if (pathname.includes("/dashboard")) {
      res = NextResponse.redirect(new URL("/", req.url));
    }
  }

  return res;
}
