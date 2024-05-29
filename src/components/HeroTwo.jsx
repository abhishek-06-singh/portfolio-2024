import React, { useState, useEffect } from "react";
import CLOUDS from "vanta/src/vanta.clouds";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NameLoader from "./NameLoader";
import { Dialog } from "@headlessui/react";

import { IoIosCloseCircleOutline } from "react-icons/io";
import AbhshekResume from "../resume/Abhishek-singh.pdf";
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from "react-router-dom";
const navigation = [
  { name: "About Me", href: "/aboutme" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact Me", href: "/contact" },
  { name: "Blog Posts", href: "/blogposts" },
];
const HeroTwo = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  console.log(showLoader, "showLoader");
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

  return (
    <div className="relative w-full h-screen">
      <div className=" z-40 " id="vanta">
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
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-400 hover:bg-pink-600 cursor-pointer"
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
        <div className="flex lg:mx-44 md:mx-44 mx-10 h-full flex-col gap-3 lg:mt-80 md:mt-80 mt-52">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-black text-6xl font-semibold tracking-tighter "
          >
            Welcome
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-black text-xl tracking-tighter "
          >
            I am a front-end developer passionate about creating visually
            appealing and user-friendly web applications. Explore my work and
            get to know more about my journey in the world of web development.
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
            onClick={() => navigate("/")}
            className="text-white text-xl tracking-tighter rounded-xl p-3 w-4/12 bg-slate-700 mt-4 hover:shadow-xl hover:shadow-white hover:scale-95"
          >
            {" "}
            Explore
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
