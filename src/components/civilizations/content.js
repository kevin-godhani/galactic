import React from "react";
import border from "../../styles/img/civilizations/borders_civilization.png";
import borderMobile from "../../styles/img/civilizations/border_tablet.png";
import borderTablet from "../../styles/img/civilizations/border_mobile.png";
// import * as styles from "./index.module.scss";
import * as styles from "../civilizationStory/index.module.scss";
import { animatedArrows } from "../mainPage/thirdBlock";

const CivilizationsContent = ({ data }) => {
  return (
    <div className={`${styles.content} container-width`}>
      <div className={styles.contentTitle}>
        <h3 className="title">
          The Story
        </h3>
      </div>
      <div className={styles.contentDescription}>
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
      <h6>Which side will you choose?</h6>
    </div>
  );
};

export default CivilizationsContent;
