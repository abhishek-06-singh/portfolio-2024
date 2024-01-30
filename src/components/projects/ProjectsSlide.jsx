import React from "react";
import ReactBreeze from "./ReactBreeze";
import FoodFiesta from "./FoodFiesta";
import LinkedIn from "./LinkedIn";
const ProjectsSlide = () => {
  return (
    <div className="bg-neutral-950 flex text-center flex-col mt-5">
      <span className="text-2xl font-bold text-green-600 lg:mt-20">
        {" "}
        Projects <span className="text-green-600 animate-pulse">.</span>
      </span>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl lg:h-12">
        These are some of my projects.
      </p>
      <ReactBreeze />
      <FoodFiesta />
      <LinkedIn />
    </div>
  );
};

export default ProjectsSlide;
