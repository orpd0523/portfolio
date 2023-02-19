import "./ProjectsPage.scss";
import Card from "../../components/Card/Card";
import molotov from "../../assets/molotov.png";
import capstone from "../../assets/capstone.png";
import travelsite from "../../assets/travelsite.png";
import freelancing from "../../assets/freelancing.png";

function ProjectsPage() {
  return (
    <div className="projects">
      <div className="projects__box">
        <a href="https://github.com/orpd0523" className="projects__link">
          *Current Projects*
        </a>
      </div>

      <div className="projects__container">
        <Card color="holder">
          <Card color="projects">
            <a href="https://eventoshyj.netlify.app/">
              <img
                src={freelancing}
                alt="freelancing"
                className="projects__image"
              />
            </a>
          </Card>
          <div className="projects__description">
            <p className="projects__project">
              <span className="projects__title">Project:</span> EventosHyJ
            </p>
            <p className="project__type">
              <span className="projects__title">Type:</span> Freelancing
            </p>
            <p className="projects__response">
              <span className="projects__title">Responsive:</span> Mobile, Tablet, Desktop
            </p>
            <p className="projects__language">
              <span className="projects__title">Languages:</span> HTML5, CSS, JavaScript
            </p>
            <p className="projects__frameworks">
              <span className="projects__title">Frameworks/Libraries:</span> React, Zustand,
              react-router-dom, React Icons
            </p>
            <p className="projects__technology">
              <span className="projects__title">Technologies:</span> GitHub, Netlify
            </p>
          </div>
        </Card>
        <Card color="holder">
          <Card color="projects">
            <a href="https://op-capstone.netlify.app/">
              <img src={capstone} alt="capstone" className="projects__image" />
            </a>
          </Card>
          <div className="projects__description">
            <p className="projects__project">
              <span className="projects__title">Project:</span> Capstone
            </p>
            <p className="project__type">
              <span className="project__title">Type:</span> Personal Project
            </p>
            <p className="projects__response">
              <span className="projects__title">Responsive:</span> Mobile, Tablet, Desktop
            </p>
            <p className="projects__language">
              <span className="projects__title">Languages:</span> HTML5, CSS, JavaScript
            </p>
            <p className="projects__frameworks">
              <span className="projects__title">Frameworks/Libraries:</span> React, Zustand, SASS, react-router-dom, React Icons
            </p>
            <p className="projects__technology">
              <span className="projects__title">Technologies:</span> GitHub, Netlify, MangoDB
            </p>
          </div>
        </Card>

        <Card color="holder">
          <Card color="projects">
            <a href="https://operez0523-fansite.netlify.app/">
              <img src={molotov} alt="molotov" className="projects__image" />
            </a>
          </Card>
          <div className="projects__description">
            <p className="projects__project">
              <span className="projects__title">Project:</span> Fansite
            </p>
            <p className="project__type">
              <span className="projects__title">Type:</span> Personal Project
            </p>
            <p className="projects__response">
              <span className="projects__title">Responsive:</span> Mobile, Tablet, Desktop
            </p>
            <p className="projects__language">
              <span className="projects__title">Languages:</span> HTML5, CSS, JavaScript
            </p>
            <p className="projects__frameworks">
              <span className="projects__title">Frameworks/Libraries:</span> SASS 
            </p>
            <p className="projects__technology">
              <span className="projects__title">Technologies:</span> GitHub, Netlify, MongoDB
            </p>
          </div>
        </Card>

        <Card color="holder1">
          <div className="projects__hidden">
            <Card color="projects">
              <a href="https://operez0523-travelsite.netlify.app/">
                <img
                  src={travelsite}
                  alt="travelsite"
                  className="projects__image"
                />
              </a>
            </Card>
            <div className="projects__description1">
            <p className="projects__project">
              <span className="projects__title">Project:</span> Travel Site
            </p>
            <p className="project__type">
              <span className="projects__title">Type:</span> Personal Project
            </p>
            <p className="projects__response">
              <span className="projects__title">Responsive:</span> Desktop
            </p>
            <p className="projects__language">
              <span className="projects__title">Languages:</span> HTML5, CSS
            </p>
            <p className="projects__technology">
              <span className="projects__title">Technologies:</span> GitHub, Netlify
            </p>
          </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ProjectsPage;
