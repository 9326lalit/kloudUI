import React from 'react';
import "./Home.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import faArrowUp
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



function HeroSection() {
  const img1="https://www.sprih.com/wp-content/uploads/2024/01/Sprih-Homepage-illustration-updated.png";
  return (
    <section className="hero-section" style={{marginBottom:"40px"}}>
      <Container  style={{ width:"100%", padding:"20px", marginTop:"50px"}}>
        <Row  className="align-items-center"> {/* Align items vertically */}
          <Col xs={12} md={8} style={{gap:"60px"}} > 
          {/* xs for mobile, md for desktop */}
            <h1 style={{fontFamily:"IBM Plex Sans",alignItems:"flex-start", fontSize:"64px" , fontWeight:"bold" , color:"#0f2d32"}}>Plan, track, report,<br />and reduce <span className="text-success" style={{fontFamily:"IBM Plex Serif", fontSize:"54px", lineHeight: "54px", color:"#0F2D32"}}>emissions</span></h1>
            <p style={{fontFamily:"IBM Plex Sans" , fontSize:"22px" , fontWeight:"300", lineHeight:"127%", color:"#33333E" , margin:"0px 0px 37px"}}>Create a sustainability strategy that goes beyond regulatory demands to create business impact. Sprih's enterprise sustainability platform turns decarbonization into a competitive edge.</p>
            <div className="mt-4" >
              <Button  style={{fontFamily:"IBM Plex Sans" , fontSize:"18px" , padding:"9px 12px 9px 20px" , color:"#FFFFF" , borderRadius:"50px"}}  variant="dark" className="me-3">Book a Demo 
              <span>  <FontAwesomeIcon icon={faArrowUp} /> </span>
              </Button>
              <Button style={{fontFamily:"IBM Plex Sans" ,fontSize:"18px" , padding:"10px 12px 10px 19px" , color:"#FFFFF" , borderRadius:"50px"}}  variant="dark">Compliance Assessment               <span>  <FontAwesomeIcon icon={faArrowUp} /> </span>
              </Button>
            </div>
            
          </Col>
          <Col xs={12} md={4}  className='text-center'> {/* text-center for better mobile alignment */}
            <div >
              <img src={img1} style={{ width:"349px", height:"376px"}}  />
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;