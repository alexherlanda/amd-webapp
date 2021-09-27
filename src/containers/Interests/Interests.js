import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Interests.css";
import { InterestCard } from "../../components";
import { interests } from "./data/data";

const Interests = () => {
  const responsive = {
    xs: {
      breakpoint: { min: 0, max: 480 },
      items: 1,
    },
    sm: {
      breakpoint: { min: 481, max: 576 },
      items: 1,
    },
    md: {
      breakpoint: { min: 577, max: 991 },
      items: 1,
    },
    lg: {
      breakpoint: { min: 992, max: 1199 },
      items: 3,
    },
    xl: {
      breakpoint: { min: 1200, max: 1599 },
      items: 3,
    },
    xxl: {
      breakpoint: { min: 1600, max: 1700 },
      items: 3,
    },
    superLarge: {
      breakpoint: { min: 1701, max: 1900 },
      items: 5,
    },
  };

  return (
    <Carousel
      showDots
      responsive={responsive}
      infinite
      // autoPlay
      containerClass="interests-widget"
      itemClass="news-feed-widget__item"
      draggable
      removeArrowOnDeviceType={["tablet", "mobile"]}
      focusOnSelect
    >
      {interests.map(({ id, imgSrc, text, description, url }) => (
        <InterestCard
          key={id}
          imgProps={{ src: imgSrc }}
          description={description}
          title={text}
          url={url}
        />
      ))}
    </Carousel>
  );
};

export default Interests;
