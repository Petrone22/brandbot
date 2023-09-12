import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Check,
  GanttChartSquare,
  Microscope,
  CaseSensitive,
  FolderOpenDot,
  RefreshCcw,
  Infinity,
  BookMarked,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  BadgeCent,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CheckedCard from "@/components/CheckedCard";
import Row from "@/components/row";
import RowHeader from "@/components/RowHeader";
import StickyHeader from "@/components/StickyHeader";
import UnChecked from "@/components/UnChecked";
import CheckedText from "@/components/CheckedText";

const starter = [
  {
    title: "3 Project slots",
  },
  {
    title: "3 Keywords per project",
  },
  {
    title: "Updates: every 12 hours",
  },
  {
    title: "3K mentions limit",
  },
  {
    title: "Basic AI features",
  },
  {
    title: "1 month of historical data",
  },
  {
    title: "Metrics dashboard",
  },
  {
    title: "Sentiment analysis",
  },
];
const entrepreneur = [
  {
    title: "10 Project slots",
  },
  {
    title: "9 Keywords per project",
  },
  {
    title: "Updates: every hour",
  },
  {
    title: "20K mentions limit",
  },
  {
    title: "Advanced AI features",
  },
  {
    title: "Critical mentions",
  },
  {
    title: "6 months of historical data",
  },
  {
    title: "Advanced Metrics dashboard",
  },
  {
    title: "Sentiment analysis",
  },
  {
    title: "Ai Reports",
  },
];
const pro = [
  {
    title: "20 Project slots",
  },
  {
    title: "25 Keywords per project",
  },
  {
    title: "Updates: every hour",
  },
  {
    title: "100K mentions limit",
  },
  {
    title: "Advanced AI features",
  },
  {
    title: "Critical mentions",
  },
  {
    title: "All time historical data",
  },
  {
    title: "Advanced Metrics dashboard",
  },
  {
    title: "Sentiment analysis",
  },
  {
    title: "Advanced Ai Reports",
  },
];

