import React from "react";
import gradientLines from "../../../styles/img/sponsors-gradient-lines.svg";
import * as styles from "./index.module.scss";

const OurSponsors = () => (
  <section className={`${styles.sponsors}`}>
    <div className={ `container-width ${styles.sponsorsContainer}`}>
      <h3 data-aos="fade-up" className={`title ${styles.sponsorsTitle}`}>
        Our Sponsors
      </h3>
    </div>
    <div data-aos="fade-up" className={styles.sponsorsWrap}>
      <div className={styles.gragientLine}>
        <img src={gradientLines} alt="" />
      </div>
    </div>
  </section>
);

export default OurSponsors;
