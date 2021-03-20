import React from "react";
import Quotes from "react-quotes-carousel";

const Testimonials = () => {
  const quotes = [
    {
      author: "name1",
      company: null,
  image: null,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
    {
      author: "name2",
      company: null,
  image: null,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
    {
      author: "name3",
      company: null,
  image: null,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
    {
      author: "name4",
      company: null,
  image: null,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
    {
      author: "name5",
      company: null,
  image: null,
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque nemo? Odit, assumenda inventore.",
    },
  ];

  //   Quote {
  //     author: string;
  //     company: string;
  //     image: string;
  //     quote: string;
  //   }

  return (
    <section className="testimonials">
      <Quotes key={quotes} />
    </section>
  );
};

export default Testimonials;
