import { Button } from "@/components/ui/button";
import robot from "@/assets/robot.svg";
import {
  BookMarked,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Hash,
  BellRing,
  Globe,
  Briefcase,
  KeyRound,
  BrainCircuit,
  FlaskRound,
  ZoomIn,
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

import dots from "@/assets/dots.svg";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "@KevCodez",
    badge: "https://github.com/shadcn.png",
    description:
      "And thanks to @BrandBot, I was able to go from idea to launched feature in a matter of hours. Absolutely amazing!",
  },
  {
    name: "@DanaWhite",
    badge: "https://github.com/shadcn.png",
    description:
      "using brandbot is lit!! it took me less than 10 mins to setup, the experience is just amazing",
  },
  {
    name: "@keeganLemer",
    badge: "https://github.com/shadcn.png",
    description:
      "i'm never going to look back, my business grew by like 30% based on the recommendations that brandbot gave me and the insights it gives are just so important.",
  },
  {
    name: "@SundeepRunsIt",
    badge: "https://github.com/shadcn.png",
    description:
      "i wanna admit, the competition spying feature that you get with @BrandBot is so useful, we completely revamped our business and now we're profitable",
  },
  {
    name: "@AdamDXD",
    badge: "https://github.com/shadcn.png",
    description:
      "Huuuuge thanks to BrandBot for helping me with my online personality monitoring, i was able to gain more than 70K TikTok followers just by LISTENING to my fans.",
  },
  {
    name: "@RasheedKebab",
    badge: "https://github.com/shadcn.png",
    description:
      "We just opened another store, we're confident that our customers love our food because we were able to see that through @BrandBot",
  },
  {
    name: "@MysticEntrepreneur",
    badge: "https://github.com/shadcn.png",
    description:
      "Working with @BrandBot is just fun, easy, and most importantly, accurate. I love it so much",
  },
  {
    name: "@_tarantinooo_",
    badge: "https://github.com/shadcn.png",
    description:
      "How and why did nobody tell me about @BrandBot sooner?? It's so incredible!",
  },
];

