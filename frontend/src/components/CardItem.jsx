import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          {/* Creating repeatable cards to be defined in cards.css */}
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
            // props.src allows the user to select a different image for each card
              src={props.src}
              alt="Tutors"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;