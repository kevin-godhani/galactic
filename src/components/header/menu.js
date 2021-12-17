import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.scss";
import bg1 from "../../styles/img/menu-bg1.png";
import bg2 from "../../styles/img/menu-bg2.png";
import bgFighter1 from "../../styles/img/menu-fighter1.png";
import bgFighter2 from "../../styles/img/menu-fighter2.png";
import { twitter, instagram, twitterLink, instagramLink } from "../../constants";
import { SocialButton } from '../buttons';

const bgs = [bg1, bg2];
const fighters = [bgFighter1, bgFighter2];

const Menu = () => {
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(0);

  const handleCloseMenu = () => {
    document.getElementById("mobile-menu").classList.remove("menu-open");
    document.body.classList.remove("scroll-lock");
    document.documentElement.classList.remove("scroll-lock");
  };

  const handleMouseEnter = (e) => {
    setActiveMenuItemIndex(+e.target?.dataset?.index || 0);
  }

  const handleMouseLeave = (e) => {
    setActiveMenuItemIndex(0);
  }

  return (
    <div id="mobile-menu" className={styles.menuWrapper}>
      <img src={bgs[activeMenuItemIndex]} className={styles.menuBg} alt="decor" />
      <Link
        to="/"
        data-index={0}
        onClick={handleCloseMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>01</span>
        <p>Main Page</p>
      </Link>
      <Link
        to="/civilizations"
        data-index={1}
        onClick={handleCloseMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>02</span>
        <p>civilisations</p>
      </Link>
      <img src={fighters[activeMenuItemIndex]} className={styles.decoration} alt="decor" />

      <div className="sm-buttons mobile-only menu">
        <SocialButton url={twitterLink} Icon={twitter} />
        <SocialButton url={instagramLink} Icon={instagram} />
      </div>
    </div>
  );
};

export default Menu;
