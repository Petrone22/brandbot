import { Button } from "@/components/ui/button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutComp from "../logout/logout";
export default async function page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="flex items-center justify-center w-full h-full gap-6">
      {user ? user.email : "no user"}
      <LogoutComp />
    </div>
  );
}
