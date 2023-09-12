import Image from "next/image";
import robot from "@/assets/robot.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import NavbarDashboard from "./NavbarDashboard";

const MobileNavBar = dynamic(() => import("@/components/MobileNavBar"), {
  ssr: false,
});

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
        </div>
      </div>
      <div className="w-fit flex items-center justify-center gap-2">
        <NavbarDashboard />
      </div>
    </div>
  );
};

export default Navbar;
