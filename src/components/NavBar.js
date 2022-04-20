import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Productos</Nav.Link>
              <Nav.Link href="#link">Tips y cuidados</Nav.Link>
              <NavDropdown title="Nuestro vivero" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Locales</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Preguntas frecuentes</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Política de devolución</NavDropdown.Item>
              </NavDropdown><CartWidget/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

)
}

export default NavBar