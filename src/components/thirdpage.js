import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Badge} from 'react-bootstrap'

function ThirdPage() {
    var currentYear = new Date();
  return (
    <Container  fluid='true' className='d-flex flex-column main-container-third-page'>
        <Container id='project'>
            <Row>
                <Col>
                    <h2>Projets</h2>
                </Col>
            </Row>
            <Row className='row-horizontal-scroll'>
            <Col xs={12} md={4} className='col-horizontal-scroll'>
                <Card className='card-container'>
                    <Card.Img src={require('../style/Kitten.png')} alt='Kitty' height='256px' />
                    <Card.ImgOverlay className='d-flex flex-column justify-content-end card-overlay'>
                        <Card.Title><h4 className='card-title'>Nom du projet <i class="fab fa-github card-title-icons"></i></h4></Card.Title>
                        <Card.Text>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 1</span>
                        </Badge>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 2</span>
                        </Badge>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col xs={12} md={4} className='col-horizontal-scroll'>
                <Card className='card-container'>
                    <Card.Img src={require('../style/Kitty.jpg')} alt='Kitty' height='256px' />
                    <Card.ImgOverlay className='d-flex flex-column justify-content-end card-overlay'>
                        <Card.Title><h4 className='card-title'>Nom du projet <i class="fab fa-github card-title-icons"></i></h4></Card.Title>
                        <Card.Text>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 1</span>
                        </Badge>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 2</span>
                        </Badge>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col xs={12} md={4} className='col-horizontal-scroll'>
                <Card className='card-container'>
                    <Card.Img src={require('../style/Kitten.png')} alt='Kitty' height='256px' />
                    <Card.ImgOverlay className='d-flex flex-column justify-content-end card-overlay'>
                        <Card.Title><h4 className='card-title'>Nom du projet <i class="fab fa-github card-title-icons"></i></h4></Card.Title>
                        <Card.Text>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 1</span>
                        </Badge>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 2</span>
                        </Badge>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col xs={12} md={4} className='col-horizontal-scroll'>
                <Card className='card-container'>
                    <Card.Img src={require('../style/Kitty.jpg')} alt='Kitty' height='256px' />
                    <Card.ImgOverlay className='d-flex flex-column justify-content-end card-overlay'>
                        <Card.Title><h4 className='card-title'>Nom du projet <i class="fab fa-github card-title-icons"></i></h4></Card.Title>
                        <Card.Text>
                        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 1</span>
                        </Badge>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 2</span>
                        </Badge>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            </Row>
            </Container>
        <Row className='footer-container' id='contact'>
            <Col className='d-flex flex-column justify-content-center'>
                <h4 className='text-center footer-title'>Contact</h4>
                <p className='text-center footer-text'>
                    <strong>Besoin d'un développeur fullstack pour votre projet ?</strong><br/>
                    Envoyez un message (ou parlons-en autour d'une <span role="img" aria-label="beer">🍻</span>)<br/>
                    <Button className='contact-button' variant='light' onClick={ () => window.location.href='https://www.linkedin.com/in/alexandre-gvozdenovic-5b277813a/'}>On prend contact</Button>
                </p>
                <Container className='bottom-footer'>
                    <div className='d-flex justify-content-between'>
                        <div>{currentYear.getFullYear()}</div>
                        <div>Codé avec <span role="img" aria-label="heart">❤️</span> par Alexandre Gvozdenovic</div>
                    </div>
                </Container>
            </Col>
        </Row>
    </Container>
  );
}

export default ThirdPage;
