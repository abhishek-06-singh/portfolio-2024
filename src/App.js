import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Projects from "./components/projects/Projects";
import Experience from "./components/Experience";
import BlogsAll from "./components/blogs/BlogsAll";
import InitialPage from "./components/InitialPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<InitialPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blogposts" element={<BlogsAll />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
