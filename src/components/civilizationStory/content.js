import React, { useState, useRef } from "react";
import cursorPlay from "../../styles/img/cursors/experience.png";
import cursorStop from "../../styles/img/cursors/stop.png";
import border from "../../styles/img/civilizations/borders_civilization.png";
import label from "../../styles/img/label.png";
import decor from "../../styles/img/back_decoration.png";
import decorLeftPart from "../../styles/img/left_part.png";
import decorRightPart from "../../styles/img/right_part.png";
import borderMobile from "../../styles/img/civilizations/border_tablet.png";
import borderTablet from "../../styles/img/civilizations/border_mobile.png";
import videoBorder from "../../styles/img/video-gradient-border2.svg";
import * as styles from "./index.module.scss";
import EliteFighters from "./elitfighterSlider";
import { animatedArrows } from "../mainPage/thirdBlock";


const CivilizationStoryContent = ({ data }) => {
  const videoRef = useRef(null);
  const [videoActive, setVideoActive] = useState(false);
  const [fightSkills, setFightSkills] = useState(1);

  const handleClickVideo = (e) => {
    setVideoActive(!videoActive);
    if (videoActive) {
      e.target.pause();
    } else {
      e.target.play();
      e.target.muted = false;
    }
  };
  return (
    <section className={`${styles.CivilizationStoryContent}`}>
      <img src={decor} className={styles.decor} alt="decor" />
      <div className={`${styles.CivilizationStoryContentContainer} container-width`}>
        <div className={`${styles.mainTitle}`}>
          <h2 data-aos-delay="200" data-aos="fade-up" className="title">
            Civilization Story
          </h2>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.contentDescription}
        >
          <section>
            <div className={styles.arrowsP}>{animatedArrows("purple")}</div>
            <div className={styles.arrowsG}>{animatedArrows("")}</div>
          </section>
          <img className={styles.desktop} src={border} alt="border" />
          <img className={styles.tablet} src={borderTablet} alt="border" />
          <img className={styles.mobile} src={borderMobile} alt="border" />
          <div>
            <span className="description">{data.description}</span>
          </div>
        </div>
        <div className={styles.groupButtons}>
          <div>
            <div
              style={fightSkills === 2 ? { opacity: 0.5 } : { opacity: 1 }}
              className={styles.groupButtonLeft}
            >
              <button
                className={
                  fightSkills === 1 ? styles.buttonActive : styles.buttonNonActive
                }
                onClick={() => setFightSkills(1)}
                type="button"
              >
                Strengths
              </button>
              <img src={decorLeftPart} alt="decorLeftPart"></img>
            </div>
            <div
              style={fightSkills === 1 ? { opacity: 0.5 } : { opacity: 1 }}
              className={styles.groupButtonRight}
            >
              <button
                className={
                  fightSkills === 2 ? styles.buttonActive : styles.buttonNonActive
                }
                onClick={() => setFightSkills(2)}
                type="button"
              >
                Weaknesses
              </button>
              <img src={decorRightPart} alt="decorRightPart"></img>
            </div>
            <span className="description">
              {fightSkills === 1
                ? "Highly developed fighting skills"
                : "Human emotions of greed and fear, bone that will break "}
            </span>
          </div>
        </div>
        <div className={styles.videoBlock}>
          <img src={videoBorder} alt="videoBorder" />
          <video
            style={
              videoActive
                ? { cursor: `url(${cursorStop}) 25 15, auto` }
                : { cursor: `url(${cursorPlay}) 25 15, auto` }
            }
            onClick={handleClickVideo}
            ref={videoRef}
            loop
            src={`https://storage.googleapis.com/galactic_assets/Civilization%20Videos%20/${data.id}.mp4`}
            poster={data.previewImg}
          />
          <img className={styles.label} src={label} alt="label" />
        </div>

        <div className={`${styles.mainTitle}`}>
          <h2 data-aos-delay="200" data-aos="fade-up" className="title">
            Elite Class Fighter
          </h2>
        </div>
        <div className={styles.description}>
          <span data-aos-delay="600" data-aos="fade-up" className="description">
            The Gladiator Class is not like our regular fighters. It will not be
            created via <br /> algorithm, instead these fighters will be hand
            crafted and will represent the best
            <br /> that each clan has to offer (their chosen Champion/best
            fighters)
          </span>
          <span
            data-aos-delay="1200"
            data-aos="fade-up"
            className="description"
          >
            Initially we will start with 1 for each race (1 male and 1 female) we
            will later look to <br />
            airdrop new Gladiator class fighters into the league. These can be via
            collabs, <br />
            competitions and other cool things that we can really milk for PR.
          </span>
        </div>
        <EliteFighters fighters={data.eliteFighters} />
      </div>
    </section>
  );
};

export default CivilizationStoryContent;
