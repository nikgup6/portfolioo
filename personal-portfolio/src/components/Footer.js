import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/nikunj.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nikunj-gupta-b66b94258/" target='_blank'><img src={navIcon1} alt="" /></a>
              <a href="https://www.github.com/nikgup6" target='_blank'><img src={navIcon2} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
