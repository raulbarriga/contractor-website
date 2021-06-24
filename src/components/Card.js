import React from "react";
import "./Card.css";

const Card = ({ title, image, text }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={image} alt="card" />
            <div className="text-box">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;