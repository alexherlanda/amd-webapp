import React from "react";
import "./Subtitle.css";

function Subtitle({ title, className }) {
  return <h2 className={"subtitle " + className}>{title}</h2>;
}
export default Subtitle;
