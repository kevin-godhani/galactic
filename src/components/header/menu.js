import React, { useState } from "react";
import { Link } from "gatsby";
import decor from "../../styles/img/menu_decor.png";
import * as styles from "./index.module.scss";

const Menu = () => {
  return (
    <section id="mobile-menu" className={styles.menuWrapper}>
      <Link to="">
        <span>01</span>
        <p>Main Page</p>
      </Link>
      <Link to="/civilizations">
        <span>02</span>
        <p>civilisations</p>
      </Link>
      <div className={styles.decoration}>
        <img src={decor} alt="decor" />
      </div>
    </section>
  );
};

export default Menu;
