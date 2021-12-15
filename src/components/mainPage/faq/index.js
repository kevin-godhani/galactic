import React, { useState } from "react";
import * as styles from "./index.module.scss";
import { mainButton } from "../../buttons";
import useWindowSize from "../../../utils/useWindowSize";
import accordion_small from "../../../styles/img/accordion_small.png";
import accordion_big from "../../../styles/img/accordion_big.png";
import accordion_angle from "../../../styles/img/accordion_angle.png";
import border from "../../../styles/img/border_line.png";
import borderMobile from "../../../styles/img/border-line-mobile.png";
import accordionClosedMobile from "../../../styles/img/accordion-closed-mobile.png";
import accordionOpenedMobile from "../../../styles/img/accordion-opened-mobile.png";
import accordionAngleMobile from "../../../styles/img/accordion-angle-mobile.png";

const faqData = [
  {
    id: 1,
    title: "What is the total supply?",
    description: "9,999 randomly generated fighters will be available to mint.",
  },
  {
    id: 2,
    title: "How much will each cost per mint?",
    description: "Mint price is to be confirmed, depending on the current price of Solana at launch.",
  },
  {
    id: 3,
    title: "Where can I mint a GFL fighter?",
    description: "You can find the mint access on our website on the day of our minting.",
  },
  {
    id: 4,
    title: "Will there be a pre-sale?",
    description: "We will have a whitelist system in place for a very select few, but other than that the mint will go live for everybody at the same time.",
  },
  {
    id: 5,
    title: "Is there a limit to how many I can mint?",
    description: "There will be no mint limit.",
  },
  {
    id: 6,
    title: "Do you have a rarity system?",
    description: "Yes. A rarity chart will be released shortly after mint.",
  },
  {
    id: 7,
    title: "Will there be a secondary market?",
    description: "Yes, secondary markets are actively being confirmed. Initially we have confirmations with Magic Eden and Solsea.",
  },
  {
    id: 8,
    title: "When does the project’s mint open?",
    description: "13th January 2022.",
  },
  {
    id: 9,
    title: "What chain is GFL on?",
    description: "We will be releasing on the Solana blockchain.",
  },
  {
    id: 10,
    title: "What inspired you to make the GFL?",
    description: "We love MMA, we love NFTs. Go figure.",
  },
  {
    id: 11,
    title: "Who is the artist of the project and what have you done in the past?",
    description: "The artists are members of the artistic collective known as TH3M who have worked with many major Web 3.0 companies.",
  },
  {
    id: 12,
    title: "Are GFL characters generated or hand drawn?",
    description: "All GFL characters are randomly, algorithmically generated but all the traits have been handcrafted by our 3D artists.",
  },
];

const Faq = () => {
  const [accordionState, setAccordionState] = useState([
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
    { open: false },
  ]);

  const ws = useWindowSize();
  const isMobileWidth = ws.width <= 480;

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
          !isOpen ? { height: isMobileWidth ? 103 : 200, opacity: 0.8 } : { height: 330, opacity: 1 }
        }
      >
        <div>
          <img
            style={isOpen ? { minHeight: isMobileWidth ? 307 : 300 } : { minHeight: isMobileWidth ? 103 : 177 }}
            src={isOpen ? (isMobileWidth ? accordionOpenedMobile : accordion_big) : (isMobileWidth ? accordionClosedMobile : accordion_small)}
            alt="back"
          />
          <img className={styles.angle} src={isMobileWidth ? accordionAngleMobile : accordion_angle} alt="angle" />
          <h6>{isOpen ? "-" : "+"}</h6>
        </div>
        <span>{data.title}</span>
        {isOpen && <img src={isMobileWidth ? borderMobile : border} alt="border" />}
        {isOpen && <p className="description">{data.description}</p>}
      </div>
    );
  };

  return (
    <section className={`${styles.faqSection}`}>
      <div className={`container-width ${styles.faqSectionContainer}`}>
        <h2 className={`title ${styles.faqSectionTitle}`}>FAQ</h2>
        <div className={`${styles.faqSectionQuestions}`}>
          {faqData.map((el, idx) => accordionComponent(el, idx))}
        </div>
        <div className={styles.button}>
          {mainButton("", "Join Our Community", true)}
        </div>
      </div>
    </section>
  );
};

export default Faq;
