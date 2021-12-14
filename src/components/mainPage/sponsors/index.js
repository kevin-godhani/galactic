import React from "react";
import * as styles from "./index.module.scss";
import Ticker from "react-ticker";
import gradientLines from "../../../styles/img/sponsors-gradient-lines.svg";
import sponsor from "../../../styles/img/sponsor1.png";

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
      <div className={styles.tickerWrap}>
        <Ticker direction="toLeft">
          {({ index }) => (
            <img key={index} src={sponsor} className={styles.sponsorImage} alt="sponsor" />
          )}
        </Ticker>
      </div>
    </div>
  </section>
);

export default OurSponsors;
