import robot from "@/assets/robot.svg";
import Link from "next/link";
import Image from "next/image";

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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

//HOME: projects
//DASHBOARD: metrics, Mentions, sentiment analysis
//AI: historical data, sentiment analysis ,Critical mentions,reports, relavent channels

const SideBar = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6 items-center py-4">
      <TooltipProvider delayDuration={50}>
        <div className="">
          <Link href={"/dashboard"} className="flex gap-2">
            <Image src={robot} />
          </Link>
        </div>

        <div className="border-b border-white/10 pb-2 ">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/dashboard"} className="flex gap-2">
                  <Home
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="border-b border-white/10 pb-2 flex flex-col gap-4 ">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/dashboard/metrics"} className="flex gap-2">
                  <BarChart3
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Metrics</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/"} className="flex gap-2">
                  <AtSign
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Mentions</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/"} className="flex gap-2">
                  <FlaskConical
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Sentiment analysis</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="border-b border-white/10 pb-2 flex flex-col gap-4 ">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/"} className="flex gap-2">
                  <AlertCircle
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Critical mentions</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/"} className="flex gap-2">
                  <History
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Historical data</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/"} className="flex gap-2">
                  <FileSpreadsheet
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Reports</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/"} className="flex gap-2">
                  <BookCopy
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Relavent channels</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className=" pb-2 flex flex-col gap-4 ">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg group hover:bg-dashboard transition duration-150 ">
                <Link href={"/"} className="flex gap-2">
                  <Settings
                    size={20}
                    color="gray"
                    className="group-hover:stroke-dashboard-secondary transition duration-150"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default SideBar;
