import "./Header.scss";
import MenuItems from "../MenuItems/MenuItems";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
      </div>
      <MenuItems color="header" location="header" />
      <div className="header__main">
        <div className="header__container">
          <a target="_blank" href="http://www.linkedin.com/in/operez0523-dev">
            <SiLinkedin className="header__icon" size={22} />
          </a>
        </div>
        <div className="header__container">
          <a target="_blank" href="https://github.com/orpd0523">
            <SiGithub className="header__icon" size={22} />
          </a>
        </div>
        <div className="header__container">
          <a href="mailto:orpd0523@gmail.com?subject=">
            <MdEmail className="header__icon" size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
