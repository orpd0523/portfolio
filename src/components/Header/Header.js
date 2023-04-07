import "./Header.scss";
import MenuItems from "../MenuItems/MenuItems";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import useSidebarStore from "../../stores/sidebarStore";
import { HiOutlineMenu } from "react-icons/hi";

function Header() {
  const { visible, toggle } = useSidebarStore();
  const handleClick = () => {
    toggle(true);
  };
  return (
    <div className="header">
       {!visible && (
        <HiOutlineMenu className="header__burger" color="ffffff" size={22} onClick={handleClick} />
      )}
      <div className="header__center">
      </div>
      <MenuItems color="header" location="header" />
      <div className="header__main">
        <div className="header__container">
          <a  target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/operez0523-dev">
            <SiLinkedin className="header__icon header__color1" size={21} />
          </a>
        </div>
        <div className="header__container">
          <a target="_blank" rel="noreferrer" href="https://github.com/orpd0523">
            <SiGithub className="header__icon header__color2" size={22} />
          </a>
        </div>
        <div className="header__container">
          <a href="mailto:orpd0523@gmail.com?subject=">
            <MdEmail className="header__icon header__color3" size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
