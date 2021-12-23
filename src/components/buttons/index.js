import React from "react";
import { Link } from "gatsby";
import stripeImg from "../../styles/img/stripe.png";
import button_rectangle_icon from "../../styles/img/button_rectangle.png";
import button_rectangle_hover_icon from "../../styles/img/button_rectangle_hover.png";
import ButtonBg from "../../styles/img/button-bg.inline.svg";
import ButtonBgDouble from "../../styles/img/button-bg-double.inline.svg";
import "./index.scss";

export const mainButton = (to, title, isDouble, isPurple, small, textContainerClassName) => {
  return (
    <Link to={to} className={`mainButton ${small ? 'small' : ''} ${isDouble ? 'doubleStripe' : ''}`}>
      {isDouble && <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>}
      <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>
      <div className={`mainButtonContent ${textContainerClassName ? textContainerClassName : ''}`}>
        {isDouble ? (
          <ButtonBgDouble className={`button-bg ${isPurple ? 'purple' : ''}`} />
        ) : (
          <ButtonBg className={`button-bg ${isPurple ? 'purple' : ''}`} />
        )}
        <span>{title}</span>
      </div>
    </Link>
  );
};

export const MainButtonExternal = ({url, title, isDouble, isPurple, small}) => {
  return (
    <a href={url} target='_blank' className={`mainButton ${small ? 'small' : ''} ${isDouble ? 'doubleStripe' : ''}`} rel="nofollow noreferrer noopener">
      {isDouble && <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>}
      <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>
      <div className={'mainButtonContent'}>
        {isDouble ? (
          <ButtonBgDouble className={`button-bg ${isPurple ? 'purple' : ''}`} />
        ) : (
          <ButtonBg className={`button-bg ${isPurple ? 'purple' : ''}`} />
        )}
        <span className="button-main-text">{title}</span>
      </div>
    </a>
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
        {isDouble ? (
          <ButtonBgDouble className={`button-bg ${isPurple ? 'purple' : ''}`} />
        ) : (
          <ButtonBg className={`button-bg ${isPurple ? 'purple' : ''}`} />
        )}
        <span>{title}</span>
      </div>
    </div>
  );
};

export const SocialButton = ({url, Icon, size}) => {
  return (
    <a href={url} target='_blank' rel="nofollow noreferrer noopener" className={'sm-button'} style={{ width: size }}>
      <Icon/>
    </a>
  );
};
