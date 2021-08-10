import React from "react";
import { isMobile } from "react-device-detect";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-details">
        <h2>About Us</h2>
        {/* <p>Precision. Punctuality. Professionalism.</p>
        <p>
          J.B. & B. Construction serves as a leading General Contractor Company
          in the San Francisco area. We’re a team of fully-certified
          professionals who tackle everything from complex large projects to
          smaller scale jobs. Fueled by our commitment to excellence, we go the
          extra mile to make sure clients are completely satisfied with our
          work. Call us today to schedule a consultation.
        </p> */}
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
      <div
        className="parallax-img"
        alt="about"
        style={{ 
          backgroundAttachment: `${isMobile ? "scroll" : "fixed"}`,
          objectFit: `${isMobile ? "cover" : "fill"}`,
          // height: '100%',
          // width: '100%'
        }}
      ></div>
    </section>
  );
};

export default About;
