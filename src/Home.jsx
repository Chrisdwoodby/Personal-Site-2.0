import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import upArrow from '../Media/upArrow.png'
import downArrow from '../Media/downArrow.png'

const Home = (props) => {
    var clicks = 0
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
        clicks = 0;
      }
    }
    var rotateUp = function() {
        console.log('up')
    }
    // window.setInterval(rotate, 2000);
    return (
      <div className="App">
        <h1>test component</h1>
        <button onClick={rotate}>click me</button>
        <Row>
            <Col md={6}>
        <div class="circle">
          <div class="inner-div-1" id="top">top</div>
          <div class="inner-div-2" id="left">left</div>
          <div class="inner-div-3" id="right">right</div>
          <div class="inner-div-4" id="bottom">bottom</div>
        </div>
        </Col>
        <Col id="content-row" md={6}>
          <Row id="arrowRow-up"><img onClick={rotate} src={upArrow}/></Row>
          <div id="item-carousel" class="item-1">
            <h4>title 1 here</h4>
            <span>description here</span>
          </div>
          <div id="item-carousel" class="item-2">
            <h4>title 2 here</h4>
            <span>description here</span>
          </div>
          <div id="item-carousel" class="item-3">
            <h4>title 3 here</h4>
            <span>description here</span>
          </div>
          <div id="item-carousel" class="item-4">
            <h4>title 4 here</h4>
            <span>description here</span>
          </div>
          <Row id="arrowRow-down"><img onClick={rotate} src={downArrow}/></Row>
        </Col>
        </Row>
      </div>
    )
}

export default Home;