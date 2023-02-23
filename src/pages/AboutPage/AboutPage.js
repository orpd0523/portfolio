import "./AboutPage.scss";
import headshot from "../../assets/headshot1.jpg";
import Button from "../../components/Button/Button";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__main">
          <div className="about__hold">
            <img src={headshot} alt="headshot" className="about__image" />
          </div>
          <h1 className="about__title">Olga Pérez</h1>
          <h2 className="about__title2">Software Developer</h2>
          <div className="about__rcontainer">
            <a target="_blank" rel="noreferrer" 
              href="https://drive.google.com/file/d/1Fls2w_XZn_f-QG5UTbQ9ABXMw45x3cHv/view?usp=sharing"
              alt="resume"
              className="about__resume"
            >
              Resume
            </a>
          </div>
          <div className="about__boxicon">
            <div className="about__box">
              <a target="_blank" rel="noreferrer"  href="http://www.linkedin.com/in/operez0523-dev">
                <SiLinkedin className="about__icon" size={22} />
              </a>
            </div>
            <div className="about__box">
              <a  target="_blank" rel="noreferrer" href="https://github.com/orpd0523">
                <SiGithub className="about__icon" size={22} />
              </a>
            </div>
            <div className="about__box">
              <a href="mailto:orpd0523@gmail.com?subject=">
                <MdEmail className="about__icon" size={22} />
              </a>
            </div>
          </div>
        </div>
        <div className="about__aside">
          <div className="about__tcontainer">
            <h3 className="about__ptitle">This Is Who I Am:</h3>
          </div>
          <div className="about__pcontainer">
            <p className="about__paragraph">
              Hi, I'm Olga, a recent graduate of a software development
              bootcamp. I completed a 12-week program that taught me the basics
              of web development, including HTML, CSS, JavaScript, and several
              popular frameworks such as React and Node.js. Throughout the
              program, I worked on various projects and collaborated with other
              students on group assignments.
            </p>
            <p className="about__paragraph">
              Since graduation, I've been applying for entry-level software
              development positions, and I'm thrilled to have received a few
              interview requests. To continue improving my skills, I've been
              working on personal projects and contributing to open-source
              projects on GitHub. My long-term goal is to become a full-stack
              developer, and I'm excited about the journey ahead.
            </p>
          </div>
          <div className="about__button">
            <Link to="/contact">
              <Button variant="about">Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
