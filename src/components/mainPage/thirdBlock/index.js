import React, { useRef, useState, useLayoutEffect } from "react";
import CivilizationSlides from "./slides";
import preview from "../../../styles/img/origin-story-placeholder.png";
import arrowP from "../../../styles/img/icons/arrow_purple.svg";
import arrowG from "../../../styles/img/icons/arrow_gold.svg";
import border from "../../../styles/img/border1.svg";
import decoration from "../../../styles/img/back_decoration.png";
import borderTablet from "../../../styles/img/border_tablet.png";
import borderMobile from "../../../styles/img/border-mobile.png";
import * as styles from "./index.module.scss";
import cursorPlay from "../../../styles/img/icons/watch_icon.png";
// import playText from "../../../styles/img/icons/play_text.svg";
import useWindowSize from "../../../utils/useWindowSize";
import { slides } from "../../../constants";

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
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const ws = useWindowSize();

  const toggleFullScreen = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.style.display = 'block';
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  useLayoutEffect(() => {
    const refEl = videoRef.current;
    if (refEl) {
      if (ws.width === refEl.clientWidth) {
        setIsFullScreen(true);
        refEl.currentTime = 0;
      } else {
        setIsFullScreen(false);
        refEl.muted = true;
      }
    }
  });

  return (
    <section className={styles.main}>
      <img src={decoration} className={styles.decoration} alt="decoration" />
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
          <p data-aos="zoom-in" className={`description description_padding ${styles.contentText}`}>
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
          <video
            style={isFullScreen ? { WebkitMaskImage: "none"} : {display: 'none'}}
            ref={videoRef}
            autoPlay
            muted
            loop
            src="https://storage.googleapis.com/galactic_assets/GFLFinal.mp4"
            poster={preview}
          ></video>
          <img src="https://storage.googleapis.com/galactic_assets/GFLFinal_DrewVDO.gif" alt="gif" />
          {/* <div onClick={handleSound} className={styles.soundIcon}>
            <SoundIcon className={`sound-icon ${muted ? 'muted' : ''}`} />
          </div> */}
          <div onClick={toggleFullScreen} className={styles.playVideo}>
            <div>
              <img src={cursorPlay} alt="cursorPlay" />
              {/* <img src={playText} alt="playText" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.civilizations} container-width`}>
        <h2 data-aos="fade-up" className={`title ${styles.civilizationsTitle}`}>
          Civilizations
        </h2>
        <p
          data-aos-delay="66"
          data-aos="fade-up"
          className={`description ${styles.civilizationsSubtitle}`}
        >
          In the future, our galaxy is a very different place. Where humans once
          believed they were the only form of intelligent life, new
          civilizations were discovered, new lifeforms forged. Co-existence was
          never easy, battles raged.
        </p>
        <CivilizationSlides slides={slides} />
      </div>
    </section>
  );
};

export default ThirdBlock;
