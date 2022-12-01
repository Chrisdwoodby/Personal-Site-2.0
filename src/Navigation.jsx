import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    setTimeout(() => {
            document.getElementById('body').className = 'loaded';
    }, 1200) 

  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
      <div class="top">
        <Container>
          <Row id="name-row">
              <h2 id="name-left">Christopher</h2>
              <span id="name-divider"></span>
              <h2 id="name-right">Woodby</h2>
          </Row>
          <div id="navigation-row">
            <Col><a class="nav-left" href="#Portfolio-page">Portfolio</a></Col>
            <Col><a class="nav-left" href="#skills-page">Technologies</a></Col>
            <Col><a class="nav-right" onClick={handleShow}>Contact</a></Col>
            <div class="mobile-menu">
              <button onClick={handleShowMenu} class="btn"><i class="fa fa-bars"></i> Menu</button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Contact Me</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <Col><a class="nav-right" href="#Experience-page">Experience</a></Col>
          </div>
          <Offcanvas show={showMenu} onHide={handleCloseMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <a class="nav-mobile" href="#Portfolio-page">Portfolio</a>
            <a class="nav-mobile" href="#skills-page">Technologies</a>
            <a class="nav-mobile" href="#Experience-page">Experience</a>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Contact
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item tel="5127453863">Phone (512) 745-3863</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Email</Dropdown.Item>
                <Dropdown.Item href="https://www.linkedin.com/in/christopher-woodby-766a88202/">LinkedIn</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Offcanvas.Body>
        </Offcanvas>
        </Container>
      </div>
  )
}

export default Navigation;