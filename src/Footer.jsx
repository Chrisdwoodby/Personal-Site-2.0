import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = function() {
  return (
    <div class="footer-main">
      <div class="footer-navigation">
        <a class="footer-nav-item">Porfolio</a>
        <a class="footer-nav-item">Technologies</a>
        <a class="footer-nav-item">Contact</a>
        <a class="footer-nav-item">Blog</a>
      </div>
      <div class="social-icons">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-github"></a>
        <a href="#" class="fa fa-linkedin"></a>
      </div>
    </div>
  )
}

export default Footer;