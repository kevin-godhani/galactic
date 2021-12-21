import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./index.module.scss";

const settings = {
  dots: false,
  // infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: 0,
  centerMode: true,
  arrows: false,
  speed: 750,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1921,
      settings: {
        slidesToShow: 2,
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
    // {
    //   breakpoint: 1200,
    //   settings: {
    //     slidesToShow: 1,
    //   },
    // },
    // {
    //   breakpoint: 880,
    //   settings: {
    //     slidesToShow: 1,
    //     centerPadding: "20px",
    //   },
    // },
  ],
};
const SlickSlider = ({ redirect, containerClassName, className, data, isClickable = false, afterChange }) => {
  const props = {...settings, className: className, afterChange: afterChange};

  return (
    <div className={`${styles.sliderWrapper} ${containerClassName}`}>
      <Slider {...props}>
        {data.map((el) => (
          <div
            className={styles.card}
            key={el.id}
            onClick={() => isClickable && redirect(el.id)}
          >
            <img draggable="false" src={el.url} alt="decoration" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
