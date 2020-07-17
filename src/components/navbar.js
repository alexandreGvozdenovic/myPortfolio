import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap'
import {Link, animateScroll as scroll } from 'react-scroll'

function NavBar() {

  var white = '#F4F4F9'
  var black = '#2F4550'

  const [navBackground, setNavBackground] = useState('')
  const [navFontColor, setNavFontColor] = useState(white)
  const [navBoxShadow, setNavBoxShadow] = useState('')
  const [navExpanded, setNavExpanded] = useState(false)

  document.addEventListener("scroll", () => {
    const backgroundcolor = window.scrollY < 100 ? "" : white;
    const fontColor = window.scrollY < 100 ? white : black;
    const boxShadow = window.scrollY < 100 ? '' : '0px 4px 10px 1px rgba(47, 69, 80,0.2)';
    setNavBackground(backgroundcolor);
    setNavFontColor(fontColor);
    setNavBoxShadow(boxShadow);
  });

  function mouseover(id) {
    document.getElementById(id).style.color = navBackground === white ? 'rgba(47, 69, 80, 0.75)' : 'rgba(245, 245, 250, 0.75)'
    document.getElementById(id).style.cursor = 'pointer'
  }
  function mouseout(id) { 
    document.getElementById(id).style.color = navFontColor; 
  }
  var scrollToTop = () => {
    scroll.scrollToTop();
  }; 
  return (

          <Navbar expanded={navExpanded} expand='lg' className='fixed-top navbar-container' style={{backgroundColor: navBackground, color: navFontColor, boxShadow: navBoxShadow }}>
            <Navbar.Brand >
            <span
                id='name'
                className='name' 
                onClick={ () => {scrollToTop();setNavExpanded(false)}}
                style={{color: navFontColor}}
                onMouseOver={ () => mouseover('name')} onMouseOut={ () => mouseout('name')}
              >
                Alexandre Gvozdenovic
              </span>
            </Navbar.Brand>
            <Navbar.Toggle style={{borderColor: navFontColor}} onClick={()=>setNavExpanded(!navExpanded)}><i className="fas fa-bars" style={{color: navFontColor}} ></i></Navbar.Toggle>
            <Navbar.Collapse >
            <Nav className='justify-content-between nav-container' style={{width: '100%'}}>
              <Nav.Item>
              <Link
                id='about-nav'
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{color: navFontColor}}
                onMouseOver={ () => mouseover('about-nav')} onMouseOut={ () => mouseout('about-nav')}
                onClick = { () => setNavExpanded(false)}
              >
                A propos
              </Link>
              </Nav.Item>
              <Nav.Item>
              <Link
                id='project-nav'
                activeClass='active'
                to='project'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{color: navFontColor}}
                onMouseOver={ () => mouseover('project-nav')} onMouseOut={ () => mouseout('project-nav')}
                onClick = { () => setNavExpanded(false)}
              >
                Projets
              </Link>
              </Nav.Item>
              <Nav.Item>
              <Link
                id='contact-nav'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{color: navFontColor}}
                onMouseOver={ () => mouseover('contact-nav')} onMouseOut={ () => mouseout('contact-nav')}
                onClick = { () => setNavExpanded(false)}
              >
                Contact
              </Link>
              </Nav.Item>
              <Nav.Item>CV</Nav.Item>
              <Nav.Item>
              <span className='text-right' onClick = { () => setNavExpanded(false)}>
                <a id='Linkedin' className='link' href='https://www.linkedin.com/in/alexandre-gvozdenovic-5b277813a/' target="_blank" rel="noopener noreferrer" style={{color: navFontColor}} onMouseOver={ () => mouseover('Linkedin')} onMouseOut={ () => mouseout('Linkedin')}>
                  <i className="fab fa-linkedin-in nav-icons first-icon"></i>
                </a>
                <a id='Github' className='link' href='https://github.com/alexandreGvozdenovic' target="_blank" rel="noopener noreferrer" style={{color: navFontColor}} onMouseOver={ () => mouseover('Github')} onMouseOut={ () => mouseout('Github')}>
                  <i className="fab fa-github nav-icons"></i>
                </a>
              </span>
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
  );
}

export default NavBar;
