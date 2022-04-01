import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";
import youtube from "../../img/youtube.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col sm={6} className="footer__information">
              <h2>Bits & Bots</h2>
              <Link to="#">
                <h3>Contact</h3>
              </Link>
              <Link to="#">
                <h3>About us</h3>
              </Link>
              <Link to="#">
                <h3>Terms & conditions</h3>
              </Link>
              <Link to="#">
                <h3>FAQ</h3>
              </Link>
            </Col>
            <Col sm={6} className="footer__media">
              <h3>Connect with us</h3>
              <Link to="#">
                <img src={facebook} className="some" alt="link to facebook" />
              </Link>
              <Link to="#">
                <img src={twitter} className="some" alt="link to twitter" />
              </Link>
              <Link to="#">
                <img src={instagram} className="some" alt="link to instagram" />
              </Link>
              <Link to="#">
                <img src={youtube} className="some" alt="link to youtube" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
