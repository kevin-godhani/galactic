import React, { useCallback, useMemo, useRef, useState } from "react";
import { Link } from "react-scroll";
import ScrollButtonIcon from "../../icons/scroll-button";
import CustomTimer from "../timer";
import * as styles from "./index.module.scss";
import { useInView } from 'react-intersection-observer';
import useWindowSize from '../../../utils/useWindowSize';
import heroBg1 from '../../../styles/img/hero-bg1.jpg';
import heroBg2 from '../../../styles/img/hero-bg2.jpg';
import { ButtonWithoutLink } from "../../buttons";
import MintFighterModal from '../../mintFighterModal';

const FirstBlock = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const id = 'first-block';

  const [battleMode, setBattleMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const ws = useWindowSize();
  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  const bgSrc = useMemo(() => {
    if (isTabletWidth) {
      return battleMode ? heroBg2 : heroBg1;
    }
    if (isMobileWidth) {
      return battleMode ? heroBg2 : heroBg1;
    }

    return battleMode ? heroBg2 : heroBg1;
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
      <img src={bgSrc} className={styles.heroSectionBg} alt="hero image" />
      <h1 className={styles.heroSectionTitle}>Demetrious Johnson</h1>
      <div className={styles.buttonsBlock}>
        <ButtonWithoutLink callback={openModal} title={'Get a Fighter NFT'} isDoubleLong />
        <ButtonWithoutLink callback={() => setBattleMode(!battleMode)} title={battleMode ? 'Deactivate Battle Mode' : 'Activate Battle Mode'} isPurple isDoubleLong />
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
