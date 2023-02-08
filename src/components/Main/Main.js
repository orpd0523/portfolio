import "./Main.scss";
import Card from "../Card/Card";
import about from "../../assets/about.jpg";
import contact from "../../assets/contact.jpg";
import projects from "../../assets/projects.jpg";

function Main() {
  return (
    <div className="main">
      <Card>
        <Card color="secondary" ><img src={about} alt="about" className="main__image"/><h3 className="main__title">About</h3></Card>
        <Card color="secondary"><img src={projects} alt="about" className="main__image"/><h3 className="main__title">Projects</h3></Card>
        <Card color="secondary"><img src={contact} alt="about" className="main__image"/><h3 className="main__title">Contact</h3></Card>
      </Card>
    </div>
  );
}

export default Main;
