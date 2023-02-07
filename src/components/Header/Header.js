import "./Header.scss";
// import MenuItems from "../MenuItems/MenuItems";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <div className="header">
      {/* <MenuItems/> */}
      <div className="header__main">
        <div className="header__container">
          <SiLinkedin className="header__icon" size={22} />
        </div>
        <div className="header__container">
          <SiGithub className="header__icon" size={22} />
        </div>
        <div className="header__container">
          <MdEmail className="header__icon" size={22} />
        </div>
      </div>
    </div>
  );
}

export default Header;
