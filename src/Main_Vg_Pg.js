import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import MainVisual from "./MainVisual";
import ArtistList from "./ArtistList";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const AnimatedComponent = styled.div`
  position: absolute;
  width: 100%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  animation: ${(props) => props.visible && fadeIn} 1s ease-in-out forwards;
`;

const Main_Vg_Pg = () => {
  const [showMainVisual, setShowMainVisual] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainVisual(false);
    }, 7000); // Switch to ArtistList after 7 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <AnimatedComponent visible={showMainVisual}>
        <MainVisual />
      </AnimatedComponent>
      <AnimatedComponent visible={!showMainVisual}>
        <ArtistList />
      </AnimatedComponent>
    </Container>
  );
};

export default Main_Vg_Pg;
