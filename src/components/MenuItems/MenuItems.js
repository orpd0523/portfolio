import "./MenuItems.scss";
import { useNavigate } from "react-router-dom";

function MenuItems(props) {
  const { color = "primary" } = props;
  const navigate = useNavigate();
  return (
    <div className="menu">
      <div className="container">
        <p onClick={() => navigate("/")} className={`items items--${color}`}>
          Home
        </p>
        <p
          onClick={() => navigate("/about")}
          className={`items items--${color}`}
        >
          About
        </p>
        <div className="bold">
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider"></span>
          </label>
        </div>
        <p
          onClick={() => navigate("/projects")}
          className={`items items--${color}`}
        >
          Projects
        </p>
        <p
          onClick={() => navigate("/contact")}
          className={`items items--${color}`}
        >
          Contact
        </p>
      </div>
      {props.children}
    </div>
  );
}

export default MenuItems;
