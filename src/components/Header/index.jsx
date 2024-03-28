import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "/SENDponymum.png";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navigation navbar-expand-lg  justify-content-md-center justify-content-start"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbarBrand">
            <img src={Logo} alt="logo" width="50px" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fa-solid fa-bars"></i>
        </Navbar.Toggle>

        <Navbar.Collapse className="navbar-collapse collapse justify-content-between align-items-center w-100">
          <Nav className="me-auto navbar-nav mx-auto text-md-center text-left">
            <LinkContainer to="/">
              <Nav.Link className="navLink">Home</Nav.Link>
            </LinkContainer>
            {/* Blog  */}
            <LinkContainer to="/Blog">
              <Nav.Link className="navLink">Blog Spot</Nav.Link>
            </LinkContainer>
            {/* Contacts and info */}
            <LinkContainer to="/Contact">
              <Nav.Link className="navLink">Contact Me</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
            <div className="navIcons">
              <a
                href="https://www.facebook.com/sendponymum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa navbarIcons fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/sendponymum/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa navbarIcons fa-instagram"></i>
              </a>{" "}
              <a
                href="https://www.linkedin.com/in/rebecca-m-938a28145/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa navbarIcons fa-linkedin"></i>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
