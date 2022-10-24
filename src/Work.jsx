import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";

const Work = () => {
  return (
    <div id="Experience-page" class="work-page">
      <div id="work-row-raised">
        <Col md={6}></Col>
        <Col id="work-col-raised" md={6}>
          <div><h2>Experience</h2></div>
        </Col>
      </div>
      <div id="work-items-row">
        <Col md={3}><div id="timeline-col-1"></div>
          <h4>Retail Management</h4>
          <article>Customer service and  employee relations focused</article>
        </Col>

        <Col md={3}><div id="timeline-col-2"></div>
          <h4>Hack Reactor</h4>
          <article>Full Stack Software Engineering Immersive</article>
        </Col>

        <Col md={3}><div id="timeline-col-3"></div>
          <h4>Freelance Development</h4>
          <article>React, AWS, Node, and MySQL Focused</article>
        </Col>

        <Col md={3}><div id="timeline-col-4"></div>
          <h4>Front End Engineer</h4>
          <article>Saas oriented Newly aquired startup based in Austin, TX</article>
        </Col>
      </div>
    </div>
    )
}

export default Work;