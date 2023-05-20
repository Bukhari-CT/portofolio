import React, { useState } from "react";
import ArchiveCard from "./ArchiveCard";

function Archive() {
  const [projectsList, setProjectsList] = useState<any[]>([
    {
      projectTitle: "First",
      techStack: ["Typescript", "Reactjs", "Nodejs"],
      link: "#",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum asperiores provident quibusdam reprehenderit tempora, voluptatum iusto voluptatibus illum porro, facere voluptates minima optio, magni possimus. Ea voluptate iste sunt.",
    },
    {
      projectTitle: "Second",
      techStack: ["Typescript", "Reactjs", "Nodejs"],
      link: "#",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum asperiores provident quibusdam reprehenderit tempora, voluptatum iusto voluptatibus illum porro, facere voluptates minima optio, magni possimus. Ea voluptate iste sunt.",
    },
    {
      projectTitle: "First",
      techStack: ["Typescript", "Reactjs", "Nodejs"],
      link: "#",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum asperiores provident quibusdam reprehenderit tempora, voluptatum iusto voluptatibus illum porro, facere voluptates minima optio, magni possimus. Ea voluptate iste sunt.",
    },
    {
      projectTitle: "Second",
      techStack: ["Typescript", "Reactjs", "Nodejs"],
      link: "#",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum asperiores provident quibusdam reprehenderit tempora, voluptatum iusto voluptatibus illum porro, facere voluptates minima optio, magni possimus. Ea voluptate iste sunt.",
    },
  ]);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">Other Noteworthy Projects</h2>
        <p className="text-sm font-titleFont text-textGreen">View The Archive</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-1">
        {projectsList.map((project) => (
          <ArchiveCard
            title={project.projectTitle}
            techStackList={project.techStack}
            description={project.desciption}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Archive;
