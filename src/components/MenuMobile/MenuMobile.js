import routes from "../../routes/routes";
import { Link } from "react-router-dom";
import "./MenuMobile.css";

const MenuMobile = ({ visible, onClose }) => {
  console.log("visible", visible);
  return true ? (
    <div className="menu-mobile">
      <div className="menu-mobile__close-button" onClick={onClose}>
        close
      </div>
      <ul>
        {routes.map(({ label, to }) => (
          <div>
            <Link to={to} onClick={onClose}>
              <li>{label}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  ) : null;
};

export default MenuMobile;
