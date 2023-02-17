import "./Hero.scss";
import logo from "../../assets/logo.svg";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__socials">
        <div className="hero__hold">
          <a href="http://www.linkedin.com/in/operez0523-dev">
            <SiLinkedin className="hero__icon" size={22} />
          </a>
        </div>
        <div className="hero__hold">
          <a href="https://github.com/orpd0523">
            <SiGithub className="hero__icon" size={22} />
          </a>
        </div>
        <div className="hero__hold">
          <a href="mailto:orpd0523@gmail.com?subject=">
            <MdEmail className="hero__icon" size={22} />
          </a>
        </div>
      </div>
      <div className="hero__container">
        <div className="hero__main">
          <h2 className="hero__title1">Hi, I'm</h2>
          <h1 className="hero__title2">Olga Pérez</h1>
          <h3 className="hero__title3">Software Developer <span className="hero__bar">|</span> Freelancer</h3>
          <h2 className="hero__title4">Welcome to my portfolio...</h2>
          <div className="hero__button">
            <Button variant="talk">Let's Talk</Button>
          </div>
        </div>
        <div className="hero__round">
          <img src={logo} alt="logo" className="hero__logo" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
