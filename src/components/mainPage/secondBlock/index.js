import React from "react";
import * as styles from "./index.module.scss";
import SlickSlider from "./slider";
import { carousel } from "../../../constants";
import { useInView } from 'react-intersection-observer';

const slideSize = {
  width: 375,
  height: 371,
};

const SecondBlock = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section ref={ref} id="section-2" className={styles.main} style={{ visibility: inView ? 'visible' : 'hidden' }}>
      <div className={styles.container}
      >
        <h2 data-aos="fade-up" className="title2">
          <span>4,000</span>&nbsp;Unique fighters from across the galaxy
        </h2>
        <p data-aos="fade-up" className="description">
          The Galactic Fight League will be immortalized as a series of 4,000 randomly generated NFT collectables and will soon be available for you to mint. Each fighter will adorn a unique set of characteristics, some rarer than others and wear their own style of fightwear.
        </p>
      </div>
      <SlickSlider data={carousel} className={'fighters-slider'} activeSlideIndex={0} slideSize={slideSize} />
    </section>
  );
};

export default SecondBlock;
