import React, { useContext, useState } from "react";
import * as styles from "./index.module.scss";
import bg1 from "../../styles/img/menu-bg1.png";
import bg2 from "../../styles/img/menu-bg2.png";
import bgFighter1 from "../../styles/img/menu-fighter1.png";
import bgFighter2 from "../../styles/img/menu-fighter2.png";
import { twitter, instagram, twitterLink, instagramLink } from "../../constants";
import { SocialButton } from '../buttons';
import Context from "../../context";
import { navigate } from "gatsby";

const bgs = [bg1, bg2];
const fighters = [bgFighter1, bgFighter2];

const Menu = () => {
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(0);
  const { showCurtain } = useContext(Context);

  const handleCloseMenu = async (route) => {
    document.getElementById("mobile-menu").classList.remove("menu-open");
    document.body.classList.remove("scroll-lock");
    document.documentElement.classList.remove("scroll-lock");

    if (typeof window !== "undefined" && window.location.pathname !== route) {
      await showCurtain();
      navigate(route);
    }
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
      <div
        data-index={0}
        onClick={() => handleCloseMenu('/')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyPress={null}
        role={'button'}
        tabIndex={0}
      >
        <span>01</span>
        <p>Main Page</p>
      </div>
      <div
        data-index={1}
        onClick={() => handleCloseMenu('/civilisations')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyPress={null}
        role={'button'}
        tabIndex={0}
      >
        <span>02</span>
        <p>civilisations</p>
      </div>
      <img src={fighters[activeMenuItemIndex]} className={styles.decoration} alt="decor" />

      <div className="sm-buttons mobile-only menu">
        <SocialButton url={twitterLink} Icon={twitter} />
        <SocialButton url={instagramLink} Icon={instagram} />
      </div>
    </div>
  );
};

export default Menu;
