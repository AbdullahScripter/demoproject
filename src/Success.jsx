import React from "react";
import "./App.css";
import hugGif from "../src/assets/hug.gif";
// import confetti from "canvas-confetti";
// import { useEffect } from "react";



function Success() {
  // useEffect(() => {
  //   confetti({
  //     particleCount: 180,
  //     spread: 120,
  //     origin: { y: 0.6 },
  //   });
  // }, []);

  return (
    <div className="container">
      <div className="innerdiv">
        <div className="head">
          <p className="headpara2">I Knew It Sister</p>
        </div>

        <div className="gif">
          <img src={hugGif} alt="hug gif" />
        </div>

        <div className="btns">🥰🕵️‍♀️🥷🏻</div>
      </div>
    </div>
  );
}


export default Success;
