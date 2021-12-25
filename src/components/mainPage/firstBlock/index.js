import React, { useRef } from "react";
import { Link } from "react-scroll";
// import ScrollButtonIcon from "../../../styles/img/scroll-button.inline.svg";
import ScrollButtonIcon from "../../icons/scroll-button";
import preview from "../../../styles/img/thumb_main.png";
import CustomTimer from "../timer";
import * as styles from "./index.module.scss";

const FirstBlock = () => {
  const sectionRef = useRef(null);
  /** @type {React.MutableRefObject<HTMLVideoElement>} */
  const videoRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        src="https://storage.googleapis.com/galactic_assets/gfl-hero.mp4"
        poster={preview}
        className={styles.heroSectionVideo}
      ></video>
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
    </section>
  );
};

export default FirstBlock;
