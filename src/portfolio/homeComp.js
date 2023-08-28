import React from "react";
// import DrawerAppBar from "./NavComp";
// import './App.css';


function HomeComp() {
  return (
    <>
   
    <div
      style={{
        padding: "3%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <div style={{ animation: "flyInFromTop 1s forwards" }}>
        <img
          src={require(`./portfolio images/profile_picture.jpg`)}
          className="profile" alt="profile_picture"
        />
        <br></br>
      </div>
      <div style={{ textAlign: "center" ,animation: "flyInFromTop 1s forwards"}}>
        <main class="home-container">
          <p>Hello 👋 I'm</p>
          <section className="animation">
            <div className="first">
              <div>Akshat Bari</div>
            </div>
            <div className="second">
              <div>B-TECH Student</div>
            </div>
            <div className="third">
              <div>Frontend Developer</div>
            </div>
            <div className="fourth">
              <div>Python Programmer</div>
            </div>
          </section>
        </main>
      </div>
    </div>
    </>
  );
}
export default HomeComp;
