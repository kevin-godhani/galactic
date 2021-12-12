import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./index.module.scss";

import emptyCard from "../../styles/img/elitFigterEmpty.png";
import elitFigter from "../../styles/img/elitFigter.png";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "10px",
  centerMode: true,
  arrows: false,
  speed: 1000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1364,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "10px",
        centerMode: true,
      },
    },
    {
      breakpoint: 924,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
  ],
};
const EliteFighters = () => (
  <div className={styles.sliderWrapper}>
    <Slider {...settings}>
      <div className={styles.card}>
        <img src={elitFigter} alt="decoration" />
      </div>
      <div className={styles.card}>
        <img src={emptyCard} alt="decoration" />
      </div>
      <div className={styles.card}>
        <img src={emptyCard} alt="decoration" />
      </div>
      <div className={styles.card}>
        <img src={emptyCard} alt="decoration" />
      </div>
      <div className={styles.card}>
        <img src={emptyCard} alt="decoration" />
      </div>
    </Slider>
  </div>
);

export default EliteFighters;
