import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../img/logo_white.png";

function Logo() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Logo;
