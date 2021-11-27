import React from "react";
import borders from "../../styles/img/borders.png";
// import leftNumber from "../../styles/img/road_left.png";
// import base from "../../styles/img/base_roadmap.png";
// import lineLeft from "../../styles/img/roadmap_line_left.png";
// import lineRight from "../../styles/img/roadmap_line_right.png";
import * as styles from "./index.module.scss";

const OurSponsors = () => (
  <div className={`${styles.main} container-width`}>
    <h3 className="title">Our Sponsors</h3>
    <div className={styles.gragientLine}>
      <img src={borders} alt="" />
    </div>
  </div>
);

export default OurSponsors;
