import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./index.module.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "10px",
  centerMode: true,
  arrows: false,
  // autoplay: true,
  speed: 1000,
  // autoplaySpeed: 1000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1364,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "200px",
        centerMode: true,
      },
    },
    {
      breakpoint: 924,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
  ],
};
const SlickSlider = ({ changeStep, data, isClicable = false }) => (
  <div className={styles.sliderWrapper}>
    <Slider {...settings}>
      {data.map((el) => (
        <div
          className={styles.card}
          key={el.id}
          onClick={() => isClicable && changeStep(el.id)}
        >
          <img src={el.url} alt="decoration" />
        </div>
      ))}
    </Slider>
  </div>
);

export default SlickSlider;
