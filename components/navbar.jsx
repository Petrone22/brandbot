import React from "react";
import Image from "next/image";
import robot from "@/assets/robot.svg";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full fixed border-b border-b-white/20  flex justify-between top-0  px-24 py-3 z-20 backdrop-blur-sm">
      <div className="flex gap-8">
        <div className="w-fit flex gap-2 items-center justify-center ">
          <Image src={robot} />
          <h2 className="font-bold text-2xl">BrandBot</h2>
        </div>
        <div className="flex gap-1">
          <Button variant="link">Features</Button>
          <Button variant="link">Pricing</Button>
          <Button variant="link">Reviews</Button>
          <Button variant="link">Help</Button>
        </div>
      </div>
      <div className="w-fit flex items-center justify-center gap-2">
        <Button size="sm" variant="secondary" className="text-sm">
          Sign in
        </Button>
        <Button size="sm" className="font-semibold">
          Sign up free
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
