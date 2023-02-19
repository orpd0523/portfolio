import "./ContactPage.scss";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Textfield from "../../components/Textfield/Textfield";
import { SiLinkedin } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="contact">
      <div className="contact__container">
        <h1 className="contact__outside">Let's Work Together!</h1>
        <Card color="contact1">
          <h1 className="contact__title1">Let's Work Together!</h1>
          <div className="contact__box">
            <h2 className="contact__title2">
              I look forward to hear from you...
            </h2>
          </div>
          <Textfield>textfield will go here</Textfield>
          <Button variant="contact" type="submit">
            Submit
          </Button>
        </Card>
      </div>

      <div className="contact__container">
        <Card color="contact2">
          <h2 className="contact__title3">Contact Information:</h2>

          <div className="contact__square">
            <div className="hero__hold">
              <Link to="/about">
                <BsPersonFill className="hero__icon" size={22} />
              </Link>
            </div>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <h3 className="contact__social">Olga Pérez</h3>
            </Link>
          </div>

          <div className="contact__square">
            <div className="hero__hold">
              <a href="tel:+1832-790-0105" rel="phone number">
                <AiFillPhone className="hero__icon" size={22} />
              </a>
            </div>
            <a href="tel:+1832-790-0105" rel="phone number" className="contact__social">
              832-790-0105
            </a>
          </div>

          <div className="contact__square">
            <div className="hero__hold">
              <a href="mailto:orpd0523@gmail.com?subject=" rel="email">
                <MdEmail className="hero__icon" size={22} />
              </a>
            </div>
            <a
              href="mailto:orpd0523@gmail.com?subject="
              className="contact__social"
            >
              orpd0523@gmail.com
            </a>
          </div>

          <div className="contact__square">
            <div className="hero__hold">
              <a href="http://www.linkedin.com/in/operez0523-dev" rel="linkedin">
                <SiLinkedin className="hero__icon" size={22} />
              </a>
            </div>
            <a
              href="http://www.linkedin.com/in/operez0523-dev" rel="linkedin"
              className="contact__social"
            >
              operez0523-dev
            </a>
          </div>

        </Card>
      </div>
    </div>
  );
}

export default ContactPage;
