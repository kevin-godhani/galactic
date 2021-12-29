import React, { useRef, useState, useContext } from "react";
import { navigate } from "gatsby";
import Ticker from "react-ticker";
import { pageData, carousel } from "./dataMocks";
import border from "../../styles/img/border_line.png";
import slidesCounter from "../../styles/img/slider-counter-bg.svg";
import * as styles from "./index.module.scss";
import * as style from "../civilizationStory/index.module.scss";
import useWindowSize from "../../utils/useWindowSize";
import Context from "../../context";
import SlickSlider from "../mainPage/secondBlock/slider";
import CivilizationsContent from "./content";
import { civilizationsStoryData } from "./dataMocks";
import { SliderArrows } from '../buttons';
import gsap from 'gsap';

const CivilizationsMain = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const ws = useWindowSize();
  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;
  const displacementMapRef = useRef(null);

  const isMinValue = activeSlideIndex === 0;
  const isMaxValue = activeSlideIndex === carousel?.length - 1;

  const handleChangeStep = (step) => {
    setIsAnimating(false);
    setActiveSlideIndex(step);

    gsap.to(displacementMapRef.current, { duration: 0.18, attr: { scale: 0 } });
  };

  const onBeforeChange = () => {
    gsap.to(displacementMapRef?.current, { duration: 0.18, attr: { scale: 100 } });
  }

  const { showCurtain } = useContext(Context);

  const handleRedirect = async (id) => {
    if (id - 1 === activeSlideIndex) {
      await showCurtain();
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
    beforeChange: onBeforeChange,
  };

  return (
    <section className={styles.main}>
      <svg>
        <filter id="distortionFilter">
          <feTurbulence 
              baseFrequency="0.015 0.1"
              numOctaves="3"
              type="fractalNoise"
              result='wrap'/>
          <feDisplacementMap
            ref={displacementMapRef}
            id='effect'
            in="SourceGraphic"
            in2="wrap"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B" />
        </filter>
      </svg>
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
        <img src={pageData[activeSlideIndex]?.decor} style={{ filter: 'url(#distortionFilter)' }} alt="decor" />
        <span>SELECT CIVILISATION</span>
      </div>

      <div className={styles.sliderContainer}>
        <SlickSlider
          redirect={handleRedirect}
          data={carousel}
          sliderSettings={settings}
          beforeChange={onBeforeChange}
          afterChange={handleChangeStep}
          containerClassName={"civilizations-slider-wrap"}
          className={"civilizations-slider"}
          activeSlideIndex={activeSlideIndex}
          isClickable
        />
        <div className={styles.slidesCounter}>
          <img src={slidesCounter} className={styles.slidesCounterImage} alt="background" />
            <span className={styles.slidesCounterText}>
              <span className={styles.slidesCounterActive}>{activeSlideIndex + 1 < 10 ? `0${activeSlideIndex + 1}` : activeSlideIndex + 1}</span>
              <span className={styles.slidesCounterSlash}>/</span>
              <span className={styles.slidesCounterLength}>{carousel?.length < 10 ? `0${carousel?.length}` : carousel?.length}</span>
            </span>
        </div>
        <SliderArrows
          onPrev={onPrev}
          onNext={onNext}
          containerStyle={styles.sliderArrows}
          limitMin={isMinValue}
          limitMax={isMaxValue}
        />
      </div>
      <CivilizationsContent data={pageData[activeSlideIndex]} />
    </section>
  );
};

export default CivilizationsMain;
