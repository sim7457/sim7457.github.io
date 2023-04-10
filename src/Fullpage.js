import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./css/reset.css";
import Header from "./Header.js";
import Main_Vg_Pg from "./Main_Vg_Pg.js";
import StarryBackground from "./StarryBackground.js";

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Main_Vg_Pg />
          </div>
          <div className="section">
            <StarryBackground />
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const Fullpage_main = () => {
  return (
    <>
      <Header />
      <div id="react-root">
        <Fullpage />
      </div>
    </>
  );
};

export default Fullpage_main;
