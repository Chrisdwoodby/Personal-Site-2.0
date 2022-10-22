import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

const Work = () => {
  return (
    <div class="work-page">
      <div id="work-row-raised">
        <Col md={6}></Col>
        <Col id="work-col-raised" md={6}>
          <div><h2>Experience</h2></div>
        </Col>
      </div>
      <div id="work-items-row">
        <Col md={3}><div id="timeline-col-1"></div>
          <h3>Retail Management</h3>
          <article>Customer service and  employee relations focused</article>
        </Col>

        <Col md={3}><div id="timeline-col-2"></div>
          <h3>Hack Reactor</h3>
          <article>Full Stack Software Engineering Immersive</article>
        </Col>

        <Col md={3}><div id="timeline-col-3"></div>
          <h3>Freelance Development</h3>
          <article>React, AWS, Node, and MySQL Focused</article>
        </Col>

        <Col md={3}><div id="timeline-col-4"></div>
          <h3>Front End Engineer</h3>
          <article>Saas oriented Newly aquired startup based in Austin, TX</article>
        </Col>
      </div>
    </div>
    )
}

export default Work;