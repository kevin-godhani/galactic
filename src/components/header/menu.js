import React from "react";
import { Link } from "gatsby";
import decor from "../../styles/img/menu_decor.png";
import * as styles from "./index.module.scss";

const Menu = () => {

  const handleCloseMenu = () => {
    document.getElementById("mobile-menu").classList.remove("menu-open");
  };

  return (
    <section id="mobile-menu" className={styles.menuWrapper}>
      <Link onClick={handleCloseMenu} to="/">
        <span>01</span>
        <p>Main Page</p>
      </Link>
      <Link onClick={handleCloseMenu} to="/civilizations">
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
