import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
export default async function page() {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full p-4">
      <div className="w-full flex items-center justify-center md:justify-start border-b border-white/10 py-4">
        <form action="/utils/logout" method="post">
          <Button size="sm" className>
            Add project
          </Button>
        </form>
      </div>

      <div className="h-full w-full flex flex-col items-start justify-start py-8 gap-8">
        <h1 className="text-lg font-bold">Your projects</h1>
        <div className="w-full h-full flex gap-8 flex-wrap justify-center md:justify-start">
          <ProjectCard
            title="BrandBot"
            hashtags={["#BrandBot", "#secondTag", "#thirdTag"]}
          />
        </div>
      </div>
    </div>
  );
}
