import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import upArrow from '../Media/upArrow.png'
import downArrow from '../Media/downArrow.png'

const Skills = () => {
    var clicks = 0;
    var rotate = () => {
      if (clicks === 0) {
        document.querySelector('.circle').style.transform = 'rotate(90deg)';
        document.querySelector('.inner-div-1').style.transform = 'rotate(-90deg)';
        document.querySelector('.inner-div-2').style.transform = 'rotate(-90deg)';
        document.querySelector('.inner-div-3').style.transform = 'rotate(-90deg)';
        document.querySelector('.inner-div-4').style.transform = 'rotate(-90deg)';
        document.querySelector('.item-1').style.display = 'none';
        document.querySelector('.item-3').style.display = 'none';
        document.querySelector('.item-4').style.display = 'none';
        document.querySelector('.item-2').style.display = 'inline-block';
        // document.querySelector('.inner-div-1').style.display = 'unset';
        // document.querySelector('.inner-div-2').style.display = 'none';
        // document.querySelector('.inner-div-3').style.display = 'none';
        // document.querySelector('.inner-div-4').style.display = 'none';
        clicks = 1;

      } else if (clicks === 1) {
        document.querySelector('.circle').style.transform = 'rotate(180deg)';
        document.querySelector('.inner-div-1').style.transform = 'rotate(-180deg)';
        document.querySelector('.inner-div-2').style.transform = 'rotate(-180deg)';
        document.querySelector('.inner-div-3').style.transform = 'rotate(-180deg)';
        document.querySelector('.inner-div-4').style.transform = 'rotate(-180deg)';
        document.querySelector('.item-2').style.display = 'none';
        document.querySelector('.item-3').style.display = 'inline-block';
        document.querySelector('.item-1').style.display = 'none';
        document.querySelector('.item-4').style.display = 'none';
        // document.querySelector('.inner-div-1').style.display = 'none';
        // document.querySelector('.inner-div-2').style.display = 'unset';
        // document.querySelector('.inner-div-3').style.display = 'none';
        // document.querySelector('.inner-div-4').style.display = 'none';
        clicks = 2;
      } else if (clicks === 2) {
        document.querySelector('.circle').style.transform = 'rotate(270deg)';
        document.querySelector('.inner-div-1').style.transform = 'rotate(-270deg)';
        document.querySelector('.inner-div-2').style.transform = 'rotate(-270deg)';
        document.querySelector('.inner-div-3').style.transform = 'rotate(-270deg)';
        document.querySelector('.inner-div-4').style.transform = 'rotate(-270deg)';
        document.querySelector('.item-3').style.display = 'none';
        document.querySelector('.item-4').style.display = 'inline-block';
        document.querySelector('.item-2').style.display = 'none';
        document.querySelector('.item-1').style.display = 'none';
        // document.querySelector('.inner-div-1').style.display = 'none';
        // document.querySelector('.inner-div-2').style.display = 'none';
        // document.querySelector('.inner-div-3').style.display = 'none';
        // document.querySelector('.inner-div-4').style.display = 'unset';
        clicks = 3;
      } else if (clicks === 3) {
        document.querySelector('.circle').style.transform = 'rotate(360deg)';
        document.querySelector('.inner-div-1').style.transform = 'rotate(-360deg)';
        document.querySelector('.inner-div-2').style.transform = 'rotate(-360deg)';
        document.querySelector('.inner-div-3').style.transform = 'rotate(-360deg)';
        document.querySelector('.inner-div-4').style.transform = 'rotate(-360deg)';
        document.querySelector('.item-4').style.display = 'none';
        document.querySelector('.item-1').style.display = 'inline-block';
        document.querySelector('.item-2').style.display = 'none';
        document.querySelector('.item-3').style.display = 'none';
        // document.querySelector('.inner-div-1').style.display = 'none';
        // document.querySelector('.inner-div-2').style.display = 'unset';
        // document.querySelector('.inner-div-3').style.display = 'none';
        // document.querySelector('.inner-div-4').style.display = 'none';
        clicks = 0;
      }
    }
    var rotateUp = () => {
        if (clicks === 0) {
          document.querySelector('.circle').style.transform = 'rotate(90deg)';
          document.querySelector('.inner-div-1').style.transform = 'rotate(-450deg)';
          document.querySelector('.inner-div-2').style.transform = 'rotate(-450deg)';
          document.querySelector('.inner-div-3').style.transform = 'rotate(-450deg)';
          document.querySelector('.inner-div-4').style.transform = 'rotate(-450deg)';
          document.querySelector('.item-1').style.display = 'none';
          document.querySelector('.item-3').style.display = 'none';
          document.querySelector('.item-4').style.display = 'inline-block';
          document.querySelector('.item-2').style.display = 'none';
          clicks = 1;
        } else if (clicks === 1) {
          document.querySelector('.circle').style.transform = 'rotate(180deg)';
          document.querySelector('.inner-div-1').style.transform = 'rotate(-540deg)';
          document.querySelector('.inner-div-2').style.transform = 'rotate(-540deg)';
          document.querySelector('.inner-div-3').style.transform = 'rotate(-540deg)';
          document.querySelector('.inner-div-4').style.transform = 'rotate(-540deg)';
          document.querySelector('.item-2').style.display = 'none';
          document.querySelector('.item-3').style.display = 'inline-block';
          document.querySelector('.item-1').style.display = 'none';
          document.querySelector('.item-4').style.display = 'none';
          clicks = 2;
        } else if (clicks === 2) {
          document.querySelector('.circle').style.transform = 'rotate(270deg)';
          document.querySelector('.inner-div-1').style.transform = 'rotate(-630deg)';
          document.querySelector('.inner-div-2').style.transform = 'rotate(-630deg)';
          document.querySelector('.inner-div-3').style.transform = 'rotate(-630deg)';
          document.querySelector('.inner-div-4').style.transform = 'rotate(-630deg)';
          document.querySelector('.item-3').style.display = 'none';
          document.querySelector('.item-4').style.display = 'none';
          document.querySelector('.item-2').style.display = 'inline-block';
          document.querySelector('.item-1').style.display = 'none';
          clicks = 3;
        } else if (clicks === 3) {
          document.querySelector('.circle').style.transform = 'rotate(360deg)';
          document.querySelector('.inner-div-1').style.transform = 'rotate(-720deg)';
          document.querySelector('.inner-div-2').style.transform = 'rotate(-720deg)';
          document.querySelector('.inner-div-3').style.transform = 'rotate(-720deg)';
          document.querySelector('.inner-div-4').style.transform = 'rotate(-720deg)';
          document.querySelector('.item-4').style.display = 'none';
          document.querySelector('.item-1').style.display = 'inline-block';
          document.querySelector('.item-2').style.display = 'none';
          document.querySelector('.item-3').style.display = 'none';
          clicks = 0;
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
            console.log('Element is partially visible in screen');
        }
    });
    return (
      <div class="porfolio">
        <Row id="item-wheel">
        <Col id="spinning-wheel" md={6} className="d-flex flex-row mb-3">
        <div class="circle">
          <div class="inner-div-1" id="top">top</div>
          <div class="inner-div-2" id="left">left</div>
          <div class="inner-div-3" id="right">right</div>
          <div class="inner-div-4" id="bottom">bottom</div>
        </div>
        </Col>
        <Col id="content-row" md={6} >
          <Row><h2>Portfolio Details</h2></Row>
          <Row id="arrowRow-up"><img onClick={rotateUp} src={upArrow}/></Row>
          <div id="item-carousel" class="item-1">
            <h4>title 1 here</h4>
            <span id="item-tchnologies">React | JavaScript | MySQL | Bootstrap | Webpack | API's</span>
            <span>Flight tracker which is capable of displaying real time flight data while also providing the user with a hashed and secure log in/sign up.</span>
          </div>
          <div id="item-carousel" class="item-2">
            <h4>title 2 here</h4>
            <span id="item-tchnologies">React | JavaScript | MySQL | Bootstrap | Webpack | API's</span>
            <span>Flight tracker which is capable of displaying real time flight data while also providing the user with a hashed and secure log in/sign up.</span>
          </div>
          <div id="item-carousel" class="item-3">
            <h4>title 3 here</h4>
            <span id="item-tchnologies">React | JavaScript | MySQL | Bootstrap | Webpack | API's</span>
            <span>Flight tracker which is capable of displaying real time flight data while also providing the user with a hashed and secure log in/sign up.</span>
          </div>
          <div id="item-carousel" class="item-4">
            <h4>title 4 here</h4>
            <span id="item-tchnologies">React | JavaScript | MySQL | Bootstrap | Webpack | API's</span>
            <span>Flight tracker which is capable of displaying real time flight data while also providing the user with a hashed and secure log in/sign up.</span>
          </div>
          {/* <Row id="arrowRow-down"><img onClick={rotate} src={downArrow}/></Row> */}
        </Col>
        </Row>
      </div>
    )
}

export default Skills;