const page = () => {
  return (
    <>
      <div className="bg-background mt-0 pt-52 h-full flex flex-col items-center justify-start text-primary-foreground bg-gradient-to-b from-black to-background relative">
        <div
          className="absolute w-full h-fit top-0 pointer-events-none "
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
          <div className="flex  gap-2 flex-col text-center items-center w-full ">
            <h1 className="flex flex-col font-medium text-center w-full text-4xl md:text-7xl">
              <span className="whitespace-nowrap w-full ">Grow a fanbase</span>
              <span className="text-primary">Reach millions</span>
            </h1>
            <p className="p-2 my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg font-medium lg:w-2/3">
              BrandBot is a reputation management software suite. <br />
              Get insight on what your fans, customers, business partners, or
              even competitors think about your work. From multiple different
              platforms.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Button size="lg">Sign up free</Button>
              <Button
                size="lg"
                variant="secondary"
                className="flex items-center justify-center gap-2"
              >
                <a href="#features" className="flex gap-2">
                  <BookMarked size={20} />
                  View Features
                </a>
              </Button>
            </div>
            <p className="w-full text-center text-white/60 font-medium select-none">
              14 day free trial.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center text-center mt-5 mb-10">
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

      <div
        className="relative h-fit w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-12 lg:gap-6 md:px-12 lg:px-24 px-8 "
        id="features"
      >
        <BigCard
          description={
            " Whenever someone mentions the keywords you keep track of, BrandBot automatically notifies you through a clean, easy metrics ui."
          }
          title={"Powerful Metrics"}
        />
        <Card className="w-full h-[400px] col-span-5 md:col-span-6 lg:col-span-3 flex px-0 py-4 text-primary-foreground flex-col overflow-hidden group">
          <div className="flex flex-col gap-2 items-center  text-center md:text-start px-6">
            <div className="bg-background h-14 w-14 rounded-lg flex items-center justify-center">
              <KeyRound size={30} color="rgb(51,152,106)" />
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
              <BrainCircuit size={30} color="rgb(51,152,106)" />
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
              <FlaskRound size={30} color="rgb(51,152,106)" />
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
              alt="chart"
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
              <ZoomIn size={30} color="rgb(51,152,106)" />
            </div>
            <h2 className="font-semibold whitespace-nowrap text-center w-full">
              Competitor Spying
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              {` By creating a project in your account to track keywords for your
              competitor, you'll know what they're up to. That will allow you to
              improve your business plan.`}
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
        <span className="absolute w-full -bottom-12 text-center mt-4 text-white/60 select-none">
          And so much more!
        </span>
      </div>
      <div className=" md:px-12 lg:px-24 px-8 h-fit lg:h-screen pt-24 lg:mt-28 overflow-hidden">
        <div className="w-full h-full rounded-lg  flex flex-col lg:flex-row items-center justify-between">
          <div className=" h-full w-full lg:w-1/3 flex items-center lg:items-start flex-col justify-center gap-4 ">
            <h1 className="font-medium text-center lg:text-start w-full text-4xl md:text-5xl">
              <span className="text-primary font-bold ">10+</span> Years of
              experience
            </h1>
            <h3 className="text-muted-foreground text-center lg:text-start w-full">
              {"We’re experts, and here’s the proof."}
            </h3>
            <Button size="lg" className="mt-6">
              Sign up free
            </Button>
            <p className="w-full text-center md:text-start text-white/60 font-medium">
              14 day free trial.
            </p>
          </div>
          <div className="group h-full w-5/6 -ml-14 lg:w-1/3 bg-muted rounded-xl flex flex-col px-6 items-start lg:items-center justify-between py-12 lg:py-6 gap-10 lg:gap-0 mt-16 lg:mt-0 relative">
            <div className="w-32 lg:w-3/5 flex flex-col items-start gap-1">
              <BellRing
                size={38}
                color="#3FCF8E"
                className="mb-2 lg:mb-5 scale-75 lg:scale-100"
              />
              <h1 className="font-bold text-2xl lg:text-3xl  group-hover:text-accent transition duration-300 ">
                18B+
              </h1>
              <p className=" font-semibold">
                MENTIONS <br /> DELIVERED
              </p>
            </div>
            <div className=" w-40 mt-10 lg:mt-0 lg:w-3/5 flex flex-col items-start gap-1">
              <Globe
                size={38}
                color="#3FCF8E"
                className="mb-2 lg:mb-5 scale-75 lg:scale-100"
              />
              <h1 className="font-bold text-4xl lg:text-3xl group-hover:text-accent transition duration-300 delay-75">
                124
              </h1>
              <p className="font-semibold w-full lg:w-4/6">
                {`WE'RE CURRENTLY WORKING WITH CUSTOMERS FROM 124 COUNTRIES`}
              </p>
            </div>
            <div className=" h-60 w-40 absolute -right-16 -top-8 lg:-left-24 lg:top-32 flex flex-col items-center lg:items-end justify-between gap-8 ">
              <Image
                alt="image"
                src={dots}
                className="-left-20 z-20 scale-75 lg:scale-100 lg:group-hover:scale-150 transition duration-300 lg:group-hover:-translate-y-20 lg:group-hover:-translate-x-12"
              />
              <div className="w-fit  h-fit p-1 group-hover:bg-accent transition duration-300 bg-border rounded-lg">
                <div className=" w-fit flex flex-col bg-muted p-4 pr-12 lg:pr-0 rounded-lg items-start gap-1">
                  <Briefcase size={35} color="#3FCF8E" className="mb-5" />
                  <h1 className="font-bold text-4xl group-hover:text-accent transition duration-300 delay-200">
                    25M
                  </h1>
                  <p className=" font-semibold whitespace-nowrap mr-16">
                    ACTIVE MONITORED <br /> DOMAINS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-12 lg:px-24 px-8 h-fit lg:h-fit pt-24 lg:pt-32">
        <div className="w-full h-full rounded-lg flex flex-col items-start justify-around gap-24">
          <div className="w-full flex flex-col  items-center md:items-start gap-6">
            <p className="text-sm text-muted-foreground text-center">
              CUSTOMER STORIES
            </p>
            <h1 className=" whitespace-nowrap font-medium text-center lg:text-start w-full  text-lg md:text-5xl flex gap-2">
              <Image
                alt="image"
                src={robot}
                className="hidden md:block md:scale-110 lg:scale-125"
              />
              <span className="text-primary font-bold flex items-center gap-1">
                BrandBot
              </span>{" "}
              helps you scale with ease.
            </h1>
            <p className="text-md text-center lg:text-start">
              See how <span className="text-primary">BrandBot</span> empowers
              companies and personalities of all sizes to accelerate their
              growth <br />
              and streamline their work.
            </p>
          </div>
          <div
            className="w-full flex flex-wrap  items-start justify-center scroll-smooth - gap-6 "
            id="reviews"
          >
            {reviews.map((review) => {
              return (
                <Card
                  className="max-w-[400px] flex flex-col gap-4 group px-6 py-4 pb-12 text-primary-foreground overflow-hidden hover:border-primary"
                  key={review.name}
                >
                  <h1 className="flex gap-2 items-end w-full text-sm font-semibold">
                    <Avatar>
                      <AvatarImage src={review.badge} alt="icon" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span>{review.name}</span>
                  </h1>
                  <p className="text-muted-foreground h-full whitespace-break-spaces ">
                    {review.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className="md:px-12 lg:px-24 px-8 h-fit lg:h-full pt-24 lg:pt-32 flex items-center justify-center">
        <div className="h-fit w-full bg-card rounded-xl flex flex-col items-center justify-center gap-4 py-8 mb-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex  gap-0 flex-col text-center items-center w-full ">
              <h1 className="flex flex-col gap-2 font-medium text-center w-full text-4xl md:text-5xl">
                <span className="whitespace-nowrap w-full ">
                  Grow your fanbase
                </span>
                <span className="text-primary">Reach millions</span>
              </h1>
              <p className="p-2 my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg font-medium lg:w-2/3 text-white/60">
                Sign up now and get 2 weeks for free!
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
      </div>
    </>
  );
};

export default page;
