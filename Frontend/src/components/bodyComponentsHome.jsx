// src/components/bodyComponentsHome.jsx

import React, { useEffect, useRef, useState } from "react";
import "../styles/homeBodyComp.css";
import MPPS from "../assets/images/mpps.png";
import olaVid from "../assets/images/OLA_VID.mp4";
import IssueCard from "./issueCard";          // if you still use it elsewhere
import NewsConComp from "./newsConComp";      // ← new import!

export default function HomeBodyComponents({ yValue }) {
  const startRef = useRef(null);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const target = parseInt(startRef.current.getBoundingClientRect().top, 10);
    setTransition(!(yValue > target + 200));
  }, [yValue]);

  return (
    <div id="HOMEBODYCOMP">
      {/* ———————————————————————————— */}
      <div className="section1">
        <h1>Your MPPS, Your Business</h1>
        <div className="bottomSection1">
          <div className={transition ? "section1Text" : "section1Text showTextSec1"}>
            <h2>Hero1</h2>
            <p>This is us and we are a </p>
            <h2>Hero1</h2>
            <p>This is us and we are a </p>
            <h2>Hero1</h2>
            <p>This is us and we are a </p>
          </div>
          <img ref={startRef} src={MPPS} alt="MPPS" />
        </div>
      </div>

      {/* ———————————————————————————— */}
      <div className="olaVideo">
        <video className="OLAVID" src={olaVid} autoPlay loop muted playsInline />
        <h3>Catchy hook... See what's been going on without seeing whats been going on</h3>
      </div>

      {/* ———————————————————————————— */}
      <div className="raiseitCall">
        <h2>Top Issues To Raise</h2>

        <div className="horScroll">
          {/* ← replace hardcoded <Cards/> with your live-news component */}
          <NewsConComp />
        </div>

        <h1 style={{ marginBottom: "5%" }}>The Future is in your hands</h1>
        <h3>Raise Public Issues to responsible Decision Makers and hold them Accountable to address the issues</h3>
        <button className="button-27">RaiseIt</button>
      </div>
    </div>
  );
}
