import React from "react";
import "./SectionImage.css";
function SectionImage({ src, alt }) {
  return (
    <div className="container__image">
      <img src={src} alt="" />
    </div>
  );
}

export default SectionImage;
