import "./MenuItems.scss";
import Button from "../Button/Button"
import { useNavigate } from "react-router-dom";
import useSidebarStore from "../../stores/sidebarStore";
import useDarkModeStore from "../../stores/darkModeStore";

function MenuItems(props) {
  const { toggle } = useSidebarStore();
  const { toggleDarkMode } = useDarkModeStore();
  const handleDarkMode = () => {
    toggleDarkMode((curr) => !curr);
  };
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path)
    toggle(false);
  };
  const { location = "primary" } = props;
  return (
    <div className={`menu ${location ? "menu--" + location: ""}`}>
      <div className="container">
        <Button onClick={() => handleClick("/")} className={`items items--${location}`}>
          Home
        </Button>
        <Button
          onClick={() => handleClick("/about")}
          className={`items items--${location}`}
        >
          About
        </Button>

        <div className="bold">
          <label className="switch">
            <input type="checkbox" onClick={handleDarkMode}></input>
            <span className="slider"></span>
          </label>
        </div>

        <Button
          onClick={() => handleClick("/projects")}
          className={`items items--${location}`}
        >
          Projects
        </Button>
        <Button
          onClick={() => handleClick("/contact")}
          className={`items items--${location}`}
        >
          Contact
        </Button>
      </div>
      {props.children}
    </div>
  );
}

export default MenuItems;
