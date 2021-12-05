import React from "react";
import border from "../../styles/img/civilizations/borders_civilization.png";
import borderMobile from "../../styles/img/civilizations/border_tablet.png";
import borderTablet from "../../styles/img/civilizations/border_mobile.png";
import * as styles from "./index.module.scss";

const CivilizationsContent = ({ data }) => {
  return (
    <div className={`${styles.content} container-width`}>
      <div className={styles.contentTitle}>
        <h3 data-aos="fade-right" className="title">
          The
        </h3>
        <h3 data-aos-delay="400" data-aos="fade-down" className="title">
          Story
        </h3>
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
        <span className="description">{data.description}</span>
      </div>
      <h6>The Galactic Fight League was born.</h6>
    </div>
  );
};

export default CivilizationsContent;
