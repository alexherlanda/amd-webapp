import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import burger from "./images/burger.png";
import SocialButton from "../SocialButton";
import "./TopBar.css";

const TopBar = ({ onMenuClick }) => {
  return (
    <div className="top-bar">
      <Link to="/">
        <img
          className="top-bar__logo "
          src={logo}
          alt="Logo de la AMD. Es una A con que deja ver un águila"
        />
      </Link>

      <img
        onClick={onMenuClick}
        className="top-bar__menu-icon"
        src={burger}
        alt="Menu"
      />
    </div>
  );
};

export default TopBar;
