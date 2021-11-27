import React from "react";
import rightNumber from "../../styles/img/road_right.png";
import leftNumber from "../../styles/img/road_left.png";
import base from "../../styles/img/base_roadmap.png";
import lineLeft from "../../styles/img/roadmap_line_left.png";
import lineRight from "../../styles/img/roadmap_line_right.png";

import fist1 from "../../styles/img/fist1.png";
import fist2 from "../../styles/img/fist2.png";
import fist3 from "../../styles/img/fist3.png";
import fist4 from "../../styles/img/fist4.png";
import fist5 from "../../styles/img/fist5.png";
import * as styles from "./index.module.scss";

const leftComonent = (data) => {
  return (
    <div key={data.number} className={styles.card}>
      <img src={base} alt="base" />
      <div className={styles.leftDecor}>
        <div>
          <img src={leftNumber} alt="left-decor" />
          <span>{"0" + data.number.toString()}</span>
          <img src={lineLeft} alt="lineLeft" />
        </div>
      </div>
      <span>{data.title}</span>
      {data.description}
    </div>
  );
};

const rightComonent = (data) => {
  return (
    <div key={data.number} className={styles.card}>
      <img src={base} alt="base" />
      <div className={styles.rightDecor}>
        <div>
          <img src={rightNumber} alt="left-decor" />
          <span>{"0" + data.number.toString()}</span>
          {data.number !== 8 && <img src={lineRight} alt="lineLeft" />}
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
    <h3 className="title">Roadmap</h3>
    <section>
      <img src={fist2} alt="fist" />
      <img src={fist1} alt="fist" />
      <img src={fist3} alt="fist" />
      <img src={fist4} alt="fist" />
      <img src={fist5} alt="fist" />
      <img src={fist4} alt="fist" />
    </section>
    {mock.map((el) =>
      el.number % 2 === 1 ? leftComonent(el) : rightComonent(el)
    )}
  </div>
);

export default Roadmap;
