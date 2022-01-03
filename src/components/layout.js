import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Menu from "./header/menu";
import Header from "./header/header";
import Footer from "./footer";
import Curtain from "./curtain";
import Context from "../context";
import gsap from "gsap";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const curtainRef = React.useRef(null);

  const showCurtain = React.useCallback(() => {
    if (!curtainRef?.current) {
      return;
    }

    return gsap.to(curtainRef.current, { duration: 0.6, scaleY: 1, ease: 'circ.inOut', onStart: () => {
      gsap.set(curtainRef.current, { transformOrigin: '50% 100%', scaleY: 0 });
    } })
  }, [curtainRef]);

  const hideCurtain = React.useCallback(() => {
    if (!curtainRef?.current) {
      return;
    }

    return gsap.to(
      curtainRef.current,
      {
        duration: 0.6,
        scaleY: 0,
        delay: 0.5,
        ease: 'circ.inOut',
        onStart: () => {
          gsap.set(curtainRef.current, { transformOrigin: '50% 0', scaleY: 1 });
        },
    })
  }, [curtainRef]);

  React.useEffect(() => {
    if (curtainRef.current) {
      gsap.set(curtainRef.current, { transformOrigin: '50% 100%', scaleY: 1 });
    }
  }, []);

  return (
    <Context.Provider value={{ showCurtain, hideCurtain }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <Curtain ref={curtainRef} />
        <main>{children}</main>
        <Footer />
      </div>
      <Menu />
    </Context.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
