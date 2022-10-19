import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

const Work = () => {
  return (
    <div class="work-page">
      {/* <Container> */}
      <div id="work-row-raised">
        <Col md={6}></Col>
        <Col id="work-col-raised" md={6}>
          <div><h2>Experience</h2></div>
        </Col>
      </div>
      <div id="work-items-row">
        <Col id="timeline-col-1" md={3}></Col>
        <Col id="timeline-col-2" md={3}></Col>
        <Col id="timeline-col-3" md={3}></Col>
        <Col id="timeline-col-4" md={3}></Col>
      </div>
      {/* </Container> */}
    </div>
    )
}

export default Work;