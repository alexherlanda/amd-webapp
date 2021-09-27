import React from "react";
import "./SpeakerCard.css";

const SpeakerCard = ({
  imgProps,
  imageSrc,
  className,
  principal,
  speakerName = "",
}) => {
  return (
    <div
      className={`speaker-card ${className}`}
      style={principal && { height: 300, width: 300 }}
    >
      <div className="speaker-image" style={principal && { height: 218 }}>
        <img
          src={imageSrc}
          alt="speaker"
          style={
            principal
              ? { width: imgProps?.width ?? 190, top: imgProps?.top }
              : { width: imgProps?.width ?? 170, top: imgProps?.top ?? -15 }
          }
        />
      </div>
      <div className="speaker-card__name">
        <span> {speakerName.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default SpeakerCard;
