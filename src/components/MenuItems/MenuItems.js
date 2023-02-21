import "./MenuItems.scss";
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom";
import useSidebarStore from "../../stores/sidebarStore";

function MenuItems(props) {
  const { visible, toggle } = useSidebarStore();
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path)
    toggle(false);
  };
  const { color = "primary", location = "" } = props;
  
  return (
    <div className={`menu ${location ? "menu--" + location: ""}`}>
      <div className="container">
        <Button onClick={() => handleClick("/")} className={`items items--${color}`}>
          Home
        </Button>
        <Button
          onClick={() => handleClick("/about")}
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
          onClick={() => handleClick("/projects")}
          className={`items items--${color}`}
        >
          Projects
        </Button>
        <Button
          onClick={() => handleClick("/contact")}
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
