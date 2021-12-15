import React, { useEffect, useRef, useLayoutEffect } from "react";
import * as styles from "./index.module.scss";
import gsap from 'gsap';
import useScrollBlock from '../../../utils/useScrollBlock';
import useWindowSize from '../../../utils/useWindowSize';
import { mainButton } from "../../buttons";
import slide1 from '../../../styles/img/slide_1.png';
import slide2 from '../../../styles/img/slide_2.png';
import slide3 from '../../../styles/img/slide_3.png';
import slide4 from '../../../styles/img/slide_4.png';
import slide5 from '../../../styles/img/slide_5.png';
import slide6 from '../../../styles/img/slide_6.png';
import slide7 from '../../../styles/img/slide_7.png';
import slide1Tablet from '../../../styles/img/slide1-tablet.png';
import slide2Tablet from '../../../styles/img/slide2-tablet.png';
import slide3Tablet from '../../../styles/img/slide3-tablet.png';
import slide4Tablet from '../../../styles/img/slide4-tablet.png';
import slide5Tablet from '../../../styles/img/slide5-tablet.png';
import slide6Tablet from '../../../styles/img/slide6-tablet.png';
import slide7Tablet from '../../../styles/img/slide7-tablet.png';
import slide1Mobile from '../../../styles/img/slide1-mobile.png';
import slide2Mobile from '../../../styles/img/slide2-mobile.png';
import slide3Mobile from '../../../styles/img/slide3-mobile.png';
import slide4Mobile from '../../../styles/img/slide4-mobile.png';
import slide5Mobile from '../../../styles/img/slide5-mobile.png';
import slide6Mobile from '../../../styles/img/slide6-mobile.png';
import slide7Mobile from '../../../styles/img/slide7-mobile.png';
import slideBorder from '../../../styles/img/slide-border.svg';

