import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { data } from "autoprefixer";

const NavbarDashboard = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <>
        <Button size="sm" className="text-sm">
          <Link href={"/dashboard"}>Dashboard</Link>
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button size="sm" variant="secondary" className="text-sm">
          <Link href={"/sign-in"}> Sign in</Link>
        </Button>
        <Button size="sm" className="font-semibold">
          <Link href={"/sign-up"}> Sign up free</Link>{" "}
        </Button>
      </>
    );
  }
};

export default NavbarDashboard;
