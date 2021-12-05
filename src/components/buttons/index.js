import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.scss";
import stripeImg from "../../styles/img/stripe.png";
import button_rectangle_icon from "../../styles/img/button_rectangle.png";
import button_rectangle_hover_icon from "../../styles/img/button_rectangle_hover.png";

export const mainButton = (to, title, isDouble) => {
  return (
    <Link to={to} className={styles.mainButton}>
      <div className={styles.mainButtonStripe}>
        {isDouble && <img src={stripeImg} alt="stripeImg" />}
        <img src={stripeImg} alt="stripeImg" />
      </div>
      <div className={styles.mainButtonContent}>
        <img
          className={styles.rectangle}
          src={button_rectangle_icon}
          alt="button_rectangle_icon"
        />
        <img
          src={button_rectangle_hover_icon}
          alt="button_rectangle_hover_icon"
          className={styles.rectangleHover}
        />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export const doubleStripeButton = (to, title, callback) => {
  return (
    <Link to={to} onClick={() => callback && callback()} className={styles.mainButton}>
      <div className={styles.mainDoubleButtonStripe}>
        <img src={stripeImg} alt="stripeImg" />
        <img src={stripeImg} alt="stripeImg" />
      </div>
      <div className={styles.mainButtonContent}>
        <img
          className={styles.rectangle}
          src={button_rectangle_icon}
          alt="button_rectangle_icon"
        />
        <img
          src={button_rectangle_hover_icon}
          alt="button_rectangle_hover_icon"
          className={styles.rectangleHover}
        />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export const buttonWithoutLink = (title, callback) => {
  return (
    <div onClick={() => callback && callback()} className={styles.mainButton}>
      <div className={styles.mainDoubleButtonStripe}>
        <img src={stripeImg} alt="stripeImg" />
        <img src={stripeImg} alt="stripeImg" />
      </div>
      <div className={styles.mainButtonContent}>
        <img
          className={styles.rectangle}
          src={button_rectangle_icon}
          alt="button_rectangle_icon"
        />
        <img
          src={button_rectangle_hover_icon}
          alt="button_rectangle_hover_icon"
          className={styles.rectangleHover}
        />
        <span>{title}</span>
      </div>
    </div>
  );
};

export const socialButtons = (to) => {
  return (
    <div className={styles.social}>
      <Link to={to} className={styles.socialWrapper}>
        <div>
          <img
            src="https://www.galacticfightleague.com/images/dist/twitter_hover.svg"
            alt="twitter"
          />
        </div>
      </Link>
      <Link to={to} className={styles.socialWrapper}>
        <div>
          <img
            src="https://www.galacticfightleague.com/images/dist/instagram_hover.svg"
            alt="instagram"
          />
        </div>
      </Link>
    </div>
  );
};
