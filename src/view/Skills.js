import React from "react";

export default function Skills() {
  return (
    <div id="section3">
      <h1 className="title">SHOW OFF YOU SKILLS!</h1>
      <div id="section3_container">
        <img
          style={{ boxShadow: "3px 3px rgba(25, 37, 99, 0.9)" }}
          className="skillsIMG"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1618146852/hackathon/day95-app-development_1_1_luk4mb.png"
          alt="appdev"
        />
        <img
          style={{ boxShadow: "3px 3px rgba(25, 37, 99, 0.9)" }}
          className="skillsIMG"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1618146714/hackathon/day93-programing_1_ufurus.png"
          alt="programming"
        />
        <img
          style={{ boxShadow: "3px 3px rgba(25, 37, 99, 0.9)" }}
          className="skillsIMG"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1618146714/hackathon/day94-ui-ux_1_tkb1te.png"
          alt="ui/ux"
        />
      </div>
    </div>
  );
}
