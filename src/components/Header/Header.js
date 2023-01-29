import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <ul className="header__container">
        <li className="header__item">HOME</li>
        <li className="header__item">ABOUT</li>
        <li className="header__item">PROJECTS</li>
      </ul>
    </header>
  );
}

export default Header;
