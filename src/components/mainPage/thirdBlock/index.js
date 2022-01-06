import React, { useRef, useState } from "react";
import CivilisationSlides from "./slides";
// import preview from "../../../styles/img/origin-story-placeholder.png";
import arrowP from "../../../styles/img/icons/arrow_purple.svg";
import arrowG from "../../../styles/img/icons/arrow_gold.svg";
import border from "../../../styles/img/border1.svg";
import decoration from "../../../styles/img/back_decoration.png";
import borderTablet from "../../../styles/img/border_tablet.png";
import borderMobile from "../../../styles/img/border-mobile.png";
import * as styles from "./index.module.scss";
// import cursorPlay from "../../../styles/img/icons/watch_icon.png";
// import playText from "../../../styles/img/icons/play_text.svg";
// import useWindowSize from "../../../utils/useWindowSize";
import { slides } from "../../../constants";
import Modal from "../../modal";
// import CloseIcon from "./closeIcon";
import WatchButtonIcon from '../../../styles/img/watch-icon.inline.svg';
import YoutubeEmbed from '../../youtubeEmbed';
import ImageRenderer from '../../imageRenderer';

export const animatedArrows = (color) => {
  return (
    <div className={styles.animatedArrow}>
      <img src={color === "purple" ? arrowP : arrowG} alt="arrow" />
      <img src={color === "purple" ? arrowP : arrowG} alt="arrow" />
      <img src={color === "purple" ? arrowP : arrowG} alt="arrow" />
    </div>
  );
};

const ThirdBlock = () => {
  // const [isFullScreen, setIsFullScreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  // const ws = useWindowSize();

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => {
    setIsModalOpen(true);
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
  };

  // const toggleFullScreen = () => {
  //   const el = videoRef.current;
  //   if (!el) return;
  //   el.muted = false;
  //   el.style.display = "block";
  //   if (el.requestFullscreen) {
  //     el.requestFullscreen();
  //   } else if (el.mozRequestFullScreen) {
  //     el.mozRequestFullScreen();
  //   } else if (el.webkitRequestFullscreen) {
  //     el.webkitRequestFullscreen();
  //   }
  // };

  // useLayoutEffect(() => {
  //   const refEl = videoRef.current;
  //   if (refEl) {
  //     if (ws.width === refEl.clientWidth) {
  //       setIsFullScreen(true);
  //       refEl.currentTime = 0;
  //     } else {
  //       setIsFullScreen(false);
  //       refEl.muted = true;
  //     }
  //   }
  // });

  return (
    <section className={styles.main}>
      <div className={styles.decoration}>
        <ImageRenderer url={decoration} width={353} height={394} alt="decoration" />
      </div>
      <div className={`${styles.mainHeader} container-width`}>
        <h2 data-aos="fade-up" className="title">
          Origin Story
        </h2>
      </div>
      <div className={`${styles.contentWrapper} container-width`}>
        <div
          data-aos-delay="66"
          data-aos="fade-up"
          className={`${styles.mainContent}`}
        >
          <div className={styles.arrowsP}>{animatedArrows("purple")}</div>
          <div className={styles.arrowsG}>{animatedArrows("")}</div>
          <img className={styles.desktop} src={border} alt="border" />
          <img className={styles.tablet} src={borderTablet} alt="border" />
          <img className={styles.mobile} src={borderMobile} alt="border" />
          <p
            data-aos="zoom-in"
            className={`description description_padding ${styles.contentText}`}
          >
            The Galactic Fight League brings together the best fighters from
            earth and beyond. Where Humans, Cyborgs, Aliens and Zombies battle
            to become the best mixed martial art fighter in the metaverse.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="133"
          className={styles.videoWrapper}
        >
          <Modal
            trigger={
              <div className={styles.playVideo}>
                <WatchButtonIcon />
              </div>
            }
            children={
              <div className={styles.videoContentWrapper}>
                <YoutubeEmbed embedId="1I_vUwPf43k" title="Origin Story" />
              </div>
            }
            isOpen={isModalOpen}
            onClose={closeModal}
            onOpen={openModal}
          />
          <video
            className={styles.videoPreview}
            src="https://storage.googleapis.com/galactic_assets/gfl-hero.mp4"
            muted
            autoPlay
            loop
          />
        </div>
      </div>
      <div className={`${styles.civilizations} container-width`}>
        <h2 data-aos="fade-up" className={`title ${styles.civilizationsTitle}`}>
          Civilisations
        </h2>
        <p
          data-aos-delay="66"
          data-aos="fade-up"
          className={`description ${styles.civilizationsSubtitle}`}
        >
          In the future, our galaxy is a very different place. Where humans once
          believed they were the only form of intelligent life, new
          civilisations were discovered, new lifeforms forged. Co-existence was
          never easy, battles raged.
        </p>
        <CivilisationSlides slides={slides} />
      </div>
    </section>
  );
};

export default ThirdBlock;
