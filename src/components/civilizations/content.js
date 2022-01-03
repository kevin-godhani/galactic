import React, { useCallback} from "react";
import border from "../../styles/img/civilizations/borders_civilization.png";
import borderMobile from "../../styles/img/civilizations/border_tablet.png";
import borderTablet from "../../styles/img/civilizations/border_mobile.png";
// import * as styles from "./index.module.scss";
import * as styles from "../civilizationStory/index.module.scss";
import { animatedArrows } from "../mainPage/thirdBlock";
import useWindowSize from "../../utils/useWindowSize";

const CivilisationsContent = ({ data }) => {
  const ws = useWindowSize();
  const isTabletWidth = ws.width < 1200 && ws.width > 680;
  const isMobileWidth = ws.width < 680;

  const getPosition = useCallback(
    () => {
      if(isTabletWidth) {
        return { left: "54.5%" };
      }
      if(isMobileWidth) {
        return { left: "58.5%" };
      }
    },
    [isTabletWidth, isMobileWidth],
  );
  return (
    <div className={`${styles.content} container-width`}>
      <h1 className="title">The Story</h1>
      <div className={styles.contentTitle}></div>
      <div className={styles.contentDescription}>
        <section>
          <div
            style={getPosition()}
            className={styles.arrowsP}
          >
            {animatedArrows("purple")}
          </div>
          <div className={styles.arrowsG}>{animatedArrows("")}</div>
        </section>
        <img className={styles.desktop} src={border} alt="border" />
        <img className={styles.tablet} src={borderTablet} alt="border" />
        <img className={styles.mobile} src={borderMobile} alt="border" />
        <div>
          <span
            className={`description description_padding ${styles.storyText}`}
            style={ws.width < 480 ? {lineHeight: '1rem'} : {}}
          >
            {data.description}
          </span>
        </div>
      </div>
      <h6>Which side will you choose?</h6>
    </div>
  );
};

export default CivilisationsContent;
