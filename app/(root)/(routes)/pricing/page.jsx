import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const starter = [
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
];
const medium = [
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
];
const pro = [
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
  {
    title: "Unlimited API requests",
  },
];

const page = () => {
  return (
    <div className="h-full w-full pt-32 flex flex-col text-foreground">
      <div className="w-full md:px-24 flex flex-col items-center gap-24">
        <div className="w-1/2 flex flex-col gap-4 items-center justify-center text-center">
          <span className="text-sm text-primary">Pricing</span>
          <h1 className="text-4xl w-full font-semibold">
            Predictable pricing, no surprises
          </h1>
          <span className="w-full text-white/60 font-medium ">
            Start your project, track your growth, then scale to millions of
            users.
          </span>
        </div>
        <div className="h-screen w-full flex items-center justify-around gap-x-0 gap-y-12 px-12  flex-wrap ">
          <div className="h-[700px] w-[325px] rounded-md border border-white/10 bg-card flex flex-col justify-between px-6 py-4 gap-2">
            <div className="h-1/3 w-full flex flex-col justify-between">
              <span className="w-full text-primary text-3xl">Free</span>
              <span className="w-full text-sm">
                Perfect for passion projects & simple websites.
              </span>
            </div>
            <div className="h-1/3 w-full flex items-center justify-start border-b border-white/10">
              <div className="flex gap-1 items-end">
                <h1 className="text-4xl font-semibold">$24.99</h1>
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
                    <li className="flex gap-2 items-center">
                      <Check size={18} color="#3FCF8E" />
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="h-fit flex flex-col w-full gap-8">
              <span className="text-muted-foreground text-sm">
                Free projects are paused after 1 week of inactivity.
              </span>
              <Button>
                <Link href={"/sign-up"}>Get started</Link>
              </Button>
            </div>
          </div>
          <div className="h-2/3 w-[325px] rounded-md border border-white/10 bg-card flex flex-col "></div>
          <div className="h-2/3 w-[325px] rounded-md border border-white/10 bg-card flex flex-col "></div>
        </div>
      </div>
    </div>
  );
};

export default page;
