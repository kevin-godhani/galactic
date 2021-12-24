import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./index.module.scss";

const settings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: 0,
  centerMode: true,
  arrows: false,
  speed: 375,
  cssEase: "linear",
  // pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1921,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
const SlickSlider = ({ redirect, containerClassName, className, data, isClickable = false, afterChange, sliderSettings, activeSlideIndex }) => {
  const s = {...settings, ...sliderSettings};
  const props = {...s, className: className, afterChange: afterChange};

  const sliderRef = useRef(null);

  useEffect(() => {
    if (activeSlideIndex === undefined || !sliderRef?.current) {
      return;
    }
    sliderRef.current.slickGoTo(activeSlideIndex);
  }, [activeSlideIndex]);

  return (
    <div className={`${styles.sliderWrapper} ${containerClassName}`}>
      <Slider ref={sliderRef} {...props}>
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
