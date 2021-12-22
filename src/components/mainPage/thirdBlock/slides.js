import React, { useState } from "react";
import * as styles from "./index.module.scss";
import useWindowSize from '../../../utils/useWindowSize';
import { mainButton } from "../../buttons";
import slideBorder from '../../../styles/img/slide-border.svg';
import angle from "../../../styles/img/animation_angle.png";
import angle_active from "../../../styles/img/animation_angle_active.png";
import slidesCounter from "../../../styles/img/slides-counter.svg";

const CivilizationSlides = ({ slides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const ws = useWindowSize();

  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  const activeSlide = slides[activeSlideIndex];
  const isMinValue = activeSlideIndex === 0;
  const isMaxValue = activeSlideIndex === slides?.length - 1;

  const bg = 'linear-gradient(360deg, #000000 0%, #1E135C 100%), linear-gradient(180deg, rgba(26, 12, 54, 0) 0%, #1A0C36 100%)';
  const activeBg = 'linear-gradient(360deg, #EFDDA9 0%, #F0B9A9 100%)';

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
      <div className={styles.slidesCounter}>
        <img src={slidesCounter} className={styles.slidesCounterImage} alt="background" />
          <span className={styles.slidesCounterText}>
            <span className={styles.slidesCounterActive}>{activeSlideIndex + 1 < 10 ? `0${activeSlideIndex + 1}` : activeSlideIndex + 1}</span>
            <span className={styles.slidesCounterSlash}>/</span>
            <span className={styles.slidesCounterLength}>{slides.length < 10 ? `0${slides.length}` : slides.length}</span>
          </span>
      </div>
      <div className={styles.civilizationSlidesButtons}>
        <div
          className={styles.civilizationSlidesButton}
          onClick={onPrev}
          style={ !isMinValue ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.6, cursor: 'default' }}
        >
          <div className={styles.civilizationSlidesButtonBg} style={{ background: !isMinValue ? activeBg : bg }}></div>
          <div className={styles.civilizationSlidesButtonBorder}></div>
          <span style={!isMinValue ? { color: "#010103" } : { color: "#EFDAA9" }}>
            Back
          </span>
        </div>
        <div
          className={styles.civilizationSlidesButton}
          onClick={onNext}
          style={ !isMaxValue ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.6, cursor: 'default' }}
        >
          <div className={styles.civilizationSlidesButtonBg} style={{ background: !isMaxValue ? activeBg : bg }}></div>
          <div className={styles.civilizationSlidesButtonBorder}></div>
          <span style={!isMaxValue ? { color: "#010103" } : { color: "#EFDAA9" }}>
            Next
          </span>
        </div>
      </div>
    </div>
  )
};

export default CivilizationSlides;
