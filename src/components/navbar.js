import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'react-bootstrap'
import {Link, animateScroll as scroll } from 'react-scroll'

function NavBar() {

  var white = '#F4F4F9'
  var black = '#2F4550'

  const [navBackground, setNavBackground] = useState('')
  const [navFontColor, setNavFontColor] = useState(white)
  const [navBoxShadow, setNavBoxShadow] = useState('')

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
      <Container className='fixed-top' fluid='true'>
        <Row className='nav' style={{backgroundColor: navBackground, color: navFontColor, boxShadow: navBoxShadow }}>
            <Col xs={{span:2, offset:1}}>
              <span
                id='name'
                className='name' 
                onClick={ () => scrollToTop()}
                style={{color: navFontColor}}
                onMouseOver={ () => mouseover('name')} onMouseOut={ () => mouseout('name')}
              >
                Alexandre Gvozdenovic
              </span>
            </Col>
            <Col xs={2}>
              <Link
                id='about'
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{color: navFontColor}}
                onMouseOver={ () => mouseover('about')} onMouseOut={ () => mouseout('about')}
              >
                A propos
              </Link>
            
            </Col>
            <Col xs={2}>
              <Link
                id='project'
                activeClass='active'
                to='project'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{color: navFontColor}}
                onMouseOver={ () => mouseover('project')} onMouseOut={ () => mouseout('project')}
              >
                Projets
              </Link>
            </Col>
            <Col xs={2}>
              <Link
                id='contact'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{color: navFontColor}}
                onMouseOver={ () => mouseover('contact')} onMouseOut={ () => mouseout('contact')}
              >
                Contact
              </Link>
            </Col>
            <Col xs={1}>
              CV
            </Col>
            <Col xs={{span:1, offset: -1}}>
            <p className='text-right'>
                <a id='Linkedin' className='link' href='https://www.linkedin.com/in/alexandre-gvozdenovic-5b277813a/' style={{color: navFontColor}} onMouseOver={ () => mouseover('Linkedin')} onMouseOut={ () => mouseout('Linkedin')}>
                  <i class="fab fa-linkedin-in nav-icons"></i>
                </a>
                <a id='Github' className='link' href='https://github.com/alexandreGvozdenovic' style={{color: navFontColor}} onMouseOver={ () => mouseover('Github')} onMouseOut={ () => mouseout('Github')}>
                  <i class="fab fa-github nav-icons"></i>
                </a>
            </p>
            </Col>
        </Row>
      </Container>
  );
}

export default NavBar;
