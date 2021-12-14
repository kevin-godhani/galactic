import React from "react";
import { Link } from "gatsby";
// import * as styles from "./index.module.scss";
import stripeImg from "../../styles/img/stripe.png";
// import stripeImgPurple from "../../styles/img/stripe-purple.png";
import button_rectangle_icon from "../../styles/img/button_rectangle.png";
// import button_rectangle_icon_purple from "../../styles/img/button_rectangle-purple.png";
import button_rectangle_hover_icon from "../../styles/img/button_rectangle_hover.png";
import ButtonBg from "../../styles/img/button-bg.inline.svg";
import "./index.scss";

export const mainButton = (to, title, isDouble, isPurple) => {
  return (
    <Link to={to} className={`mainButton ${isDouble ? 'doubleStripe' : ''}`}>
      {isDouble && <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>}
      <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>
      <div className={'mainButtonContent'}>
        <ButtonBg className={`button-bg ${isPurple ? 'purple' : ''}`} />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export const doubleStripeButton = (to, title, callback) => {
  return (
    <Link to={to} onClick={() => callback && callback()} className={'mainButton'}>
      <div className={'mainDoubleButtonStripe'}>
        <img src={stripeImg} alt="stripeImg" />
        <img src={stripeImg} alt="stripeImg" />
      </div>
      <div className={'mainButtonContent'}>
        <img
          className={'rectangle'}
          src={button_rectangle_icon}
          alt="button_rectangle_icon"
        />
        <img
          src={button_rectangle_hover_icon}
          alt="button_rectangle_hover_icon"
          className={'rectangleHover'}
        />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export const buttonWithoutLink = (title, callback, isDouble, isPurple) => {
  return (
    <div onClick={() => callback && callback()} className={`mainButton ${isDouble ? 'doubleStripe' : ''}`}>
      {isDouble && <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>}
      <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>
      <div className={'mainButtonContent'}>
        <ButtonBg className={`button-bg ${isPurple ? 'purple' : ''}`} />
        <span>{title}</span>
      </div>
    </div>
  );
};

export const socialButtons = (to) => {
  return (
    <div className={'social'}>
      <Link to={to} className={'socialWrapper'}>
        <div>
          <img
            src="https://www.galacticfightleague.com/images/dist/twitter_hover.svg"
            alt="twitter"
          />
        </div>
      </Link>
      <Link to={to} className={'socialWrapper'}>
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
