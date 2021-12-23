import React, { useState, useRef, useLayoutEffect } from "react";
import border from "../../styles/img/civilizations/borders_civilization.png";
import label from "../../styles/img/label.png";
import decor from "../../styles/img/back_decoration.png";
import decorLeftPart from "../../styles/img/left_part.png";
import decorRightPart from "../../styles/img/right_part.png";
import decorMobile from "../../styles/img/sw-part-mobile.png";
import borderMobile from "../../styles/img/civilizations/border_tablet.png";
import borderTablet from "../../styles/img/civilizations/border_mobile.png";
import videoBorder from "../../styles/img/video-gradient-border2.svg";
import * as styles from "./index.module.scss";
import EliteFighters from "./elitfighterSlider";
import { animatedArrows } from "../mainPage/thirdBlock";
import cursorPlay from "../../styles/img/icons/watch_civilization.png";
import useWindowSize from "../../utils/useWindowSize";

const CivilizationStoryContent = ({ data }) => {
  const videoRef = useRef(null);
  const [fightSkills, setFightSkills] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const ws = useWindowSize();
  const isMobileWidth = ws.width <= 480;

  const toggleFullScreen = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.play();
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
    <div className={`${styles.CivilizationStoryContent}`}>
      <img src={decor} className={styles.decoration} alt="decor" />
      <div
        className={`${styles.CivilizationStoryContentContainer} container-width`}
      >
        <h2 data-aos="fade-up" className={`title ${styles.mainTitle}`}>
          Civilization Story
        </h2>
        <div data-aos="fade-up" className={styles.contentDescription}>
          <section>
            <div className={styles.arrowsP}>{animatedArrows("purple")}</div>
            <div className={styles.arrowsG}>{animatedArrows("")}</div>
          </section>
          <img className={styles.desktop} src={border} alt="border" />
          <img className={styles.tablet} src={borderTablet} alt="border" />
          <img className={styles.mobile} src={borderMobile} alt="border" />
          <div className={styles.descriptionText}>
            <span className="description description_padding">{data.description}</span>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.groupButtons}>
          <div>
            <div
              style={fightSkills === 2 ? { opacity: 0.5 } : { opacity: 1 }}
              className={styles.groupButtonLeft}
            >
              <button
                className={
                  fightSkills === 1
                    ? styles.buttonActive
                    : styles.buttonNonActive
                }
                onClick={() => setFightSkills(1)}
                type="button"
              >
                Strengths
              </button>
              <img
                src={isMobileWidth ? decorMobile : decorLeftPart}
                alt="decorLeftPart"
              ></img>
            </div>
            <div
              style={fightSkills === 1 ? { opacity: 0.5 } : { opacity: 1 }}
              className={styles.groupButtonRight}
            >
              <button
                className={
                  fightSkills === 2
                    ? styles.buttonActive
                    : styles.buttonNonActive
                }
                onClick={() => setFightSkills(2)}
                type="button"
              >
                Weaknesses
              </button>
              <img
                src={isMobileWidth ? decorMobile : decorRightPart}
                style={{ transform: [{ scaleX: -1 }] }}
                alt="decorRightPart"
              ></img>
            </div>
            <span className="description">
              {fightSkills === 1
                ? data.strengths
                : data.weaknesses
              }
            </span>
          </div>
        </div>
        <div className={styles.videoBlock}>
          <img src={videoBorder} alt="videoBorder" />
          <video
            ref={videoRef}
            style={isFullScreen ? { WebkitMaskImage: "none" } : {}}
            loop
            src={`https://storage.googleapis.com/galactic_assets/Civilization%20Videos%20/${data.id}.mp4`}
            poster={data.previewImg}
          />
          <img className={styles.label} src={label} alt="label" />
          <div onClick={toggleFullScreen} className={styles.playVideo}>
            <img src={cursorPlay} alt="cursorPlay" />
          </div>
        </div>

        <h2 data-aos="fade-up" className={`title ${styles.fightersTitle}`}>
          Elite Class Fighter
        </h2>
        <div className={styles.description}>
          <span data-aos-delay="600" data-aos="fade-up" className="description">
            The Gladiator Class is not like our regular fighters. It will not be
            created via algorithm, instead these fighters will be hand crafted
            and will represent the best that each clan has to offer (their
            chosen Champion/bestfighters)
          </span>
          <span
            data-aos-delay="1200"
            data-aos="fade-up"
            className="description"
          >
            Initially we will start with 1 for each race (1 male and 1 female)
            we will later look to airdrop new Gladiator class fighters into the
            league. These can be via collabs, competitions and other cool things
            that we can really milk for PR.
          </span>
        </div>
      </div>
      <EliteFighters fighters={data.eliteFighters} />
    </div>
  );
};

export default CivilizationStoryContent;
