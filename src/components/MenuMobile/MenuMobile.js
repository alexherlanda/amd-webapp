import React from "react";
import "./MenuMobile.css";

const MenuMobile = ({ visible, onClose }) => {
  return true ? (
    <div className="menu-mobile">
      <div className="menu-mobile__close-button" onClick={onClose}>
        close
      </div>
      <ul>
        <div>
          <a href="/wip">
            <li>CONÓCENOS</li>
          </a>
        </div>
        <div>
          <a href="/wip">
            <li>EVENTOS</li>
          </a>
        </div>

        <div>
          <a href="/wip">
            <li>LIGA MEXICANA DE DEBATE</li>
          </a>
        </div>
      </ul>
    </div>
  ) : null;
};

export default MenuMobile;
