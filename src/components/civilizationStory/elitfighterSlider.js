import React, { useCallback, useState, useRef, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./index.module.scss";
import { animatedArrows } from "../mainPage/thirdBlock";
import borderMobile from "../../styles/img/civilizations/border_tablet.png";
import borderTablet from "../../styles/img/civilizations/border_mobile.png";
import border from "../../styles/img/civilizations/borders_civilization.png";
import bg1 from "../../styles/img/civilizations/elite-fighters/ef-bg1.png";
import bg2 from "../../styles/img/civilizations/elite-fighters/ef-bg2.png";
import lockedBg1 from "../../styles/img/civilizations/elite-fighters/locked-bg1.png";
import lockedBg2 from "../../styles/img/civilizations/elite-fighters/locked-bg2.png";
import useWindowSize from "../../utils/useWindowSize";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: 0,
  centerMode: true,
  arrows: false,
  speed: 500,
  cssEase: "linear",
  className: "elite-fighters",
  initialSlide: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const backgrounds = [bg1, bg2];
const lockedBackgrounds = [lockedBg1, lockedBg2];

const EliteFighters = ({ fighters }) => {
  const [activeFighter, setActiveFighter] = useState(
    fighters?.length > 0 && fighters[1]
  );
  const sliderRef = useRef(null);

  const ws = useWindowSize();
  const isTabletWidth = ws.width <= 1200 && ws.width > 480;
  const isMobileWidth = ws.width <= 480;

  const onClickHandle = useCallback((_e, fighter) => {
    if (isTabletWidth || isMobileWidth) {
      return;
    }

    setActiveFighter(fighter);
    const id = fighter.id;
    const index = fighters.findIndex((f) => f.id === id);
    sliderRef.current?.slickGoTo(index);
  }, []);

  const onChange = (index) => {
    setActiveFighter(fighters[index]);
  };

  const sliderSettings = useMemo(() => {
    return { ...settings, afterChange: onChange };
  }, []);

  if (!fighters) {
    return null;
  }

  return (
    <div className={styles.sliderWrapper}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {fighters.map((fighter, i) => {
          const bgIndex = i % 2 > 0;

          return (
            <div
              key={fighter.id}
              className={`${styles.card} ${
                !fighter.active ? styles.cardLocked : ""
              }`}
              onClick={(_e) => fighter.active && onClickHandle(_e, fighter)}
            >
              {fighter.active ? (
                <img
                  src={backgrounds[+bgIndex]}
                  className={`${styles.cardBg}`}
                  alt={fighter.name}
                />
              ) : (
                <img
                  src={lockedBackgrounds[+bgIndex]}
                  className={`${styles.cardBg}`}
                  alt={fighter.name}
                />
              )}
              <img
                src={fighter.image}
                className={`${styles.cardFighterImage} ${
                  fighter.id === activeFighter.id
                    ? styles.cardFighterImageActive
                    : ""
                }`}
                alt={fighter.name}
              />
              <h5 className={`${styles.cardTitle} ${styles.cardTitleText}`}>{fighter.name}</h5>
            </div>
          );
        })}
      </Slider>
      <div className="container-width">
        <div
          data-aos="fade-up"
          className={`${styles.contentDescription}`}
        >
          <section>
            <div className={styles.arrowsP}>{animatedArrows("purple")}</div>
            <div className={styles.arrowsG}>{animatedArrows("")}</div>
          </section>
          <img className={styles.desktop} src={border} alt="border" />
          <img className={styles.tablet} src={borderTablet} alt="border" />
          <img className={styles.mobile} src={borderMobile} alt="border" />
          <div>
            {activeFighter.active ? (
              <>
                <h3
                  className={`${styles.paddingText} title`}
                >{`${activeFighter.name} Backstory`}</h3>
                <span className={`${styles.paddingText} description`}>
                  {activeFighter.backStory}
                </span>
              </>
            ) : (
              <h3 className="title">In Training</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EliteFighters;
