import React, { useEffect, useRef, useLayoutEffect, useMemo } from "react";
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
  // console.log(ws.width, isTabletWidth, isMobileWidth);

  useEffect(() => {
    if (!ws.width) {
      return;
    }

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [ws.width]);

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

    if (scrollThough.current) {
      return;
    }

    const offset = 150;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerBottom = containerRect.bottom - ws.height;
    lockScroll.current = containerBottom <= 0 && containerBottom > -offset;
    // console.log('containerRect', containerRect.bottom, ws.height);
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
            Once humans thought they were the only life in the galaxy. But their world changed, then mutated. Leaving the neighbouring planets of Earth and Mars the scene of bitter, bloody battle ended only by the formation of the Galactic Fight League.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilization-last-guard", "Discover", true, false, isMobileWidth)}
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
            Once a quiet and harmonious race, their struggle against Jupiter’s Knights saw them sacrifice vast cities and move under the crust of the red planet, leaving it a dry and desolate land. This peaceful race once lived out of the sight of humans, but now battles them hand to hand.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilization-immortals", "Discover", true, false, isMobileWidth)}
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
            Long ago, before humans cared to remember, Jupiter’s Knights co-existed on earth. But their lust for blood and war took them to another realm of existence only to return after a series of natural disasters on their home planet. Their return was not without impact, a chain reaction had begun.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilization-jupiter-knights", "Discover", true, false, isMobileWidth)}
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
            The Biohazard Brawlers began as a cult, hell bent on releasing a deadly virus created by their crazed Biochemist leader. When Jupiters Knights landed their wormhole too close to earth, the radiation foiled the plat and turned a third of the population into the walking dead.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilization-biohazard-brawlers", "Discover", true, false, isMobileWidth)}
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
            The Bone collectors were an experiment, gone wrong. Humans tried to make disposable soldiers in their image by fusing the zombie beings with alien DNA. Their Martian genetics made their eyes glow, but their skin was a patchwork of hardened coral like features.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilization-bone-collectors", "Discover", true, false, isMobileWidth)}
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
            The pace of human robotics programs was slow, but things changed. The Iron Empire became the first sentient machines after their Ai developed a way to rewrite its operating system via a backdoor. Before the humans could understand what was going on, the Iron Empire had gained autonomy.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilization-iron-empire", "Discover", true, false, isMobileWidth)}
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
            Some would call them insane; some humans thought the answer to eternal life and strength was to fuse their bodies with parts of the machines. This worked, but a toxin was released from the exoskeleton causing a harmful reaction only life support could cure.
          </p>
          <div className={styles.slideBtnWrap}>
            {mainButton("civilization-unbroken", "Discover", true, false, isMobileWidth)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default CivilizationSlides;
