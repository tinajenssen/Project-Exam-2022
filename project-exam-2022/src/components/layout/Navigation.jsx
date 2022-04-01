import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="navbar__container">
        <Navbar.Brand>
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/browse" className="nav-link">
              Browse
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
            <NavLink to="/login" className="nav-link">
              logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
