import React from 'react';
import './navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'react-bootstrap'


function NavBar() {
  return (
      <Container className='fixed-top'>
        <Row className='nav'>
            <Col xs={3}>
            <span className='name'>Alexandre Gvozdenovic</span>
            </Col>
            <Col xs={2}>
            A propos
            </Col>
            <Col xs={2}>
            Projets
            </Col>
            <Col xs={2}>
            Contact
            </Col>
            <Col xs={1}>
            CV
            </Col>
            <Col xs={2}>
            <p className='text-right'>
                <a className='link' href='https://www.linkedin.com/in/alexandre-gvozdenovic-5b277813a/'><i class="fab fa-linkedin-in"></i></a>
                <a className='link' href='https://github.com/alexandreGvozdenovic'><i class="fab fa-github"></i></a>
            </p>
            </Col>
        </Row>
      </Container>
  );
}

export default NavBar;
