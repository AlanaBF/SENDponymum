import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "/logo.png";

const NotFound = () => {
  return (
    <Container  className="page-background">
      <Container className="notFoundPageInner">
        <div className="notFoundPageContent">
          <div className="notFoundPageText">
            <p>Oops...</p>
            <span>404</span>
            <p>Page Not Found</p>
            <Link to="/">Go To Home Page</Link>
          </div>
          <img className="pony-logo" src={Logo}></img>
        </div>
      </Container>
    </Container>
  );
};

export default NotFound;
