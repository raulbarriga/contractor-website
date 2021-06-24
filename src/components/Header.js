import React, { useState, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { AnimatePresence } from "framer-motion";

import NavMenu from "./NavMenu";
import logo from "../assets/images/Logos/JB-and-B-Construction-logo.jpg";

// removed setShowNavBtn as part of moving state up to App.js
const Header = ({ showNavBtn, viewportWidth }) => {
  // for the Hamburger-React icon component
  const [isOpen, setOpen] = useState(false)
  // const [showNavBtn, setShowNavBtn] = useState(false);
  const [openNavMenu, setOpenNavMenu] = useState(false);
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // to check when the viewport has the mobile breakpoint and show the nav menu button
  // useEffect(() => {
  //   const handleWindowResize = () => setViewportWidth(window.innerWidth);
  //   window.addEventListener("resize", handleWindowResize);

  //   if (viewportWidth <= 767) {
  //     setShowNavBtn(true);
  //   } else {
  //     setShowNavBtn(false);
  //   }

  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, [viewportWidth]);

  // pass this to each link so that the menu will close when you click on a link
  const closeNavMenu = () => setOpenNavMenu(false);

  // const removePageScroll = () => {
    if(openNavMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  // }

  return (
    <header id="header">
      <a className="logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="title">
        <p>
          <span>
            <a href="/">JB &#38; B Construction, Inc.</a>
          </span>
        </p>
      </div>
      <hr className="horizontal-line" />
      <nav className="nav-menu">
        {showNavBtn && (
          <Hamburger toggled={isOpen} toggle={setOpen} onToggle={() => setOpenNavMenu(!openNavMenu)} />
        )}
        <AnimatePresence>
          {openNavMenu && (
            <NavMenu openNavMenu={openNavMenu} setOpen={setOpen} closeNavMenu={closeNavMenu} />
          )}
        </AnimatePresence>
        {viewportWidth >= 768 && <NavMenu />}
      </nav>
    </header>
  );
};

export default Header;
