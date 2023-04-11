import { Link } from "react-router-dom";
import styled from "styled-components";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useEffect } from "react";

const Head = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  background: rgb(255, 255, 255, 0);
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);

  .inner {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;

    h1 {
      display: block;
      font-size: 50px;
      font-family: "Tangerine", cursive;
    }
    svg {
      display: block;
    }
    .gnb > ul {
      display: flex;
      gap: 60px;
      font-size: 16px;
      font-weight: 400;
      li {
        cursor: pointer;
        user-select: none;
      }
      a {
        letter-spacing: 0.5em;
      }
    }
  }
`;
const Header = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  }, []);

  const clickHandler = (num) => {
    gsap.to(window, { duration: 0.5, scrollTo: num });
  };
  return (
    <Head>
      <div className="inner">
        <h1>
          <Link to="#">Junghoon</Link>
        </h1>
        <nav className="gnb">
          <ul>
            <li>
              <a href="#MainVisual">MAINVISUAL</a>
            </li>
            <li>
              <a href="#WebSite">WEBSITE</a>
            </li>
            <li>
              <a href="#Profile">PROFILE</a>
            </li>
          </ul>
        </nav>
      </div>
    </Head>
  );
};

export default Header;
