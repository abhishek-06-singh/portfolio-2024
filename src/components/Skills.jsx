import React from "react";
import { FaReact } from "react-icons/fa6";

import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
const Skills = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-center text-gray-800 text-3xl lg:text-4xl lg:space-x-32 md:space-x-10 -top-7 bg-neutral-950">
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <FaReact className="text-5xl lg:text-6xl text-gray-800 mb-2 mr-3" />
        React
      </div>
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <SiJavascript className="text-5xl lg:text-6xl text-gray-800 mr-3 mb-2" />
        Javascript
      </div>
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <SiTailwindcss className="text-5xl lg:text-6xl text-gray-800 mr-3 mb-2" />
        Tailwind CSS
      </div>
      <div className="flex flex-col lg:flex-row  items-center mb-4 lg:mb-0">
        <SiRedux className="text-5xl lg:text-6xl text-gray-800 mb-2 mr-3" />
        Redux
      </div>
    </div>
  );
};

export default Skills;
