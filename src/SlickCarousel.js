import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickCarousel.css";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="flex_box">
            <div className="left_box">
              <h2>toss</h2>
              <div className="Info">
                <h3>INFO</h3>
                <ul>
                  <li>
                    <strong>반응형</strong>으로 제작한 홈페이지입니다.
                  </li>
                  <li>1200px 라인에 맞춰 제작.</li>
                  <li>j-Qury 사용해 다양한 이벤트를 실행.</li>
                </ul>
                <h3>TOOLS</h3>
                <p>HTML5 / CSS3 / JS(j-Query)</p>
                <h3>WORK</h3>
                <p>개인작업 100%</p>
              </div>
            </div>
            <div className="right_box">
              <div className="content">
                <div className="case">
                  <img src="./img/toss_bg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex_box">
            <div className="left_box">
              <h2 className="kakao">KaKao</h2>
              <div className="Info">
                <h3>INFO</h3>
                <ul>
                  <li>
                    <strong className="kakao">반응형</strong>으로 제작한
                    홈페이지입니다.
                  </li>
                  <li>1200px 라인에 맞춰 제작.</li>
                  <li>j-Qury 사용해 다양한 이벤트를 실행.</li>
                </ul>
                <h3>TOOLS</h3>
                <p>HTML5 / CSS3 / JS(j-Query)</p>
                <h3>WORK</h3>
                <p>개인작업 100%</p>
              </div>
            </div>
            <div className="right_box">
              <div className="content">
                <div className="case">
                  <img src="./img/kakao_bg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex_box">
            <div className="left_box">
              <h2 className="AstonMartin">AstonMartin</h2>
              <div className="Info">
                <h3>INFO</h3>
                <ul>
                  <li>
                    <strong className="AstonMartin">반응형</strong>으로 제작한
                    홈페이지입니다.
                  </li>
                  <li>1200px 라인에 맞춰 제작.</li>
                  <li>j-Qury 사용해 다양한 이벤트를 실행.</li>
                </ul>
                <h3>TOOLS</h3>
                <p>HTML5 / CSS3 / JS(j-Query)</p>
                <h3>WORK</h3>
                <p>개인작업 100%</p>
              </div>
            </div>
            <div className="right_box">
              <div className="content">
                <div className="case">
                  <img src="./img/AstonMartin_bg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex_box">
            <div className="left_box">
              <h2 className="Lotte">Lotte E&C</h2>
              <div className="Info">
                <h3>INFO</h3>
                <ul>
                  <li>
                    <strong className="Lotte">반응형</strong>으로 제작한
                    홈페이지입니다.
                  </li>
                  <li>1200px 라인에 맞춰 제작.</li>
                  <li>j-Qury 사용해 다양한 이벤트를 실행.</li>
                </ul>
                <h3>TOOLS</h3>
                <p>HTML5 / CSS3 / JS(j-Query)</p>
                <h3>WORK</h3>
                <p>개인작업 100%</p>
              </div>
            </div>
            <div className="right_box">
              <div className="content">
                <div className="case">
                  <img src="./img/lotte_bg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex_box">
            <div className="left_box">
              <h2 className="shinsegae">Shinsegae</h2>
              <div className="Info">
                <h3>INFO</h3>
                <ul>
                  <li>
                    <strong className="shinsegae">반응형</strong>으로 제작한
                    홈페이지입니다.
                  </li>
                  <li>1200px 라인에 맞춰 제작.</li>
                  <li>j-Qury 사용해 다양한 이벤트를 실행.</li>
                </ul>
                <h3>TOOLS</h3>
                <p>HTML5 / CSS3 / JS(j-Query)</p>
                <h3>WORK</h3>
                <p>개인작업 100%</p>
              </div>
            </div>
            <div className="right_box">
              <div className="content">
                <div className="case">
                  <img src="./img/shinsegae_bg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlickCarousel;
