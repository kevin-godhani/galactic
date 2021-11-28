import React, { useState } from "react";
import background1 from "../../styles/img/civilizations/background_1.png";
import decor1 from "../../styles/img/civilizations/decor_1.png";
import background2 from "../../styles/img/civilizations/background_2.png";
import decor2 from "../../styles/img/civilizations/decor_2.png";
import background3 from "../../styles/img/civilizations/background_3.png";
import decor3 from "../../styles/img/civilizations/decor_3.png";
import background4 from "../../styles/img/civilizations/background_4.png";
import decor4 from "../../styles/img/civilizations/decor_4.png";
import background5 from "../../styles/img/civilizations/background_5.png";
import decor5 from "../../styles/img/civilizations/decor_5.png";
import background6 from "../../styles/img/civilizations/background_6.png";
import decor6 from "../../styles/img/civilizations/decor_6.png";
import background7 from "../../styles/img/civilizations/background_7.png";
import decor7 from "../../styles/img/civilizations/decor_7.png";

import border from "../../styles/img/border_line.png";
import * as styles from "./index.module.scss";
import SlickSlider from "../secondBlock/slider";
import CivilizationsContent from "./content";

const pageData = [
  {
    id: 1,
    description: `In the future, our galaxy is a very different place. Where humans once
    believed they were the only form of intelligent life, new
    civilizations were discovered, new lifeforms forged. Co-existence was
    never easy, battles raged. But the war took its toll. The beings grew
    tired and peace was sought. Combat was as ingrained as conflict, so a
    substitute was needed. A metaphor for battle, an outlet for rage. Then
    one cold and bitter morning, a council was held. A glimmer of hope
    shon from the gathering of the highest powers. The proposal passed,
    war was over. In its place, the greatest tournament of hand to hand
    combat ever known.`,
    backgroung: background1,
    decor: decor1,
  },
  {
    id: 3,
    description: `In the future, our galaxy is a very different place. Where humans once
    believed they were the only form of intelligent life, new
    civilizations were discovered, new lifeforms forged. Co-existence was
    never easy, battles raged. But the war took its toll. The beings grew
    tired and peace was sought. Combat was as ingrained as conflict, so a
    substitute was needed. A metaphor for battle, an outlet for rage. Then
    one cold and bitter morning, a council was held. A glimmer of hope
    shon from the gathering of the highest powers. The proposal passed,
    war was over. In its place, the greatest tournament of hand to hand
    combat ever known.`,
    backgroung: background2,
    decor: decor2,
  },
  {
    id: 3,
    description: `In the future, our galaxy is a very different place. Where humans once
    believed they were the only form of intelligent life, new
    civilizations were discovered, new lifeforms forged. Co-existence was
    never easy, battles raged. But the war took its toll. The beings grew
    tired and peace was sought. Combat was as ingrained as conflict, so a
    substitute was needed. A metaphor for battle, an outlet for rage. Then
    one cold and bitter morning, a council was held. A glimmer of hope
    shon from the gathering of the highest powers. The proposal passed,
    war was over. In its place, the greatest tournament of hand to hand
    combat ever known.`,
    backgroung: background3,
    decor: decor3,
  },
  {
    id: 4,
    description: `In the future, our galaxy is a very different place. Where humans once
    believed they were the only form of intelligent life, new
    civilizations were discovered, new lifeforms forged. Co-existence was
    never easy, battles raged. But the war took its toll. The beings grew
    tired and peace was sought. Combat was as ingrained as conflict, so a
    substitute was needed. A metaphor for battle, an outlet for rage. Then
    one cold and bitter morning, a council was held. A glimmer of hope
    shon from the gathering of the highest powers. The proposal passed,
    war was over. In its place, the greatest tournament of hand to hand
    combat ever known.`,
    backgroung: background4,
    decor: decor4,
  },
  {
    id: 5,
    description: `In the future, our galaxy is a very different place. Where humans once
    believed they were the only form of intelligent life, new
    civilizations were discovered, new lifeforms forged. Co-existence was
    never easy, battles raged. But the war took its toll. The beings grew
    tired and peace was sought. Combat was as ingrained as conflict, so a
    substitute was needed. A metaphor for battle, an outlet for rage. Then
    one cold and bitter morning, a council was held. A glimmer of hope
    shon from the gathering of the highest powers. The proposal passed,
    war was over. In its place, the greatest tournament of hand to hand
    combat ever known.`,
    backgroung: background5,
    decor: decor5,
  },
  {
    id: 6,
    description: `In the future, our galaxy is a very different place. Where humans once
    believed they were the only form of intelligent life, new
    civilizations were discovered, new lifeforms forged. Co-existence was
    never easy, battles raged. But the war took its toll. The beings grew
    tired and peace was sought. Combat was as ingrained as conflict, so a
    substitute was needed. A metaphor for battle, an outlet for rage. Then
    one cold and bitter morning, a council was held. A glimmer of hope
    shon from the gathering of the highest powers. The proposal passed,
    war was over. In its place, the greatest tournament of hand to hand
    combat ever known.`,
    backgroung: background6,
    decor: decor6,
  },
  {
    id: 7,
    description: `In the future, our galaxy is a very different place. Where humans once
    believed they were the only form of intelligent life, new
    civilizations were discovered, new lifeforms forged. Co-existence was
    never easy, battles raged. But the war took its toll. The beings grew
    tired and peace was sought. Combat was as ingrained as conflict, so a
    substitute was needed. A metaphor for battle, an outlet for rage. Then
    one cold and bitter morning, a council was held. A glimmer of hope
    shon from the gathering of the highest powers. The proposal passed,
    war was over. In its place, the greatest tournament of hand to hand
    combat ever known.`,
    backgroung: background7,
    decor: decor7,
  },
];

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
      <SlickSlider changeStep={handlechangeStep} />
      <CivilizationsContent data={pageData[selectedStep - 1]} />
    </div>
  );
};

export default CivilizationsMain;
