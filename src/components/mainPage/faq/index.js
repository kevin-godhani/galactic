import React, { useState } from "react";
import * as styles from "./index.module.scss";
import { MainButtonExternal } from "../../buttons";
import useWindowSize from "../../../utils/useWindowSize";
import accordion_small from "../../../styles/img/accordion_small.png";
import accordion_big from "../../../styles/img/accordion_big.png";
import accordion_angle from "../../../styles/img/accordion_angle.png";
import border from "../../../styles/img/border_line.png";
import borderMobile from "../../../styles/img/border-line-mobile.png";
import accordionClosedMobile from "../../../styles/img/accordion-closed-mobile.png";
import accordionOpenedMobile from "../../../styles/img/accordion-opened-mobile.png";
import accordionAngleMobile from "../../../styles/img/accordion-angle-mobile.png";
import { faqData, discordLink } from "../../../constants";

const Faq = () => {
  const accordionInitialState = Array.from(faqData, _d => { return { open: false } });
  const [accordionState, setAccordionState] = useState(accordionInitialState);

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
          <MainButtonExternal url={discordLink} title={'Join Our Community'} isDouble small={isMobileWidth} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
