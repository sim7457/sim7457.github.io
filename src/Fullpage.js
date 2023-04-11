import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./css/reset.css";
import Header from "./Header.js";
import Main_Vg_Pg from "./Main_Vg_Pg.js";
import StarryBackground from "./StarryBackground.js";
import Profiler from "./Profile.js";
import StarField from "./StarField";
import styled from "styled-components";

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    anchors={["MainVisual", "WebSite", "Profile"]}
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
            <StarField />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

const BG = styled.div`
  background: #111;
`;
const Fullpage_main = () => {
  return (
    <>
      <BG>
        <Header />
        <div id="react-root">
          <Fullpage />
        </div>
      </BG>
    </>
  );
};

export default Fullpage_main;
