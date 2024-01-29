import React from "react";
import Hero from "./Hero";
import Testemonials from "./testemonials/Testemonials";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <AboutMe />
      <Testemonials />
    </div>
  );
};

export default HomePage;
