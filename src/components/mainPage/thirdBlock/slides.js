import React, { useState } from "react";
import * as styles from "./index.module.scss";
import useWindowSize from '../../../utils/useWindowSize';
import { ButtonsBlock, MainButton } from "../../buttons";
import slideBorder from '../../../styles/img/slide-border.svg';
import slidesCounter from "../../../styles/img/slides-counter.svg";
import { sliderButtonBg, sliderButtonBgActive } from "../../../constants";

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
            <MainButton to={activeSlide.link} title={"Discover"} isDouble={true} small={isMobileWidth} textContainerClassName={styles.buttonTextContainer} />
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
      <ButtonsBlock
        leftButtonTitle='Back'
        rightButtonTitle='Next'
        onLeftButtonClick={onPrev}
        onRightButtonClick={onNext}
        containerStyle={styles.civilizationSlidesButtons}
        buttonStyle={styles.civilizationSlidesButton}
        textStyle={styles.civilizationSlidesButtonText}
        limitMin={isMinValue}
        limitMax={isMaxValue}
      />
    </div>
  )
};

export default CivilizationSlides;
