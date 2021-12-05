import React, { useState } from "react";
// import Ticker, { FinancialTicker, NewsTicker } from "nice-react-ticker";
import { pageData, carousel } from "./dataMocks";
import border from "../../styles/img/border_line.png";
import * as styles from "./index.module.scss";
import SlickSlider from "../secondBlock/slider";
import CivilizationsContent from "./content";
const CivilizationsMain = () => {
  const [selectedStep, setselectedStep] = useState(1);

  const handlechangeStep = (step) => {
    setselectedStep(step);
  };

  return (
    <div className={styles.main}>
      <section>
        <img src={border} alt="border" />
      </section>
      <div className={styles.mainHeader}>
        <span>Civilisations</span>
        <img src={border} alt="border" />
      </div>
      <div
        className={styles.mainInfo}
        style={{
          backgroundImage: `url(${pageData[selectedStep - 1].backgroung})`,
        }}
      >
        <section className={styles.decorLine} />
        <img src={pageData[selectedStep - 1].decor} alt="decor" />
        <span>SELECT CIVILISATION</span>
      </div>
      <SlickSlider data={carousel} changeStep={handlechangeStep} isClicable />
      <CivilizationsContent data={pageData[selectedStep - 1]} />
    </div>
  );
};

export default CivilizationsMain;
