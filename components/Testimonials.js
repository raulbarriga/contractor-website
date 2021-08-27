import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { isMobile } from "react-device-detect";

import LeftBtn from "../public/svgs/chevron-left.svg";
import RightBtn from "../public/svgs/chevron-right.svg";

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  // for server side rendering
  const [mobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  
  const quotesArr = [
    {
      key: 1,
      client: "Fred Astaire",
      quote:
        "This search for what you want is like tracking something that doesn't want to be tracked.",
    },
    {
      key: 2,
      client: "Ralph Waldo Emerson",
      quote:
        "Nature is an endless combination and repetition of a very few laws. She hums the old well-known air through innumerable variations.",
    },
    {
      key: 3,
      client: "Jack Johnson",
      quote:
        "I never doubted the issue from the beginning. I knew I was too good for Burns. I have forgotten more about fighting than Burns ever knew.",
    },
    {
      key: 4,
      client: "Dianne de Poitiers",
      quote:
        "Courage is as often the outcome of despair as of hope; in the one case we have nothing to lose, in the other everything to gain.",
    },
    {
      key: 5,
      client: "Samuel Johnson",
      quote:
        "Whoever wishes to attain an English style, familiar but not coarse, and elegant but not ostentatious, must give his days and nights...",
    },
  ];

  const PrevButton = () => (
        <LeftBtn
          aria-label="Previous testimonial"
        />
    );
  const NextButton = () => (
        <RightBtn
          aria-label="Next testimonial"
        />
    );

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
    if (page === 0 && index === length - 1) {
      setPage([length - 1, -1]);
    } else if (page === length - 1 && index === 0) {
      setPage([0, 1]);
    } else if (index > page) {
      setPage([page + 1, 1]);
    } else if (index < page) {
      setPage([page - 1, -1]);
    }
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
          <i className="ri-double-quotes-r ri-3x"></i>
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
      <button className="prevButton icon-left" aria-label="Left Button" onClick={() => paginate(-1)}>
        <PrevButton />
      </button>
      <button className="nextButton icon-right" aria-label="Right Button" onClick={() => paginate(1)}>
        <NextButton />
      </button>
      <div className="text">
        <div className="wrapper">
          <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
            {unique()}
          </AnimatePresence>
        </div>
      </div>
      <div className="dots-container">{uniqueDots()}</div>
    </section>
  );
};

export default Testimonials;
