import React from "react";
import leftBack from "../../../styles/img/leftCard.png";
import * as styles from "./index.module.scss";
import { SocialButton } from "../../buttons";
import useWindowSize from "../../../utils/useWindowSize";
import { team } from "../../../constants";
import ImageRenderer from '../../imageRenderer';
import { useInView } from 'react-intersection-observer';

const ItemBlock = ({ title, description, image, links, isEven, idx }) => {
  const ws = useWindowSize();
  const isTabletWidth = ws.width <= 1200 && ws.width >= 481;
  const isMobileWidth = ws.width <= 480;

  return (
    <div
      key={title}
      data-aos={isEven ? "flip-left" : "flip-right"}
      className={`${isEven ? styles.rightContainer : styles.leftContainer}`}
    >
      <div className={styles.cardContainer}>
        <ImageRenderer
          width={481}
          height={568}
          url={leftBack}
          containerClassName={`${styles.cardContainerBg} ${
            isEven ? styles.flipped : ""
          }`}
          alt="teammate card background"
        />
        <h5
          className={`title4 ${styles.cardHeader}`}
          style={{
            paddingLeft: isEven ? (isMobileWidth ? 30 : 45) : 0,
            paddingRight: isEven ? 0 : isMobileWidth ? 30 : 45,
          }}
        >
          {title}
        </h5>
        <div className={styles.cardImageWrap}>
          <ImageRenderer url={image} containerClassName={styles.cardImage} alt={title} />
        </div>
        <div className={styles.socialButtonsWrap}>
          {links.length > 0 && links.map((link, i) => {
            return (
              <SocialButton key={i} url={link.url} Icon={link.icon} size={isTabletWidth  ? 58 : 40} />
            );
          })}
        </div>
      </div>
      <p
        data-aos="fade-up"
        className={`description ${styles.cardText}`}
      >
        {description}
      </p>
    </div>
  );
};

const Team = () => {
  const ws = useWindowSize();
  const isDesktopWidth = ws.width > 1200;
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section ref={ref} className={styles.teamSection} style={{ visibility: inView ? 'visible' : 'hidden' }}>
      <div className={`container-width ${styles.teamSectionContainer}`}>
        <h2 data-aos="fade-up" className={`title ${styles.teamSectionTitle}`}>
          Our Team
        </h2>
        <p
          data-aos-delay="66"
          data-aos="fade-up"
          className={`description ${styles.teamSectionSubtitle}`}
        >
          The Galactic Fight League is formed of some of the most creative and
          experienced minds in the crypto-sphere. The multiple agencies with
          prior, proven work history togher have united with the GFL to produce
          a project like no other.
          <br />
          <br />
          Their rap sheet of Web 2.0 &amp; 3.0 projects would impress any
          creative agency and their joint love for MMA has brought them together
          to make one of the most exciting NFT projects, to be released this
          year.
        </p>
        {team.map((t, i) => {
          const isEven = i % 2 > 0 && isDesktopWidth;
          return (
            <ItemBlock
              key={i}
              title={t.name}
              description={t.text}
              image={t.image}
              links={t.links}
              isEven={isEven}
              idx={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Team;
