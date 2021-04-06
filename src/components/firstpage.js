import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,} from 'react-bootstrap'


function FirstPage() {
  return (
    <Container className='d-flex flex-column justify-content-center main-container-first-page' fluid='true'>

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
      {/* <p className='text-center text-learn-more'>En savoir plus <i className="fas fa-mouse"></i></p> */}
    </Container>
  );
}

export default FirstPage;
