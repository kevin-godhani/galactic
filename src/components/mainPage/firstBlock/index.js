import React, { useRef } from "react";
import { Link } from "react-scroll";
import ScrollButtonIcon from "../../icons/scroll-button";
import CustomTimer from "../timer";
import * as styles from "./index.module.scss";
import { useInView } from 'react-intersection-observer';

const FirstBlock = () => {
  /** @type {React.MutableRefObject<HTMLVideoElement>} */
  const videoRef = useRef(null);
  const id = 'first-block';

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section id={id} ref={ref} className={styles.heroSection} style={{ visibility: inView ? 'visible' : 'hidden' }}>
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        src="https://storage.googleapis.com/galactic_assets/gfl-hero.mp4"
        className={styles.heroSectionVideo}
      />
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
