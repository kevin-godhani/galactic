import React from "react";
import useWindowSize from '../../../utils/useWindowSize';
import cardLabelBg from "../../../styles/img/roadmap-label-bg.svg";
import cardLabelBgBig from "../../../styles/img/roadmap-label-bg-big.svg";
import cardBg from "../../../styles/img/roadmap-card-bg.svg";
import cardBgTablet from "../../../styles/img/roadmap-card-bg-tablet.svg";
import cardBgMobile from "../../../styles/img/roadmap-card-bg-mobile.svg";
import decoration from "../../../styles/img/decor.png";
import { roadMap } from '../../../constants';
import * as styles from "./index.module.scss";

const RoadMapItem = ({ data, isEven }) => {
  const { title, description, label, labelBig } = data;

  const ws = useWindowSize();
  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  return (
    <div className={styles.card} data-aos="zoom-in">
      {!isTabletWidth && !isMobileWidth && <img src={cardBg} className={styles.cardBg} alt="background" />}
      {isTabletWidth && <img src={cardBgTablet} className={styles.cardBg} alt="background" />}
      {isMobileWidth && <img src={cardBgMobile} className={styles.cardBg} alt="background" />}
      {label && (
        <div className={`${styles.cardLabel} ${isEven ? styles.cardLabelEven : ''} ${labelBig ? styles.cardLabelBig : ''}`}>
          <img
            className={`${styles.cardLabelImage} ${isEven ? styles.cardLabelImageFlipped : ''}`}
            src={labelBig ? cardLabelBgBig : cardLabelBg}
            alt="decor"
          />
          <span className={styles.cardLabelText}>{data.label}</span>
        </div>
      )}
      <h5 className={styles.cardTitle}>{title}</h5>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const Roadmap = () => (
  <section className={`${styles.roadmapSection}`}>
    <img src={decoration} className={styles.decoration} alt="decoration" />
    <div className={`container-width ${styles.roadmapSectionContainer}`}>
      <h2 data-aos="fade-up" className={`title ${styles.roadmapTitle}`}>
        Roadmap
      </h2>
      {roadMap.map((el, i) => {
        const isEven = i % 2 > 0;
        return <RoadMapItem key={i} data={el} isEven={isEven} />
      }
      )}
    </div>
  </section>
);

export default Roadmap;
