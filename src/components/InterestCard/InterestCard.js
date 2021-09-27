import React from "react";
import "./InterestCard.css";

const InterestCard = ({ title, imgProps, url }) => {
  return (
    <div
      className="interest-card "
      style={{ backgroundImage: `url(${imgProps?.src})` }}
    >
      <a href={url}>
        <div className="interest_card__title">
          <span>{title}</span>
        </div>
      </a>
    </div>
  );
};

export default InterestCard;
