import { ChevronRight } from "lucide-react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
const ProjectCard = async ({ id }) => {
  const supabase = createServerComponentClient({ cookies });
  let { data: data, error: projectError } = await supabase
    .from("projects")
    .select(
      `title, project_id, tags (
      tag
    ) `
    )
    .eq("project_id", id);

  if (projectError) {
    console.error(projectError);
  }
  // console.log(JSON.stringify(data, null, 2)); <==== ENTIRE JSON OBJECT FOR PROJECT HERE
  // console.log(data[0].tags[0].tag); <======== TAGS OBJECT HERE
  let arr = [];

  for (let i = 0; i < data[0].tags.length; i++) {
    arr.push(data[0].tags[i].tag);
  }

  return (
    <div className="w-full md:w-1/4 h-28 bg-card rounded-md  group select-none cursor-pointer">
      <Link
        className="w-full h-full flex flex-col justify-between p-2"
        href={"/"}
      >
        <div className="w-full flex justify-between items-center h-1/4">
          <h1 className="font-semibold">{data[0].title}</h1>
          <ChevronRight
            size={25}
            className="stroke-dashboard group-hover:stroke-dashboard-secondary group-hover:translate-x-4 mr-4 duration-200 "
          />
        </div>

        <div className="flex gap-2 items-center">
          {arr.map((hashtag) => {
            return (
              <span key={hashtag} className="text-sm text-muted-foreground">
                {hashtag}
              </span>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
