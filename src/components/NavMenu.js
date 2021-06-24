import React from "react";
import { motion } from "framer-motion";

const NavMenu = ({ openNavMenu, closeNavMenu, setOpen }) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{ duration: 0.35 }}
    >
      <li onClick={() => {
        openNavMenu && closeNavMenu();
        setOpen(false);
      }}>
        <a href="#home">
          <p>Home</p>
        </a>
      </li>
      <li onClick={() => {
        openNavMenu && closeNavMenu();
        setOpen(false);
      }}>
        <a href="#about">
          <p>About</p>
        </a>
      </li>
      <li onClick={() => {
        openNavMenu && closeNavMenu();
        setOpen(false);
        }}>
        <a href="#services">
          <p>Services</p>
        </a>
      </li>
      <li onClick={() => {
        openNavMenu && closeNavMenu();
        setOpen(false);
        }}>
        <a href="#gallery">
          <p>Gallery</p>
        </a>
      </li>
      <li onClick={() => {
        openNavMenu && closeNavMenu();
        setOpen(false);
        }}>
        <a href="#testimonials">
          <p>Testimonials</p>
        </a>
      </li>
      <li onClick={() => {
        openNavMenu && closeNavMenu();
        setOpen(false);
        }}>
        <a href="#form-section">
          <p>Request a Quote</p>
        </a>
      </li>
    </motion.ul>
  );
};

export default NavMenu;