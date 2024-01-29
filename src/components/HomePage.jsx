import React from "react";
import Hero from "./Hero";
import Testemonials from "./testemonials/Testemonials";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./projects/Projects";
import Experience from "./Experience";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />

      <Testemonials />
      <Experience />
    </div>
  );
};

export default HomePage;
