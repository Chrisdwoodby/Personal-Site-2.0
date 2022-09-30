import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Navigation = () => {
 
    setTimeout(() => {
        // window.onload = function() {
            document.getElementById('body').className = 'loaded';
        // };  
    }, 1200) 

  return (
      <div class="top">
        <Container>
          <Row id="name-row">
              <h2 id="name-left">Christopher</h2>
              <span id="name-divider"></span>
              <h2 id="name-right">Woodby</h2>
          </Row>
          <Row id="navigation-row">
            <Col><a class="nav-left">Portfolio</a></Col>
            <Col><a class="nav-left">Technologies</a></Col>
            <Col><a class="nav-right">Contact</a></Col>
            <Col><a class="nav-right">Blog</a></Col>
          </Row>
        </Container>
      </div>
  )
}

export default Navigation;