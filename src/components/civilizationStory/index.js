import React, { useState } from "react";
import * as styles from "./index.module.scss";
import { doubleStripeButton } from "../buttons/index";
import CivilizationStoryContent from "./content";

import border from "../../styles/img/border_line.png";
import angle from "../../styles/img/animation_angle.png";
import angle_active from "../../styles/img/animation_angle_active.png";

import border_animation from "../../styles/img/border_amination.png";

const CivilizationsStory = ({ data }) => {
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
        <div>
          <span>{data.title}</span>
          <span>{data.title}</span>
          <span>{data.title}</span>
        </div>
        <img src={border} alt="border" />
      </div>

      <div className={`${styles.content} container-width`}>
        <div className={styles.animationWrapper}>
          {renderButtons()}
          <img
            className={styles.animationBorder}
            src={border_animation}
            alt="border"
          />
          <video autoPlay muted loop src={`https://storage.googleapis.com/video_galactic/${data.id}.mp4`} />
          <img
            data-aos="zoom-out"
            data-aos-delay="600"
            className={styles.logo}
            src={data.logo}
            alt="logo"
          />
          <img
            className={styles.decor}
            style={!isMale ? { left: "41%" } : {}}
            src={isMale ? data.male : data.female}
            alt="decor"
          />
          <span />
        </div>
      </div>
      <CivilizationStoryContent data={data} />
      <div style={{marginBottom: '100px'}} className="container-width flex-center">
        {doubleStripeButton(data.nextLink, "Next")}
      </div>
    </div>
  );
};

export default CivilizationsStory;
