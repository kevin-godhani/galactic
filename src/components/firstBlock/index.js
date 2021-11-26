import React from "react";
import { Link } from "gatsby";
import arrow from "../../styles/img/arrow_scroll.png";
import border from "../../styles/img/ellipse.png";
import * as styles from "./index.module.scss";

const FirstBlock = () => (
  <div className={styles.main}>
    <section>
      <div className={styles.scrollButton}>
        <img src={border} alt="border" />
        <div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <section>
        <span>S</span>
        <span>C</span>
        <span>R</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
      </section>
    </section>
  </div>
);

export default FirstBlock;
