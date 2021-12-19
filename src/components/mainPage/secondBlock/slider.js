import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./index.module.scss";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  centerPadding: "10px",
  centerMode: true,
  arrows: false,
  speed: 750,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 2561,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1921,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    // {
    //   breakpoint: 1364,
    //   settings: {
    //     slidesToShow: 2,
    //     centerPadding: "10px",
    //   },
    // },
    {
      breakpoint: 924,
      settings: {
        slidesToShow: 1,
      },
    },
    // {
    //   breakpoint: 880,
    //   settings: {
    //     slidesToShow: 1,
    //     centerPadding: "20px",
    //   },
    // },
  ],
};
const SlickSlider = ({ redirect, data, isClicable = false, afterChange }) => (
  <div className={styles.sliderWrapper}>
    <Slider {...settings} afterChange={afterChange}>
      {data.map((el) => (
        <div
          className={styles.card}
          key={el.id}
          onClick={() => isClicable && redirect(el.id)}
        >
          <img draggable="false" src={el.url} alt="decoration" />
        </div>
      ))}
    </Slider>
  </div>
);

export default SlickSlider;
