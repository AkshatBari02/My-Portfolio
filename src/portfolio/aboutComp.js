import React, { useState, useEffect } from "react";
import DrawerAppBar from "./NavComp";
import "./aboutcomp.css";

function AboutComp() {
  const [text, setText] = useState("");
  const aboutText =
    "I'm a second-year B.Tech Computer Science student, deeply passionate about coding and problem-solving. My coursework and coding projects have honed my skills in programming. I thrive in collaborative settings, evident from hackathons and team projects. Eager to bridge theory with real-world application, I'm excited to contribute my energy and knowledge to the ever-evolving tech space.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prevText) => prevText + aboutText[index]);
      index++;
      if (index === aboutText.length) {
        clearInterval(timer);
      }
    }, 50); // Adjust the delay between characters as needed

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <DrawerAppBar />
      <div className="about-content">
        <div className="typewriter">
          <h1>About Me</h1>
          <p className="about-p">{text}</p>
        </div>
        <div className="about-img-container">
          <div className="about-img">
            <img src={require(`./portfolio images/about.jpeg`)} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComp;
