import React from "react";
import styled, { keyframes } from "styled-components";
import Profile from "./Profile";

const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #020107 0%, #201b46 100%);
  z-index: 1;
  overflow: hidden;
`;

// const Text = styled.div`
//   color: #fff;
//   position: absolute;
//   top: 50%;
//   right: 50%;
//   margin: -10px -75px 0 0;
//   font-size: 20px;
//   font-family: sans-serif;
//   font-weight: bold;
// `;

const BOX = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 600px;
  /* background: #fff; */
  /* border-radius: 15px;
  overflow: hidden; */
`;

const starFieldWidth = 2560;
const starFieldHeight = 2560;
const starStartOffset = 600;
const numStarOneStars = 1700;
const numStarTwoStars = 700;
const numStarThreeStars = 200;
const numShootingStars = 10;

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-${starFieldHeight}px) translateX(-${starFieldWidth}px);
  }
`;

const animShootingStar = keyframes`
  from {
    transform: translateY(0px) translateX(0px) rotate(-45deg);
    opacity: 1;
    height: 5px;
  }
  to {
    transform: translateY(-${starFieldHeight}px) translateX(-${starFieldWidth}px) rotate(-45deg);
    opacity: 1;
    height: 800px;
  }
`;

const createStars = (n) => {
  let stars = `${Math.floor(Math.random() * starFieldWidth)}px ${Math.floor(
    Math.random() * starFieldHeight
  )}px #FFF`;

  for (let i = 2; i <= n; i++) {
    stars += `, ${Math.floor(Math.random() * starFieldWidth)}px ${Math.floor(
      Math.random() * starFieldHeight
    )}px #FFF`;
  }

  return stars;
};

const StarTemplate = styled.div`
  z-index: 10;
  width: ${({ starSize }) => starSize};
  height: ${({ starSize }) => starSize};
  border-radius: 50%;
  background: transparent;
  box-shadow: ${({ numStars }) => createStars(numStars)};
  animation: ${animStar} ${({ scrollSpeed }) => scrollSpeed} linear infinite;
`;

const ShootingStarTemplate = styled.div`
  z-index: 10;
  width: 5px;
  height: ${({ starSize }) => starSize + 80}px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  animation: ${animShootingStar} 10s linear infinite;
`;

const StarField = () => {
  return (
    <>
      <Container>
        <BOX>
          <Profile />
        </BOX>
        <StarTemplate
          numStars={numStarOneStars}
          starSize="1px"
          scrollSpeed="100s"
        />
        <StarTemplate
          numStars={numStarOneStars}
          starSize="1px"
          scrollSpeed="100s"
        />
        <StarTemplate
          numStars={numStarTwoStars}
          starSize="2px"
          scrollSpeed="125s"
        />
        <StarTemplate
          numStars={numStarThreeStars}
          starSize="3px"
          scrollSpeed="175s"
        />
        <ShootingStarTemplate starSize="5px" />
      </Container>
    </>
  );
};

export default StarField;
