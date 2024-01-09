import React from "react";
import Image from "next/image";

// import "./Card.module.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <Image
        src={item.image}
        height={234}
        width={384}
        alt="services card image"
        placeholder="blur"
      />
      <div className="card-text">
        <h3 className="card-title">{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default Card;
