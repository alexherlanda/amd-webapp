import React from "react";
import Carousel from "react-multi-carousel";

import { useMediaQuery } from "react-responsive";

import "./TimeLine.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Timeline() {
  const years = [
    { key: 2013, label: "2013" },
    { key: 2014, label: "2014" },
    { key: 2015, label: "2015" },
    { key: 2016, label: "2016" },
    { key: 2017, label: "2017" },
    { key: 2018, label: "2018" },
    { key: 2019, label: "2019" },
    { key: 2020, label: "2020" },
    { key: 2021, label: "2021" },
  ];

  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const timelineTitle = (className) => {
    return (
      <div className={`timeline__title-container ${className}`}>
        <h2 className="timeline__title">HISTORIA</h2>
      </div>
    );
  };

  const timelineMobile = () => {
    return (
      <div className="timeline__title-container mobile">
        <h2 className="timeline__title">HISTORIA</h2>
        <h2 className="timeline__title">HISTORIA</h2>
        <h2 className="timeline__title">HISTORIA</h2>
        <Carousel
          responsive={responsive}
          infinite
          draggable
          focusOnSelect
          containerClass="timeline__carousel"
        >
          {years.map((year) => (
            <h2
              className="timeline__title timeline__mobile-item"
              key={year.key}
            >
              {year.label}
            </h2>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <div
      className={`timeline__container ${
        isPortrait ? "timeline__container-mobile" : ""
      }`}
    >
      {isPortrait ? (
        timelineMobile()
      ) : (
        <>
          {timelineTitle("timeline__above")}
          {timelineTitle("timeline__below")}
          <div className="timeline__years">
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
        </>
      )}
    </div>
  );
}

export default Timeline;
