import React, { useState, useRef } from "react";
import cursorPlay from "../../styles/img/cursors/experience.png";
import { carousel } from "../civilizations/dataMocks";
import cursorStop from "../../styles/img/cursors/stop.png";
import border from "../../styles/img/civilizations/borders_civilization.png";
import border_1 from "../../styles/img/border_video_civilizations.png";
import label from "../../styles/img/label.png";
import decor from "../../styles/img/back_decoration.png";
import borderMobile from "../../styles/img/civilizations/border_tablet.png";
import borderTablet from "../../styles/img/civilizations/border_mobile.png";
import * as styles from "./index.module.scss";
import SlickSlider from "../mainPage/secondBlock/slider";

const CivilizationStoryContent = ({ data }) => {
  const videoRef = useRef(null);
  const [videoActive, setVideoActive] = useState(false);
  // const [videoLoad, setVideoLoad] = useState(false);
  // console.log('🚀 ~ CivilizationStoryContent ~ videoLoad', videoLoad);

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
    <div className={`${styles.CivilizationStoryContent} container-width`}>
      <div className={`${styles.mainTitle}`}>
        <h2 data-aos-delay="200" data-aos="fade-right" className="title">
          Civilization
        </h2>
        <h2 data-aos-delay="600" data-aos="fade-down" className="title">
          Story
        </h2>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className={styles.contentDescription}
      >
        <img className={styles.desktop} src={border} alt="border" />
        <img className={styles.tablet} src={borderTablet} alt="border" />
        <img className={styles.mobile} src={borderMobile} alt="border" />
        <div>
          <span className="description">{data.description}</span>
        </div>
      </div>
      <div className={styles.videoBlock}>
        <div>
          <img className={styles.borderVideo} src={border_1} alt="border_1" />
          <video
            style={
              videoActive
                ? { cursor: `url(${cursorStop}) 25 15, auto` }
                : { cursor: `url(${cursorPlay}) 25 15, auto` }
            }
            onClick={handleClickVideo}
            ref={videoRef}
            loop
            src={`https://storage.googleapis.com/video_galactic/${data.id}.mp4`}
            poster={data.previewImg}
          />
          <img className={styles.label} src={label} alt="label" />
        </div>
        <div>
          <img src={decor} alt="decor" />
        </div>
      </div>

      <div className={`${styles.mainTitle}`}>
        <h2 data-aos-delay="200" data-aos="fade-right" className="title">
          Elite
        </h2>
        <h2 data-aos-delay="600" data-aos="fade-down" className="title">
          Class
        </h2>
        <h2 data-aos-delay="800" data-aos="fade-left" className="title">
          Fighter
        </h2>
      </div>
      <div className={styles.description}>
        <span data-aos-delay="600" data-aos="fade-down" className="description">
          The Gladiator Class is not like our regular fighters. It will not be
          created via <br /> algorithm, instead these fighters will be hand
          crafted and will represent the best
          <br /> that each clan has to offer (their chosen Champion/best
          fighters)
        </span>
        <span
          data-aos-delay="1200"
          data-aos="fade-down"
          className="description"
        >
          Initially we will start with 1 for each race (1 male and 1 female) we
          will later look to <br />
          airdrop new Gladiator class fighters into the league. These can be via
          collabs, <br />
          competitions and other cool things that we can really milk for PR.
        </span>
      </div>
      <SlickSlider data={carousel} />
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className={styles.contentDescription}
      >
        <img className={styles.desktop} src={border} alt="border" />
        <img className={styles.tablet} src={borderTablet} alt="border" />
        <img className={styles.mobile} src={borderMobile} alt="border" />
        <div>
          <h3 className="title">Elite Fighter Backstory</h3>
          <span className="description">
            The Galactic Fight League will be immortalized as a series of 10,000
            randomly generated NFT collectables and will soon be available for
            you to mint. Each fighter will adorn a unique set of
            characteristics, some rarer than others and wear their own style of
            fightwear. The Galactic Fight League will be
          </span>
        </div>
      </div>
    </div>
  );
};

export default CivilizationStoryContent;
