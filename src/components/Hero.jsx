import { useState } from "react";
import { Dialog } from "@headlessui/react";
// import { ArchiveIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const navigation = [
  { name: "About Me", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Experience", href: "#" },
  { name: "Contact Me", href: "#" },
];

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-950 min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=lime&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12  ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-400"
              >
                {item.name}
              </a>
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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=lime&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                hello
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6  lg:px-8">
        <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c51db7] to-[#3b8efc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-500/10 hover:ring-gray-400/20 space-x-4 flex">
              HI , MY NAME IS
              <a href="#" className="font-semibold text-lime-600">
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className=" text-3xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-lime-600 to-sky-600 bg-clip-text text-transparent sm:text-5xl lg:h-[4rem] md:h-[5rem] sm:h-[7rem]">
              Abhishek Singh Chauhan{" "}
              <span className="text-green-400 animate-pulse"> .</span>
            </h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="text-4xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-lime-600 to-sky-600 bg-clip-text text-transparent sm:text-6xl "
            >
              I am a Frontend Developer
            </motion.h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 ">
              I Like to build amazing UI/UX experience for humans 🚀. Currently,
              I'm working as a React Developer at OyeLabs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="lg:w-1/2 md:w-full sm:w-full bg-gradient-to-r from-teal-600 via-teal-800 to-gray-900 text-white font-semibold rounded-full p-3 hover:bg-teal-800 transition-transform duration-300 ease-in-out hover:scale-95">
                Do You Want To Work With Me ?
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row justify-center text-gray-800 text-3xl lg:text-4xl lg:space-x-32 md:space-x-10 -top-7">
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
      </div>
    </div>
  );
};
export default Hero;
