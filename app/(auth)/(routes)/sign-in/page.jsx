import Link from "next/link";
import Image from "next/image";
import robot from "@/assets/robot.svg";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
          <div className="w-full flex flex-col gap-2 h-fit">
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
            <p className="text-sm text-muted-foreground">
              Don't have an account?
              <Link
                href={"/sign-up"}
                className="underline underline-offset-2 text-white/80 ml-1"
              >
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-black/30 hidden md:flex col-span-6 flex-col px-6 py-12">
        lol
      </div>
    </div>
  );
};

export default page;
