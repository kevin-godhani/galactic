import React from "react";
import cardLabelBg from "../../../styles/img/roadmap-label-bg.svg";
import cardLabelBgBig from "../../../styles/img/roadmap-label-bg-big.svg";
import cardBg from "../../../styles/img/roadmap-card-bg.svg";
import cardBgTablet from "../../../styles/img/roadmap-card-bg-tablet.svg";
import cardBgMobile from "../../../styles/img/roadmap-card-bg-mobile.svg";
import decoration from "../../../styles/img/decor.png";

import * as styles from "./index.module.scss";

const RoadmapItem = ({ data, isEven }) => {
  const { title, description, label, labelBig } = data;
  const ww = window.innerWidth;
  const isTabletWidth = ww <= 1200 && ww > 480;
  const isMobileWidth = ww <= 480;

  return (
    <div className={styles.card} data-aos="zoom-in">
      {!isTabletWidth && !isMobileWidth && <img src={cardBg} className={styles.cardBg} alt="background" />}
      {isTabletWidth && <img src={cardBgTablet} className={styles.cardBg} alt="background" />}
      {isMobileWidth && <img src={cardBgMobile} className={styles.cardBg} alt="background" />}
      {label && (
        <div className={`${styles.cardLabel} ${isEven ? styles.cardLabelEven : ''} ${labelBig ? styles.cardLabelBig : ''}`}>
          <img
            className={`${styles.cardLabelImage} ${isEven ? styles.cardLabelImageFlipped : ''}`}
            src={labelBig ? cardLabelBgBig : cardLabelBg}
            alt="decor"
          />
          <span className={styles.cardLabelText}>{data.label}</span>
        </div>
      )}
      <h5 className={styles.cardTitle}>{title}</h5>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const mock = [
  {
    title: "Partnerships and PR",
    description: "Leading up to mint day (and well beyond) we will continue to announce partnerships with real-world personalities, brands and agencies, as well as some of the most prominent fighters in the mixed martial arts scene.",
    label: 'Pre-Phase',
    labelBig: true,
  },
  {
    title: "Mint date: 13/01/2022",
    description: "Come mint day we will be releasing 9999 fighters into the wild. Each one will be unique with billions of possible combinations. The mint will go live first to anyone who has managed to get a spot on the Whitelist. They will have half an hour before the mint is opened to the public.",
    label: '01',
  },
  {
    title: "Game development",
    description: "Post-mint. This is where the work really starts for us as we’ll be working very closely with our game developers over the following months to bring our strategy based fight simulation game to life, where your NFTs will of course hold utility.",
    label: '02',
  },
  {
    title: "My fighters",
    description: "A new section on our website will allow users to connect their Phantom wallet to bring up their NFT’s and fighter roster inside the Galactic Fight League.",
    label: '03',
  },
  {
    title: "GFL comic (airdrop)",
    description: "We will, at some point down the line, be taking a snapshot and airdropping rewards to all holders who have a fighter in their wallet and are unlisted on any marketplace. These rewards will be in the form of collectible comic book cards featuring your favourite fighters.",
    label: '04',
  },
  {
    title: "New elite fighters",
    description: "Additional ‘Elite Class’ fighters enter the GFL. The Elite Class is a mix of the baddest fighters from across the galaxy. They will all be 1/1s and therefore extremely rare, holding enhanced utility within the game. The only way to get your hands on these will be through giveaways, competitions or ELITE community contribution.",
    label: '05',
  },
  {
    title: "Earth icons",
    description: "A collection of GFL tribute characters for some of Earth's most prominent sports stars and celebrities. These PFP fighters created for our VIP’s will help bring new eyes to the GFL allowing us to leverage their audiences to further build a thriving and diverse community.",
    label: '06',
  },
  {
    title: "GFL fightcast",
    description: "Our very own podcast (cast hosted by none other than the voice of the GFL Joe Parisi) where we will be talking to some of the biggest names in the fight / martial arts world and beyond. We have some very special guests already lined up!",
    label: '07',
  },
  {
    title: "Beta game access",
    description: "The final phase will of course be the release of our highly anticipated game. You can expect this sometime in mid-late 2022. However, there will be beta access for token holders where they will be able to test our game with reduced functionality in order to hone their skills and prepare for the full game.",
    label: 'Final Phase',
    labelBig: true,
  },
  {
    title: "Let’s fight!",
    description: "FIGHT! Pending a successful beta testing phase, we will launch the full game for the world to see. Think big. Expect marketing, PR and coverage both inside and outside of the cryptosphere.",
  },
  {
    title: "Real world MMA events",
    description: "Looking even further on past the release of the game we will be hosting real world GFL events featuring some of the best athletes in MMA. There is not too much we can giveaway regarding this yet, but just know that it is going to create waves throughout the whole crypto space and beyond.",
  },
];

const Roadmap = () => (
  <section className={`${styles.roadmapSection} container-width`}>
    <img src={decoration} className={styles.decoration} alt="decoration" />
    <h2 data-aos="fade-up" className={`title ${styles.roadmapTitle}`}>
      Roadmap
    </h2>
    {mock.map((el, i) => {
      const isEven = i % 2 > 0;
      return <RoadmapItem key={i} data={el} isEven={isEven} />
    }
    )}
  </section>
);

export default Roadmap;
