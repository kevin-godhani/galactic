import React, { useEffect } from "react";
import arrow from "../../styles/img/arrow_scroll.png";
import border from "../../styles/img/ellipse.png";
import * as styles from "./index.module.scss";

const FirstBlock = () => {
  useEffect(() => {
    console.log(window.scrollY);
  }, [window.scrollX]);
  const handleScroll = () => {
    window.scrollTo({
      top: 790,
      behavior: "smooth"
  });
  };
  return (
    <div className={styles.main}>
      <section>
        <div className={styles.scrollButton} onClick={handleScroll}>
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
};

export default FirstBlock;
