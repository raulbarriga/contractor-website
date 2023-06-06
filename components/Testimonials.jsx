import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { isMobile } from "react-device-detect";
// import dynamic from "next/dynamic";

import LeftBtn from "../public/svgs/chevron-left.svg";
import RightBtn from "../public/svgs/chevron-right.svg";
import DoubleQuotes from "../public/svgs/ri-double-quotes.svg";
import { quotesArr } from "./data/testimonialsData";

// const wrap = dynamic(
//    () => {
//     const { wrap } = import("popmotion");
//     return wrap;
//   },
//   { ssr: false }
//   );
//   console.log("wrap: ", wrap);
const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  // for server side rendering
  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const length = quotesArr.length;
  const objIndex = wrap(0, length, page);

  const handleSetClick = (index) => {
    const currentIndex = page;
    const direction = index > currentIndex ? 1 : -1;
    setPage([index, direction]);
  };

  const paginate = (newDirection) => {
    if (page === 0 && newDirection === -1) {
      return setPage([length - 1, newDirection]);
    } else if (page === length - 1 && newDirection === 1) {
      return setPage([0, newDirection]);
    }
    setPage([page + newDirection, newDirection]);
  };

  const unique = () => {
    const duplicates = quotesArr.map((obj) => {
      return (
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { ease: [0.87, 0, 0.13, 1] },
            opacity: { duration: 0.7 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div className="remix-icon-double-quotes">
            <DoubleQuotes aria-label="Next testimonial" />
          </div>
          <p>{quotesArr[objIndex].quote}</p>
          <h2>{quotesArr[objIndex].client}</h2>
        </motion.div>
      );
    });
    const uniqueArr = [
      ...duplicates
        .reduce((map, obj) => map.set(obj.key, obj), new Map())
        .values(),
    ];
    return uniqueArr;
  };

  const uniqueDots = () => {
    const duplicateDots = quotesArr.map((obj, index) => {
      return (
        <span
          onClick={(event) => handleSetClick(index)}
          key={index}
          className={`${index === page ? "active" : ""}`}
        />
      );
    });

    const uniqueDotsArr = [
      ...duplicateDots
        .reduce((map, obj) => map.set(obj.key, obj), new Map())
        .values(),
    ];
    return uniqueDotsArr;
  };

  useEffect(() => {
    const autoPlay = () => {
      if (mobile) return;
      paginate(1);
    };
    const interval_id = setInterval(autoPlay, 12000);
    return () => {
      // Stop the interval when the component unmounts.
      // Otherwise it will keeep going and you will get an error.
      clearInterval(interval_id);
    };
  }, [paginate]);

  return (
    <section id="testimonials" className="testimonials">
      <button
        className="prevButton icon-left"
        aria-label="Left Button"
        onClick={() => paginate(-1)}
      >
        <LeftBtn className="left-svg" aria-label="Previous testimonial" />
      </button>
      <button
        className="nextButton icon-right"
        aria-label="Right Button"
        onClick={() => paginate(1)}
      >
        <RightBtn className="right-svg" aria-label="Next testimonial" />
      </button>
      <div className="text">
        <div className="wrapper">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {unique()}
          </AnimatePresence>
        </div>
      </div>
      <div className="dots-container">{uniqueDots()}</div>
    </section>
  );
};

export default Testimonials;
