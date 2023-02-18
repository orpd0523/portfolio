import "./ProjectsPage.scss";
import Card from "../../components/Card/Card";
import molotov from "../../assets/molotov.png"
import capstone from "../../assets/capstone.png"
import travelsite from "../../assets/travelsite.png"
import freelancing from "../../assets/freelancing.png"

function ProjectsPage() {
  return (
    <div className="projects">
      <div className="projects__box">
        <a href="https://github.com/orpd0523" className="projects__link">
          *Current Projects*
        </a>
      </div>
      <div className="projects__container">

      <Card color="projects">
          <a href="https://eventoshyj.netlify.app/"> <img src={freelancing} alt="freelancing" className="projects__image"/></a>
        </Card>

        <Card color="projects">
          <a href="https://op-capstone.netlify.app/"><img src={capstone} alt="capstone" className="projects__image"/></a>
        </Card>

        <Card color="projects">
          <a href="https://operez0523-fansite.netlify.app/"><img src={molotov} alt="molotov" className="projects__image"/></a>
        </Card>

        <div className="projects__hidden">
        <Card color="projects">
          <a href="https://operez0523-travelsite.netlify.app/"><img src={travelsite} alt="travelsite" className="projects__image"/></a>
        </Card>

        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
