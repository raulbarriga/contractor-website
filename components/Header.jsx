import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLockBodyScroll } from "react-use";
import Image from 'next/image';
import dynamic from 'next/dynamic';

import logo from "../public/images/Logos/JB-and-B-Construction-logo_bg-colored.jpg";

const NavMenu = dynamic(() => import('./NavMenu'));

const Header = ({ showNavBtn, viewportWidth }) => {
  // for the Hamburger-React icon component
  const [isOpen, setOpen] = useState(false)

  const [openNavMenu, setOpenNavMenu] = useState(false);

  // pass this to each link so that the menu will close when you click on a link
  const closeNavMenu = () => setOpenNavMenu(false);

  // server side rendering support for a node_modules package (has to be dynamically imported according the next.js docs)
  const Hamburger = dynamic(
    () => import("hamburger-react").then(mod => mod.Fade).catch(error => console.log(error)),
    { ssr: false }
  )

  // to prevent vertical scroll when the hamburger nav menu is open
  useLockBodyScroll(openNavMenu);

  return (
    <header id="header">
      <a className="logo" href="/">
        {/* <img src="/images/Logos/JB-and-B-Construction-logo.jpg" alt="logo" /> */}
        <Image 
        // placeholder="blur" 
        src={logo} 
        alt="logo" 
        />
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
          <Hamburger label="Show hamburger nav menu" toggled={isOpen} toggle={setOpen} onToggle={() => setOpenNavMenu(!openNavMenu)} />
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
