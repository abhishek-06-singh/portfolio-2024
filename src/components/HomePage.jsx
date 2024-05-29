import React from "react";
import Hero from "./Hero";
import TestemonialsSlide from "./testemonials/TestemonialsSlide";
import AmoutMeSlide from "./AmoutMeSlide";
import SkillsSlide from "./SkillsSlide";
import ProjectsSlide from "./projects/ProjectsSlide";
import ExperienceSlide from "./ExperienceSlide";
import NewsLetter from "./NewsLetter";
import HeroTwo from "./HeroTwo";
import FaqsSlide from "./faqs/FaqsSlide";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AmoutMeSlide />
      <SkillsSlide />
      <ProjectsSlide />
      <ExperienceSlide />
      <TestemonialsSlide />
      <FaqsSlide />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
