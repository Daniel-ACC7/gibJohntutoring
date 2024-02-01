import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    // Setting up the card css
    <div className="cards">
      <h1>Check out some of our tutors</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* Repeatabke and reuseable cards that automatically arrange themselves on the page */}
            <CardItem
              src="images/img-2.jpg"
              text="Lorem ipsum dolor sit amet"
              label="Physics"
              path="/tutors"
            />
            <CardItem
              src="images/img-3.jpg"
              text="sed do eiusmod tempor incididunt"
              label="English"
              path="/tutors"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ut enim ad minim veniam"
              label="Chemistry"
              path="/tutors"
            />
            <CardItem
              src="images/img-4.jpg"
              text="quis nostrud exercitation ullamco laboris nisi"
              label="Computer Science"
              path="/tutors"
            />
            <CardItem
              src="images/img-9.jpg"
              text="ut aliquip ex ea commodo consequat"
              label="Mathematics"
              path="/tutors"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
