import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import aviator from '../Media/aviator.jpeg';
import japan from '../Media/japan.jpeg';

const About = function() {
    
    window.addEventListener('scroll', function() {
        var aboutContainer = document.querySelector('.about-main-container');
        var position = aboutContainer.getBoundingClientRect();
    
        // checking whether fully visible
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
        }
    
        // checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
            aboutContainer.classList.add("about-main-container-in-view");
        }
    });


    return (
      <div id="about-component" class="about-section">
        <div >
          <Col id="about-col-raised" md={6}>
            <div><h2>About</h2></div>
          </Col>
          <Col md={6}></Col>
        </div>
        <div class="about-main-container">
          <Col id="left-circle-img" md={4}><img src={aviator}/></Col>
          <Col id="middle-text-about-section" md={4}>
            <div id="about-row">
            <span id="about-left">Aviator</span><span id="about-divider"></span><span id="about-right">World Traveler</span>
            </div>
            <article>I'm Chris, a tenacious software engineer with a passion for creating intuitive and beautiful web applications. When I’m not behind the keyboard I will typically be overseas taking in the culture and scenery of a new country. In addition to flying as a passenger I have been training to become a private pilot with the hopes to own and maintain my own aircraft.</article>
          </Col>
          <Col id="right-circle-img" md={4}><img src={japan}/></Col>
        </div>
      </div>
    )
}

export default About;