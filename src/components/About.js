import React from "react";
import { image } from "../data/user";
import Links from "./Links";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I enjoy learning and building things with code.</p>
      <img src={image} alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