const page = () => {
  return (
    <div className=" w-full pt-32 flex flex-col text-foreground">
      <div className="w-full md:px-24 flex flex-col items-center gap-28">
        <div className="w-full px-0 md:px-12 lg:px-0 ld:w-1/2 flex flex-col gap-4 items-center justify-center text-center">
          <span className="text-sm text-primary">Pricing</span>
          <h1 className="text-xl md:text-4xl w-full font-semibold whitespace-nowrap  text-center">
            Predictable pricing, no surprises
          </h1>
          <span className="w-full text-sm md:text-base text-white/60 font-medium ">
            Start your project, track your growth, then scale to millions of
            users.
          </span>
        </div>
        <div className=" h-fit w-full flex items-start justify-around md:gap-x-2 lg:gap-x-4 gap-y-12 px-12  flex-wrap ">
          <div className=" h-fit w-full md:w-5/12 lg:w-[325px] rounded-md border border-white/10 bg-card flex flex-col justify-between px-6 py-4 gap-4">
            <div className=" w-full flex flex-col justify-between border-b border-white/10 pb-8 mb-8 gap-4">
              <span className="w-full text-primary text-2xl">Starter</span>
              <span className="w-full text-sm">
                Perfect for passion projects & simple businessses.
              </span>
            </div>
            <div className="h-full w-full flex items-center justify-start border-b pb-8 border-white/10">
              <div className="flex gap-1 items-end">
                <h1 className="text-4xl font-semibold">$29.99</h1>
                <span className="text-muted-foreground text-sm">/ month</span>
              </div>
            </div>
            <div className="h-fit w-full flex flex-col gap-4 pb-12">
              <span className="w-full text-muted-foreground text-sm">
                Get started with:
              </span>
              <ul className="text-[14px] flex flex-col gap-3">
                {starter.map((item) => {
                  return (
                    <li
                      className="flex gap-2 items-center whitespace-nowrap"
                      key={item.title}
                    >
                      <Check size={18} color="#3FCF8E" />
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="h-fit flex flex-col w-full gap-8">
              <span className="text-muted-foreground text-sm">
                Sign up now to select this plan.
              </span>
              <Button>
                <Link href={"/sign-up"}>Get started</Link>
              </Button>
            </div>
          </div>
          <div className="h-fit w-full md:w-5/12 lg:w-[325px] rounded-md bg-primary pt-2 px-0.5 pb-0.5 lg:-mt-10">
            <p className="w-full text-center text-muted mb-2 text-sm">
              Most popular
            </p>
            <div className=" h-fit w-full rounded-md  bg-card flex flex-col justify-between px-6 py-4 gap-4 ">
              <div className=" w-full flex flex-col justify-between border-b border-white/10 pb-8 mb-8 gap-4">
                <span className="w-full text-primary text-2xl">
                  Entrepreneur
                </span>
                <span className="w-full text-sm">
                  for serious business growth & online personality tracking.
                </span>
              </div>
              <div className="h-full w-full flex items-center justify-start border-b pb-8 border-white/10">
                <div className="flex gap-1 items-end">
                  <h1 className="text-4xl font-semibold">$49.99</h1>
                  <span className="text-muted-foreground text-sm">/ month</span>
                </div>
              </div>
              <div className="h-fit w-full flex flex-col gap-4 pb-12">
                <span className="w-full text-muted-foreground text-sm">
                  Grab our best selling offer that includes:
                </span>
                <ul className="text-[14px] flex flex-col gap-3">
                  {entrepreneur.map((item) => {
                    return (
                      <li
                        className="flex gap-2 items-center whitespace-nowrap"
                        key={item.title}
                      >
                        <Check size={18} color="#3FCF8E" />
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="h-fit flex flex-col w-full gap-8">
                <span className="text-muted-foreground text-sm">
                  Sign up now to select this plan.
                </span>
                <Button>
                  <Link href={"/sign-up"}>Get started</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className=" h-fit w-full md:w-5/12 lg:w-[325px] rounded-md border border-white/10 bg-card flex flex-col justify-between px-6 py-4 gap-4">
            <div className=" w-full flex flex-col justify-between border-b border-white/10 pb-8 mb-8 gap-4">
              <span className="w-full text-primary text-2xl">Pro</span>
              <span className="w-full text-sm">
                For large scale businesses and personalities, supports
                heavy-weight features.
              </span>
            </div>
            <div className="h-full w-full flex items-center justify-start border-b pb-8 border-white/10">
              <div className="flex gap-1 items-end">
                <h1 className="text-4xl font-semibold">$89.99</h1>
                <span className="text-muted-foreground text-sm">/ month</span>
              </div>
            </div>
            <div className="h-fit w-full flex flex-col gap-4 pb-12">
              <span className="w-full text-muted-foreground text-sm">
                Our most advanced package:
              </span>
              <ul className="text-[14px] flex flex-col gap-3">
                {pro.map((item) => {
                  return (
                    <li
                      className="flex gap-2 items-center whitespace-nowrap"
                      key={item.title}
                    >
                      <Check size={18} color="#3FCF8E" />
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="h-fit flex flex-col w-full gap-8">
              <span className="text-muted-foreground text-sm">
                Sign up now to select this plan.
              </span>
              <Button>
                <Link href={"/sign-up"}>Get started</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className=" w-full pt-24 flex flex-col items-center">
          <div className="w-3/4 lg:w-full  flex-col items-center gap-4 hidden lg:flex">
            <h2 className=" text-center w-full text-4xl font-semibold">
              Compare Plans
            </h2>
            <span className="w-full md:w-2/3 lg:w-1/2 text-center text-white/60">
              Start with a hobby project, Grow your business, and scale to
              millions of users.
            </span>
          </div>
          <div className="hidden lg:block mt-16">
            <table className="h-px w-full table-fixed">
              <caption className="sr-only">Pricing plan comparison</caption>
              <thead className="sticky top-[64px] z-10 bg-transparent backdrop-blur-sm">
                <tr>
                  <th className="w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal">
                    <span className="sr-only">Feature by</span>
                  </th>
                  <th className="w-1/4 px-6 pr-2 pb-2 text-left text-2xl font-normal">
                    <h3 className="text-primary font-mono uppercase flex items-center gap-4">
                      Starter
                    </h3>
                  </th>
                  <th className="w-1/4 px-6 pr-2 pb-2 text-left text-2xl font-normal">
                    <h3 className="text-primary font-mono uppercase flex items-center gap-4">
                      Entrepreneur
                    </h3>
                  </th>
                  <th className="w-1/4 px-6 pr-2 pb-2 text-left text-2xl font-normal">
                    <h3 className="text-primary font-mono uppercase flex items-center gap-4">
                      Pro
                    </h3>
                  </th>
                </tr>
              </thead>
              <tr className="descriptions ">
                <th className="w-1/3 px-6 pt-2 pb-2 text-left text-sm font-normal">
                  <span className="sr-only"></span>
                </th>
                <th className="w-1/4 px-6 pr-2 pb-2 text-left text-sm text-white/60 font-normal">
                  <h3 className=" flex items-center gap-4 border-b border-white/10 pb-4 w-10/12">
                    Perfect for passion projects & simple businessses.
                  </h3>
                </th>
                <th className="w-1/4 px-6 pr-2 pb-2 text-left text-sm text-white/60 font-normal">
                  <h3 className=" flex items-center gap-4 border-b border-white/10 pb-4 w-10/12">
                    for serious business growth & online personality tracking.
                  </h3>
                </th>
                <th className="w-1/4 px-6 pr-2 pb-2 text-left text-sm text-white/60 font-normal">
                  <h3 className=" flex items-center gap-4 border-b border-white/10 pb-4 w-10/12">
                    For large scale businesses and personalities, supports
                    heavy-weight features.
                  </h3>
                </th>
              </tr>
              <tbody className="border-white/10 divide-y divide-white/10">
                <tr>
                  <th
                    className="text-2xl px-6 py-8 text-left align-top font-medium "
                    scope="row"
                  ></th>
                  <td className="h-full px-6 py-2 align-top">
                    <div className="relative h-full w-full">
                      <div className="flex flex-col justify-between h-full">
                        <span className="text-3xl font-semibold">$29.99</span>
                        <p className="text-[13px] leading-4 mt-1 text-white/60">
                          / month
                        </p>
                        <div className="mt-8 w-full">
                          <Button className="w-full" size="sm">
                            <Link href={"/sign-up"}>Get started</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="h-full px-6 py-2 align-top">
                    <div className="relative h-full w-full">
                      <div className="flex flex-col justify-between h-full">
                        <span className="text-3xl font-semibold">$49.99</span>
                        <p className="text-[13px] leading-4 mt-1 text-white/60">
                          / month
                        </p>
                        <div className="mt-8 w-full">
                          <Button className="w-full" size="sm">
                            <Link href={"/sign-up"}>Get started</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="h-full px-6 py-2 align-top">
                    <div className="relative h-full w-full">
                      <div className="flex flex-col justify-between h-full">
                        <span className="text-3xl font-semibold">$89.99</span>
                        <p className="text-[13px] leading-4 mt-1 text-white/60">
                          / month
                        </p>
                        <div className="mt-8 w-full">
                          <Button className="w-full" size="sm">
                            <Link href={"/sign-up"}>Get started</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <StickyHeader
                  title={"Sources"}
                  icon={<GanttChartSquare color="#3FCF8E" />}
                />

                <Row
                  header={<RowHeader title={"Twitter"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Facebook"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Instagram"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Reddit"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Forums"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Blogs (custom request)"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Forums (custom request)"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Tiktok"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"LinkedIn"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Youtube"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Medium"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Quora"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Reviews"} />}
                  td1={<UnChecked />}
                  td2={<UnChecked />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Twitch"} />}
                  td1={<UnChecked />}
                  td2={<UnChecked />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Podcasts"} />}
                  td1={<UnChecked />}
                  td2={<UnChecked />}
                  td3={<CheckedCard />}
                />

                <Row
                  header={<RowHeader title={"Mentions volume"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <div className="my-16 bg-background border-none"></div>
                <StickyHeader
                  title={"analytics"}
                  icon={<Check color="#3FCF8E" />}
                />
                <Row
                  header={<RowHeader title={"Mentions volume"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={
                    <RowHeader
                      title={"Engagement Tracking (likes, shares & comments)"}
                    />
                  }
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"sentiment analysis"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Source analysis"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <div className="my-16 bg-background border-none"></div>
                <StickyHeader
                  title={"projects"}
                  icon={<FolderOpenDot color="#3FCF8E" />}
                />
                <Row
                  header={<RowHeader title={"Projects per account"} />}
                  td1={<CheckedText title={"3 "} />}
                  td2={<CheckedText title={"10 "} />}
                  td3={<CheckedText title={"20  "} />}
                />
                <div className="my-16 bg-background border-none"></div>
                <StickyHeader
                  title={"Keywords"}
                  icon={<CaseSensitive color="#3FCF8E" />}
                />
                <Row
                  header={<RowHeader title={"Keywords per project"} />}
                  td1={<CheckedText title={"3 "} />}
                  td2={<CheckedText title={"9 "} />}
                  td3={<CheckedText title={"25  "} />}
                />
                <div className="my-16 bg-background border-none"></div>
                <StickyHeader
                  title={"Updates"}
                  icon={<RefreshCcw color="#3FCF8E" />}
                />
                <Row
                  header={<RowHeader title={"Basic Sentiment analysis"} />}
                  td1={<CheckedText title={"Every 12 hours"} />}
                  td2={<CheckedText title={"Every hour"} />}
                  td3={<CheckedText title={"Every hour"} />}
                />
                <div className="my-16 bg-background border-none"></div>
                <StickyHeader
                  title={"Mentions"}
                  icon={<Infinity color="#3FCF8E" />}
                />
                <Row
                  header={<RowHeader title={"Mentions limit per project"} />}
                  td1={<CheckedText title={"3K"} />}
                  td2={<CheckedText title={"2K"} />}
                  td3={<CheckedText title={"100K"} />}
                />

                <div className="my-16 bg-background border-none"></div>
                <StickyHeader
                  title={"AI features"}
                  icon={<Microscope color="#3FCF8E" />}
                />
                <Row
                  header={<RowHeader title={"Basic Sentiment analysis"} />}
                  td1={<CheckedCard />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Critical mentions"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <Row
                  header={<RowHeader title={"Advanced Metrics Dashboard"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />

                <Row
                  header={<RowHeader title={"AI reports"} />}
                  td1={<UnChecked />}
                  td2={<CheckedCard />}
                  td3={<CheckedCard />}
                />
                <div className="my-16 bg-background border-none"></div>
                <StickyHeader
                  title={"Data"}
                  icon={<Infinity color="#3FCF8E" />}
                />
                <Row
                  header={<RowHeader title={"Historical data"} />}
                  td1={<CheckedText title={"1 Month"} />}
                  td2={<CheckedText title={"6 Month"} />}
                  td3={<CheckedText title={"All time"} />}
                />
                <div className="my-16 bg-background border-none"></div>
                <StickyHeader
                  title={"Free trial"}
                  icon={<BadgeCent color="#3FCF8E" />}
                />
                <Row
                  header={<RowHeader title={"Period"} />}
                  td1={<CheckedText title={"14 days"} />}
                  td2={<CheckedText title={"14 days"} />}
                  td3={<CheckedText title={"1 month"} />}
                />
              </tbody>
              <tfoot>
                <tr className="border-white/10 border-t">
                  <th className="sr-only" scope="row">
                    {" "}
                    choose your plan
                  </th>
                  <td className="px-6 pt-5">
                    <Button className="w-10/12 p-0" size="sm">
                      <Link href={"/sign-up"}>Get startxed</Link>
                    </Button>
                  </td>
                  <td className="px-6 pt-5">
                    <Button className="w-10/12 p-0" size="sm">
                      <Link href={"/sign-up"}>Get startxed</Link>
                    </Button>
                  </td>
                  <td className="px-6 pt-5">
                    <Button className="w-10/12 p-0" size="sm">
                      <Link href={"/sign-up"}>Get startxed</Link>
                    </Button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="md:px-12 w-full lg:px-24 px-8  h-fit lg:h-full pt-24 lg:pt-32 flex items-center justify-center mb-20">
            <div className="h-fit w-full bg-card rounded-xl flex flex-col items-center justify-center px-4 md:px-0 gap-4 py-8 mb-16">
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
                  <Button size="lg">
                    <Link href={"/sign-up"}>Start your project</Link>
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
        </div>
      </div>
    </div>
  );
};

export default page;
