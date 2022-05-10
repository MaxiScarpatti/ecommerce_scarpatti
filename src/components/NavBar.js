import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/">
          Inicio
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/plantas/categoria/suculentas" className="Nav.Link">
                Suculentas
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/plantas/categoria/plantines" className="Nav.Link">
                Plantines
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/plantas/categoria/rosas" className="Nav.Link">
                Rosas
              </Link>
            </Nav.Link>
            <NavDropdown title="Nuestro vivero" id="basic-nav-dropdown">
              <NavDropdown.Item NavLink to="#">
                Contacto
              </NavDropdown.Item>
              <NavDropdown.Item NavLink to="#">
                Locales
              </NavDropdown.Item>
              <NavDropdown.Item Navlink to="#">
                Preguntas frecuentes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item Navlink to="#">
                Política de devolución
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
