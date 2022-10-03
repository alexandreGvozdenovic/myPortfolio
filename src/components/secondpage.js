import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image} from 'react-bootstrap'


function SecondPage() {
  return (
    <Container  fluid='true' className='main-container-second-page'>
        <Container className='description-container'>
            <Row>
                <Col xs={{span:10, offset:1}} md={{span: 5, offset:1}}>
                    <h2 id='about'>A propos</h2>
                    <p className='desc'> <strong>Lassé des tâches fonctionnelles, j'ai sauté la barrière technique pour devenir 
                        développeur fullstack.</strong> <br/><br/> Après 1 an chez Cyclofix en tant que développeur front-end je suis près pour un nouveau challenge.

                    </p>
                </Col>
                <Col className='d-flex justify-content-center bilbo-col' xs= {{span:10, offset:1}} md={{span:4, offset:1}}>
                    <img id='blob-milieu-top' src={'./Blob-Milieu-Top.svg'} alt='blob'></img>
                    <img id='blob-milieu-bottom' src={'./Blob-Milieu-Bottom.svg'} alt='blob'></img>
                    <Image id='bilbo-gif' src={'./bilbo.gif'} rounded />
                </Col>
            </Row>
            <Row className='justify-content-center skills-row'>
            <Col xs={{span: 6}} md={{span:3}} className='d-flex flex-column align-items-center'>
                <i className="fas fa-laptop-code skill-icon"></i>
                <h4 className='skill-title'>Front end</h4>
                <p className='text-center skill'>HTML5, CSS3, JavaScript,<br/> React, Redux, React Native, Next</p>
            </Col>
            <Col xs={{span: 6}} md={{span:3}} className='d-flex flex-column align-items-center'>
                <i className="fas fa-server skill-icon"></i>
                <h4 className='skill-title'>Back end</h4>
                <p className='text-center skill'>Node.JS, Express.JS</p>
            </Col>
            <Col xs={{span: 6}} md={{span:3}} className='d-flex flex-column align-items-center'>
                <i className="fas fa-database skill-icon bottom-icon"></i>
                <h4 className='skill-title'>Base de données</h4>
                <p className='text-center skill'>Mongo DB</p>
            </Col>
            <Col xs={{span: 6}} md={{span:3}} className='d-flex flex-column align-items-center'>
                <i className="fab fa-github-alt skill-icon bottom-icon"></i>
                <h4 className='skill-title'>Workflow</h4>
                <p className='text-center skill'>Git, Github</p>
            </Col>
        </Row>
        </Container>
    </Container>
  );
}

export default SecondPage;
