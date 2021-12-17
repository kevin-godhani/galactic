import React, { useState } from "react";
import Ticker from "react-ticker";
import * as styles from "./index.module.scss";
import { doubleStripeButton, mainButton } from "../buttons/index";
import CivilizationStoryContent from "./content";
import border from "../../styles/img/border_line.png";
import angle from "../../styles/img/animation_angle.png";
import angle_active from "../../styles/img/animation_angle_active.png";
import next_back from "../../styles/img/next_back.png";
import border1 from "../../styles/img/icons/border1.png";
import border2 from "../../styles/img/icons/border2.png";

import border_animationTablet from "../../styles/img/tablet_civilizations_boder.png";
import border_animation from "../../styles/img/border_amination.png";

const CivilizationsStory = ({ data, nextTitle }) => {
  const [isMale, setIsMale] = useState(true);
  const renderButtons = () => {
    return (
      <div className={styles.buttonBlock}>
        <div
          data-aos-delay="400"
          data-aos="fade-down"
          onClick={() => setIsMale(true)}
        >
          <img src={isMale ? angle_active : angle} alt="border" />
          <span style={isMale ? { color: "#010103" } : { color: "#99986C" }}>
            Male
          </span>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="800"
          onClick={() => setIsMale(false)}
        >
          <img src={!isMale ? angle_active : angle} alt="border" />
          <span style={!isMale ? { color: "#010103" } : { color: "#99986C" }}>
            Female
          </span>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.main}>
      <section>
        <img src={border} alt="border" />
      </section>
      <div className={styles.mainHeader}>
        <Ticker direction="toLeft">
          {({ index }) => (
            <>
              <span className={styles.tickerText} key={index}>
                {data.title}
              </span>
            </>
          )}
        </Ticker>
        <img src={border} alt="border" />
      </div>

      <div className={`${styles.content} container-width`}>
        <div className={styles.animationWrapper}>
          <div>
            {renderButtons()}
            <video
              autoPlay
              muted
              loop
              src={`https://storage.googleapis.com/galactic_assets/animated-backgroungs/${data.id}.mp4`}
              poster={data.previewImg}
            />
            <img
              className={`${styles.animationBorder} ${styles.desktop}`}
              src={border_animation}
              alt="border"
            />
            <img
              className={`${styles.animationBorder} ${styles.tablet} ${styles.mobile}`}
              src={border_animationTablet}
              alt="border"
            />
            <div className={styles.decor}>
              <div>
                <img
                  data-aos="zoom-out"
                  data-aos-delay="600"
                  className={styles.logo}
                  src={data.logo}
                  alt="logo"
                />
                <img
                  // style={!isMale ? { left: "41%" } : {}}
                  src={isMale ? data.male : data.female}
                  alt="decor"
                />
              </div>
              <span />
            </div>
          </div>
        </div>
        <section className={styles.raceInfo}>
        <div>
          <div>
            <span>Team</span>
            <p className="description">{data.title}</p>
          </div>
          <img className={styles.borderImg} src={border1} alt="border" />
        </div>
        <div>
          <div>
            <span>Planet</span>
            <p className="description">{data.planet}</p>
          </div>
          <img className={styles.borderImg} src={border2} alt="border" />
        </div>
        <div>
          <div>
            <span>Race</span>
            <p className="description">{data.race}</p>
          </div>
          <img className={styles.borderImg} src={border2} alt="border" />
        </div>
        <div>
          <div>
            <span>Genders</span>
            <p className="description">{data.genders}</p>
          </div>
          <img className={styles.borderImg} src={border2} alt="border" />
        </div>
      </section>
      </div>
      <CivilizationStoryContent data={data} />
      <div
        className={styles.mainHeader}
        style={{ marginBottom: "60px", background: `url(${next_back})` }}
      >
        <Ticker direction="toLeft">
          {({ index }) => (
            <>
              <span className={styles.tickerText} key={index}>
                {nextTitle}
              </span>
            </>
          )}
        </Ticker>
        <img src={border} alt="border" />
      </div>
      <div
        style={{ marginBottom: "100px" }}
        className="container-width flex-center"
      >
        {mainButton(data.nextLink, "Next", true)}
      </div>
    </div>
  );
};

export default CivilizationsStory;
