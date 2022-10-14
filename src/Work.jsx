import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Work = () => {
  return (
    <div class="work-page">
      <Row>
        <Col md={6}></Col>
        <Col id="work-col-raised" md={6}>
          <Row><h2>Experience</h2></Row>
        </Col>
      </Row>
    </div>
    )
}

export default Work;