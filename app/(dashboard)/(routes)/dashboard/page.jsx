import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function page() {
  const supabase = createServerComponentClient({ cookies });
  let { data: data, error: projectError } = await supabase.from("projects")
    .select(`title, project_id, tags (
      tag, parent
    ) `);

  if (projectError) {
    console.error(projectError);
  }
  // console.log(JSON.stringify(data, null, 2));
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
          {data.map((item) => {
            return (
              <ProjectCard
                key={item.project_id}
                id={item.project_id}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
