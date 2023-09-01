import { Button } from "@/components/ui/button";

import {
  BookMarked,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Hash,
  ChevronUp,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import BigCard from "@/components/bigCard";
import BigCard2 from "@/components/bigCard2";

import Image from "next/image";

import { Card } from "@/components/ui/card";

import circleChart from "@/assets/circle.svg";

const page = () => {
  return (
    <>
      <div className="bg-background mt-0 pt-52 h-full flex flex-col items-center justify-start text-primary-foreground bg-gradient-to-b from-black to-background relative">
        <div
          className="absolute w-full h-full top-0 pointer-events-none "
          style={{
            backgroundImage: `url(./home-bg.webp)`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="600"
            viewBox="0 0 1680 730"
            fill="none"
          >
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.873077 0.487583 -0.78755 0.61625 429.154 175.316)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.994947 -0.100399 0.322552 0.946552 263.797 71.2188)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.994947 -0.100399 0.322552 0.946552 440 282.121)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.994947 -0.100399 0.322552 0.946552 410.404 338.926)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.994947 -0.100399 0.322552 0.946552 576 145.121)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.061383 -0.998114 0.99741 0.07192 961.715 604.32)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.322553 0.946552 -0.994947 0.100399 544.891 280.938)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.322553 0.946552 -0.994947 0.100399 1245.01 314.668)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.322553 0.946552 -0.994947 0.100399 989.111 172.809)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.322553 0.946552 -0.994947 0.100399 974.557 162.211)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(0.322553 0.946552 -0.994947 0.100399 861.078 260.352)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 814.387 514.258)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 995.66 552.828)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(-0.322553 -0.946552 0.994947 -0.100399 1154.39 545.258)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 280.908 307.363)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 601.275 539.539)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 250.141 326.566)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1553.78 554.305)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 322.141 513.363)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1504.14 366.363)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1140.55 485.527)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 108.141 433.363)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1285.14 263.363)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1372.09 492.215)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 630.725 434.363)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 696.141 281.363)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1343.31 263.105)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 320.141 360.363)"
              fill="white"
            />
            <ellipse
              cx="0.6"
              cy="0.6"
              rx="0.6"
              ry="0.6"
              transform="matrix(-0.95101 -0.309159 0.561017 -0.827804 1086.54 295.914)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1308.95 468.746)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1327.66 447.223)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 1469.98 192.406)"
              fill="white"
            />
            <circle
              cx="0.6"
              cy="0.6"
              r="0.6"
              transform="matrix(-0.958827 0.28399 -0.613701 -0.789538 586.887 448.488)"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex  gap-2 flex-col text-center w-full">
            <h1 className="flex flex-col font-medium text-center w-full text-4xl md:text-7xl">
              <span className="whitespace-nowrap w-full ">Grow a fanbase</span>
              <span className="text-primary">Reach millions</span>
            </h1>
            <p className="pt-2 my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg font-medium  ">
              BrandBot is a reputation management software suite. <br />
              Get insight on what your fans, customers, business partners, or
              even competitors think about your work. from multiple different
              platforms.
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="lg">Sign up free</Button>
            <Button
              size="lg"
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <BookMarked size={20} />
              View Features
            </Button>
          </div>
          <div className="flex flex-col gap-4 justify-center text-center mt-5">
            <p className="text-muted-foreground">
              Reliable opinions from 20+ platforms, including:
            </p>
            <div className="flex items-center justify-center gap-4 ">
              <TooltipProvider delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Facebook size={30} color="rgb(153,153,153)" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Twitter size={30} color="rgb(153,153,153)" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Instagram size={30} color="rgb(153,153,153)" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Youtube size={30} color="rgb(153,153,153)" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Youtube</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Linkedin size={30} color="rgb(153,153,153)" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2  gap-4 md:grid-cols-12 lg:gap-6 md:px-12 lg:px-24 mt-20 px-8">
        <BigCard
          description={
            " Whenever someone mentions the keywords you keep track of, BrandBot automatically notifies you through a clean, easy metrics ui."
          }
          title={"Powerful Metrics"}
        />
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex px-0 py-4 text-primary-foreground flex-col overflow-hidden group">
          <div className="flex flex-col gap-2 items-center  text-center md:text-start px-6">
            <div className="bg-background h-14 w-14 rounded-lg flex items-center justify-center">
              <Instagram size={30} color="rgb(51,152,106)" />
            </div>
            <h2 className="font-semibold whitespace-nowrap text-center w-full">
              Keyword tracking
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              Track Keywords for every project you create, you can even see what
              people think about your competitors!
            </p>
          </div>
          <div className="grid h-full w-full scale-105 rounded-lg gap-2 mt-6 grid-cols-10">
            <div className="border border-muted px-2 lg:text-xs w-full col-span-5 h-16 rounded-lg flex items-center justify-center text-secondary font-semibold ">
              #LeagueOfLegends
            </div>
            <div className="border border-muted px-2 lg:text-xs w-full col-span-5 h-16 rounded-lg flex items-center justify-center text-secondary font-semibold  ">
              Taylor Swift
            </div>
            <div className="border border-muted px-2 lg:text-xs w-full col-span-5 h-16 rounded-lg flex items-center justify-center text-secondary font-semibold  group-hover:border-primary group-hover:text-accent transition duration-300 group-hover:shadow-2xl shadow-primary">
              Apartment For Sale
            </div>
            <div className="border border-muted px-2 lg:text-xs w-full col-span-5 h-16 rounded-lg flex items-center justify-center text-secondary font-semibold  group-hover:border-primary group-hover:text-accent transition duration-300 group-hover:shadow-2xl shadow-primary">
              #Jennys_Bakery
            </div>
            <div className="border border-muted px-2 lg:text-xs w-full col-span-5 h-16 rounded-lg flex items-center justify-center text-secondary font-semibold ">
              #Restaurant
            </div>
            <div className="border border-muted px-2 lg:text-xs w-full col-span-5 h-16 rounded-lg flex items-center justify-center text-secondary font-semibold ">
              #Esports
            </div>
          </div>
        </Card>
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex px-0 py-4 text-primary-foreground flex-col overflow-hidden group">
          <div className="flex flex-col gap-2 items-center  text-center md:text-start px-6">
            <div className="bg-background h-14 w-14 rounded-lg flex items-center justify-center">
              <Instagram size={30} color="rgb(51,152,106)" />
            </div>
            <h2 className="font-semibold whitespace-nowrap text-center w-full">
              Advanced AI Features
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              With the power of Artificial Intelligence, BrandBot gives you
              reports, helpful tips, and even warnings to help you grow your
              business as fast as possible.
            </p>
          </div>
          <div className="flex items-center justify-center h-full w-full rounded-lg relative overflow-hidden">
            <div className="absolute w-full h-24  bottom-0 bg-gradient-to-t from-card to-transparent  z-50"></div>
            <div className="h-2/3 w-10/12 rounded-lg bg-muted border border-secondary  flex gap-2 flex-col p-2 transition duration-300 group-hover:scale-90 group-hover:rotate-3 group-hover:border-primary">
              <div className="bg-muted-foreground group-hover:bg-accent w-5 h-5 rounded-full transition duration-300"></div>
              <div className="bg-muted-foreground w-3/6 h-6 rounded-lg"></div>
              <div className="bg-muted-foreground w-4/6 h-6 rounded-lg"></div>
            </div>
            <div className="h-2/3 w-10/12 rounded-lg bg-muted border border-secondary mt-16 flex gap-2 flex-col p-2 absolute top-32 transition duration-300 group-hover:-translate-y-32 group-hover:border-primary">
              <div className="bg-muted-foreground w-5 group-hover:bg-accent h-5 rounded-full transition duration-300"></div>
              <div className="bg-muted-foreground w-4/6 h-5 rounded-lg"></div>
              <div className="bg-muted-foreground w-6/6 h-5 rounded-lg"></div>
            </div>
          </div>
        </Card>
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex flex-col px-6 py-4 text-primary-foreground group overflow-hidden">
          <div className="flex flex-col gap-2 items-center  text-center md:text-start px-0">
            <div className="bg-background h-14 w-14 rounded-lg flex items-center justify-center">
              <Instagram size={30} color="rgb(51,152,106)" />
            </div>
            <h2 className="font-semibold whitespace-nowrap text-center w-full">
              Sentiment Analysis
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              BrandBot will analyse opinions based on your keywords and organize
              them into groups of positive, neutral or negative opinions, So
              yuou can make smarter business decisions
            </p>
          </div>
          <div className="flex items-center justify-center h-full w-full rounded-lg relative ">
            <Image
              src={circleChart}
              className="group-hover:rotate-90 transition duration-300 "
            />
            <div className="w-20 h-8 bg-muted absolute rounded-lg group-hover:translate-x-28 group-hover:translate-y-14 opacity-0 group-hover:opacity-100 -top-10 -left-32  transition duration-300 flex gap-1 items-center justify-start">
              <div className="bg-muted-foreground h-4 w-4 rounded-full ml-2 "></div>
              <div className="w-full h-4 rounded-lg bg-muted-foreground flex-1 group-hover:bg-primary mr-1"></div>
            </div>
            <div className="w-20 h-8 bg-muted absolute rounded-lg -top-10 left-80 group-hover:-translate-x-32 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-20  transition duration-300 flex gap-2 items-center justify-start">
              <div className="bg-muted-foreground h-4 w-4 rounded-full ml-2 "></div>
              <div className="w-full h-4 rounded-lg bg-muted-foreground flex-1 mr-1"></div>
            </div>
            <div className="w-20 h-8 bg-muted absolute rounded-lg  -bottom-20 -left-32 opacity-0 group-hover:opacity-100 group-hover:translate-x-32 group-hover:-translate-y-24 -ml-1 transition duration-300 flex gap-2 items-center justify-start">
              <div className="bg-muted-foreground h-4 w-4 rounded-full ml-2  group-hover:bg-primary"></div>
              <div className="w-full h-4 rounded-lg bg-muted-foreground flex-1 mr-1"></div>
            </div>
          </div>
        </Card>
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex flex-col group px-6 py-4 text-primary-foreground overflow-hidden">
          <div className="flex flex-col gap-2 items-center  text-center md:text-start px-0">
            <div className="bg-background h-14 w-14 rounded-lg flex items-center justify-center">
              <Instagram size={30} color="rgb(51,152,106)" />
            </div>
            <h2 className="font-semibold whitespace-nowrap text-center w-full">
              Competitor Spying
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              By creating a project in your account to track keywords for your
              competitor, you'll know what they're up to. That will allow you to
              improve your business plan.
            </p>
          </div>
          <div className=" h-full w-full rounded-lg relative ">
            <div className="w-full flex items-center justify-center h-full z-10 absolute -left-14 rotate-12 group-hover:rotate-0 group-hover:translate-x-6 transition duration-300">
              <Hash color="#5d5d5d" size={200} />
            </div>
            <div className="w-full flex items-center justify-center h-full z-20 absolute top-10 left-20 rotate-0 group-hover:rotate-12 group-hover:-translate-y-10 group-hover:-translate-x-6 transition duration-300">
              <Hash color="#33996B" size={200} />
            </div>
          </div>
        </Card>
        <BigCard2
          title={"Critical Mentions"}
          description={
            "BrandBot allows you to keep a keen eye on anything negative being said about your keywords by pushing negative opinions to you as fast as possible so you never miss them."
          }
        />
      </div>
    </>
  );
};

export default page;