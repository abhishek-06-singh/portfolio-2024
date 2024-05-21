import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import "../css/extra.css";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { IoIosCloseCircleOutline } from "react-icons/io";
import AbhshekResume from "../resume/Abhishek-singh.pdf";
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CLOUDS from "vanta/src/vanta.clouds";

const navigation = [
  { name: "About Me", href: "/aboutme" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact Me", href: "/contact" },
  { name: "Blog Posts", href: "/blogposts" },
];

const Hero = () => {
  useEffect(() => {
    CLOUDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 400.0,
      minWidth: 200.0,
      backgroundColor: 0x0,
      skyColor: 0x0,
      cloudColor: 0xa7b2c3,
      sunColor: 0x2b0055,
      sunlightColor: 0x0,
      speed: 2.0,
    });
  }, []);
  const navigate = useNavigate(); // Initialize useNavigate

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-950 h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <span className=" text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent">
              Avi.dev()
            </span>
          </div>
          <div className="flex lg:hidden">
            <FaBarsProgress
              onClick={() => setMobileMenuOpen(true)}
              className="text-3xl font-bold text-pink-600 hover:text-pink-700 "
            />
          </div>
          <div className="hidden lg:flex lg:gap-x-12  ">
            {navigation.map((item) => (
              <span
                key={item.name}
                onClick={() => navigate(item.href)} // Use navigate instead of href
                className="cursor-pointer text-sm font-semibold leading-6 text-gray-400"
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-950 bg-opacity-95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <span className=" text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent ">
                Avi.dev()
              </span>

              <IoIosCloseCircleOutline
                className="text-pink-600 text-3xl font-bold cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <span
                      key={item.name}
                      onClick={() => navigate(item.href)} // Use navigate instead of href
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-pink-600 cursor-pointer"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6  lg:px-8 ">
        <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-sm "
          aria-hidden="true"
          id="vanta"
        >
          <div className="h-screen" />
        </div>
        <div className="mx-auto max-w-5xl pt-56 sm:py-48 lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-800 ring-1 ring-gray-500/10 hover:ring-gray-400/20 space-x-4 flex">
              HI , MY NAME IS
              <a href="#" className="font-semibold text-pink-600">
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center h-screen pb-20">
            <h1 className=" text-3xl font-bold  bg-gradient-to-r from-teal-500 via-pink-600 to-sky-600 bg-clip-text text-transparent sm:text-5xl lg:h-[4rem] md:h-[5rem] sm:h-[7rem] tracking-tighter">
              Abhishek Singh Chauhan{" "}
              <span className="text-pink-400 animate-pulse"> .</span>
            </h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-teal-700 via-pink-700 to-sky-700 bg-clip-text text-transparent sm:text-6xl "
            >
              I am a Frontend Developer
            </motion.h1>
            <p className="mt-6 text-lg leading-8 text-gray-50 ">
              I Like to build amazing UI/UX experience for humans 🚀. Currently,
              I'm working as a React Developer at OyeLabs.
            </p>
            <div className="mt-14 flex flex-col items-center justify-center gap-x-6 lg:flex-row pb-44 ">
              <span
                onClick={() => navigate("/contact")} // Use navigate instead of href
                className="cursor-pointer rounded-full tracking-tight bg-gradient-to-r from-sky-500 to-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                <button>Want To Work With Me ?</button>
              </span>
              <a
                href={AbhshekResume}
                download="AbhishekSinghResume.pdf"
                className="mt-4 lg:mt-0 rounded-full bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download resume.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
