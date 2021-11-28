import React, { useEffect, useState } from "react";
import arrowP from "../../styles/img/icons/arrow_purple.svg";
import arrowG from "../../styles/img/icons/arrow_gold.svg";
import fist from "../../styles/img/fist_right.png";
import border from "../../styles/img/border1.svg";
import videoBlock from "../../styles/img/video_block.png";
import decoration from "../../styles/img/back_decoration.png";
import borderTablet from "../../styles/img/border_tablet.png";
import { doubleStripeButton } from "../buttons";
import * as styles from "./index.module.scss";

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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes =
    scrollPosition >= 1900
      ? `${styles.animationDescription} description`
      : "description";

  const classButton =
    scrollPosition >= 1900
      ? `${styles.animationButtonActive} container-width`
      : `container-width`;

  const titleClass1 =
    scrollPosition >= 1900 ? `${styles.animationTitleFirst} title` : "title";
  const titleClass2 =
    scrollPosition >= 1900 ? `${styles.animationTitleSecond} title` : "title";

  const titleClass3 =
    scrollPosition > 966 ? `${styles.animationTitleFirst} title` : "title";
  const titleClass4 =
    scrollPosition > 966 ? `${styles.animationTitleSecond} title` : "title";

  return (
    <div className={styles.main}>
      <div className={`${styles.mainHeader} container-width`}>
        <h2 className={titleClass3}>Origin </h2>
        <h2 className={titleClass4}>Story</h2>
        <img src={fist} alt="fist" />
      </div>
      <div className={`${styles.contentWrapper} container-width`}>
        <div className={`${styles.mainContent}`}>
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
          <span className={`${styles.tablet} description`}>
            The Galactic Fight League brings together
            <br /> the best fighters from earth and beyond. <br /> Where Humans,
            Cyborgs, Aliens and <br /> Zombies battle to become the best mixed
            <br /> martial art fighter in the metaverse.
          </span>
        </div>
        <div>
          <img src={videoBlock} alt="videoBlock" />
        </div>
      </div>
      <div className={`${styles.civilizations} container-width`}>
        <img src={decoration} alt="decoration" />
        <div className={styles.animatedTitle}>
          <h3 className={titleClass1}>Сivili</h3>
          <h3 className={titleClass2}>sations</h3>
        </div>
        <div className={styles.animatedDescription}>
          <span className={classes}>
            In the future, our galaxy is a very different place. Where humans
            once believed
            <br />
          </span>
          <span className={classes}>
            they were the only form of intelligent life, new civilizations were
            discovered, new
            <br />
          </span>
          <span className={classes}>
            lifeforms forged. Co-existence was never easy, battles raged.
          </span>
        </div>
        <div className={`${classButton} ${styles.animatedButton}`}>
          {doubleStripeButton("", "Read More")}
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
