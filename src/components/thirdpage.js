import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Badge} from 'react-bootstrap'


function ThirdPage() {
  return (
    <Container  fluid='true' className='main-container-third-page'>
        <Container>
            <Row>
                <Col>
                    <h2>Projets</h2>
                </Col>
            </Row>
            <Row>
            <Col xs={4}>
                <Card className='card-container'>
                    <Card.Img src={require('../Kitten.png')} alt='Kitty' height='256px' />
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
            <Col xs={4}>
                <Card className='card-container'>
                    <Card.Img src={require('../Kitty.jpg')} alt='Kitty' height='256px' />
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
            <Col xs={4}>
                <Card className='card-container'>
                    <Card.Img src={require('../Kitten.png')} alt='Kitty' height='256px' />
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
            <Col xs={4}>
                <Card className='card-container'>
                    <Card.Img src={require('../Kitty.jpg')} alt='Kitty' height='256px' />
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
    </Container>
  );
}

export default ThirdPage;
