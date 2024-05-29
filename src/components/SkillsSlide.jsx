import React from "react";
import { FaReact } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

const SkillsSlide = () => {
  return (
    <div className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-white/5 text-white p-8 sm:p-10  flex gap-3 items-center text-2xl justify-center font-bold tracking-tighter">
            <FaReact className=" text-5xl text-white" />
            ReactJs
          </div>
          <div className="bg-white/5 text-white p-8 sm:p-10  flex gap-3 items-center text-2xl justify-center font-bold tracking-tighter">
            <TbBrandNextjs className=" text-5xl text-white" />
            NextJs
          </div>
          <div className="bg-white/5 text-white p-8 sm:p-10  flex gap-3 items-center text-2xl justify-center font-bold tracking-tighter">
            <SiRedux className=" text-5xl text-white" />
            Redux
          </div>
          <div className="bg-white/5 text-white p-8 sm:p-10  flex gap-3 items-center text-2xl justify-center font-bold tracking-tighter">
            <SiJavascript className=" text-5xl text-white" />
            Javascript
          </div>
          <div className="bg-white/5 text-white p-8 sm:p-10  flex gap-3 items-center text-2xl justify-center font-bold tracking-tighter">
            <SiTailwindcss className=" text-5xl text-white" />
            Tailwind
          </div>
          <div className="bg-white/5 text-white p-8 sm:p-10  flex gap-3 items-center text-2xl justify-center font-bold tracking-tighter">
            <FaDocker className=" text-5xl text-white" />
            Docker
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSlide;
