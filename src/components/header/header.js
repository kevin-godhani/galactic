import React from "react";
import { Link } from "gatsby";
import logo from "../../styles/img/logo.png";
import * as styles from "./index.module.scss";
import { mainButton } from "../buttons";

const Header = ({ siteTitle }) => (
  <header className={styles.wrapper}>
    <img src={logo} alt="logo" />
    <div></div>
    <div className={styles.buttonsBlock}>{mainButton("")}</div>
  </header>
);

export default Header;
