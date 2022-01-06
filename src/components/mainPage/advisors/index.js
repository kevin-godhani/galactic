import React from "react";
import leftBack from "../../../styles/img/leftCard.png";
import * as styles from "./index.module.scss";
import { SocialButton } from "../../buttons";
import useWindowSize from "../../../utils/useWindowSize";
import { advisors } from "../../../constants";
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
          url={leftBack}
          containerClassName={`${styles.cardContainerBg} ${
            isEven ? styles.flipped : ""
          }`}
          alt="teammate card background"
          width={481}
          height={568}
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

const Advisors = () => {
  const ws = useWindowSize();
  const isDesktopWidth = ws.width > 1200;
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section ref={ref} className={styles.advisorsSection} style={{ visibility: inView ? 'visible' : 'hidden' }}>
      <div className={`container-width ${styles.advisorsSectionContainer}`}>
        <h2
          data-aos="fade-up"
          className={`title ${styles.advisorsSectionTitle}`}
        >
          Our Advisors
        </h2>
        {advisors.map((item, i) => {
          const isEven = i % 2 > 0 && isDesktopWidth;
          return (
            <ItemBlock
              idx={i}
              key={i}
              title={item.name}
              description={item.text}
              image={item.image}
              links={item.links}
              isEven={isEven}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Advisors;
