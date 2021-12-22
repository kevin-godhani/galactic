import React, { useState } from "react";
import * as styles from "./index.module.scss";
import useWindowSize from '../../../utils/useWindowSize';
import { mainButton } from "../../buttons";
import slideBorder from '../../../styles/img/slide-border.svg';
import angle from "../../../styles/img/animation_angle.png";
import angle_active from "../../../styles/img/animation_angle_active.png";

const CivilizationSlides = ({ slides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const ws = useWindowSize();

  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  const activeSlide = slides[activeSlideIndex];
  const isMinValue = activeSlideIndex === 0;
  const isMaxValue = activeSlideIndex === slides?.length - 1;

  const onPrev = () => {
    if (isMinValue) {
      return;
    }
    setActiveSlideIndex(activeSlideIndex - 1);
  }

  const onNext = () => {
    if (isMaxValue) {
      return;
    }
    setActiveSlideIndex(activeSlideIndex + 1);
  }

  return (
    <div className={styles.civilizationSlides}>
      <div className={styles.buttonBlock}>
        <div
          // data-aos-delay="66"
          // data-aos="fade-up"
          onClick={onPrev}
        >
          <img src={!isMinValue ? angle_active : angle} alt="border" />
          <span style={!isMinValue ? { color: "#010103" } : { color: "#99986C" }}>
            Back
          </span>
        </div>
        <div
          // data-aos="fade-up"
          // data-aos-delay="133"
          onClick={onNext}
        >
          <img src={!isMaxValue ? angle_active : angle} alt="border" />
          <span style={!isMaxValue ? { color: "#010103" } : { color: "#99986C" }}>
            Next
          </span>
        </div>
      </div>
      <div className={styles.slide}>
        {!isTabletWidth && !isMobileWidth && <img src={activeSlide.image} alt={activeSlide.title} />}
        {isTabletWidth && <img src={activeSlide.imageTablet} alt={activeSlide.title} />}
        {isMobileWidth && <img src={activeSlide.imageMobile} alt={activeSlide.title} />}
        <div className={styles.slideContent}>
          <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
          <h4 className={`title ${styles.slideTitle}`}>{activeSlide.title}</h4>
          <p className={`description ${styles.slideText}`}>
            {activeSlide.description}
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton(activeSlide.link, "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default CivilizationSlides;
