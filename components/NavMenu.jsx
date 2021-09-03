import React from "react";
import { motion } from "framer-motion";
// import dynamic from "next/dynamic";

function NavMenu({ openNavMenu, closeNavMenu, setOpen }) {
  // const motion = dynamic(
  //   () => {
  //    const { motion } = import("framer-motion");
  //    return motion;
  //  },
  //  { ssr: false }
  //  );
  //  console.log("motion: ", motion);
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.35 }}
    >
      <li
        onClick={() => {
          openNavMenu && closeNavMenu();
          setOpen(false);
        }}
      >
        <a href="#home">
          <p>Home</p>
        </a>
      </li>
      <li
        onClick={() => {
          openNavMenu && closeNavMenu();
          setOpen(false);
        }}
      >
        <a href="#about">
          <p>About</p>
        </a>
      </li>
      <li
        onClick={() => {
          openNavMenu && closeNavMenu();
          setOpen(false);
        }}
      >
        <a href="#services">
          <p>Services</p>
        </a>
      </li>
      <li
        onClick={() => {
          openNavMenu && closeNavMenu();
          setOpen(false);
        }}
      >
        <a href="#gallery">
          <p>Gallery</p>
        </a>
      </li>
      <li
        onClick={() => {
          openNavMenu && closeNavMenu();
          setOpen(false);
        }}
      >
        <a href="#testimonials">
          <p>Testimonials</p>
        </a>
      </li>
      <li
        onClick={() => {
          openNavMenu && closeNavMenu();
          setOpen(false);
        }}
      >
        <a href="#contactUs-section">
          <p>Request a Quote</p>
        </a>
      </li>
    </motion.ul>
  );
}

export default NavMenu;
