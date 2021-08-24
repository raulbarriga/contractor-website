import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={item.image} alt="card" />
            <div className="text-box">
              <h3>{item.title}</h3>
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
