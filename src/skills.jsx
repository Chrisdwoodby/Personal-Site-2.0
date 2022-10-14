import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import laptop from '../Media/laptop.png'
import aws from '../Media/aws-logo.png'
import node from '../Media/node.png'
import javascript from '../Media/javascript.png'
import react from '../Media/react.png'
import typescript from '../Media/typescript.png'

const Skills = () => {
    window.addEventListener('scroll', function() {
        var element = document.querySelector('#logo-icons');
        var position = element.getBoundingClientRect();
    
        // checking whether fully visible
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add("logo-in-view");
        }
    
        // checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
        }
    });
  return (
    <div class="skills-page">
        <Row>
            <Col id="title-row" md={6}>
                <Row><h2>Skills</h2></Row>
            </Col>
            <Col md={6}></Col>
        </Row>
        <Row id="logo-icons">
            <Col><img id="aws-logo" src={aws}/></Col>
            <Col><img id="node-logo" src={node}/></Col>
            <Col><img id="javascript-logo" src={javascript}/></Col>
            <Col><img id="typescript-logo" src={typescript}/></Col>
            <Col><img id="react-logo" src={react}/></Col>
            <Col><img id="aws-logo2" src={aws}/></Col>
        </Row>
        <Row id="laptop-image"><img src={laptop}/></Row>
    </div>
  )
}

export default Skills;