import React from "react";
import Hero from "./Hero";
import Testemonials from "./testemonials/Testemonials";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./projects/Projects";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />

      <Testemonials />
      <Projects />
    </div>
  );
};

export default HomePage;