const CivilizationSlides = () => {
  /** @type {React.MutableRefObject<HTMLDivElement>} */
  const containerRef = useRef(null);
  /** @type {React.MutableRefObject<HTMLDivElement>} */
  const slideRef2 = useRef(null);
  const slideRef3 = useRef(null);
  const slideRef4 = useRef(null);
  const slideRef5 = useRef(null);
  const slideRef6 = useRef(null);
  const slideRef7 = useRef(null);
  const slides = useRef([]);
  const lockScroll = useRef(false);
  const scrollThough = useRef(false);
  const isSliding = useRef(false);
  const scrollDirection = useRef(0);
  const activeSlideIndex = useRef(0);

  const [blockScroll, allowScroll] = useScrollBlock();

  const ws = useWindowSize();

  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  useLayoutEffect(() => {
    if (!isTabletWidth || !isMobileWidth) {
      prepareSlides();
    }
  }, []);

  useEffect(() => {
    if (activeSlideIndex.current < 0) {
      activeSlideIndex.current = 0;
    }
  }, [activeSlideIndex.current]);

  const handleScroll = (e) => {
    /** @type {Window} */
    scrollDirection.current = Math.sign(e.deltaY);

    if (scrollThough.current || isTabletWidth || isMobileWidth) {
      return;
    }

    const offset = 150;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerBottom = containerRect.bottom - ws.height;
    lockScroll.current = containerBottom <= 0 && containerBottom > -offset;
    // console.log('containerRef.current.getBoundingClientRect()', containerRef.current.getBoundingClientRect(), scrollY);
    // console.log('lockScroll?', lockScroll.current);
    // console.log('wh', wh, 'scrollY', scrollY, 'scrollDirection', scrollDirection.current);

    if (lockScroll.current && !isSliding.current) {
      isSliding.current = true;
    }

    if (isSliding.current) {
      toggleScroll(false);
      handleSlideScroll(e);
    }
  }

  const handleSlideScroll = (e) => {
    if (slides.current.length === 0) {
      slides.current = [slideRef2.current, slideRef3.current, slideRef4.current, slideRef5.current, slideRef6.current, slideRef7.current];
    }
    scrollSlide(e, slides.current);
    // console.log('scrollSlideCount', activeSlideIndex.current, 'scrollThough', scrollThough.current);
  }

  const scrollSlide = (e, slides) => {
    const speedRate = 5;
    const v = e.deltaY * speedRate;
    const slide = slides[activeSlideIndex.current];
    const slideRect = slide?.getBoundingClientRect();

    if (scrollDirection.current > 0) {
      if (!slide) {
        return;
      }
      if (slideRect.bottom > ws.height) {
        gsap.set(slide, { autoAlpha: 1 });
        gsap.to(slide, { y: `-=${v}`, overflow: 5 });
      } else {
        gsap.killTweensOf(slide);
        gsap.set(slide, { y: 0 });
        if (activeSlideIndex.current < slides.length) {
          activeSlideIndex.current +=1;
          slide.dataset.animated = true;
        }

        if (activeSlideIndex.current === slides.length) {
          triggerScrollThrough();
        }
      }
    }
    if (scrollDirection.current < 0) {
      if (!slide) {
        if (activeSlideIndex.current === slides.length) {
          activeSlideIndex.current -=1;
        }
        return;
      }

      // console.log(slide, slideRect.top, slideRect.bottom);
      if (slideRect.top < ws.height) {
        gsap.to(slide, { y: `-=${v}`, overflow: 5 });
      } else {
        gsap.killTweensOf(slide);
        gsap.set(slide, { y: '100%', autoAlpha: 0 });
        

        if (activeSlideIndex.current === 0) {
          triggerScrollThrough();
        }

        if (activeSlideIndex.current > 0) {
          activeSlideIndex.current -=1;
          slide.dataset.animated = true;
        }
      }
    }
  }

  const toggleScroll = (isActive) => {
    if (isActive) {
      allowScroll();
    } else {
      blockScroll();
    }
  }

  const prepareSlides = () => {
    slides.current = [slideRef2.current, slideRef3.current, slideRef4.current, slideRef5.current, slideRef6.current, slideRef7.current];
    gsap.set(slides.current, { y: '100%' })
  }

  const triggerScrollThrough = () => {
    scrollThough.current = true;

    toggleScroll(true);

    isSliding.current = false;

    const timer = setTimeout(() => {
      scrollThough.current = false;
      clearTimeout(timer);
    }, 1000);
  }


  return (
    // TODO: make through map
    <div ref={containerRef} className={styles.civilizationSlides}>
      <div className={styles.slide}>
        {!isTabletWidth && !isMobileWidth && <img src={slide1} alt="slide" />}
        {isTabletWidth && <img src={slide1Tablet} alt="slide" />}
        {isMobileWidth && <img src={slide1Mobile} alt="slide" />}
        <div className={styles.slideContent}>
          <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
          <h4 className={styles.slideTitle}>The Last Guard</h4>
          <p className={styles.slideText}>
            Those who remain are fighters. In sport they battled for millenia, in the future they battled to survive. 
            {!isMobileWidth && (
              <><br /><br /></>
            )}
            Earth became a decaying planet fraught with the constant threat of outsiders taking what few resources remain.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilizations", "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
      <div ref={slideRef2} className={styles.slide}>
      {!isTabletWidth && !isMobileWidth && <img src={slide2} alt="slide" />}
        {isTabletWidth && <img src={slide2Tablet} alt="slide" />}
        {isMobileWidth && <img src={slide2Mobile} alt="slide" />}
        <div className={styles.slideContent}>
          <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
          <h4 className={styles.slideTitle}>The Immortals</h4>
          <p className={styles.slideText}>
            The Immortals, once a quiet and harmonious race. 
            {!isMobileWidth && (
              <><br /><br /></>
            )}
            Their struggle against Jupiter’s Knights saw them sacrifice vast cities and move under the crust of the red planet, leaving it a dry and desolate land.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilizations", "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
      <div ref={slideRef3} className={styles.slide}>
        {!isTabletWidth && !isMobileWidth && <img src={slide3} alt="slide" />}
        {isTabletWidth && <img src={slide3Tablet} alt="slide" />}
        {isMobileWidth && <img src={slide3Mobile} alt="slide" />}
        <div className={styles.slideContent}>
          <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
          <h4 className={styles.slideTitle}>Jupiters Knights</h4>
          <p className={styles.slideText}>
            Jupiter’s Knights once Co-existed with Humans on planet Earth, early in human evolution. But their bloodlust saw them leave the blue planet in search of new adversaries.
            {!isMobileWidth && (
              <><br /><br /></>
            )}
            Humans evolved and eventually took over the small outpost.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilizations", "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
      <div ref={slideRef4} className={styles.slide}>
        {!isTabletWidth && !isMobileWidth && <img src={slide4} alt="slide" />}
        {isTabletWidth && <img src={slide4Tablet} alt="slide" />}
        {isMobileWidth && <img src={slide4Mobile} alt="slide" />}
        <div className={styles.slideContent}>
          <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
          <h4 className={styles.slideTitle}>The Biohazard Brawlers</h4>
          <p className={styles.slideText}>
            The Biohazard Brawlers began as a cult. A rapidly growing group of brainwashed individuals sucked in by a charismatic leader and promised sanctuary in the afterlife.
            {!isMobileWidth && (
              <><br /><br /></>
            )}
            Their leader was a renowned Biochemist, forced into exile.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilizations", "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
      <div ref={slideRef5} className={styles.slide}>
        {!isTabletWidth && !isMobileWidth && <img src={slide5} alt="slide" />}
        {isTabletWidth && <img src={slide5Tablet} alt="slide" />}
        {isMobileWidth && <img src={slide5Mobile} alt="slide" />}
        <div className={styles.slideContent}>
          <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
          <h4 className={styles.slideTitle}>The Bone Collectors</h4>
          <p className={styles.slideText}>
            After contact was made with the Mars beings, Humans sought an advantage over the invading Aliens.
            {!isMobileWidth && (
              <><br /><br /></>
            )}
            The Biochemist who created Project Extinct was drafted by the humans to build a stronger being who could take on the invading aliens.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilizations", "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
      <div ref={slideRef6} className={styles.slide}>
        {!isTabletWidth && !isMobileWidth && <img src={slide6} alt="slide" />}
        {isTabletWidth && <img src={slide6Tablet} alt="slide" />}
        {isMobileWidth && <img src={slide6Mobile} alt="slide" />}
        <div className={styles.slideContent}>
          <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
          <h4 className={styles.slideTitle}>The Iron Empire</h4>
          <p className={styles.slideText}>
            From early on, humans had been driven to create robotic clones of themselves to use as weapons and retrieve resources from deep space.
            {!isMobileWidth && (
              <><br /><br /></>
            )}
            As time went on, Human technology improved and their ability to create more advanced components.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilizations", "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
      <div ref={slideRef7} className={styles.slide}>
        {!isTabletWidth && !isMobileWidth && <img src={slide7} alt="slide" />}
        {isTabletWidth && <img src={slide7Tablet} alt="slide" />}
        {isMobileWidth && <img src={slide7Mobile} alt="slide" />}
        <div className={styles.slideContent}>
          <img src={slideBorder} className={styles.slideBorder} alt="slide border" />
          <h4 className={styles.slideTitle}>The Unbroken</h4>
          <p className={styles.slideText}>
            While some humans believed Zombie beings were the ultimate fighting tool, others wanted to fuse themselves with machines to gain added strength, while remaining of human mind.
            {!isMobileWidth && (
              <><br /><br /></>
            )}
            The Unbroken were a splinter group who adapted the Cyborg.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilizations", "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default CivilizationSlides;
