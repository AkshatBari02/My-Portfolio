import React, { useState, useEffect } from "react";

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
    <div style={{ display: "flex" }}>
      <div style={{ padding: "96px", paddingRight: "30px" }} className="typewriter">
        <h1 style={{ color: "red" }}>About Me</h1>
        <p style={{ color: "white", fontFamily: "cursive", fontSize: "18px" }}>{text}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", padding: "44px 100px", paddingLeft: "44px" }}>
        <div style={{ position: "sticky", top: 0 }}>
          <img src={require(`./portfolio images/about.jpeg`)} alt="" style={{ height: "450px", width: "450px", borderRadius: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default AboutComp;
