import React, { useRef, useState } from "react";
import CivilizationSlides from "./slides";
import preview from '../../../styles/img/thumb_main.png';
import arrowP from "../../../styles/img/icons/arrow_purple.svg";
import arrowG from "../../../styles/img/icons/arrow_gold.svg";
import sound from "../../../styles/img/icons/sound_icon.png";
import border from "../../../styles/img/border1.svg";
import videoBlock from "../../../styles/img/border_video.png";
import decoration from "../../../styles/img/back_decoration.png";
import borderTablet from "../../../styles/img/border_tablet.png";
import * as styles from "./index.module.scss";
import cursorPlay from "../../../styles/img/cursors/watch.png";
import cursorStop from "../../../styles/img/cursors/stop.png";

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
  const [videoActive, setVideoActive] = useState(true);

  const handleClickVideo = (e) => {
    setVideoActive(!videoActive);
    if (videoActive) {
      e.target.pause();
    } else {
      e.target.play();
      e.target.muted = false;
    }
  };
  const handleSound = (e) => {
    e.stopPropagation();
    if (videoRef) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
      } else {
        videoRef.current.muted = true;
      }
    }
  };
  return (
    <section className={styles.main}>
      <div className={`${styles.mainHeader} container-width`}>
        <h2 data-aos="fade-up" className="title">
          Origin Story
        </h2>
      </div>
      <div className={`${styles.contentWrapper} container-width`}>
        <div data-aos-delay="66" data-aos="fade-up" className={`${styles.mainContent}`}>
          <div className={styles.arrowsP}>{animatedArrows("purple")}</div>
          <div className={styles.arrowsG}>{animatedArrows("")}</div>
          <img className={styles.desktop} src={border} alt="border" />
          <img className={styles.tablet} src={borderTablet} alt="border" />
          <span className={`${styles.desktop} description`}>
            The Galactic Fight League <br /> brings together the best <br />
            fighters from earth and <br />
            beyond. Where Humans, <br />
            Cyborgs, Aliens and Zombies
            <br /> battle to become the best <br />
            mixed martial art fighter in <br />
            the metaverse.
          </span>
          <span data-aos="zoom-in" className={`${styles.tablet} description`}>
            The Galactic Fight League brings together
            <br /> the best fighters from earth and beyond. <br /> Where Humans,
            Cyborgs, Aliens and <br /> Zombies battle to become the best mixed
            <br /> martial art fighter in the metaverse.
          </span>
        </div>
        <div data-aos="fade-up" data-aos-delay="133" className={styles.videoWrapper}>
          <img src={videoBlock} alt="videoBlock" />
          <video
            style={
              videoActive
                ? { cursor: `url(${cursorStop}) 25 15, auto` }
                : { cursor: `url(${cursorPlay}) 25 15, auto` }
            }
            onClick={handleClickVideo}
            ref={videoRef}
            autoPlay
            muted
            loop
            src="https://storage.googleapis.com/video_galactic/final.mp4"
            poster={preview}
          ></video>
          <div className={styles.soundIcon}>
            <img onClick={handleSound} src={sound} alt="sound" />
          </div>
        </div>
      </div>
      <div className={`${styles.civilizations} container-width`}>
        <img src={decoration} alt="decoration" />
        <div className={styles.animatedTitle}>
          <h2 data-aos="fade-up" className={`title ${styles.civilizationsTitle}`}>
            Civilizations
          </h2>
        </div>
        {/* <Test open={scrollPosition > 2580}/> */}
        <span data-aos-delay="800" data-aos="fade-up" className="description">
          In the future, our galaxy is a very different place. Where humans once
          believed <br />
        </span>
        <span data-aos-delay="1000" data-aos="fade-up" className="description">
          they were the only form of intelligent life, new civilizations were
          discovered, new <br />
        </span>
        <span data-aos-delay="1200" data-aos="fade-up" className="description">
          lifeforms forged. Co-existence was never easy, battles raged.
        </span>
        {/* <div className={`${classButton} ${styles.animatedButton}`}>
          {doubleStripeButton("", "Read More")}
        </div> */}
        <CivilizationSlides />
      </div>
    </section>
  );
};

export default ThirdBlock;
