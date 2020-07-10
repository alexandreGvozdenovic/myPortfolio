import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image} from 'react-bootstrap'


function SecondPage() {
  return (
    <Container  fluid='true' className='main-container-second-page'>
        <Container className='description-container' id='about'>
            <Row>
                <Col xs={{span:5, offset:1}}>
                    <h2>A propos</h2>
                    <p className='desc'> <strong>Lassé des tâches fonctionnelles, j'ai sauté la barrière technique pour devenir 
                        développeur fullstack.</strong> <br/><br/> Après 10 semaines de coding bootcamp @La Capsule je suis 
                        formé aux technologies React et Express. Je suis disponible pour une première 
                        aventure afin de créer des produits engageants et approfondir mes connaissances.
                    </p>
                </Col>
                <Col className='d-flex justify-content-center' xs={{span:4, offset:1}}>
                    <Image src={require('../PossibleShowyHake-size_restricted.gif')} rounded />
                </Col>
            </Row>
            <Row className='justify-content-center skills-row'>
            <Col className='d-flex flex-column align-items-center'>
                <i class="fas fa-laptop-code skill-icon"></i>
                <h4 className='skill-title'>Front end</h4>
                <p className='text-center skill'>HTML5, CSS3, JavaScript,<br/> React, Redux</p>
            </Col>
            <Col className='d-flex flex-column align-items-center'>
                <i class="fas fa-server skill-icon"></i>
                <h4 className='skill-title'>Back end</h4>
                <p className='text-center skill'>Node.JS, Express.JS</p>
            </Col>
            <Col className='d-flex flex-column align-items-center'>
                <i class="fas fa-database skill-icon"></i>
                <h4 className='skill-title'>Base de données</h4>
                <p className='text-center skill'>Mongo DB</p>
            </Col>
            <Col className='d-flex flex-column align-items-center'>
                <i class="fab fa-github-alt skill-icon"></i>
                <h4 className='skill-title'>Workflow</h4>
                <p className='text-center skill'>Git, Github</p>
            </Col>
        </Row>
        </Container>
    </Container>
  );
}

export default SecondPage;
