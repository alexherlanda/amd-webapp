import React from "react";
import logo from "../../assets/logo.png";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <img
        className="top-bar__logo "
        src={logo}
        alt="Logo de la AMD. Es una A con que deja ver un águila"
      />
    </div>
  );
};

export default TopBar;
