import Image from "next/image";
import robot from "@/assets/robot.svg";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MobileNavBar = dynamic(() => import("@/components/MobileNavBar"), {
  ssr: false,
});

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

const Navbar = () => {
  return (
    <div className="w-full fixed border-b border-b-white/20 flex justify-around md:justify-between items-center top-0  px-0 md:px-24 py-3 z-50 backdrop-blur-sm">
      <div className="h-fit w-fit block md:hidden">
        <MobileNavBar />
      </div>
      <div className="hidden md:flex gap-8 ">
        <div className="w-fit flex gap-2 items-center justify-center cursor-pointer">
          <Link href={"/"} className="flex gap-2">
            <Image src={robot} />
            <h2 className="font-bold text-2xl">BrandBot</h2>
          </Link>
        </div>
        <div className="flex gap-1">
          {navLinks.map((link) => {
            return (
              <Button variant="link">
                <Link href={link.to}>{link.name}</Link>
              </Button>
            );
          })}
        </div>
      </div>
      <div className="w-fit flex items-center justify-center gap-2">
        <Button size="sm" variant="secondary" className="text-sm">
          <Link href={"/sign-in"}> Sign in</Link>
        </Button>
        <Button size="sm" className="font-semibold">
          <Link href={"/sign-up"}> Sign up free</Link>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
