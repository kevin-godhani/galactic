import React from "react";
import leftBack from "../../../styles/img/leftCard.png";
import rightBack from "../../../styles/img/rightCard.png";
import * as styles from "./index.module.scss";
import { socialButtons } from "../../buttons";

const leftBlock = (title, left) => {
  return (
    <div
      data-aos="flip-right"
      className={`${styles.leftContainer} flex-center`}
    >
      <div>
        <span style={left ? { left } : {}} className={styles.cardHeader}>
          {title}
        </span>
        <img src={leftBack} alt="back" />
        {socialButtons("")}
      </div>
      <div>
        <p data-aos="fade-up" className={`description ${styles.cardText}`}>
          In the future, our galaxy is a very different place. Where humans once
          believed they were the only form of intelligent life, new
          civilizations were discovered, new lifeforms forged. Co-existence was
          never easy, battles raged.
        </p>
      </div>
    </div>
  );
};

const rightBlock = (title) => {
  return (
    <div
      data-aos="flip-left"
      className={`${styles.rightContainer} ${styles.container} flex-center`}
    >
      <p data-aos="fade-up" className={`description ${styles.cardText}`}>
        In the future, our galaxy is a very different place. Where humans once
        believed they were the only form of intelligent life, new civilizations
        were discovered, new lifeforms forged. Co-existence was never easy,
        battles raged.
      </p>
      <div>
        <span className={styles.cardHeader}>{title}</span>
        <img src={rightBack} alt="back" />
        {socialButtons("")}
      </div>
    </div>
  );
};
const Team = () => {

  return (
    <section className={styles.teamSection}>
      <div className={`container-width ${styles.teamSectionContainer}`}>
        <h2 data-aos="fade-up" className={`title ${styles.teamSectionTitle}`}>
          Our Team
        </h2>
        <div className={styles.description}>
          <span data-aos-delay="800" data-aos="fade-up" className="description">
            In the future, our galaxy is a very different place. Where humans
            once believed
          </span>
          <span
            data-aos-delay="1000"
            data-aos="fade-up"
            className="description"
          >
            they were the only form of intelligent life, new civilizations were
            discovered, new
          </span>
          <span
            data-aos-delay="1200"
            data-aos="fade-up"
            className="description"
          >
            lifeforms forged. Co-existence was never easy, battles raged.
          </span>
        </div>
        {leftBlock("TH3M")}
        {rightBlock("1500v")}
        {leftBlock("ARGENTICS", '138px')}
      </div>
    </section>
  );
};

export default Team;
