import React from "react";
import "./TimeLine.css";

function Timeline() {
  const timelineTitle = (className) => {
    return (
      <div className={`timeline__title-container ${className}`}>
        <h2 className="timeline__title">HISTORIA</h2>
      </div>
    );
  };

  return (
    <div className="timeline__container">
      {timelineTitle("timeline__above")}
      {timelineTitle("timeline__below")}
      <div className="timeline__year">
        <h3>
          <span className="timeline__year-active">2013</span>
          <span className="timeline__year-arrow">>></span>
          <span>2014</span>
          <span className="timeline__year-arrow">>></span>
          <span>2015</span>
          <span className="timeline__year-arrow">>></span>
          <span>2016</span>
          <span className="timeline__year-arrow">>></span>
          <span>2017</span>
          <span className="timeline__year-arrow">>></span>
          <span>2018</span>
          <span className="timeline__year-arrow">>></span>
          <span>2019</span>
          <span className="timeline__year-arrow">>></span>
          <span>2020</span>
          <span className="timeline__year-arrow">>></span>
          <span>2021</span>
        </h3>
      </div>
    </div>
  );
}

export default Timeline;
