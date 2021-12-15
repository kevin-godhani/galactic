import React from "react";
import rightNumber from "../../../styles/img/road_right.png";
import leftNumber from "../../../styles/img/road_left.png";
import base from "../../../styles/img/base_roadmap.png";
import lineLeft from "../../../styles/img/roadmap_line_left.png";
import lineRight from "../../../styles/img/roadmap_line_right.png";
import decoration from "../../../styles/img/decor.png";

import * as styles from "./index.module.scss";

const leftComponent = (data) => {
  return (
    <div key={data.number} className={styles.card} data-aos="zoom-in">
      <img src={base} alt="base" />
      <div className={styles.leftDecor}>
        <div>
          <img
            className={styles.decorNumber}
            src={leftNumber}
            alt="left-decor"
          />
          <span>{"0" + data.number.toString()}</span>
          <img className={styles.decorLine} src={lineLeft} alt="lineLeft" />
        </div>
      </div>
      <span>{data.title}</span>
      {data.description}
    </div>
  );
};

const rightComponent = (data) => {
  return (
    <div key={data.number} className={styles.card} data-aos="zoom-out">
      <img src={base} alt="base" />
      <div className={styles.rightDecor}>
        <div>
          <img
            className={styles.decorNumber}
            src={rightNumber}
            alt="left-decor"
          />
          <span>{"0" + data.number.toString()}</span>
          {data.number !== 8 && (
            <img className={styles.decorLine} src={lineRight} alt="lineLeft" />
          )}
        </div>
      </div>
      <span>{data.title}</span>
      {data.description}
    </div>
  );
};
const mock = [
  {
    title: "The Last Guard",
    description: (
      <p>
        The Galactic Fight League will be <br /> immortalized as a series of
        10,000
        <br />
        randomly generated NFT collectables
        <br /> and will soon be available for you.
      </p>
    ),
    number: 1,
  },
  {
    title: "The Last Guard",
    description: (
      <p>
        The Galactic Fight League will be <br /> immortalized as a series of
        10,000
        <br />
        randomly generated NFT collectables
        <br /> and will soon be available for you.
      </p>
    ),
    number: 2,
  },
  {
    title: "The Last Guard",
    description: (
      <p>
        The Galactic Fight League will be <br /> immortalized as a series of
        10,000
        <br />
        randomly generated NFT collectables
        <br /> and will soon be available for you.
      </p>
    ),
    number: 3,
  },
  {
    title: "The Last Guard",
    description: (
      <p>
        The Galactic Fight League will be <br /> immortalized as a series of
        10,000
        <br />
        randomly generated NFT collectables
        <br /> and will soon be available for you.
      </p>
    ),
    number: 4,
  },
  {
    title: "The Last Guard",
    description: (
      <p>
        The Galactic Fight League will be <br /> immortalized as a series of
        10,000
        <br />
        randomly generated NFT collectables
        <br /> and will soon be available for you.
      </p>
    ),
    number: 5,
  },
  {
    title: "The Last Guard",
    description: (
      <p>
        The Galactic Fight League will be <br /> immortalized as a series of
        10,000
        <br />
        randomly generated NFT collectables
        <br /> and will soon be available for you.
      </p>
    ),
    number: 6,
  },
  {
    title: "The Last Guard",
    description: (
      <p>
        The Galactic Fight League will be <br /> immortalized as a series of
        10,000
        <br />
        randomly generated NFT collectables
        <br /> and will soon be available for you.
      </p>
    ),
    number: 7,
  },
  {
    title: "The Last Guard",
    description: (
      <p>
        The Galactic Fight League will be <br /> immortalized as a series of
        10,000
        <br />
        randomly generated NFT collectables
        <br /> and will soon be available for you.
      </p>
    ),
    number: 8,
  },
];

const Roadmap = () => (
  <section className={`${styles.main} container-width`}>
    <img src={decoration} className={styles.decoration} alt="decoration" />
    <div className="flex-center">
      <h2 data-aos="fade-up" className={`title ${styles.roadmapTitle}`}>
        Roadmap
      </h2>
    </div>
    {/* <section>
      <img src={fist2} alt="fist" />
      <img src={fist1} alt="fist" />
      <img src={fist3} alt="fist" />
      <img src={fist4} alt="fist" />
      <img src={fist5} alt="fist" />
      <img src={fist4} alt="fist" />
      <img src={decor} alt="decor" />
    </section> */}
    {mock.map((el) =>
      el.number % 2 === 1 ? leftComponent(el) : rightComponent(el)
    )}
  </section>
);

export default Roadmap;
