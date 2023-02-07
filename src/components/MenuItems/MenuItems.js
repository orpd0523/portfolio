import "./MenuItems.scss";

function MenuItems(props) {
  const { color = "primary" } = props;
  return (
      <div>
      <div>
        <a className={`items items--${color}`}>Home</a>
        <a className={`items items--${color}`}>About</a>
        <a className={`items items--${color}`}>Projects</a>
        <a className={`items items--${color}`}>Contact</a>
      </div>{props.children}
    </div>
  );
}

export default MenuItems;
