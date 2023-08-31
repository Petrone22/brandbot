import { Button } from "@/components/ui/button";

import {
  BookMarked,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Check,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Card } from "@/components/ui/card";

import Image from "next/image";

// import cardchart from "@/assets/cardChart.svg";

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
          <div className="flex w-1/2 gap-2 flex-col text-center ">
            <h1 className="flex flex-col font-medium text-center text-4xl md:text-7xl">
              <span className="whitespace-nowrap">Grow a fanbase</span>
              <span className="text-primary">Reach millions</span>
            </h1>
            <p className="pt-2 my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg font-medium">
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

      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2  gap-4 md:grid-cols-12 lg:gap-6 md:px-12 lg:px-24 mt-20 ">
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-6 px-6 py-4 flex justify-between text-primary-foreground">
          <div className="w-1/3 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <div className="bg-background h-14 w-14 rounded-lg flex items-center justify-center mb-4">
                <Instagram size={30} color="rgb(51,152,106)" />
              </div>
              <h2 className="font-semibold">Database</h2>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos quis provident eaque, necessitatibus architecto
                minus.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-foreground flex gap-2">
                <Check size={15} color="rgb(51,152,106)" />
                Trusted by customers
              </span>
              <span className="text-xs text-foreground flex gap-2">
                <Check size={15} color="rgb(51,152,106)" />
                Trusted by customers
              </span>
              <span className="text-xs text-foreground flex gap-2">
                <Check size={15} color="rgb(51,152,106)" />
                Trusted by customers
              </span>
            </div>
          </div>
          <div className="min-w-1/3 w-1/3 flex items-center justify-center relative">
            <div className="absolute w-10 h-full bg-gradient-to-r from-card  left-0"></div>
            <div className="absolute w-10 h-full bg-gradient-to-l from-card  right-0"></div>
            {/* <Image src={cardchart} width={1000} height={500} /> */}
          </div>
        </Card>
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex px-6 py-4 text-primary-foreground"></Card>
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex px-6 py-4 text-primary-foreground"></Card>
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex px-6 py-4 text-primary-foreground"></Card>
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex px-6 py-4 text-primary-foreground"></Card>
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-6 flex px-6 py-4 text-primary-foreground"></Card>
      </div>
    </>
  );
};

export default page;
{
  /* <div className="flex flex-col justify-between max-w-xs">
              <div className="flex flex-col gap-2">
                <div className="h-12 w-12 bg-background flex items-center justify-center rounded-lg mb-4">
                  <Twitter size={30} color="rgb(62,207,142)" />
                </div>
                <h2 className="font-semibold">Database</h2>
                <p className="text-muted-foreground text-sm w-2/3">
                  Every project is a full postgres database, the world's most
                  trusted relational database.
                </p>
              </div>
              <div className="flex flex-col">
                <ul className="flex gap-1 flex-nowrap items-center justify-start text-sm text-muted-foreground">
                  <Check color="rgb(62,207,142)" size={15} /> 100% trusted by us
                </ul>
                <ul className="flex gap-1 flex-nowrap items-center justify-start text-sm text-muted-foreground">
                  <Check color="rgb(62,207,142)" size={15} /> 100% trusted by us
                </ul>
                <ul className="flex gap-1 flex-nowrap items-center justify-start text-sm text-muted-foreground">
                  <Check color="rgb(62,207,142)" size={15} /> 100% trusted by us
                </ul>
              </div>
            </div>
            <div className=" w-full">foo</div> */
}
