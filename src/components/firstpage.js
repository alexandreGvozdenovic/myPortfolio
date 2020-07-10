import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'react-bootstrap'


function FirstPage() {
  return (
    <Container className='main-container-first-page' fluid='true'>
      <Container className='title'>
      <Row>
        <Col>
          <h1 className='text-center text-title'>Alexandre<br/>Gvozdenovic</h1>
        </Col>
      </Row>
      <Row className='subtitle'>
        <Col>
          <h3 className='text-center text-subtitle'>Développeur fullstack React/Express @Paris</h3>
        </Col>
      </Row>
      </Container>
      <Row className='learn-more'>
        <Col>
          <p className='text-center text-learn-more'>En savoir plus <i class="fas fa-mouse"></i></p>
        </Col>
      </Row>
    </Container>
  );
}

export default FirstPage;
