import React from "react";
import leftBack from "../../../styles/img/leftCard.png";
import * as styles from "./index.module.scss";
import { socialButton } from "../../buttons";
import useWindowSize from '../../../utils/useWindowSize';

import teammate1 from "../../../styles/img/teammate1.png";
import teammate2 from "../../../styles/img/teammate2.png";
import teammate3 from "../../../styles/img/teammate3.png";
import teammate4 from "../../../styles/img/teammate4.png";

import twitter from "../../../styles/img/twitter.inline.svg";
import instagram from "../../../styles/img/instagram.inline.svg";
import website from "../../../styles/img/website.inline.svg";

const team = [
  { 
    name: 'GFL Arena Staff',
    text: 'Every great crypto project needs an even greater community. Our socials and community team are a mix of marketers, crypto OG\'s and hardcore MMA fans. All dedicated to building an incredible community and spreading the word of the Galactic Fight League.',
    image: teammate1,
    links: [],
  },
  {
    name: 'TH3M',
    text: 'Drawn together from four corners of the planet, TH3M are a blockchain-centric digital agency like no other. Their rap sheet lists many cutting edge projects in the crypto and web 2.0 worlds.',
    image: teammate2,
    links: [
      {
        url: 'TH3M.com',
        icon: website,
      },
      {
        url: 'https://www.instagram.com/th3msocial/',
        icon: instagram,
      },
      {
        url: 'https://twitter.com/TH3Msocial',
        icon: twitter,
      },
    ],
  },
  {
    name: '15000v',
    text: '15000v are multi-award winning dynamic team of developers, creatives and marketers. The 15000v agency is trusted by some of the world\'s largest brands including Under Armour, Sony, Bentley, The Royal Mint and many top projects in the crypto space.',
    image: teammate3,
    links: [
      {
        url: 'https://15000v.com',
        icon: website,
      },
      {
        url: 'https://twitter.com/15000vCreative',
        icon: twitter,
      },
      {
        url: 'https://www.instagram.com/15000vcreative',
        icon: instagram,
      },
    ],
  },
  {
    name: 'Argentics',
    text: 'Argentics are a top class end-to-end game design and development agency creating incredible games for multiple platforms and industries across the globe. Argentics have completed projects for brands like Audi, Nike, Volvo, Kernel and Bacardi. They have a number of AAA games under their belt and are highly experienced in designing and developing blockchain games. They are now working with us to build the best Mixed Martial Arts based P2E game the world has ever seen.',
    image: teammate4,
    links: [
      {
        url: 'https://www.argentics.io/',
        icon: website,
      },
    ],
  },
];

const itemBlock = (title, description, image, links, isEven) => {
  const isMobileWidth = window.innerWidth <= 480;

  return (
    <div
      key={title}
      data-aos={isEven ? "flip-left" : "flip-right"}
      className={`${isEven ? styles.rightContainer : styles.leftContainer} flex-center`}
    >
      <div className={styles.cardContainer}>
        <img src={leftBack} className={`${styles.cardContainerBg} ${isEven ? styles.flipped : ''}`} alt="back" />
        <h5 className={styles.cardHeader} style={{ paddingLeft: isEven ? (isMobileWidth ? 30 : 45) : 0, paddingRight: isEven ? 0 : (isMobileWidth ? 30 : 45) }}>
          {title}
        </h5>
        <div className={styles.cardImageWrap}>
          <img src={image} className={styles.cardImage} alt={title} />
        </div>
        <div className={styles.socialButtonsWrap}>
          {links.length > 0 && links.map(link => {
            return (
              socialButton(link.url, link.icon)
            );
          })}
        </div>
      </div>
      <p data-aos="fade-up" className={`description ${styles.cardText}`}>{description}</p>
    </div>
  );
};

const Team = () => {
  const ws = useWindowSize();
  return (
    <section className={styles.teamSection}>
      <div className={`container-width ${styles.teamSectionContainer}`}>
        <h2 data-aos="fade-up" className={`title ${styles.teamSectionTitle}`}>
          Our Team
        </h2>
        <p data-aos-delay="66" data-aos="fade-up" className={`description ${styles.teamSectionSubtitle}`}>
          The Galactic Fight League is formed of some of the most creative and experienced minds in the crypto-sphere. The multiple agencies with prior, proven work history togher have united with the GFL to produce a project like no other. 
          <br/><br/>
          Their rap sheet of Web 2.0 &amp; 3.0 projects would impress any creative agency and their joint love for MMA has brought them together to make one of the most exciting NFT projects, to be released this year. 
        </p>
        {team.map((t, i) => {
          const isEven = i % 2 > 0 && ws.width > 1200;
          return (
            itemBlock(t.name, t.text, t.image, t.links, isEven)
          );
        })}
      </div>
    </section>
  );
};

export default Team;
