import React, { useState } from "react";
import accordion_small from "../../styles/img/accordion_small.png";
import accordion_big from "../../styles/img/accordion_big.png";
import accordion_angle from "../../styles/img/accordion_angle.png";
import border from "../../styles/img/border_line.png";
import * as styles from "./index.module.scss";
import { doubleStripeButton } from "../buttons";

const faqData = [
  {
    id: 1,
    title: "What’s an NFT?",
    description: (
      <p className="description">
        The Galactic Fight League will be immortalized as a series of 10,000{" "}
        <br />
        randomly generated NFT collectables and will soon be available for you{" "}
        <br />
        to mint. Each fighter will adorn a unique set of characteristics, some{" "}
        <br />
        rarer than others and wear their own style of fightwear.
      </p>
    ),
  },
  {
    id: 2,
    title: "How do I buy an NFT?",
    description: (
      <p className="description">
        The Galactic Fight League will be immortalized as a series of 10,000{" "}
        <br />
        randomly generated NFT collectables and will soon be available for you{" "}
        <br />
        to mint. Each fighter will adorn a unique set of characteristics, some{" "}
        <br />
        rarer than others and wear their own style of fightwear.
      </p>
    ),
  },
  {
    id: 3,
    title: "What wallet should I use? ",
    description: (
      <p className="description">
        The Galactic Fight League will be immortalized as a series of 10,000{" "}
        <br />
        randomly generated NFT collectables and will soon be available for you{" "}
        <br />
        to mint. Each fighter will adorn a unique set of characteristics, some{" "}
        <br />
        rarer than others and wear their own style of fightwear.
      </p>
    ),
  },
];
const Faq = () => {
  const [accordionState, setAccordionState] = useState([
    { open: false },
    { open: false },
    { open: false },
  ]);

  const handleOpen = (i) => {
    let newValues = [...accordionState];
    newValues[i].open = !newValues[i].open;
    setAccordionState(newValues);
  };

  const accordionComponent = (data, idx) => {
    const isOpen = accordionState[idx]?.open;
    return (
      <div
        className={`${styles.accordionSection}`}
        onClick={() => handleOpen(idx)}
        key={data.id}
        style={
          !isOpen ? { height: 200, opacity: 0.8 } : { height: 330, opacity: 1 }
        }
      >
        <div>
          <img
            style={isOpen ? { minHeight: 300 } : { minHeight: 177 }}
            src={isOpen ? accordion_big : accordion_small}
            alt="back"
          />
          <img className={styles.angle} src={accordion_angle} alt="angle" />
          <h6>{isOpen ? "-" : "+"}</h6>
        </div>
        <span>{data.title}</span>
        {isOpen && <img src={border} alt="border" />}
        {isOpen && data.description}
      </div>
    );
  };

  return (
    <div className={`${styles.main} container-width`}>
      <h3 className="title">FAQ</h3>
      <div className="container-width">
        {faqData.map((el, idx) => accordionComponent(el, idx))}
      </div>
      <div className={styles.button}>
        {doubleStripeButton("", "Join Our Community")}
      </div>
    </div>
  );
};

export default Faq;
