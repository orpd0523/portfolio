import "./Sidebar.scss";
import useSidebarStore from "../../stores/sidebarStore";
import { MdOutlineClose } from "react-icons/md";
import MenuItems from "../MenuItems/MenuItems";

function Sidebar() {
  const { visible, toggle } = useSidebarStore();
  const visibility = visible ? "" : " sidebar--hidden";
  const handleClick = () => {
    toggle((curr) => !curr);
  };

  return (
    <div className={`sidebar${visibility}`}>
      <MdOutlineClose
        className="sidebar__close"
        color="#0a0a0a"
        onClick={handleClick}
      /><MenuItems location="sidebar"></MenuItems>
    </div>
  );
}

export default Sidebar;
