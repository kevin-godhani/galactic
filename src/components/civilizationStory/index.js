import React, { useState } from "react";
// import background1 from "../../styles/img/civilizations/background_1.png";
// import decor1 from "../../styles/img/civilizations/decor_1.png";
import border from "../../styles/img/border_line.png";
import * as styles from "./index.module.scss";

const CivilizationsStory = () => {
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
        <div>
          <span>The last guard</span>
          <span>The last guard</span>
          <span>The last guard</span>
        </div>
        <img src={border} alt="border" />
      </div>
    </div>
  );
};

export default CivilizationsStory;
