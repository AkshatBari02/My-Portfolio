import React, { useState, useRef } from "react";
import "./timer.css";

function CountdownTimer() {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [displayTime, setDisplayTime] = useState("00:00");
  const audioRef = useRef(null);
  let interval = null;

  function setTime() {
    const newMins = parseInt(prompt("Enter minutes"));
    const newSecs = parseInt(prompt("Enter seconds"));
    setMins(newMins);
    setSecs(newSecs);
    setDisplayTime(
      `${newMins.toString().padStart(2, "0")}:${newSecs
        .toString()
        .padStart(2, "0")}`
    );
  }

  function startTimer() {
    const totalTime = mins * 60 + secs;
    let currentTime = totalTime;

    interval = setInterval(() => {
      currentTime--;

      if (currentTime >= 0) {
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`;
        setDisplayTime(formattedTime);
      } else {
        clearInterval(interval);
        audioRef.current.play();
        setDisplayTime("Time's up!");
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    // setDisplayTime("Timer stopped");
  }

  return (
    <div className="clock-timer clock-body">
      <div className="clock-top">
        <div className="clock-circle"></div>
        <div className="clock-circle"></div>
      </div>

      <div className="clock-container">
        <span className="clock-emoji">&#128512;</span>
        <div className="clock-tik">
          <div className="clock-hand"></div>
        </div>
        <div className="clock-txt">
          <h2 className="clock-txt-h2">Timer</h2>
          <h2 id="clockDisplayTime" className="clock-txt-h2">
            {displayTime}
          </h2>
          <audio
            src={"https://www.pagalworld.com.se/files/download/id/67290"}
            type="audio/mp3"
            ref={audioRef}
          ></audio>
          <div className="clock-btn">
            <button type="button" onClick={startTimer} className="clock-btn-p">
              Start
            </button>
            <button type="button" onClick={setTime} className="clock-btn-p">
              Set Time
            </button>
            <button type="button" onClick={stopTimer} className="clock-btn-p">
              Silent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
