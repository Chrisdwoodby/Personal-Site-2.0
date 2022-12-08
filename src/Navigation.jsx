import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';

const Navigation = () => {

    setTimeout(() => {
            document.getElementById('body').className = 'loaded';
    }, 1200) 

  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const scrollToPortfolio = () => {
    handleCloseMenu()
    var elmntToView = document.getElementById("Portfolio-page");
    setTimeout(() => {
      elmntToView.scrollIntoView();  
    }, 400) 
  }
  const scrollToSkills = () => {
    handleCloseMenu()
    var elmntToView = document.getElementById("skills-page");
    setTimeout(() => {
      elmntToView.scrollIntoView();  
    }, 400) 
  }
  const scrollToExperience = () => {
    handleCloseMenu()
    var elmntToView = document.getElementById("Experience-page");
    setTimeout(() => {
      elmntToView.scrollIntoView();  
    }, 400) 
  }
  const scrollToAbout = () => {
    handleCloseMenu()
    var elmntToView = document.getElementById("about-component");
    setTimeout(() => {
      elmntToView.scrollIntoView();  
    }, 400) 
  }

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
            <Col><a class="nav-left" href="#skills-page">Proficiencies</a></Col>
            <Col><a class="nav-right" href="#about-component">About</a></Col>
            <div class="mobile-menu">
              <button onClick={handleShowMenu} class="btn"><i class="fa fa-bars"></i> Menu</button>
            </div>
            <Col><a class="nav-right" href="#Experience-page">Experience</a></Col>
          </div>
          <Offcanvas show={showMenu} onHide={handleCloseMenu}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <a class="nav-mobile" onClick={scrollToPortfolio}>Portfolio</a>
            <a class="nav-mobile" onClick={scrollToSkills}>Proficiencies</a>
            <a class="nav-mobile" onClick={scrollToExperience}>Experience</a>
            <a class="nav-mobile" onClick={scrollToAbout}>About</a>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Contact
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">Email: Chrisdwoodby@gmail.com</Dropdown.Item>
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