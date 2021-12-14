import React, { useEffect, useRef, useState } from "react";
import * as styles from "./index.module.scss";
import slide1 from '../../../styles/img/slide_1.png'
import slide2 from '../../../styles/img/slide_2.png'
import slide3 from '../../../styles/img/slide_3.png'
import slide4 from '../../../styles/img/slide_4.png'
import slide5 from '../../../styles/img/slide_5.png'
import slide6 from '../../../styles/img/slide_6.png'
import slide7 from '../../../styles/img/slide_7.png'
import gsap from 'gsap';
import useScrollBlock from '../../../utils/useScrollBlock';

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
  const scrollDirection = useRef(0);
  const activeSlideIndex = useRef(0);

  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  useEffect(() => {
    prepareSlides();
  }, []);

  useEffect(() => {
    if (activeSlideIndex.current < 0) {
      activeSlideIndex.current = 0;
    }
  }, [activeSlideIndex.current]);

  const handleScroll = (e) => {
    /** @type {Window} */
    const w = e.view;
    const { scrollY } = w;
    scrollDirection.current = Math.sign(e.deltaY);
    const wh = e.view.innerHeight;

    if (scrollThough.current) {
      return;
    }

    const offset = 150;
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerBottom = containerRect.bottom - wh;
    lockScroll.current = containerBottom <= 0 && containerBottom > -offset;
    // console.log('containerRef.current.getBoundingClientRect()', containerRef.current.getBoundingClientRect(), scrollY);
    // console.log('lockScroll?', lockScroll.current);
    // console.log('wh', wh, 'scrollY', scrollY, 'scrollDirection', scrollDirection.current);

    if (lockScroll.current) {
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
    const wh = e.view.innerHeight;
    const slide = slides[activeSlideIndex.current];
    const slideRect = slide?.getBoundingClientRect();

    if (scrollDirection.current > 0) {
      if (!slide) {
        return;
      }
      if (slideRect.bottom > wh) {
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
      if (slideRect.top < wh) {
        gsap.to(slide, { y: `-=${v}`, overflow: 5 });
      } else {
        gsap.killTweensOf(slide);
        gsap.set(slide, { y: '100%' });
        

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
    const timer = setTimeout(() => {
      scrollThough.current = false;
      clearTimeout(timer);
    }, 1000);
  }


  return (
    <div ref={containerRef} className={styles.civilizationSlides}>
      <div className={styles.slide}>
        <img src={slide1} alt="slide" />
      </div>
      <div ref={slideRef2} data-i={1} className={styles.slide}>
        <img src={slide2} alt="slide" />
      </div>
      <div ref={slideRef3} data-i={2} className={styles.slide}>
        <img src={slide3} alt="slide" />
      </div>
      <div ref={slideRef4} data-i={3} className={styles.slide}>
        <img src={slide4} alt="slide" />
      </div>
      <div ref={slideRef5} data-i={4} className={styles.slide}>
        <img src={slide5} alt="slide" />
      </div>
      <div ref={slideRef6} data-i={5} className={styles.slide}>
        <img src={slide6} alt="slide" />
      </div>
      <div ref={slideRef7} data-i={6} className={styles.slide}>
        <img src={slide7} alt="slide" />
      </div>
    </div>
  )
};

export default CivilizationSlides;
