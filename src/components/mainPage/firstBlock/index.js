import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import ScrollButton from "../../../styles/img/scroll-button.inline.svg";
import { buttonWithoutLink } from "../../buttons";
import preview from '../../../styles/img/thumb_main.png';
import SoundIcon from "../../../styles/img/sound-icon.inline.svg";
import * as styles from "./index.module.scss";

const FirstBlock = () => {
  const sectionRef = useRef(null);
  /** @type {React.MutableRefObject<HTMLVideoElement>} */
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const handleSound = (e) => {
    e.stopPropagation();
    if (videoRef) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(!muted);
    }
  };

  const handlePlayback = (e) => {
    if (videoRef) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        videoRef.current.muted = false;
        setMuted(false);
      } else {
        videoRef.current.pause();
        // videoRef.current.muted = true;
        // setMuted(true);
      }
    }
  }

  console.log(videoRef.current?.muted);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <video
        ref={videoRef}
        muted={true}
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
        <div onClick={handleSound} className={styles.soundIcon}>
          <SoundIcon className={`sound-icon ${muted ? 'muted' : ''}`} />
        </div>
      </div>
    </section>
  );
};

export default FirstBlock;
