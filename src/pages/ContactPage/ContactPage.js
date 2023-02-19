import "./ContactPage.scss";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Textfield from "../../components/Textfield/Textfield";

function ContactPage() {
  return (
    <div className="contact">
      <div className="contact__container">
          <h1 className="contact__outside">Let's Work Together!</h1>
        <Card color="contact1">
          <h1 className="contact__title1">Let's Work Together!</h1>
          <div className="contact__box">
            <h2 className="contact__title2">I look forward to hear from you...</h2>
          </div>
          <Textfield>textfield will go here</Textfield>
          <Button variant="contact" type="submit">
            Submit
          </Button>
        </Card>
      </div>

      <div className="contact__container">
        <Card color="contact2">
          <h2>Contact Info Card</h2>
          <h3>Contact Information:</h3>
          <div>
            <h4>Olga Pérez</h4>
          </div>
          <div>
            <h4>email here</h4>
          </div>
          <div>
            <h4>phone number here</h4>
          </div>
          <div>
            <h4>linked in here</h4>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ContactPage;
