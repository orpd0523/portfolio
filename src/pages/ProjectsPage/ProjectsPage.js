import "./ProjectsPage.scss";
import Card from "../../components/Card/Card";
import molotov from "../../assets/molotov.png";
import capstone from "../../assets/capstone.png";
import travelsite from "../../assets/travelsite.png";
import freelancing from "../../assets/freelancing.png";
import ditto from "../../assets/ditto.png";
import { SiGithub } from "react-icons/si";

function ProjectsPage() {
  return (
    <div className="projects">
      <div className="projects__box">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/orpd0523"
          className="projects__top"
        >
          *Current Projects*
        </a>
      </div>
      <div className="projects__container">
        <Card color="holder">
          <Card color="projects">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://orpd0523-ditto-matching.netlify.app/"
            >
              <img src={ditto} alt="ditto" className="projects__image" />
            </a>
          </Card>
          <div className="projects__description">
            <p className="projects__project">
              <span className="projects__title">Ditto Match</span>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/orpd0523"
                className="projects__link"
              >
                <SiGithub className="projects__icon" size={30} />
              </a>
            </p>
          </div>
        </Card>
        <Card color="holder">
          <Card color="projects">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://eventoshyj.netlify.app/"
            >
              <img
                src={freelancing}
                alt="freelancing"
                className="projects__image"
              />
            </a>
          </Card>
          <div className="projects__description">
            <p className="projects__project">
              <span className="projects__title">EventosHyJ</span>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/orpd0523"
                className="projects__link"
              >
                <SiGithub className="projects__icon" size={30} />
              </a>
            </p>
          </div>
        </Card>
        <Card color="holder">
          <Card color="projects">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://op-capstone.netlify.app/"
            >
              <img src={capstone} alt="capstone" className="projects__image" />
            </a>
          </Card>
          <div className="projects__description">
            <p className="projects__project">
              <span className="projects__title">Capstone</span>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/orpd0523"
                className="projects__link"
              >
                <SiGithub className="projects__icon" size={30} />
              </a>
            </p>
          </div>
        </Card>
        <Card color="holder">
          <Card color="projects">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://operez0523-fansite.netlify.app/"
            >
              <img src={molotov} alt="molotov" className="projects__image" />
            </a>
          </Card>
          <div className="projects__description">
            <p className="projects__project">
              <span className="projects__title">Fansite</span>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/orpd0523"
                className="projects__link"
              >
                <SiGithub className="projects__icon" size={30} />
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ProjectsPage;
