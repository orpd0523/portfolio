import "./Main.scss";
import Card from "../Card/Card";
import about from "../../assets/about.jpg";
import contact from "../../assets/contact.jpg";
import projects from "../../assets/projects.jpg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <Card color="desktop">
        <Link to="/about" style={{textDecoration:'none'}}>
          <Card color="secondary">
            <img src={about} alt="about" className="main__image" />
            <h3 className="main__title">About</h3>
          </Card>
        </Link>
        <Link to="/projects" style={{textDecoration:'none'}}>
          <Card color="secondary">
            <img src={projects} alt="about" className="main__image" />
            <h3 className="main__title">Projects</h3>
          </Card>
        </Link>
        <Link to="/contact" style={{textDecoration:'none'}}>
          <Card color="secondary">
            <img src={contact} alt="about" className="main__image" />
            <h3 className="main__title">Contact</h3>
          </Card>
        </Link>
      </Card>
    </div>
  );
}

export default Main;
