import Link from "next/link";
import Image from "next/image";
import robot from "@/assets/robot.svg";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import img2 from "@/assets/img2.jpg";
const page = () => {
  return (
    <div className="bg-background mt-0 h-full grid grid-cols-10 items-center justify-start text-primary-foreground  relative">
      <div className="h-full w-full bg-card col-span-10 md:col-span-4 border-r border-white/10 flex flex-col items-center justify-center py-6 ">
        <div className="w-full h-fit flex items-start ">
          <div className="w-fit flex gap-2 items-center justify-center ml-4 cursor-pointer ">
            <Link href={"/"} className="flex gap-2">
              <Image src={robot} alt="logo" />
              <h2 className="font-bold text-2xl">BrandBot</h2>
            </Link>
          </div>
        </div>
        <div className="h-full w-9/12 flex flex-col justify-center gap-8 px-8 text-white/90 ">
          <div className="w-full flex flex-col gap-2 h-fit text-center md:text-start">
            <h1 className="font-medium text-3xl whitespace-nowrap">
              Welcome back
            </h1>
            <p className="text-muted-foreground font-medium">
              Sign in to your account
            </p>
          </div>
          <div className="w-full h-16">
            <Button className="w-full" variant="secondary">
              Continue with Github
            </Button>
          </div>
          <Separator className="mb-4 -mt-5 opacity-50" />
          <div className="w-full h-fit">
            <form
              action="/utils/login"
              method="post"
              className="flex flex-col gap-2"
            >
              <label htmlFor="email" className="font-light">
                Email
              </label>
              <Input name="email" className=" mb-4" />
              <label htmlFor="password" className="font-light">
                Password
              </label>
              <Input type="password" name="password" className=" mb-6" />
              <Button>Sign In</Button>
            </form>
          </div>
          <div className="w-full h-fit ">
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              {`Don't have an account?`}
              <Link
                href={"/sign-up"}
                className="underline underline-offset-2 text-white/80 ml-1 whitespace-nowrap"
              >
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-black/30 hidden md:flex col items-center justify-center col-span-6 flex-col px-6 py-12">
        <div className="relative flex flex-col gap-6">
          <div className="absolute select-none -top-12  -left-14">
            <span className="text-[160px] leading-none text-muted">“</span>
          </div>
          <blockquote className="max-w-lg z-10 text-3xl text-foreground">
            {` Working with BrandBot has been one of the best experiences I've had
            lately. Incredibly easy to set up, great workflow, and so many fewer
            hoops to jump through than the competition. I definitely plan to use
            it on any and all future projects.`}
          </blockquote>
          <a className="flex items-center gap-4">
            <Image
              src={img2}
              alt="picture"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <cite className="not-italic font-medium text-sm whitespace-nowrap">
                @thatguy_tee
              </cite>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
