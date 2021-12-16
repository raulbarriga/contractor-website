import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { isMobile } from "react-device-detect";
// import dynamic from "next/dynamic";

import LeftBtn from "../public/svgs/chevron-left.svg";
import RightBtn from "../public/svgs/chevron-right.svg";
import DoubleQuotes from "../public/svgs/ri-double-quotes.svg";
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

  const quotesArr = [
    {
      key: 1,
      client: "Kowdle Prasad",
      quote:
        "In regard to the work JB & B Construction completed, I can definitely say it was very professionally done. My property manager also said he thought the work was very well executed. I thank you very much for doing such professional work. It gives me great pleasure to use your company for my future re-modeling/construction needs. I look forward to working with you in the future. You guys are GREAT!",
    },
    {
      key: 2,
      client: "Erika Revels",
      quote:
        "I am a property manager for 12 apartment complexes. JB & B Construction did all the interior renovation and exterior painting. They were very professional and did an amazing job! We are ready to hire them for another property. Highly recommend!",
    },
    {
      key: 3,
      client: "Nick Romero",
      quote:
        "JB & B Construction remodeled my home's interior completely. New kitchen, new bathrooms, new flooring and baseboards, new doors, light fixtures, and drywall, they even custom-made new window sills for all my windows! Service was done at a reasonable price, and with the utmost professionalism. Their team made every effort to accommodate requests and to go above and beyond! Thank you!",
    },
    {
      key: 4,
      client: "Johnathan Rivera",
      quote:
        "Very reliable and dependable. But most importantly great quality work and very productive. I am a construction superintendent and we are definitely using this company on many more projects.",
    },
    {
      // A REAL CLIENT of JB & B
      key: 5,
      client: "Amanda Taycon Properties",
      quote:
        "Jorge and his team remodeled my house and they went above and beyond to ensure that everything was perfect by the time they were finished. Their attention to detail and precision is almost unseen in today's workmanship and you can tell they pride themselves in doing A quality work. I get compliments everytime someone comes over on the way my house looks. I cannot recommend JB&B enough. From their prices, services, and quality you will not go wrong with hiring them for any project you need.",
    },
    {
      // A REAL CLIENT of JB & B
      key: 5,
      client: "Esperanza",
      quote:
        "JB&B has amazing service and quality work. My go to Company for all projects!",
    },
  ];

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
