import React, { useState } from "react";
import logo from "../../styles/img/logo.png";
import tabletLogo from "../../styles/img/tablet_logo.png";
import menu from "../../styles/img/menu_icon.png";
import * as styles from "./index.module.scss";
import { mainButton, socialButtons } from "../buttons";

const Header = () => {
  const [isHederFixed, setIsHederFixed] = useState(false);

  const handleCloseMenu = () => {
    document.getElementById("mobile-menu").classList.remove("menu-open");
    setIsHederFixed(false);
  };

  const handleOpenMenu = () => {
    document.getElementById("mobile-menu").className += " menu-open";
    setIsHederFixed(true);
  };

  return (
    <header
      className={styles.wrapper}
      style={isHederFixed ? { position: "fixed" } : { position: "absolute" }}
    >
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.menu}>
        <img className={styles.tabletLogo} src={tabletLogo} alt="tabletLogo" />
        {isHederFixed ? (
          <img onClick={handleCloseMenu} src={menu} alt="menu" />
        ) : (
          <img onClick={handleOpenMenu} src={menu} alt="menu" />
        )}
      </div>
      <div className={styles.buttonsBlock}>
        {mainButton("", "Join Discord")}
        {socialButtons("")}
      </div>
    </header>
  );
};

export default Header;
