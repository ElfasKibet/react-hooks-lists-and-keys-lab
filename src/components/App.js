import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import projects from "../data/projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
