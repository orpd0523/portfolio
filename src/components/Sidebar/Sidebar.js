import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="menu">
      <a className="menu__item">Home</a>
      <a className="menu__item">About</a>
      <a className="menu__item">Projects</a>
      <a className="menu__item">Contact</a>
    </div>
  );
}

export default Sidebar;
