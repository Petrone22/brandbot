"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const handleSignOut = async (supa, router) => {
  await supa.auth.signOut();
  router.refresh();
};

const LogoutComp = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  return (
    <Button
      onClick={() => {
        handleSignOut(supabase, router);
      }}
    >
      Log out
    </Button>
  );
};

export default LogoutComp;
