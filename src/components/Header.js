import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { AnimatePresence } from "framer-motion";
import { useLockBodyScroll } from "react-use";

import NavMenu from "./NavMenu";
import logo from "../assets/images/Logos/JB-and-B-Construction-logo.jpg";

const Header = ({ showNavBtn, viewportWidth }) => {
  // for the Hamburger-React icon component
  const [isOpen, setOpen] = useState(false)

  const [openNavMenu, setOpenNavMenu] = useState(false);

  // pass this to each link so that the menu will close when you click on a link
  const closeNavMenu = () => setOpenNavMenu(false);

  // to prevent vertical scroll when the hamburger nav menu is open
  useLockBodyScroll(openNavMenu);

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
        {viewportWidth >= 768 && <NavMenu openNavMenu={openNavMenu} setOpen={setOpen} closeNavMenu={closeNavMenu} />}
      </nav>
    </header>
  );
};

export default Header;
