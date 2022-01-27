import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-scroll";
import ScrollButtonIcon from "../../icons/scroll-button";
import CustomTimer from "../timer";
import * as styles from "./index.module.scss";
import { useInView } from 'react-intersection-observer';
import useWindowSize from '../../../utils/useWindowSize';
import heroBg1 from '../../../styles/img/hero-bg1.jpg';
import heroBg1Tablet from '../../../styles/img/hero-bg1-tablet.jpg';
import heroBg1Mobile from '../../../styles/img/hero-bg1-mobile.jpg';
import heroBg2 from '../../../styles/img/hero-bg2.jpg';
import heroBg2Tablet from '../../../styles/img/hero-bg2-tablet.jpg';
import heroBg2Mobile from '../../../styles/img/hero-bg2-mobile.jpg';
import { ButtonWithoutLink } from "../../buttons";
import MintFighterModal from '../../mintFighterModal';
import gsap from 'gsap';

const FirstBlock = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const id = 'first-block';

  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const [battleMode, setBattleMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const ws = useWindowSize();

  const isTabletWidth = ws.width <= 1200 && ws.width >= 768;
  const isMobileWidth = ws.width <= 767;

  const bgSrc = useMemo(() => {
    if (isTabletWidth) {
      return heroBg1Tablet;
    }
    if (isMobileWidth) {
      return heroBg1Mobile;
    }

    return heroBg1;
  }, [isTabletWidth, isMobileWidth]);

  const bg2Src = useMemo(() => {
    if (isTabletWidth) {
      return heroBg2Tablet;
    }
    if (isMobileWidth) {
      return heroBg2Mobile;
    }

    return heroBg2;
  }, [isTabletWidth, isMobileWidth]);

  useEffect(() => {
    if (!bg1Ref?.current || !bg2Ref?.current) {
      return;
    }

    gsap.to(bg1Ref?.current, { duration: 0.7666, autoAlpha: battleMode ? 0 : 1 });
    gsap.to(bg2Ref?.current, { duration: 0.7666, autoAlpha: battleMode ? 1 : 0 });
  }, [battleMode]);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add("scroll-lock");
    document.documentElement.classList.add("scroll-lock");
  };

  const changeModalStateCb = () => {
    setShowModal(!showModal);
  };

  return (
    <section id={id} ref={ref} className={styles.heroSection} style={{ visibility: inView ? 'visible' : 'hidden' }}>
      <img ref={bg1Ref} src={bgSrc} className={styles.heroSectionBg} alt="Demetrious Johnson" />
      <img ref={bg2Ref} src={bg2Src} className={`${styles.heroSectionBg} ${styles.heroSectionBgBattleMode}`} alt="Demetrious Johnson Battle Mode" />
      <h1 className={styles.heroSectionTitle}>Demetrious Johnson</h1>
      <div className={styles.buttonsBlock}>
        <ButtonWithoutLink containerClassName={'hero-section-left-button'} callback={openModal} title={'Get a Fighter NFT'} isDoubleLong small={isMobileWidth || isTabletWidth} />
        <ButtonWithoutLink containerClassName={'hero-section-right-button'} callback={() => setBattleMode(!battleMode)} title={battleMode ? 'Deactivate Battle Mode' : 'Activate Battle Mode'} isPurple isDoubleLong small={isMobileWidth || isTabletWidth} />
      </div>
      <Link
        to="section-2"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        className={'scroll-button-link'}
      >
        <ScrollButtonIcon />
      </Link>
      <CustomTimer />
      <MintFighterModal showModal={showModal} changeModalStateCb={changeModalStateCb} />
    </section>
  );
};

export default FirstBlock;
