import React from "react";
import Slider from "react-slick";
import dynamic from 'next/dynamic';

import { servicesData } from "./data/servicesData";
import LeftBtn from "../public/svgs/leftArrow.svg";
import RightBtn from "../public/svgs/rightArrow.svg";

const Card = dynamic(() => import('./Card/Card'));

const Services = () => {
  const PrevButton = ({ className, style, onClick }) => {
    return (
      <div className="btn left-btn">
        <LeftBtn
          onClick={onClick}
          aria-label="Go to previous slide"
          className={["my-class-prev", className].join(" ")}
          style={{ ...style }}
        />
      </div>
    );
  };
  const NextButton = ({ className, style, onClick }) => {
    return (
      <div className="btn right-btn">
        <RightBtn
          onClick={onClick}
          className={["my-class-next", className].join(" ")}
          style={{ ...style }}
          aria-label="Go to next slide"
        />
      </div>
    );
  };

  const settings = {
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    dots: false, // wasn't working so I left it out (CSS is still in its file though)
    centerMode: true,
    centerPadding: "0px", // this makes centering work
    infinite: true,
    // speed: 500, // for autoPlay which I don't really need so I'm leaving it out
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 99999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        // 600 since 2 cards are 600px total, plus card gap
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <p>A Lasting Impact</p>

      <Slider
        {...settings}
      >
        {servicesData.map((item) => (
          <Card item={item} key={item.key} />
        )
        )}
      </Slider>
    </section>
  );
};

export default Services;
