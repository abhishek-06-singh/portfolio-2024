import React from "react";
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  {
    name: "Includes",
    description:
      "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
  },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
const ExperienceSlide = () => {
  return (
    <div className="relative isolate overflow-hidden bg-neutral-950">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={502}
          cy={502}
          r={502}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience.
            <br />
            React Developer <span className="text-blue-500">OyeLabs</span>
          </h2>

          <ul className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 text-start">
            <li>
              Demonstrated proficiency in React.js development, emphasizing a
              strong grasp of core concepts and features.
            </li>
            <li>
              Successfully implemented responsive designs, ensuring optimal user
              experiences across diverse devices and screen sizes.
            </li>
            <li>
              Collaborated effectively with cross-functional teams, including
              designers and backend developers, to bring design concepts to
              life.
            </li>
            <li>
              Implemented efficient state management using React's state and
              context API or other relevant libraries.
            </li>
          </ul>

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
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlide;
