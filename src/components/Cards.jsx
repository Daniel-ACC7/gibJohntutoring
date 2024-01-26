import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out some of our tutors</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="Lorem ipsum dolor sit amet"
              label="Physics"
              path="/services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="sed do eiusmod tempor incididunt"
              label="English"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Ut enim ad minim veniam"
              label="Chemistry"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="quis nostrud exercitation ullamco laboris nisi"
              label="Computer Science"
              path="/services"
            />
            <CardItem
              src="images/img-9.jpg"
              text="ut aliquip ex ea commodo consequat"
              label="Mathematics"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
