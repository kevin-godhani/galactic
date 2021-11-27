import React from "react";
import { Link } from "gatsby";
import logo from "../../styles/img/logo.png";
import border from "../../styles/img/border_line.png";
import * as styles from "./index.module.scss";
import { mainButton, socialButtons } from "../buttons";

const Footer = ({ siteTitle }) => (
  <footer className={styles.footer}>
    <img src={border} alt="border" />
    <section>
      <div className={styles.leftBlock}>
        <img src={logo} alt="logo" />
        <span>
          Copyright © Galactic Fight League
          <br />
          All rights reserved
        </span>
      </div>
      <div className={styles.rightBlock}>
        <div>
          {mainButton("", "Join Discord")}
          {socialButtons("")}
        </div>
        <div>
          <Link to="">Main Page</Link>
          <Link to="">Civilisations</Link>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
