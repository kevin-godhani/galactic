import React, { useEffect } from "react";
import border from "../../styles/img/civilizations/borders_civilization.png";
import borderMobile from "../../styles/img/civilizations/border_tablet.png";
import borderTablet from "../../styles/img/civilizations/border_mobile.png";
import * as styles from "./index.module.scss";

const CivilizationsContent = ({ data }) => {
  return (
    <div className={`${styles.content} container-width`}>
      <h1 className="title">The Story</h1>
      <div className={styles.contentDescription}>
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
