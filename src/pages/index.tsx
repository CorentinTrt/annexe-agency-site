import * as React from "react";

import Hooking from "../components/1_sections/Hooking/Hooking";
import About from "../components/1_sections/About/About";
import Projects from "../components/1_sections/Projects/Projects";
import Contact from "../components/1_sections/Contact/Contact";

const HomePage = () => {
  return (
    <div className="home">
      <Hooking />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
