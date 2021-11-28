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
  // autoplay: true,
  speed: 1000,
  // autoplaySpeed: 1000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "10px",
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
const SlickSlider = ({ changeStep }) => (
  <div className={styles.sliderWrapper}>
    <Slider {...settings}>
      <div onClick={() => changeStep(1)} className={styles.card}>1</div>
      <div onClick={() => changeStep(2)} className={styles.card}>2</div>
      <div onClick={() => changeStep(3)} className={styles.card}>3</div>
      <div onClick={() => changeStep(4)} className={styles.card}>4</div>
      <div onClick={() => changeStep(5)} className={styles.card}>5</div>
      <div onClick={() => changeStep(6)} className={styles.card}>6</div>
      <div onClick={() => changeStep(7)} className={styles.card}>7</div>
    </Slider>
  </div>
);

export default SlickSlider;
