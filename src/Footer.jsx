import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Footer = function() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="footer-main">
      <div class="footer-navigation">
        <a class="footer-nav-item">Porfolio</a>
        <a class="footer-nav-item">Technologies</a>
        <a class="footer-nav-item" onClick={handleShow}>Contact</a>
        <a class="footer-nav-item" href="https://medium.com/@chrisdwoodby" target="_blank">Blog</a>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="modal-title">Lets Connect</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal-footer">
            <span id="email-footer">Email: Chrisdwoodby@gmail.com</span>
            <br/>
            <a href="https://www.linkedin.com/in/christopher-woodby-766a88202/"><span>Message Me on LinkedIn</span></a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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