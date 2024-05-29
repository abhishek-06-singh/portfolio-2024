import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const InitialPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[100rem] overflow-y-auto">
      <div className="w-full h-screen z-40 fixed">
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
