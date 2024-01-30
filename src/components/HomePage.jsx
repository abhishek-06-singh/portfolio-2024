import React from "react";
import Hero from "./Hero";
import TestemonialsSlide from "./testemonials/TestemonialsSlide";
import AmoutMeSlide from "./AmoutMeSlide";
import SkillsSlide from "./SkillsSlide";
import ProjectsSlide from "./projects/ProjectsSlide";
import ExperienceSlide from "./ExperienceSlide";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AmoutMeSlide />
      <SkillsSlide />
      <ProjectsSlide />
      <TestemonialsSlide />
      <ExperienceSlide />
    </div>
  );
};

export default HomePage;
