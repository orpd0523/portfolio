import "./Card.scss";
import useDarkModeStore from "../../stores/darkModeStore.js";

function Card(props) {
    const { color = "primary" } = props;
    const { dark } = useDarkModeStore();
    const black = dark ? "" : "dark-mode";
  return <div className={`card card--${color} ${black}`}>{props.children}</div>;
} 

export default Card;