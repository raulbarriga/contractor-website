import React from "react";
import Carousel from "react-multi-carousel";

import { servicesData } from "./servicesData";
import { ReactComponent as LeftBtn } from "../assets/SliderArrows/leftArrow.svg";
import { ReactComponent as RightBtn } from "../assets/SliderArrows/rightArrow.svg";
import Card from "./Card";

const Services = () => {
  const LeftArrow = ({ onClick, ...rest }) => {
    const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
    return (
      <div className="btn left-btn">
        <LeftBtn onClick={() => onClick()} />
      </div>
    );
  };
  const RightArrow = ({ onClick, ...rest }) => {
    const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
    return (
      <div className="btn right-btn">
        <RightBtn onClick={() => onClick()} />
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 690 },
      items: 2,
    },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    // },
  };

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <p>A Lasting Impact</p>

      <div className="slider-container">
        <Carousel
          infinite
          arrows
          autoPlay={true}
          autoPlaySpeed={5000}
          responsive={responsive}
          customLeftArrow={<LeftArrow />}
          customRightArrow={<RightArrow />}
        >
          {servicesData.map((serviceCard) => {
            return (
              <div className="sevice-card-wrapper">
                <Card
                  key={serviceCard.key}
                  image={serviceCard.image}
                  title={serviceCard.title}
                  text={serviceCard.text}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
