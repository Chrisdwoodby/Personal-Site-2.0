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
        <a id="facebook" href="https://www.facebook.com/chris.woodby.1/" target="_blank" class="fa fa-facebook"></a>
        <a id="insta" href="https://www.instagram.com/chriswoodby/" target="_blank" class="fa fa-instagram"></a>
        <a id="git" href="https://github.com/Chrisdwoodby" target="_blank" class="fa fa-github"></a>
        <a id="linkedin" href="https://www.linkedin.com/in/christopher-woodby-766a88202/" target="_blank" class="fa fa-linkedin"></a>
      </div>
    </div>
  )
}

export default Footer;