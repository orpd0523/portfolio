import "./ProjectsPage.scss";
import Card from "../../components/Card/Card";

function ProjectsPage() {
  return (
    <div className="projects">
      <div className="projects__box">
        <a href="https://github.com/orpd0523" className="projects__link">
          current projects
        </a>
      </div>
      <div className="projects__container">

      <Card color="projects">
          <a href="https://eventoshyj.netlify.app/">EventosHyJ - Freelancing </a>
        </Card>

        <Card color="projects">
          <a href="https://op-capstone.netlify.app/">Staying Alive Capstone</a>
        </Card>

        <Card color="projects">
          <img src="" />
          <a href="https://operez0523-fansite.netlify.app/">Fan Site - Personal Project</a>
        </Card>

        <Card color="projects">
          <a href="https://operez0523-travelsite.netlify.app/">Travel Site - Personal Project</a>
        </Card>
      </div>
    </div>
  );
}

export default ProjectsPage;
