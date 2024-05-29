import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const experience = [
  {
    project: "Carson&Bear Web App",
    description:
      "Developed React-based Customer Web App with Redux and Tailwind, achieving a 40% increase in loading speed. Integrated Stripe payment flow and implemented a dynamic discount system, leading to a 20% growth in premium plan subscriptions. Streamlined the subscription process, contributing to a 15% increase in user retention.",
  },
  {
    project: "OyeLabs Ui Component Library",
    description:
      "Created a versatile Ui component library with 100+ pre-built components. Reduced development time by 30% across projects through standardized components. Introduced features for component preview and code copying, speeding up development by 25%. Enhanced cross-project consistency, leading to a 20% reduction in overall project completion time.",
  },
  {
    project: "The Excursionist",
    description:
      "Contributed to building Admin Panel and Customer Web App. Developed Customer Web App with React, Redux, and Tailwind, achieving a 25% improvement in UI responsiveness. Maintained a stellar 95% on-time delivery rate, meeting project deadlines consistently. Reduced bugs by 40% through rigorous coding best practices.",
  },
  {
    project: "Insta Service Project (Intern)",
    description:
      "Collaborated in creating the Insta Service platform with a team of 5 developers. Implemented 12 APIs seamlessly into the frontend, broadening the platform's functionality. Played a key role in bug fixing, successfully resolving more than 60+ issues, ensuring a stable and reliable platform. Collaborated closely with the testing team, participating in regular testing cycles to identify and address issues promptly.",
  },
];
const Experience = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#9322a4] via-neutral-950 to-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link to={"/"}>
          <FaArrowAltCircleLeft className="text-3xl text-pink-600 mb-3 hover:scale-95 transition-transform duration-300 ease-in-out hover:text-pink-500" />
        </Link>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className=" font-bold leading-7 text-pink-600 text-xl">
            Experience
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            React Developer <span className="text-blue-600"> OyeLabs</span>
          </p>
          <p className="mt-6 text-lg leading-9 text-gray-400 ">
            <span className="text-gray-200 font-bold">Since May 2023</span> , I
            have had the privilege of serving as a React Developer at OyeLabs,
            As a dedicated member of the development team, I have contributed my
            skills and expertise to various initiatives, shaping the digital
            landscape through the implementation of cutting-edge React
            technologies.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://oyelabs.com/"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Website
          </a>
          <a
            href="https://oyelabs.com/"
            className="text-sm font-semibold leading-6 text-white"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {experience.map((experience) => (
              <div key={experience.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-500">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600"></div>
                  {experience.project}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">
                  {experience.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Experience;
