import React from "react";
import fist from "../../styles/img/fist_right.png";
import border from "../../styles/img/border1.svg";
import videoBlock from "../../styles/img/video_block.png";
import decoration from "../../styles/img/back_decoration.png";
import { doubleStripeButton } from "../buttons";
import * as styles from "./index.module.scss";

const ThirdBlock = () => (
  <div className={styles.main}>
    <div className={`${styles.mainHeader} container-width`}>
      <h2 className="title">Origin Story </h2>
      <img src={fist} alt="fist" />
    </div>
    <div className={`${styles.contentWrapper} container-width`}>
      <div className={`${styles.mainContent}`}>
        <img src={border} alt="border" />
        <span className="description">
          The Galactic Fight League <br /> brings together the best <br />
          fighters from earth and <br />
          beyond. Where Humans, <br />
          Cyborgs, Aliens and Zombies
          <br /> battle to become the best <br />
          mixed martial art fighter in <br />
          the metaverse.
        </span>
      </div>
      <div>
        <img src={videoBlock} alt="videoBlock" />
      </div>
    </div>
    <div className={`${styles.civilizations} container-width`}>
      <img src={decoration} alt="decoration" />
      <h3 className="title">Сivilisations</h3>
      <span className="description">
        In the future, our galaxy is a very different place. Where humans once
        believed <br /> they were the only form of intelligent life, new
        civilizations were discovered, new <br /> lifeforms forged. Co-existence
        was never easy, battles raged.
      </span>
      <div className="container-width">
        {doubleStripeButton("", "Read More")}
      </div>
    </div>
  </div>
);

export default ThirdBlock;
