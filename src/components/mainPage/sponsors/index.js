import React from "react";
import borders from "../../../styles/img/borders.png";
import * as styles from "./index.module.scss";

const OurSponsors = () => (
  <div className={`${styles.main} container-width`}>
    <div className="flex-center">
      <h3 data-aos="fade-right" className="title">
        Our
      </h3>
      <h3 data-aos-delay="400" data-aos="fade-down" className="title">
        Sponsors
      </h3>
    </div>
    <div className={styles.gragientLine}>
      <img src={borders} alt="" />
    </div>
  </div>
);

export default OurSponsors;
