import "./MenuItems.scss";
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom";

function MenuItems(props) {
  const { color = "primary" } = props;
  const navigate = useNavigate();
  return (
    <div className="menu">
      <div className="container">
        <Button onClick={() => navigate("/")} className={`items items--${color}`}>
          Home
        </Button>
        <Button
          onClick={() => navigate("/about")}
          className={`items items--${color}`}
        >
          About
        </Button>
        <div className="bold">
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider"></span>
          </label>
        </div>
        <Button
          onClick={() => navigate("/projects")}
          className={`items items--${color}`}
        >
          Projects
        </Button>
        <Button
          onClick={() => navigate("/contact")}
          className={`items items--${color}`}
        >
          Contact
        </Button>
      </div>
      {props.children}
    </div>
  );
}

export default MenuItems;
