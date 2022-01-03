import React from "react";
import { Link } from "gatsby";
import stripeImg from "../../styles/img/stripe.png";
import button_rectangle_icon from "../../styles/img/button_rectangle.png";
import button_rectangle_hover_icon from "../../styles/img/button_rectangle_hover.png";
import ButtonBg from "../../styles/img/button-bg.inline.svg";
import ButtonBgDouble from "../../styles/img/button-bg-double.inline.svg";
import { sliderButtonBg, sliderButtonBgActive } from "../../constants";
import SliderArrow from "../icons/slider-arrow";
import "./index.scss";

export const MainButton = ({to, title, isDouble, isPurple, small, textContainerClassName, longTitle}) => {
  return (
    <Link
      to={to}
      className={`mainButton ${small ? 'small' : ''} ${isDouble ? 'doubleStripe' : ''}`}
      onKeyPress={null}
      role={'button'}
      tabIndex={0}
    >
      {isDouble && <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>}
      <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>
      <div className={`mainButtonContent ${textContainerClassName ? textContainerClassName : ''}`}>
        {longTitle ? (
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
    <a
      href={url}
      className={`mainButton ${small ? 'small' : ''} ${isDouble ? 'doubleStripe' : ''}`}
      target='_blank'
      rel="nofollow noreferrer noopener"
      onKeyPress={null}
      role={'button'}
      tabIndex={0}
    >
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
    <Link
      to={to}
      onClick={() => callback && callback()}
      className={'mainButton'}
      onKeyPress={null}
      role={'button'}
      tabIndex={0}
    >
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


export const ButtonWithoutLink = ({callback, title, isDouble, isPurple, small, textContainerClassName, longTitle}) => {
  return (
    <div
      onClick={() => callback && callback()}
      className={`mainButton ${small ? 'small' : ''} ${isDouble ? 'doubleStripe' : ''}`}
      onKeyPress={null}
      role={'button'}
      tabIndex={0}
    >
      {isDouble && <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>}
      <div className={`mainButtonStripe ${isPurple ? 'purple' : ''}`}></div>
      <div className={`mainButtonContent ${textContainerClassName ? textContainerClassName : ''}`}>
        {longTitle ? (
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
    <a
      href={url}
      className={'sm-button'}
      target='_blank'
      style={{ width: size }}
      rel="nofollow noreferrer noopener"
      onKeyPress={null}
      role={'button'}
      tabIndex={0}
    >
      <Icon/>
    </a>
  );
};

export const ButtonsBlock = ({
  onLeftButtonClick,
  onRightButtonClick,
  leftButtonTitle,
  rightButtonTitle,
  limitMin,
  limitMax,
  containerStyle,
  buttonStyle,
  textStyle
}) => {
  return (
    <div className={`slide-buttons-container ${containerStyle}`}>
      <div
        className={`slide-button ${buttonStyle}`}
        onClick={onLeftButtonClick}
        style={ !limitMin ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.6, pointerEvents: 'none' }}
        onKeyPress={null}
        role={'button'}
        tabIndex={0}
      >
        <div className={'slide-button-bg-wrap'}>
          <div className={'slide-button-bg'} style={{ background: !limitMin ? sliderButtonBgActive : sliderButtonBg }}></div>
        </div>
        <div className={'slide-button-border'}></div>
        <span className={`slide-button-text ${textStyle}`} style={!limitMin ? { color: "#010103" } : { color: "#EFDAA9" }}>
          {leftButtonTitle}
        </span>
      </div>
      <div
        className={`slide-button ${buttonStyle}`}
        onClick={onRightButtonClick}
        style={ !limitMax ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.6, pointerEvents: 'none' }}
        onKeyPress={null}
        role={'button'}
        tabIndex={0}
      >
        <div className={'slide-button-bg-wrap'}>
          <div className={'slide-button-bg'} style={{ background: !limitMax ? sliderButtonBgActive : sliderButtonBg }}></div>
        </div>
        <div className={'slide-button-border'}></div>
        <span className={`slide-button-text ${textStyle}`} style={!limitMax ? { color: "#010103" } : { color: "#EFDAA9" }}>
          {rightButtonTitle}
        </span>
      </div>
    </div>
  );
};

export const SliderArrows = ({
  onPrev,
  onNext,
  limitMin,
  limitMax,
  containerStyle,
  arrowStyle,
  leftArrowStyle,
  rightArrowStyle,
}) => {
  return (
    <div className={`slider-arrows-container ${containerStyle ? containerStyle : ''}`}>
      <div
        className={`slider-arrow prev ${arrowStyle ? arrowStyle : ''} ${leftArrowStyle ? leftArrowStyle : ''}`}
        onClick={onPrev}
        style={ !limitMin ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.6, pointerEvents: 'none' }}
        onKeyPress={null}
        role={'button'}
        tabIndex={0}
      >
        <SliderArrow />
      </div>
      <div
        className={`slider-arrow next ${arrowStyle ? arrowStyle : ''} ${rightArrowStyle ? rightArrowStyle : ''}`}
        onClick={onNext}
        style={ !limitMax ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.6, pointerEvents: 'none' }}
        onKeyPress={null}
        role={'button'}
        tabIndex={0}
      >
        <SliderArrow />
      </div>
    </div>
  );
};