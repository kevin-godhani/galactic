import React, { useState, useEffect, useCallback, useContext } from "react";
import { navigate } from "gatsby";
import logo from "../../styles/img/logo.svg";
import tabletLogo from "../../styles/img/tablet-logo.svg";
import menu from "../../styles/img/menu-icon.png";
import menuOpened from "../../styles/img/menu-icon-opened.png";
import * as styles from "./index.module.scss";
import { MainButtonExternal, SocialButton } from "../buttons";
import useWindowSize from "../../utils/useWindowSize";
import Context from "../../context";
import {
  instagram,
  twitter,
  twitterLink,
  instagramLink,
  discordLink,
} from "../../constants";

const Header = () => {
  const [y, setY] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const [isHederFixed, setIsHederFixed] = useState(false);
  const [headerClassName, setHeaderClassName] = useState("");
  const ws = useWindowSize();
  const { hideCurtain } = useContext(Context);

  const handleCloseMenu = () => {
    document.getElementById("mobile-menu").classList.remove("menu-open");
    document.body.classList.remove("scroll-lock");
    document.documentElement.classList.remove("scroll-lock");
    setIsHederFixed(false);
  };

  const handleOpenMenu = () => {
    document.getElementById("mobile-menu").className += " menu-open";
    document.body.classList.add("scroll-lock");
    document.documentElement.classList.add("scroll-lock");
    setIsHederFixed(true);
  };

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY || window.scrollY <= 45) {
        setHeaderClassName(" active-header");
      } else if (y < window.scrollY) {
        setHeaderClassName(" disabled-header");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => hideCurtain(), [hideCurtain]);

  const showSmallButton = ws.width <= 480;

  return (
    <header
      className={`${styles.wrapper} ${headerClassName}`}
      style={isHederFixed ? { position: "fixed" } : { position: "absolute" }}
    >
      <div className={styles.menu}>
        <div
          className={styles.tabletLogo}
          onClick={() => navigate('/')}
          onKeyPress={null}
          role={'button'}
          tabIndex={0}
        >
          <img src={tabletLogo} alt="tabletLogo" />
        </div>
        <div
          className={styles.menuIcon}
          onClick={isHederFixed ? handleCloseMenu : handleOpenMenu}
          onKeyPress={null}
          role={'button'}
          tabIndex={0}
        >
          <img src={isHederFixed ? menuOpened : menu} alt="menu" />
        </div>
      </div>
      <div
        onClick={() => navigate("/")}
        className={styles.logo}
        onKeyPress={null}
        role={'button'}
        tabIndex={0}
      >
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.buttonsBlock}>
        <MainButtonExternal
          url={discordLink}
          title={"Join Discord"}
          isDouble={false}
          isPurple={false}
          small={showSmallButton}
        />
        <div className="sm-buttons">
          <SocialButton url={twitterLink} Icon={twitter} size={40} />
          <SocialButton url={instagramLink} Icon={instagram} size={40} />
        </div>
      </div>
    </header>
  );
};

export default Header;
