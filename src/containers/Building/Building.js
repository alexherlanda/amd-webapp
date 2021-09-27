import React from "react";
import animation from "./animation.gif";
const Building = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: 20,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={animation} alt="animacion de debate" width="70%" />
      <br />
      <span> Estamos trabajando en una sección genial </span>
    </div>
  );
};

export default Building;
