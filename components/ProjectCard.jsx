import { ChevronRight } from "lucide-react";

const ProjectCard = ({ title, hashtags }) => {
  return (
    <div className="w-full md:w-1/4 h-28 bg-card rounded-md flex flex-col justify-between p-2 group ">
      <div className="w-full flex justify-between items-center h-1/4">
        <h1 className="font-semibold">{title}</h1>
        <ChevronRight
          size={25}
          className="stroke-dashboard group-hover:stroke-dashboard-secondary group-hover:translate-x-4 mr-4 duration-200 "
        />
      </div>

      <div className="flex gap-2 items-center">
        {hashtags.map((hashtag) => {
          return (
            <span className="text-sm text-muted-foreground">{hashtag}</span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
