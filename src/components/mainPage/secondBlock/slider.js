import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./index.module.scss";
import ImageRenderer from '../../imageRenderer';

const settings = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: 0,
  centerMode: true,
  arrows: false,
  speed: 375,
  cssEase: "linear",
  lazyLoad: 'progressive',
  variableWidth: true,
  // doesn't work 🤷🏿‍♂️
  // initialSlide: 0,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        // variableWidth: false,
      },
    },
  ],
};
const SlickSlider = ({ redirect, containerClassName, className, data, isClickable = false, sliderSettings, activeSlideIndex, fadeIn, handleMouseDown, slideSize }) => {
  const s = {...settings, ...sliderSettings};
  const props = {...s, className: className};

  const sliderRef = useRef(null);

  useEffect(() => {
    if (activeSlideIndex === undefined || !sliderRef?.current) {
      return;
    }
    sliderRef.current.slickGoTo(activeSlideIndex);
  }, [activeSlideIndex]);

  return (
    <div data-aos={fadeIn ? "fade-up" : null} className={`${containerClassName ? containerClassName : ''}`}>
      <Slider ref={sliderRef} {...props}>
        {data.map((el) => (
          <div
            className={styles.card}
            key={el.id}
            onMouseDownCapture={handleMouseDown}
            onClick={() => isClickable && redirect(el.id)}
            role={'button'}
            onKeyPress={null}
            tabIndex={0}
          >
            <ImageRenderer url={el.url} width={slideSize?.width} height={slideSize?.height} alt="fighter" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
