import React from "react";
import ReactBreeze from "./ReactBreeze";
import FoodFiesta from "./FoodFiesta";
import LinkedIn from "./LinkedIn";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-neutral-950 flex text-center flex-col mt-5">
      <Link to={"/"} className="lg:pl-20 lg:pt-20 sm:pl-10 lg:pb-10 sm:pb-5">
        <FaArrowAltCircleLeft className="text-3xl text-green-600 mb-3 hover:scale-95 transition-transform duration-300 ease-in-out hover:text-green-500 " />
      </Link>
      <span className="text-2xl font-bold text-green-600">
        {" "}
        Projects <span className="text-green-600 animate-pulse">.</span>
      </span>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
        I worked on lots of projects .
      </p>
      <ReactBreeze />
      <FoodFiesta />
      <LinkedIn />
    </div>
  );
};

export default Projects;
