import React from "react";
import * as styles from "./index.module.scss";
import Ticker from "react-ticker";
import gradientLines from "../../../styles/img/sponsors-gradient-lines.svg";
import partner1 from "../../../styles/img/partner1.png";
import partner2 from "../../../styles/img/partner2.png";
import partner3 from "../../../styles/img/partner3.png";
import partner4 from "../../../styles/img/partner4.png";
import partner5 from "../../../styles/img/partner5.png";
import partner6 from "../../../styles/img/partner6.png";
import partner7 from "../../../styles/img/partner7.png";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

const OurSponsors = () => {
  const GetItems = () => {
    return (
      <>
        {partners.map((item, index)=> (
          <img key={index} src={item} className={styles.sponsorImage} alt="sponsor" />
        ))}
      </>
    );
  };
  return (
    <section className={`${styles.partners}`}>
      <div className={ `container-width ${styles.partnersContainer}`}>
        <h3 data-aos="fade-up" className={`title ${styles.partnersTitle}`}>
          Our Partners
        </h3>
      </div>
      <div data-aos="fade-up" className={styles.partnersWrap}>
        <div className={styles.gragientLine}>
          <img src={gradientLines} alt="" />
        </div>
        <div className={styles.tickerWrap}>
          <Ticker direction="toLeft">
            {() => <GetItems />}
          </Ticker>
        </div>
      </div>
    </section>
  );
};

export default OurSponsors;
