"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LogoutComp = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  return (
    <form action="/utils/logout" method="post" className="flex flex-col gap-2">
      <Button>Sign out</Button>
    </form>
  );
};

export default LogoutComp;
