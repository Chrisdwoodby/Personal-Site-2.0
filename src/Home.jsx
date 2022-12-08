import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
import resume from "../dist/chris-woodby-resume.pdf";

const Home = (props) => {

    return (
      <Container>
        <Row id="home-row">
          <Col md={6}>
            <div class="headshot" ></div>
          </Col>
          <Col md={6}>
            <h1 id="home-title-header">Front End Web Developer</h1>
            <div class="box-2">
              <a id="resume-btn" href={resume} download>Download Resume</a>
            </div>
          </Col>
        </Row>
      </Container>
    )
}

export default Home;