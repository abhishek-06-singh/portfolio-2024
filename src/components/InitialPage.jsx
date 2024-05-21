import React, { useState, useEffect } from "react";
import CLOUDS from "vanta/src/vanta.clouds";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NameLoader from "./NameLoader";

const InitialPage = () => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);
  console.log(showLoader, "showLoader");
  useEffect(() => {
    CLOUDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      skyColor: 0x5463b6,
      cloudColor: 0xa7b2c3,
      speed: 2.0,
    });
  }, []);

  return (
    <div className="relative w-full h-[100rem] overflow-y-auto">
      <div className="w-full h-screen z-40 fixed" id="vanta">
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
            onClick={() => navigate("/home")}
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

export default InitialPage;
