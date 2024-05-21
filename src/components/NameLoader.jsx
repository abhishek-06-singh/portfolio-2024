import React from "react";
import LoadingLottie from "../images/Animation - 1716272070293.json";
import Lottie from "react-lottie";
import "../index.css";
const NameLoader = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex justify-center items-center text-center mt-80 flex-col p-5 rounded-2xl bg-black/10 border-1 border-black lg:w-3/12 md:5/12 w-8/12 mx-auto ">
      <p className="italic">Abhishek Singh Chauhan {"</>"} </p>
      <Lottie options={lottieOptions} width={100} />
    </div>
  );
};

export default NameLoader;
