import React, { useState } from "react";
import { navigate } from "gatsby";
import Ticker from "react-ticker";
import { pageData, carousel } from "./dataMocks";
import border from "../../styles/img/border_line.png";
import slidesCounter from "../../styles/img/slider-counter-bg.svg";
import * as styles from "./index.module.scss";
import * as style from "../civilizationStory/index.module.scss";
import useWindowSize from "../../utils/useWindowSize";

import SlickSlider from "../mainPage/secondBlock/slider";
import CivilizationsContent from "./content";
import { civilizationsStoryData } from "./dataMocks";
import { sliderButtonBg, sliderButtonBgActive } from "../../constants";

const CivilizationsMain = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const ws = useWindowSize();
  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  const isMinValue = activeSlideIndex === 0;
  const isMaxValue = activeSlideIndex === carousel?.length - 1;

  const handleChangeStep = (step) => {
    setIsAnimating(false);
  };

  const handleRedirect = (id) => {
    if (id - 1 === activeSlideIndex) {
      navigate(civilizationsStoryData[activeSlideIndex].link);
    }
  };

  const backgroundImage =
    isTabletWidth || isMobileWidth
      ? pageData[activeSlideIndex]?.mobileBackground
      : pageData[activeSlideIndex]?.background;

  
  const onPrev = () => {
    if (isMinValue || isAnimating) {
      return;
    }

    setIsAnimating(true);
    setActiveSlideIndex(activeSlideIndex - 1);
  }

  const onNext = () => {
    if (isMaxValue || isAnimating) {
      return;
    }

    setIsAnimating(true);
    setActiveSlideIndex(activeSlideIndex + 1);
  }

  const settings = {
    slidesToShow: 3,
    draggable: false,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={styles.main}>
      <img src={border} alt="border" />
      <div className={style.mainHeader}>
        <Ticker direction="toLeft">
          {({ index }) => (
            <>
              <span className={style.tickerText} key={index}>
                Civilisations
              </span>
            </>
          )}
        </Ticker>
        <img src={border} alt="border" />
      </div>
      <div
        className={styles.mainInfo}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className={styles.decorLine} />
        <img src={pageData[activeSlideIndex]?.decor} alt="decor" />
        <span>SELECT CIVILISATION</span>
      </div>

      <div className={styles.sliderContainer}>
        <SlickSlider
          redirect={handleRedirect}
          data={carousel}
          sliderSettings={settings}
          afterChange={handleChangeStep}
          containerClassName={"civilizations-slider-wrap"}
          className={"civilizations-slider"}
          activeSlideIndex={activeSlideIndex}
          isClickable
        />
        <div className={styles.dimming}></div>
        <div className={styles.slidesCounter}>
          <img src={slidesCounter} className={styles.slidesCounterImage} alt="background" />
            <span className={styles.slidesCounterText}>
              <span className={styles.slidesCounterActive}>{activeSlideIndex + 1 < 10 ? `0${activeSlideIndex + 1}` : activeSlideIndex + 1}</span>
              <span className={styles.slidesCounterSlash}>/</span>
              <span className={styles.slidesCounterLength}>{carousel?.length < 10 ? `0${carousel?.length}` : carousel?.length}</span>
            </span>
        </div>
        <div className={styles.slidesButtons}>
          <div
            className={styles.slidesButton}
            onClick={onPrev}
            style={ !isMinValue ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.6, cursor: 'default' }}
          >
            <div className={styles.slidesButtonBg} style={{ background: !isMinValue ? sliderButtonBgActive : sliderButtonBg }}></div>
            <div className={styles.slidesButtonBorder}></div>
            <span style={!isMinValue ? { color: "#010103" } : { color: "#EFDAA9" }}>
              Back
            </span>
          </div>
          <div
            className={styles.slidesButton}
            onClick={onNext}
            style={ !isMaxValue ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.6, cursor: 'default' }}
          >
            <div className={styles.slidesButtonBg} style={{ background: !isMaxValue ? sliderButtonBgActive : sliderButtonBg }}></div>
            <div className={styles.slidesButtonBorder}></div>
            <span style={!isMaxValue ? { color: "#010103" } : { color: "#EFDAA9" }}>
              Next
            </span>
          </div>
        </div>
      </div>
      <CivilizationsContent data={pageData[activeSlideIndex]} />
    </section>
  );
};

export default CivilizationsMain;
