import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import upArrow from '../Media/upArrow.png';
import plane from '../Media/plane.png';
import bus from '../Media/bus.png';
import truck from '../Media/truck.png';
import wedding from '../Media/wedding.png';
import downArrow from '../Media/downArrow.png';
import { Container } from "react-bootstrap";

const Portfolio = () => {
    var degreeMain = 0;
    var itemTransformDegree = 0;
    var clicks = 0;
    var inView = ''
    var rotate = () => {
      if (clicks === 0) {
        itemTransformDegree = itemTransformDegree - 90;
        degreeMain = degreeMain + 90;
        document.querySelector('.circle').style.transform = `rotate(${degreeMain}deg)`;
        document.querySelector('.inner-div-1').style.transform = `rotate(${itemTransformDegree}deg) scale(1.3)`;
        document.querySelector('.inner-div-2').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-3').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-4').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.item-1').classList.remove('in-view');
        document.querySelector('.item-3').classList.remove('in-view');
        document.querySelector('.item-2').classList.remove('in-view');
        document.querySelector('.item-4').classList.add('in-view');
        document.querySelector('.inner-div-1').style.filter = 'brightness(100%)';
        document.querySelector('.inner-div-2').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-3').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-4').style.filter = 'brightness(50%)';
        clicks = 1;
      } else if (clicks === 1) {
        itemTransformDegree = itemTransformDegree - 90;
        degreeMain = degreeMain + 90;
        document.querySelector('.circle').style.transform = `rotate(${degreeMain}deg)`;
        document.querySelector('.inner-div-1').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-2').style.transform = `rotate(${itemTransformDegree}deg) scale(1.3)`;
        document.querySelector('.inner-div-3').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-4').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.item-2').classList.remove('in-view');
        document.querySelector('.item-1').classList.remove('in-view');
        document.querySelector('.item-4').classList.remove('in-view');
        document.querySelector('.item-3').classList.add('in-view');
        document.querySelector('.inner-div-1').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-2').style.filter = 'brightness(100%)';
        document.querySelector('.inner-div-3').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-4').style.filter = 'brightness(50%)';
        clicks = 2;
      } else if (clicks === 2) {
        itemTransformDegree = itemTransformDegree - 90;
        degreeMain = degreeMain + 90;
        document.querySelector('.circle').style.transform = `rotate(${degreeMain}deg)`;
        document.querySelector('.inner-div-1').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-2').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-3').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-4').style.transform = `rotate(${itemTransformDegree}deg) scale(1.3)`;
        document.querySelector('.item-3').classList.remove('in-view');
        document.querySelector('.item-4').classList.remove('in-view');
        document.querySelector('.item-1').classList.remove('in-view');
        document.querySelector('.item-2').classList.add('in-view');
        document.querySelector('.inner-div-1').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-2').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-3').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-4').style.filter = 'brightness(100%)';
        clicks = 3;
      } else if (clicks === 3) {
        itemTransformDegree = itemTransformDegree - 90;
        degreeMain = degreeMain + 90;
        document.querySelector('.circle').style.transform = `rotate(${degreeMain}deg)`;
        document.querySelector('.inner-div-1').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-2').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.inner-div-3').style.transform = `rotate(${itemTransformDegree}deg) scale(1.3)`;
        document.querySelector('.inner-div-4').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
        document.querySelector('.item-4').classList.remove('in-view');
        document.querySelector('.item-2').classList.remove('in-view');
        document.querySelector('.item-3').classList.remove('in-view');
        document.querySelector('.item-1').classList.add('in-view');
        document.querySelector('.inner-div-1').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-2').style.filter = 'brightness(50%)';
        document.querySelector('.inner-div-3').style.filter = 'brightness(100%)';
        document.querySelector('.inner-div-4').style.filter = 'brightness(50%)';
        clicks = 0;
      }
    }
    var rotateBack = () => {
        if (clicks === 0) {
          itemTransformDegree = itemTransformDegree + 90;
          degreeMain = degreeMain - 90;
          document.querySelector('.circle').style.transform = `rotate(${degreeMain}deg)`;
          document.querySelector('.inner-div-1').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-2').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-3').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-4').style.transform = `rotate(${itemTransformDegree}deg) scale(1.3)`;
          document.querySelector('.item-1').classList.remove('in-view');
          document.querySelector('.item-3').classList.remove('in-view');
          document.querySelector('.item-4').classList.remove('in-view');
          document.querySelector('.item-2').classList.add('in-view');
          document.querySelector('.inner-div-1').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-2').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-3').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-4').style.filter = 'brightness(100%)';
          clicks = 3;
          console.log('wedding', clicks)
        } else if (clicks === 1) {
          itemTransformDegree = itemTransformDegree + 90;
          degreeMain = degreeMain - 90;
          document.querySelector('.circle').style.transform = `rotate(${degreeMain}deg)`;
          document.querySelector('.inner-div-1').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-2').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-3').style.transform = `rotate(${itemTransformDegree}deg) scale(1.3)`;
          document.querySelector('.inner-div-4').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.item-2').classList.remove('in-view');
          document.querySelector('.item-3').classList.remove('in-view');
          document.querySelector('.item-4').classList.remove('in-view');
          document.querySelector('.item-1').classList.add('in-view');
          document.querySelector('.inner-div-1').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-2').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-3').style.filter = 'brightness(100%)';
          document.querySelector('.inner-div-4').style.filter = 'brightness(50%)';
          clicks = 0;
          console.log('TRANSIT', clicks)
        } else if (clicks === 2) {
          itemTransformDegree = itemTransformDegree + 90;
          degreeMain = degreeMain - 90;
          document.querySelector('.circle').style.transform = `rotate(${degreeMain}deg)`;
          document.querySelector('.inner-div-1').style.transform = `rotate(${itemTransformDegree}deg) scale(1.3)`;
          document.querySelector('.inner-div-2').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-3').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-4').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.item-3').classList.remove('in-view');
          document.querySelector('.item-2').classList.remove('in-view');
          document.querySelector('.item-1').classList.remove('in-view');
          document.querySelector('.item-4').classList.add('in-view');
          document.querySelector('.inner-div-1').style.filter = 'brightness(100%)';
          document.querySelector('.inner-div-2').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-3').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-4').style.filter = 'brightness(50%)';
          clicks = 1;
          console.log('flight', clicks)
        } else if (clicks === 3) {
          itemTransformDegree = itemTransformDegree + 90;
          degreeMain = degreeMain - 90;
          document.querySelector('.circle').style.transform = `rotate(${degreeMain}deg)`;
          document.querySelector('.inner-div-1').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-2').style.transform = `rotate(${itemTransformDegree}deg) scale(1.3)`;
          document.querySelector('.inner-div-3').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.inner-div-4').style.transform = `rotate(${itemTransformDegree}deg) scale(1.0)`;
          document.querySelector('.item-4').classList.remove('in-view');
          document.querySelector('.item-2').classList.remove('in-view');
          document.querySelector('.item-1').classList.remove('in-view');
          document.querySelector('.item-3').classList.add('in-view');
          document.querySelector('.inner-div-1').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-2').style.filter = 'brightness(100%)';
          document.querySelector('.inner-div-3').style.filter = 'brightness(50%)';
          document.querySelector('.inner-div-4').style.filter = 'brightness(50%)';
          clicks = 2;
          console.log('transit', clicks)
        }
      }
    // window.setInterval(rotate, 2000);
    window.addEventListener('scroll', function() {
        var element = document.querySelector('#content-row');
        var position = element.getBoundingClientRect();
    
        // checking whether fully visible
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add("content-row-in-view");
        }
    
        // checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
        }
    });
    return (
      <div id="Portfolio-page" class="porfolio">
        {/* <Container> */}
        <div id="item-wheel">
        <Col id="spinning-wheel" md={6} className="d-flex flex-row mb-3">
        <div class="circle">
          <div class="inner-div-1 projects" id="top"><img id="portfolio-img" src={plane}/></div>
          <div class="inner-div-2 projects" id="left"><img id="portfolio-img" src={bus}/></div>
          <div class="inner-div-3 projects brighten" id="right"><img id="portfolio-img" src={truck}/></div>
          <div class="inner-div-4 projects" id="bottom"><img id="portfolio-img" src={wedding}/></div>
        </div>
        </Col>
        <Col id="content-row" md={6} >
          <div><h2>Portfolio Details</h2></div>
          <div class="item">
          <div id="item-carousel" class="item-1 in-view">
            <h4>DRS Official Website</h4>
            <span id="item-tchnologies">WordPress | JavaScript | Ahref's | CSS</span>
            <br/>
            <span>Re-built the company website utilizing Wordpress and the tools of Ahref's to analyze the SEO keywords and maintain site rankings</span>
          </div>
          </div>
          <div class="item">
          <div id="item-carousel" class="item-2">
            <h4>Wedding RSVP Website</h4>
            <span id="item-tchnologies">React | JavaScript | CSS | Bootstrap</span>
            <br/>
            <span>Flight tracker which is capable of displaying real time flight data while also providing the user with a hashed and secure log in/sign up.</span>
          </div>
          </div>
          <div class="item">
          <div id="item-carousel" class="item-3">
            <h4>Transit Management Consultants</h4>
            <span id="item-tchnologies">React | AWS | Bootstrap | Webpack | CSS</span>
            <br/>
            <span>Flight tracker which is capable of displaying real time flight data while also providing the user with a hashed and secure log in/sign up.</span>
          </div>
          </div>
          <div class="item">
          <div class="item-4" id="item-carousel">
            <h4>Flight Tracker</h4>
            <span id="item-tchnologies">React | JavaScript | MySQL | Bootstrap | Webpack | AWS</span>
            <br/>
            <span>Flight tracker which is capable of displaying real time flight data while also providing the user with a hashed and secure log in/sign up.</span>
          </div>
          </div>
          {/* <Row id="arrowRow-down"><img onClick={rotate} src={downArrow}/></Row> */}
          <div class="nav-arrows">
            <a onClick={rotateBack} class="previous round">&#8249;</a>
            <a onClick={rotate} class="next round">&#8250;</a>
          </div>
        </Col>
        </div>
        {/* </Container> */}
      </div>
    )
}

export default Portfolio;