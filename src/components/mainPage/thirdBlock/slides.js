import React, { useState, useRef, useContext } from "react";
import * as styles from "./index.module.scss";
import useWindowSize from '../../../utils/useWindowSize';
import { SliderArrows, ButtonWithoutLink } from "../../buttons";
import slideBorder from '../../../styles/img/slide-border.svg';
import slidesCounter from "../../../styles/img/slides-counter.svg";
import Slider from "react-slick";
import { navigate } from "gatsby-link";
import Context from "../../../context";
import ImageRenderer from '../../imageRenderer';

const sliderSettings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: 0,
  arrows: false,
  lazyLoad: 'progressive',
  fade: true,
  draggable: false,
  className: 'civilisations-slides-slider'
};

const CivilisationSlides = ({ slides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const ws = useWindowSize();
  const sliderRef = useRef(null);
  const { showCurtain } = useContext(Context);

  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  const onPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const onNext = () => {
    sliderRef.current?.slickNext();
  };

  const onSlideButtonClick = async (link) => {
    await showCurtain();
    navigate(link);
  };

  const slidesCount = activeSlideIndex + 1 < 10 ? `0${activeSlideIndex + 1}` : activeSlideIndex + 1;

  return (
    <div className={styles.civilizationSlides}>
      <Slider
        ref={sliderRef}
        {...sliderSettings}
        afterChange={(i) => setActiveSlideIndex(i)}
      >
        {slides.map(s => {
          return (
            <div key={s.id} className={styles.slide}>
              {!isTabletWidth && !isMobileWidth && <ImageRenderer containerClassName={styles.slideImage} url={s.image} width={1215} height={631} alt={s.title} />}
              {isTabletWidth && <ImageRenderer containerClassName={styles.slideImage} url={s.imageTablet} width={704} height={1070} alt={s.title} />}
              {isMobileWidth && <ImageRenderer containerClassName={styles.slideImage} url={s.imageMobile} width={353} height={681} alt={s.title} />}
              <div className={styles.slideContent}>
                <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
                <h4 className={`title ${styles.slideTitle}`}>{s.title}</h4>
                <p className={`description ${styles.slideText}`}>
                  {s.description}
                </p>
                <div className={styles.slideBtnWrap}>
                  <ButtonWithoutLink callback={() => onSlideButtonClick(s.link)} title={"Discover"} isDouble={true} small={isMobileWidth} textContainerClassName={styles.buttonTextContainer} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className={styles.slidesCounter}>
        <img src={slidesCounter} className={styles.slidesCounterImage} alt="background" />
          <span className={styles.slidesCounterText}>
            <span className={styles.slidesCounterActive}>{slidesCount}</span>
            <span className={styles.slidesCounterSlash}>/</span>
            <span className={styles.slidesCounterLength}>{slides.length < 10 ? `0${slides.length}` : slides.length}</span>
          </span>
      </div>
      <SliderArrows
        onPrev={onPrev}
        onNext={onNext}
        containerStyle={styles.sliderArrows}
        leftArrowStyle={styles.sliderArrowLeft}
        rightArrowStyle={styles.sliderArrowRight}
      />
    </div>
  )
};

export default CivilisationSlides;
