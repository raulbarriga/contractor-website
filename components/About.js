import React, { useState, useEffect } from "react";
import {
  BrowserView,
  isMobile
} from "react-device-detect";

// import AboutImage from "../public/images/AboutImage.jpg";

const About = () => {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  return (
    <section id="about" className="about">
      <div className="about-details">
        <h2>About Us</h2>
        <p>
          For more than 21 years, JB & B Construction, Inc. has been the leading
          construction company in all of California. Throughout the course of
          the years, we have devoted ourselves towards delivering superior and
          excellent quality construction to both residential and commercial
          properties in California.
        </p>
        <p>
          We have achieved success over the past years due to the effort we put
          into every project, our professionalism, and our diligence with the
          tasks at hand. We treat every property that we work on with respect
          and with our utmost attention. We strive to take every construction
          project and complete it to perfection.
        </p>
        <p>
          Here at JB & B Construction, Inc. we are devoted towards delivering
          excellent services like kitchen and bathroom remodeling, interior and
          exterior painting, drywall, apartment and house renovations, new
          constructions, plumbing, electricity, and so much more! Talk to one of
          our representatives today to see how we can be of assistance to you
          and obtain your free estimate.
        </p>
      </div>
      {mobile ? (
        <div className="about-img" alt="about image"></div>
      ) : (
        <BrowserView>
          <div
            style={{
              backgroundAttachment: "fixed",
            }}
            className="about-img"
            alt="about image"
          ></div>
        </BrowserView>
      )}
    </section>
  );
};

export default About;
