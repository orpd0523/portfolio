import "./MenuItems.scss";
import { useNavigate } from "react-router-dom";

function MenuItems(props) {
  const { color = "primary" } = props;
  const navigate = useNavigate();
  return (
    <div className="menu">
      <div className="container">
        <a onClick={() => navigate("/")} className={`items items--${color}`}>
          Home
        </a>
        <a
          onClick={() => navigate("/about")}
          className={`items items--${color}`}
        >
          About
        </a>
        <div className="bold">
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider"></span>
          </label>
        </div>
        <a
          onClick={() => navigate("/projects")}
          className={`items items--${color}`}
        >
          Projects
        </a>
        <a
          onClick={() => navigate("/contact")}
          className={`items items--${color}`}
        >
          Contact
        </a>
      </div>
      {props.children}
    </div>
  );
}

export default MenuItems;
