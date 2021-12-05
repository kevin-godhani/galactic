import React from "react";
import rightNumber from "../../../styles/img/road_right.png";
import leftNumber from "../../../styles/img/road_left.png";
import base from "../../../styles/img/base_roadmap.png";
import lineLeft from "../../../styles/img/roadmap_line_left.png";
import lineRight from "../../../styles/img/roadmap_line_right.png";

import * as styles from "./index.module.scss";

const leftComonent = (data) => {
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

const rightComonent = (data) => {
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
  <div className={`${styles.main} container-width`}>
    <div className="flex-center">
      <h3 data-aos="fade-right" className="title">
        Road
      </h3>
      <h3 data-aos-delay="400" data-aos="fade-left" className="title">
        map
      </h3>
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
      el.number % 2 === 1 ? leftComonent(el) : rightComonent(el)
    )}
  </div>
);

export default Roadmap;
