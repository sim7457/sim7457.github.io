import React from "react";
import "./style.css";

function Background({ index }) {
  return <div className={`background background${index}`}></div>;
}

function Text({ index, text }) {
  return <div className={`text text${index}`}>{text}</div>;
}

function Frame({ index }) {
  return <div className={`frame frame${index}`}></div>;
}

function Particle({ index }) {
  return <div key={index} className={`particle particle${index}`}></div>;
}

function Criterion() {
  const texts = ["W", "e", "l", "c", "o", "m", "e", ": )"];
  const frames = [...Array(8).keys()];

  return (
    <div className="criterion">
      {texts.map((text, index) => (
        <Text key={index} index={index} text={text} />
      ))}
      {frames.map((index) => (
        <Frame key={index} index={index} />
      ))}
      {[...Array(72).keys()].map((index) => (
        <Particle key={index} index={index} />
      ))}
    </div>
  );
}

function App() {
  const backgrounds = [...Array(8).keys()];

  return (
    <>
      {backgrounds.map((index) => (
        <Background key={index} index={index} />
      ))}
      <Criterion />
    </>
  );
}

export default App;
