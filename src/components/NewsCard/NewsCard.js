import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";

const NewsCard = ({ imgProps, title, id }) => {
  return (
    <div className="news-card">
      <Link to={`/news/${id}`} style={{ textDecoration: "none" }}>
        <div className="news-card__image">
          <img alt="Andrea Rincón" src={imgProps?.src} />
        </div>
        <div className="news-card__header">
          <h4> {title} </h4>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
