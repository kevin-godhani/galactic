import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./index.module.scss";
import ImageRenderer from '../../imageRenderer';
import { useIntersection } from '../../../utils/io';

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
const SlickSlider = ({ redirect, containerClassName, className, data, isClickable = false, sliderSettings, activeSlideIndex, fadeIn, handleMouseDown }) => {
  const s = {...settings, ...sliderSettings};
  const props = {...s, className: className};

  const sliderRef = useRef(null);
  const sliderWrapRef = useRef(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useIntersection(sliderWrapRef, () => {
    setIsOnScreen(true);
  });

  useEffect(() => {
    if (activeSlideIndex === undefined || !sliderRef?.current) {
      return;
    }
    sliderRef.current.slickGoTo(activeSlideIndex);
  }, [activeSlideIndex]);

  return (
    <div ref={sliderWrapRef} data-aos={fadeIn ? "fade-up" : null} className={`${styles.sliderWrapper} ${containerClassName}`}>
      {isOnScreen &&
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
              <ImageRenderer url={el.url} width={375} height={371} alt="fighter" />
            </div>
          ))}
        </Slider>
      }
    </div>
  );
};

export default SlickSlider;
