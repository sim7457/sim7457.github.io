import React, { useState } from "react";
import styled from "styled-components";

const ArtistListContainer = styled.ul`
  display: flex;
  min-height: 750px;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

const ArtistListItem = styled.li`
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  cursor: pointer;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 15, 0.75);
  }

  &.active {
    flex: 6;
    cursor: default;

    &:before {
      background: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
    }
  }
`;
const ArtistName = styled.h3`
  font-weight: 700;
  white-space: nowrap;
  position: absolute;
  z-index: 30;
  opacity: 1;
  top: 50%;
  left: 50%;
  transition: top 0.35s, opacity 0.15s;
  transform-origin: 0 0;
  font-size: 24px;
  text-transform: uppercase;
  transform: translate(-50%, -50%) rotate(0deg);
  color: #fff;

  .active & {
    display: none;
  }
  @media only screen and (min-width: 1280px) {
    top: 100%;
    left: 50%;
    font-size: 32px;
    transform: translate(-20px, -50%) rotate(-90deg);
    padding-left: 30px;
  }
`;

const SectionContent = styled.div`
  position: relative;
  z-index: 30;
  opacity: 0;
  align-self: flex-end;
  width: 100%;
  transition: all 0.35s 0.1s ease-out;

  .active & {
    opacity: 1;
  }
`;

const Inner = styled.div`
  position: absolute;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  align-items: flex-end;
  left: 0;
  bottom: 0;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.25s ease-out;

  @media only screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: calc(100% - 340px) 300px;
    grid-column-gap: 40px;
    padding: 40px;
  }

  @media only screen and (min-width: 1280px) {
    grid-auto-flow: column;
    grid-template-columns: 412px 200px;
    grid-column-gap: 40px;
    padding: 80px;
  }

  .active & {
    opacity: 1;
  }
`;

const ArtistBio = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  grid-gap: 24px;
  color: #fff;

  h2 {
    font-size: 30px;
    line-height: 40px;
    white-space: pre-wrap;
  }
  p {
    white-space: pre-wrap;
    line-height: 25px;
  }
`;

const ArtistProfileLink = styled.a`
  pointer-events: none;

  .active & {
    pointer-events: all;
  }
`;
const ArtistList = () => {
  const [active, setActive] = useState(0);
  const artists = [
    {
      name: "안녕하세요 Front-end developer 심정훈입니다.",
      backgroundUrl: "./img/my_img11.jpg",
      spotify: {
        profileUrl: "./img/bg01.jpg",
      },
      description: "제 포트폴리오 페이지에 오신걸 환영합니다.",
    },
    {
      name: "User Experience 중심으로\n변화하다.",
      backgroundUrl: "./img/image5-3.jpg",
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/your-crooked-colours-profile-url",
      },
      description:
        "몰입형 디지털 경험의 기반으로 원활한 사용자환경을 위해 \n콘텐츠와 디자인을 세심하게 혼합합니다.",
    },
    {
      name: "사진 & 동영상을 좋아하는\n개발자.",
      backgroundUrl: "./img/my_img20.jpg",
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/your-crooked-colours-profile-url",
      },
      description:
        "군 생활에 다양한 경험으로 사진 & 동영상을 찍고\n편집할수있습니다!",
    },
    {
      name: "포기하지않고 앞으로.",
      backgroundUrl: "./img/img99.jpg",
      spotify: {
        profileUrl:
          "https://open.spotify.com/artist/your-crooked-colours-profile-url",
      },
      description:
        "꾸준히 앞으로 나아가며, 꿈을 포기하지 않고 굳건히\n걸어나가겠습니다.",
    },
  ];

  return (
    <ArtistListContainer>
      {artists.map((artist, i) => (
        <ArtistListItem
          key={i}
          style={{ backgroundImage: `url(${artist.backgroundUrl})` }}
          role="button"
          className={active === i ? "active" : ""}
          onClick={() => setActive(i)}
        >
          <ArtistName>{artist.name}</ArtistName>
          <SectionContent>
            <Inner>
              <ArtistBio>
                <h2>{artist.name}</h2>
                <p>{artist.description}</p>
                <ArtistProfileLink
                  href={artist.spotify.profileUrl}
                  target="_blank"
                ></ArtistProfileLink>
              </ArtistBio>
            </Inner>
          </SectionContent>
        </ArtistListItem>
      ))}
    </ArtistListContainer>
  );
};

export default ArtistList;
