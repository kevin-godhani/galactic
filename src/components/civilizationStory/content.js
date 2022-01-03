import React, { useState, useRef } from "react";
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
import useWindowSize from "../../utils/useWindowSize";
import Modal from "../modal";
import CloseIcon from "../mainPage/thirdBlock/closeIcon";
import WatchButtonIcon2 from '../../styles/img/watch-button2.inline.svg';

const CivilisationStoryContent = ({ data }) => {
  const videoRef = useRef(null);
  const animationRef = useRef(null);
  const [fightSkills, setFightSkills] = useState(1);
  // const [isFullScreen, setIsFullScreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const ws = useWindowSize();

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => {
    setIsModalOpen(true);
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
  };
  const ws = useWindowSize();
  const isMobileWidth = ws.width <= 480;

  // const toggleFullScreen = () => {
  //   const el = videoRef.current;
  //   const background = animationRef.current;
  //   if (!el || !background) return;
  //   el.muted = false;
  //   el.style.display = "block";
  //   el.style.WebkitMaskImage = "none"
  //   background.style.display = "none";
  //   el.play();
  //   if (el.requestFullscreen) {
  //     el.requestFullscreen();
  //   } else if (el.mozRequestFullScreen) {
  //     el.mozRequestFullScreen();
  //   } else if (el.webkitRequestFullscreen) {
  //     el.webkitRequestFullscreen();
  //   }
  // };

  // useLayoutEffect(() => {
  //   const refEl = videoRef.current;
  //   if (refEl) {
  //     if (ws.width === refEl.clientWidth) {
  //       setIsFullScreen(true);
  //       refEl.currentTime = 0;
  //     } else {
  //       setIsFullScreen(false);
  //       refEl.muted = true;
  //       const background = animationRef.current;
  //       if (!background) return;
  //       background.style.display = "block";
  //     }
  //   }
  // });

  return (
    <div className={`${styles.CivilizationStoryContent}`}>
      <img src={decor} className={styles.decoration} alt="decor" />
      <div
        className={`${styles.CivilizationStoryContentContainer} container-width`}
      >
        <h2 data-aos="fade-up" className={`title ${styles.mainTitle}`}>
          Civilisation Story
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
            <span className="description description_padding">
              {data.description}
            </span>
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
              {fightSkills === 1 ? data.strengths : data.weaknesses}
            </span>
          </div>
        </div>
        <div className={styles.videoBlock}>
          <img src={videoBorder} alt="videoBorder" />
          <Modal
            trigger={
              <div className={styles.playVideo}>
                <WatchButtonIcon2 />
              </div>
            }
            children={
              <div className={styles.videoContentWrapper}>
                <CloseIcon onClick={closeModal} />
                <video
                  ref={videoRef}
                  // style={
                  //   isFullScreen
                  //     ? { WebkitMaskImage: "none" }
                  //     : { display: "none" }
                  // }
                  playsInline
                  loop
                  controls
                  autoPlay
                  src={`https://storage.googleapis.com/galactic_assets/Civilization%20Videos%20/${data.id}.mp4`}
                  poster={data.previewImg}
                >
                  <track kind="captions" default></track>
                </video>
              </div>
            }
            isOpen={isModalOpen}
            onClose={closeModal}
            onOpen={openModal}
          />
          <video
            ref={animationRef}
            autoPlay
            muted
            loop
            src={`https://storage.googleapis.com/galactic_assets/animated-backgroungs/${data.id}.mp4`}
            poster={data.previewImg}
          />
          <img className={styles.label} src={label} alt="label" />
          {/* <div onClick={toggleFullScreen} className={styles.playVideo}>
            <img src={cursorPlay} alt="cursorPlay" />
          </div> */}
        </div>

        <h2 data-aos="fade-up" className={`title ${styles.fightersTitle}`}>
          Elite Class Fighter
        </h2>
        <div className={styles.description}>
          <span data-aos-delay="600" data-aos="fade-up" className="description">
            Some are meant to fight, some to fall. They got where they are by
            crushing the bodies and souls of their enemies, the reputation
            spreading across the galaxy as the war ground on. When the guns fell
            silent they turned their hand to the Galactic Fight League, the
            founding members, the originals. Some are created equally, some are
            born to dominate.
          </span>
        </div>
      </div>
      <EliteFighters fighters={data.eliteFighters} />
    </div>
  );
};

export default CivilisationStoryContent;
