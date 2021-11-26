import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.scss";
import stripeImg from "../../styles/img/stripe.png";
import button_rectangle_icon from "../../styles/img/button_rectangle.png";
import button_rectangle_hover_icon from "../../styles/img/button_rectangle_hover.png";

export const mainButton = (to) => {
  return (
    <Link to={to} className={styles.mainButton}>
      <div className={styles.mainButtonStripe}>
        <img src={stripeImg} alt="stripeImg" />
      </div>
      <div className={styles.mainButtonContent}>
        <img className={styles.rectangle} src={button_rectangle_icon} alt="button_rectangle_icon" />
        <img
          src={button_rectangle_hover_icon}
          alt="button_rectangle_hover_icon"
          className={styles.rectangleHover}
        />
        <span>Connect Wallet</span>
      </div>
    </Link>
  );
};
