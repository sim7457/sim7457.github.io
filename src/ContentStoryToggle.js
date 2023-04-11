import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import TagCloudComponent from "./TagCloudComponent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 60px;
`;

const GraphicsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 50%;
  max-width: 600px;
`;

const GraphicsSequence = styled.div`
  grid-column: 1;
  grid-row: 1;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: ease;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 60px; */
  width: 50%;
  max-width: 600px;
`;

const ContentSequence = styled.div`
  position: relative;
  min-height: 28px;
  padding: 0 0 0 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const ProgressBarWrapper = styled.div`
  position: absolute;
  display: inline-block;
  width: 3px;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #dcdcdc;
  border-radius: 3px;
  will-change: max-height;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #3c4043;
  transform: ${(props) =>
    props.isActive && !props.isPaused ? "scale(1, 1)" : "scale(1, 0)"};
  transform-origin: top;
  transition-duration: ${(props) => `${props.slideDuration}s`};
  transition-timing-function: linear;
`;

const ContentHeadline = styled.div`
  cursor: pointer;
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    white-space: pre-wrap;
  }
`;

const ContentDesc = styled.div`
  height: ${(props) => (props.isActive ? "auto" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.isActive ? "16px 0" : "0")};
  transition: all 0.25s ease;
  p {
    white-space: pre-wrap;
    line-height: 25px;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 400px;
  object-fit: contain;
`;

const ContentStoryToggle = ({ slideDuration = 2 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timeout = slideDuration * 1500;
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex < contentArray.length - 1 ? prevIndex + 1 : 0
        );
      }, timeout);
      return () => clearInterval(interval);
    }
  }, [isPaused, slideDuration]);

  const handleHeaderClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const contentArray = [
    {
      title: "SKILLS",
      description:
        "HTML, CSS, JavaScript 및 React에 능숙하고 원활한 사용자 경험과\n창의적인 솔루션을 만드는 데 열정을 가진 개발자가되겠습니다 !",
      imageUrl: React.createElement(TagCloudComponent),
    },
    {
      title:
        "여명의 첫 빛처럼 존재감이 찬란하게 빛나는 \n창의적이고 패기 넘치는 심정훈입니다 :)",
      description:
        "다양한 아이디어를 제가 배운 기술로 구현하는 과정이 재밌습니다.\n새로운 시도를 즐기는 프론트엔드 개발자가 되겠습니다.",
      contact:
        "Tel : 010-3818-7457\nEmail : simwjdgns3@naver.com\nWeb : https://github.com/sim7457",
      imageUrl: "./img/my_img03.jpg",
    },
  ];
  return (
    <Wrapper>
      <GraphicsArea>
        {contentArray.map((content, index) => (
          <GraphicsSequence key={index} isActive={index === activeIndex}>
            {typeof content.imageUrl === "string" ? (
              <Image src={content.imageUrl} alt={content.title} />
            ) : (
              content.imageUrl
            )}
          </GraphicsSequence>
        ))}
      </GraphicsArea>
      <ContentArea>
        {contentArray.map((content, index) => (
          <ContentSequence key={index} onClick={() => handleHeaderClick(index)}>
            <ContentHeadline isActive={index === activeIndex}>
              <h3>{content.title}</h3>
            </ContentHeadline>
            <ContentDesc isActive={index === activeIndex}>
              <p className="description">{content.description}</p>
              <p>{content.contact}</p>
            </ContentDesc>
            <ProgressBarWrapper>
              <ProgressBar
                isActive={index === activeIndex && !isPaused}
                slideDuration={slideDuration}
              />
            </ProgressBarWrapper>
          </ContentSequence>
        ))}
      </ContentArea>
    </Wrapper>
  );
};

export default ContentStoryToggle;
