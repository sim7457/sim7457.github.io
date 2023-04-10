import React, { useEffect } from "react";
import "./StarryBackground.css";
import SlickCarousel from "./SlickCarousel";

const StarryBackground = () => {
  const makeStars = () => {
    const maxSize = Math.max(window.innerWidth, window.innerHeight);
    const getRandomX = () => Math.random() * maxSize;
    const getRandomY = () => Math.random() * maxSize;
    const randomRadius = () => Math.random() * 0.7 + 0.6;

    const sky = document.querySelector(".sky");
    const size = Math.floor(maxSize / 2);
    const htmlDummy = new Array(size)
      .fill()
      .map(
        (_) =>
          `<circle class='star' cx=${getRandomX()} cy=${getRandomY()} r=${randomRadius()} />`
      )
      .join("");

    sky.innerHTML = htmlDummy;
  };

  useEffect(() => {
    makeStars();
    window.addEventListener("resize", makeStars);

    return () => {
      window.removeEventListener("resize", makeStars);
    };
  }, []);

  return (
    <div className="backSky">
      <svg className="sky"></svg>
      <div className="Bg">
        <SlickCarousel />
      </div>
    </div>
  );
};

export default StarryBackground;
