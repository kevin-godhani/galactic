import React, { useContext } from "react";
import { navigate } from "gatsby";
import logo from "../../styles/img/logo.png";
import border from "../../styles/img/border_line.png";
import * as styles from "./index.module.scss";
import { MainButtonExternal, SocialButton } from "../buttons";
import {
  instagram,
  twitter,
  twitterLink,
  instagramLink,
  discordLink,
} from "../../constants";
import useWindowSize from "../../utils/useWindowSize";
import Context from "../../context";

const Footer = ({ siteTitle }) => {
  const ws = useWindowSize();
  const showSmallButton = ws.width <= 1200;
  const { showCurtain } = useContext(Context);

  const onLinkClick = async (route) => {
    if (typeof window !== "undefined" && window.location.pathname !== route) {
      await showCurtain();
      navigate(route);
    }
  };

  return (
    <footer className={styles.footer}>
      <img src={border} alt="border" />
      <div className={styles.footerContainer}>
        <div
          className={styles.footerLogo}
          onClick={() => navigate('/')}
          onKeyPress={null}
          role={'button'}
          tabIndex={0}
        >
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.footerSmBlock}>
          <MainButtonExternal
            url={discordLink}
            title={"Join Discord"}
            isDouble={false}
            isPurple={false}
            small={showSmallButton}
          />
          <div className="sm-buttons">
            <SocialButton url={twitterLink} Icon={twitter} />
            <SocialButton url={instagramLink} Icon={instagram} />
          </div>
        </div>
        <span className={styles.footerCopyRights}>
          Copyright © Galactic Fight League
          <br />
          All rights reserved
        </span>
        <div className={styles.footerLinks}>
          <span
            onClick={() => onLinkClick('/')}
            onKeyPress={null}
            role={'button'}
            tabIndex={0}
          >
            Main Page
          </span>
          <span
            onClick={() => onLinkClick('/civilisations')}
            onKeyPress={null}
            role={'button'}
            tabIndex={0}
          >
            Civilisations
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
