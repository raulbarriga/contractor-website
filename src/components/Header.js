import React from "react";
import logo from "../images/JB-and-B-Construction-logo.jpg";

const Header = () => {
  return (
    <header>
      <a className="logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <div className="title">
        <p>
          <span>
            <a href="/">J. B. &#38; B. Construction</a>
          </span>
        </p>
      </div>
      {/* the horizontal line is created with a border-top */}
      <div className="horizontal-line"></div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#home">
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#about">
              <p>About</p>
            </a>
          </li>
          <li>
            <a href="#services">
              <p>Services</p>
            </a>
          </li>
          <li>
            <a href="#gallery">
              <p>Gallery</p>
            </a>
          </li>
          <li>
            <a href="#testimonials">
              <p>Testimonials</p>
            </a>
          </li>
          <li>
            <a href="#quote">
              <p>Request a Quote</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
