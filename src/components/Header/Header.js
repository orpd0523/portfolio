import "./Header.scss";
import MenuItems from "../MenuItems/MenuItems";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <MenuItems color="header"/>
      <div className="header__center">
        <img src={logo} className="header__logo" />
      </div>
      <div className="header__main">
        <div className="header__container">
          <a href="http://www.linkedin.com/in/operez0523-dev">
            <SiLinkedin className="header__icon" size={22} />
          </a>
        </div>
        <div className="header__container">
          <a href="https://github.com/orpd0523">
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
