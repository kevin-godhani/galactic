import React, { useState } from "react";
import { navigate } from "gatsby";
import Ticker from "react-ticker";
import { pageData, carousel } from "./dataMocks";
import border from "../../styles/img/border_line.png";
import * as styles from "./index.module.scss";
import * as style from "../civilizationStory/index.module.scss";
import useWindowSize from "../../utils/useWindowSize";

import SlickSlider from "../mainPage/secondBlock/slider";
import CivilizationsContent from "./content";
import { civilizationsStoryData } from "./dataMocks";

const CivilizationsMain = () => {
  const [selectedStep, setselectedStep] = useState(0);
  const ws = useWindowSize();
  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  const handlechangeStep = (step) => {
    setselectedStep(step);
  };
  const handleredirect = (id) => {
    if (id - 1 === selectedStep) {
      navigate(civilizationsStoryData[selectedStep].link);
    }
  };

  const backgroundImage =
    isTabletWidth || isMobileWidth
      ? pageData[selectedStep]?.mobileBackground
      : pageData[selectedStep]?.background;

  return (
    <section className={styles.main}>
      <img src={border} alt="border" />
      <div className={style.mainHeader}>
        <Ticker direction="toLeft">
          {({ index }) => (
            <>
              <span className={style.tickerText} key={index}>
                Civilisations
              </span>
            </>
          )}
        </Ticker>
        <img src={border} alt="border" />
      </div>
      <div
        className={styles.mainInfo}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className={styles.decorLine} />
        <img src={pageData[selectedStep]?.decor} alt="decor" />
        <span>SELECT CIVILISATION</span>
      </div>
      <SlickSlider
        redirect={handleredirect}
        data={carousel}
        afterChange={handlechangeStep}
        containerClassName={"civilizations-slider-wrap"}
        className={"civilizations-slider"}
        isClickable
      />
      <CivilizationsContent data={pageData[selectedStep]} />
    </section>
  );
};

export default CivilizationsMain;
