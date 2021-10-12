import React from "react";
import "./Subtitle.css";

function Subtitle({ title, style }) {
  return (
    <h2 className="subtitle" style={style}>
      {title}
    </h2>
  );
}
export default Subtitle;
