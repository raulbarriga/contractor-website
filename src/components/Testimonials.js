import React, { useState } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  const quotes = {
    0: {
      client: "name1",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
    1: {
      client: "name2",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
    2: {
      client: "name3",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
    3: {
      client: "name4",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
    4: {
      client: "name5",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
  };
  //for the current quote
  const [current, setCurrent] = useState(quotes[0]);
  //for the color of the active button bubble
  const [active, setActive] = useState(0);

  const handleSetClick = (event) => {
    // gets the quote index form the selected dot
    setCurrent(quotes[event.target.getAttribute("data-quote")]);
    // handle the active index on the dot pagination
    setActive(event.target.getAttribute("data-quote"));
  };

  return (
    <section className="testimonials">
      {/* {quotes.map((index) => (
        <div key={index}>
          <div className="svg">
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="48.8 51 102.4 98.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="48.8 51 102.4 98.1"
              role="img"
            >
              <g>
                <path d="M89.9 51H51.6c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.2-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8H54.4V56.6h32.7v21z"></path>
                <path d="M148.4 51h-38.3c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.3-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8h-18.1V56.6h32.7v21z"></path>
              </g>
            </svg>
          </div>
          <p>{current.quote}</p>
          <h2>{current.client}</h2>
        </div>
      ))} */}
      <button className="prevButton icon-left">
        {/* <i className="fal fa-angle-left"></i> */}
        <i className="lni lni-chevron-left"></i>
      </button>
      <button className="nextButton icon-right">
        {/* <i className="far fa-angle-right"></i> */}
        <i className="lni lni-chevron-right"></i>
      </button>
      <div className="text">
        {/* <i className="lni lni-quotation"></i> */}
        {/* <span className="material-icons-outlined"></span> */}
        <RiDoubleQuotesR />
        <p>{current.quote}</p>
        <h2>{current.client}</h2>
      </div>
      <div className="dots-container">
        {/* dot pagination (dynamic for the quotes object): */}
        {Object.keys(quotes).map((index) => (
          <>
            {/* <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="48.8 51 102.4 98.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="48.8 51 102.4 98.1"
            role="img"
          >
            <g>
              <path d="M89.9 51H51.6c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.2-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8H54.4V56.6h32.7v21z"></path>
              <path d="M148.4 51h-38.3c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.3-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8h-18.1V56.6h32.7v21z"></path>
            </g>
          </svg> */}
            <span
              onClick={(event) => handleSetClick(event)}
              key={index}
              data-quote={index}
            />
          </>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
