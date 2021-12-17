import React, { useCallback, useState, useRef } from "react";
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

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "10px",
  centerMode: true,
  arrows: false,
  speed: 750,
  cssEase: "linear",
  pauseOnHover: true,
  className: 'elite-fighters',
  responsive: [
    {
      breakpoint: 1364,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "10px",
        centerMode: true,
      },
    },
    {
      breakpoint: 924,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
      },
    },
  ],
};

const backgrounds = [bg1, bg2];
const lockedBackgrounds = [lockedBg1, lockedBg2];

const EliteFighters = ({ fighters }) => {
  const [activeFighter, setActiveFighter] = useState(fighters?.length > 0 && fighters[0]);
  const sliderRef = useRef(null);

  const onClickHandle = useCallback((_e, fighter) => {
    setActiveFighter(fighter);
    const id = fighter.id;
    const index = fighters.findIndex(f => f.id === id);
    sliderRef.current?.slickGoTo(index);
  }, []);

  if (!fighters) {
    return null;
  }

  return (
    <div className={styles.sliderWrapper}>
      <Slider ref={sliderRef} {...settings}>
        {fighters.map((fighter, i) => {
          const bgIndex = i % 2 > 0;

          return (
            <div
              key={fighter.id}
              className={`${styles.card} ${!fighter.active ? styles.cardLocked : ''}`}
              onClick={(_e) => fighter.active && onClickHandle(_e, fighter)}
            >
              {fighter.active ?
                <img src={backgrounds[+bgIndex]} className={`${styles.cardBg}`} alt={fighter.name} />
                :
                <img src={lockedBackgrounds[+bgIndex]} className={`${styles.cardBg}`} alt={fighter.name} />
              }
              <img src={fighter.image} className={`${styles.cardFighterImage} ${fighter.id === activeFighter.id ? styles.cardFighterImageActive : ''}`} alt={fighter.name} />
              <h5 className={styles.cardTitle}>{fighter.name}</h5>
            </div>
          );
        })}
      </Slider>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className={styles.contentDescription}
        style={{ marginBottom: "60px" }}
      >
        <section>
          <div className={styles.arrowsP}>{animatedArrows("purple")}</div>
          <div className={styles.arrowsG}>{animatedArrows("")}</div>
        </section>
        <img className={styles.desktop} src={border} alt="border" />
        <img className={styles.tablet} src={borderTablet} alt="border" />
        <img className={styles.mobile} src={borderMobile} alt="border" />
        <div>
          <h3 className="title">{`${activeFighter.name} Backstory`}</h3>
          <span className="description">
            {activeFighter.backStory}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EliteFighters;
