import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bell, HelpCircle, MessageSquarePlus, Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  BarChart3,
  AtSign,
  FlaskConical,
  History,
  AlertCircle,
  FileSpreadsheet,
  BookCopy,
  Settings,
} from "lucide-react";

const Nav = () => {
  return (
    <div className="w-full top-0 py-2 px-4 flex items-center justify-start gap-4 md:justify-between">
      <div className="flex md:hidden items-center justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetTitle className="mb-6">Navigation</SheetTitle>
            <TooltipProvider delayDuration={50}>
              <div className="border-b border-white/10 pb-2 ">
                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <Home
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <span className="">Home</span>
                    </Link>
                  </SheetClose>
                </div>
              </div>

              <div className="border-b border-white/10 pb-2 flex flex-col gap-4 ">
                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <BarChart3
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <p>Metrics</p>
                    </Link>
                  </SheetClose>
                </div>

                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <AtSign
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <p>Mentions</p>
                    </Link>
                  </SheetClose>
                </div>

                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <FlaskConical
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <p>Sentiment analysis</p>
                    </Link>
                  </SheetClose>
                </div>
              </div>
              <div className="border-b border-white/10 pb-2 flex flex-col gap-4 ">
                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <AlertCircle
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <p>Critical mentions</p>
                    </Link>
                  </SheetClose>
                </div>

                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <History
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <p>Historical data</p>
                    </Link>
                  </SheetClose>
                </div>

                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <FileSpreadsheet
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <p>Reports</p>
                    </Link>
                  </SheetClose>
                </div>

                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <BookCopy
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <p>Relavent channels</p>
                    </Link>
                  </SheetClose>
                </div>
              </div>
              <div className=" pb-2 flex flex-col gap-4 ">
                <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                  <SheetClose asChild>
                    <Link href={"/"} className="flex gap-2">
                      <Settings
                        size={20}
                        color="gray"
                        className="group-hover:stroke-dashboard-secondary transition duration-150"
                      />
                      <p>Settings</p>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </TooltipProvider>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-fit flex gap-2 ">
        <span className="text-xs font-semibold md:text-sm rounded-sm hover:bg-secondary px-2 cursor-pointer duration-150">
          Petrone
        </span>
        <span className="text-xs md:text-sm ">/</span>
        <span className="text-xs font-semibold md:text-sm rounded-sm hover:bg-secondary px-2 cursor-pointer duration-150">
          BrandBot
        </span>
      </div>
      <div className="w-fit hidden md:flex gap-2 ">
        <Link
          href={"/"}
          className="text-[12px] font-semibold flex items-center justify-center gap-2 py-1 px-3 bg-dashboard rounded-sm hover:bg-secondary transition duration-150 hover:text-dashboard-secondary"
        >
          <HelpCircle size={18} />
          Help
        </Link>
        <Link
          href={"/"}
          className=" text-[12px] font-semibold flex items-center justify-center gap-2 py-1 px-3 bg-dashboard rounded-sm hover:bg-secondary transition duration-150 hover:text-dashboard-secondary"
        >
          <MessageSquarePlus size={18} />
          Feedback
        </Link>
        <Button variant="secondary" size="sm">
          <Bell size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Nav;
