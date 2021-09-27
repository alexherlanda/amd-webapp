import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./NewsFeed.css";
import { NewsCard } from "../../components";
import { news } from "./data";

const NewsFeed = () => {
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
      containerClass="news-feed-widget"
      itemClass="news-feed-widget__item"
      draggable
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {news.map(({ id, imgSrc, title, description }) => (
        <NewsCard
          id={id}
          key={id}
          imgProps={{ src: imgSrc }}
          description={description}
          title={title}
        />
      ))}
    </Carousel>
  );
};

export default NewsFeed;
