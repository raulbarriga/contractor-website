import React from "react";
import BBBLogo from "../assets/images/Logos/bbb-logo.png";
import footerLogo from "../assets/images/Logos/footer-logo.jpg";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="column column1">
            <div className="footer-sidebar">
              <div className="sidebar-theme">
                <img
                  src={footerLogo}
                  alt="Footer Logo"
                  className="img-responsive footer-logo"
                  scale="0"
                />
                <p className="footer-text">
                  For more than 21 years, JB & B Construction, Inc. has been the
                  leading construction company in all of California. Talk to one
                  of our representatives today to see how we can be of
                  assistance to you and obtain your free estimate.
                </p>
              </div>
            </div>
            <div className="footer-sidebar">
              <div className="sidebar-theme">
                <img
                  src={BBBLogo}
                  alt="BBB Logo"
                  className="img-responsive footer-logo"
                  scale="0"
                />
              </div>
            </div>
          </div>
          <div className="column column2">
            <div className="footer-sidebar">
              <h2 className="widget-title">Services</h2>
              <ul className="menu">
                <li className="menu-item">
                  <a href="#services">Kitchen and Bathroom Remodeling</a>
                </li>
                <li className="menu-item">
                  <a href="#services">Drywall</a>
                </li>
                <li className="menu-item">
                  <a href="#services">Interior and Exterior Painting</a>
                </li>
                <li className="menu-item">
                  <a href="#services">Apartment/ House Renovations</a>
                </li>
                <li className="menu-item">
                  <a href="#services">Driveway</a>
                </li>
                <li className="menu-item">
                  <a href="#services">...and more</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column column3">
            <div className="footer-sidebar">
              <h2 className="widget-title">Sitemap</h2>
              <ul className="menu">
                <li className="menu-item">
                  <a href="#home">Home</a>
                </li>
                <li className="menu-item">
                  <a href="#about">About</a>
                </li>
                <li className="menu-item">
                  <a href="#services">Services</a>
                </li>
                <li className="menu-item">
                  <a href="#gallery">Gallery</a>
                </li>
                <li className="menu-item">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="menu-item">
                  <a href="#form-section">Request a Quote</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="additional-footer">
          <div className="footer-sidebar">
            <p>
              ©2021 JB & B Construction, Inc. Proudly created by{" "}
              <a href="https://github.com/raulbarriga">Raul Barriga</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
