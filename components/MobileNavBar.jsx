import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNavBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col gap-8 items-center pt-24"
      >
        <Button variant="link">
          <a href="#features">Features</a>
        </Button>
        <Button variant="link">
          <Link href={"/pricing"}>Pricing</Link>
        </Button>
        <Button variant="link">
          <a href="#reviews">Reviews</a>
        </Button>
        <Button variant="link">
          <Link href={"/help"}>Help</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
