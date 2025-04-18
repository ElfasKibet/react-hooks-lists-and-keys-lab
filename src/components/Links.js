import React from "react";
import { github, linkedin } from "../data/user";

function Links() {
  return (
    <div>
      <a href={github}>GitHub</a>
      <a href={linkedin}>LinkedIn</a>
    </div>
  );
}

export default Links;
