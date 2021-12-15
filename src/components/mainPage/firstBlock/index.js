import React, { useRef } from "react";
import { Link } from "react-scroll";
import ScrollButton from "../../../styles/img/scroll-button.inline.svg";
import { buttonWithoutLink } from "../../buttons";
import preview from '../../../styles/img/thumb_main.png';
import sound from "../../../styles/img/icons/sound_icon.png";
import * as styles from "./index.module.scss";

const FirstBlock = () => {
  const sectionRef = useRef(null);
  /** @type {React.MutableRefObject<HTMLVideoElement>} */
  const videoRef = useRef(null);

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

  const handlePlayback = (e) => {
    if (videoRef) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        videoRef.current.muted = false;
      } else {
        videoRef.current.pause();
        videoRef.current.muted = true;
      }
    }
  }

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <video
        ref={videoRef}
        muted
        loop
        src="https://storage.googleapis.com/galactic_assets/gfl-hero.mp4"
        poster={preview}
        className={styles.heroSectionVideo}
      ></video>
      <div className={styles.heroSectionContainer}>
        {buttonWithoutLink("Fight", handlePlayback, false, true,)}
        <Link
          // activeClass="active"
          to="section-2"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className={styles.scrollButtonLink}
        >
          <ScrollButton className={styles.scrollButton} />
        </Link>
        <div className={styles.soundIcon}>
          <img onClick={handleSound} src={sound} alt="sound" />
        </div>
      </div>
    </section>
  );
};

export default FirstBlock;
