import React, { useState } from "react";

const Testimonials = () => {
  //for the current quote
  const [current, setCurrent] = useState(quotes[0]);
  //for the color of the active button bubble
  const [active, setActive] = useState(0);
  
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
  
  const length = quotes.length;
  
  const nextSlide = (event) => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  };
  const prevSlide = (event) => {
    setCurrent(current === 0 ? length - 1 : current - 1)
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
      <button className="prevButton" onClick={nextSlide}>
        <svg viewBox="0 0 21 41">
          <path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
        </svg>
      </button>
      <button className="nextButton" onClick={prevSlide}>
        <svg viewBox="0 0 21 41">
          <path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
        </svg>
      </button>
      {Object.keys(quotes).map((index) => (
        <>
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
          {/* <span
            onClick={(event) => handleSetClick(event)}
            key={index}
            data-quote={index}
          /> */}
          <p>{current.quote}</p>
          <h2>{current.client}</h2>
        </>
      ))}
      <div style="text-align:center">
        <span className="dot" onClick="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span>
      </div>
    </section>
  );
};

export default Testimonials;
