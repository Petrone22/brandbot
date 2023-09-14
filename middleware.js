import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  let res = NextResponse.next();
  const pathname = req.url;
  const supabase = createMiddlewareClient({ req, res });
  supabase.realtime.setAuth("fresh-token");

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user) {
    const user = await supabase.auth.getUser();

    req.locals = {
      supabase,
      user,
      session,
    };
  } else {
    if (pathname.includes("/dashboard")) {
      res = NextResponse.redirect(new URL("/", req.url));
    }
  }

  return res;
}
