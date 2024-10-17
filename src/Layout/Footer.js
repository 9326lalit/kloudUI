import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center"> {/* Vertically align items */}
          <Col md={4} className="order-md-1 order-2"> {/* Order for mobile-first */}
            <div className="footer-logo">
              <img src={"https://www.sprih.com/wp-content/uploads/2023/12/SOC.png"} alt="Sprih Logo" />
              <p>Sprih</p>
            </div>
            <p className="text-muted">GENERAL & SALES ENQUIRIES</p>
            <p className="text-muted">sales@sprih.com</p>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
            <p className="copyright text-muted mt-3">&copy; 2024 Sprih. All rights reserved.</p>
          </Col>
          <Col md={4} className="order-md-2 order-1"> {/* Order for mobile-first */}
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="order-md-3 order-3"> {/* Order for mobile-first */}
            <div className="footer-section">
              <h3>Solutions</h3>
              <ul>
                <li><a href="#">Measure</a></li>
                <li><a href="#">Benchmark</a></li>
                <li><a href="#">Plan</a></li>
                <li><a href="#">Report</a></li>
                <li><a href="#">Exchange</a></li>
              </ul>
            </div>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;