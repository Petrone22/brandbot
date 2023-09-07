import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    name: "Features",
    to: "/",
  },
  {
    name: "Pricing",
    to: "/",
  },
  {
    name: "Reviews",
    to: "/",
  },
  {
    name: "Help",
    to: "/",
  },
];

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
        {navLinks.map((link) => {
          return (
            <Button variant="link" className="w-full  rounded-none pb-8 mb-4">
              <Link href={link.to}>{link.name}</Link>
            </Button>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
