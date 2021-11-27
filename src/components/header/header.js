import React from "react";
import logo from "../../styles/img/logo.png";
import * as styles from "./index.module.scss";
import { mainButton, socialButtons } from "../buttons";

const Header = () => (
  <header className={styles.wrapper}>
    <img src={logo} alt="logo" />
    <div></div>
    <div className={styles.buttonsBlock}>
      {mainButton("", "Join Discord")}
      {socialButtons("")}
    </div>
  </header>
);

export default Header;
