import React, { useEffect } from "react";
import { Link } from "react-scroll";
import arrow from "../../styles/img/arrow_scroll.png";
import border from "../../styles/img/ellipse.png";
import * as styles from "./index.module.scss";

const FirstBlock = () => {
  // const handleScroll = () => {
  //   window.scrollTo({
  //     top: 790,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div className={styles.main}>
      <section>
        <Link
          // activeClass="active"
          to="section-2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          className={styles.scrollButton}
        >
          <img src={border} alt="border" />
          <div>
            <img src={arrow} alt="arrow" />
          </div>
        </Link>
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
};

export default FirstBlock;
