import React, { useState, useRef, useMemo } from "react";
import Ticker from "react-ticker";
import * as styles from "./index.module.scss";
import { MainButton } from "../buttons/index";
import CivilizationStoryContent from "./content";
import { ButtonsBlock } from '../buttons';
import gsap from 'gsap';
import border from "../../styles/img/border_line.png";
import next_back from "../../styles/img/next_back.png";
import border2 from "../../styles/img/icons/border2.png";

import border_animationTablet from "../../styles/img/tablet_civilizations_boder.png";
import border_animation from "../../styles/img/border_amination.png";

const CivilizationsStory = ({ data, nextTitle }) => {
  const [isMale, setIsMale] = useState(true);
  const displacementMapRef = useRef(null);
  const tl = useRef(
    gsap.timeline({ immediateRender: false })
      .to(displacementMapRef?.current, { duration: 0.18, attr: { scale: 100 } })
      .to(displacementMapRef?.current, { duration: 0.18, attr: { scale: 0 } }
  )) ;

  const onButtonClick = (isMale) => {
    tl?.current?.play();

    setIsMale(isMale);
  }
  return (
    <section className={styles.main}>
      <svg>
        <filter id="distortionFilter">
          <feTurbulence
              baseFrequency="0.015 0.1"
              numOctaves="3"
              type="fractalNoise"
              result='wrap'/>
          <feDisplacementMap
            ref={displacementMapRef}
            id='effect'
            in="SourceGraphic"
            in2="wrap"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B" />
        </filter>
      </svg>
      <img src={border} alt="border" />
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
            <ButtonsBlock
              leftButtonTitle='Male'
              rightButtonTitle='Female'
              onLeftButtonClick={() => onButtonClick(true)}
              onRightButtonClick={() => onButtonClick(false)}
              containerStyle={styles.slidesButtons}
              buttonStyle={styles.slidesButton}
              textStyle={styles.slidesButtonText}
              limitMin={isMale}
              limitMax={!isMale}
            />
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
                <img src={isMale ? data.male : data.female} style={{ filter: 'url(#distortionFilter)' }} alt="decor" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.raceInfo}>
          <div>
            <div>
              <span>Team</span>
              <p className="description">{data.title}</p>
            </div>
            <img className={styles.borderImg} src={border2} alt="border" />
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
        </div>
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
        <MainButton to={data.nextLink} title={"Next"} isDouble={true} textContainerClassName={styles.buttonTextContainer} />
      </div>
    </section>
  );
};

export default CivilizationsStory;
