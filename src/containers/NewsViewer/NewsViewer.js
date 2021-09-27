import React, { useEffect } from "react";
import "./NewsViewer.css";
import posts from "./posts";
import { useParams } from "react-router-dom";

const NewsViewer = () => {
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="news-feed-viewer">
      <h2> {posts[id].title} </h2>
      {posts[id].content}
    </div>
  );
};

export default NewsViewer;
