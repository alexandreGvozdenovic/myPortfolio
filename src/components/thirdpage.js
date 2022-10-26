import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

function ThirdPage() {
  var currentYear = new Date();

  return (
    <Container
      fluid="true"
      className="d-flex flex-column main-container-third-page"
    >
      <Container>
        <Row>
          <Col>
            <h2 id="project">Projets</h2>
          </Col>
        </Row>
        <Row className="row-horizontal-scroll">
          <Col xs={12} md={4} className="col-horizontal-scroll">
            <Card className="card-container">
              <Card.Img src={"./Cyclofix.jpg"} alt="Cyclofix" height="256px" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end card-overlay">
                <Card.Title>
                  <h4 className="card-title">
                    Cyclofix
                    <a
                      href="https://www.cyclofix.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fas fa-globe card-title-icons"></i>
                    </a>
                  </h4>
                </Card.Title>
                <Card.Text className="card-text">
                  Réparation vélo et trottinette électrique à domicile.
                  <br />
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">React Native</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">React.js</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Redux</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Style-system</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Next.js</span>
                  </Badge>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={4} className="col-horizontal-scroll">
            <Card className="card-container">
              <Card.Img
                src={"./interfast.jpg"}
                alt="InterFast"
                height="256px"
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end card-overlay">
                <Card.Title>
                  <h4 className="card-title">
                    InterFast
                    <a
                      href="https://www.inter-fast.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fas fa-globe card-title-icons"></i>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.interfast.interfast"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fab fa-android card-title-icons-rightest"></i>
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/interfast/id1536410979"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fab fa-apple card-title-icons-rightest"></i>
                    </a>
                  </h4>
                </Card.Title>
                <Card.Text className="card-text">
                  Application web et mobile de génération de rapport
                  d’intervention pour les acteurs du BTP.
                  <br />
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">React Native</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">React.js</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Redux</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Express.js</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Mongo DB</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Sendinblue</span>
                  </Badge>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={4} className="col-horizontal-scroll">
            <Card className="card-container">
              <Card.Img
                src={"./harrypotter.jpg"}
                alt="Harry Potter"
                height="256px"
              />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end card-overlay">
                <Card.Title>
                  <h4 className="card-title">
                    You're a wizard
                    <a
                      href="https://you-re-a-wizard-harry.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fas fa-globe card-title-icons"></i>
                    </a>
                  </h4>
                </Card.Title>
                <Card.Text className="card-text">
                  Application web basé sur l'api Harry potter
                  https://hp-api.herokuapp.com/
                  <br />
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Next.js</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">React.js</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">SWR</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Typescript</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Tailwind css</span>
                  </Badge>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={4} className="col-horizontal-scroll">
            <Card className="card-container">
              <Card.Img src={"./shakengo.jpg"} alt="Kitty" height="256px" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end card-overlay">
                <Card.Title>
                  <h4 className="card-title">
                    Shake'N'Go
                    <a
                      href="https://github.com/alexandreGvozdenovic/sng-frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fab fa-github card-title-icons"></i>
                    </a>
                  </h4>
                </Card.Title>
                <Card.Text className="card-text">
                  Application mobile qui propose des choix de sorties aléatoires
                  à Paris grâce à Google Places API.
                  <br />
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">React Native</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Redux</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Express.js</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Google Places</span>
                  </Badge>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={4} className="col-horizontal-scroll">
            <Card className="card-container">
              <Card.Img src={"./faceup.jpg"} alt="Kitty" height="256px" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end card-overlay">
                <Card.Title>
                  <h4 className="card-title">
                    Face Up
                    <a
                      href="https://github.com/alexandreGvozdenovic/faceUpFrontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fab fa-github card-title-icons"></i>
                    </a>
                  </h4>
                </Card.Title>
                <Card.Text className="card-text">
                  Application mobile qui utilise la reconnaissance faciale pour
                  donner des informations relative à un visage.
                  <br />
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">React Native</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Express.js</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Azure Faces</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Cloudinary</span>
                  </Badge>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={4} className="col-horizontal-scroll">
            <Card className="card-container">
              <Card.Img src={"./Kitten.png"} alt="Kitty" height="256px" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end card-overlay">
                <Card.Title>
                  <h4 className="card-title">
                    E-Shop
                    <a
                      href="https://github.com/alexandreGvozdenovic/kittenShop"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fab fa-github card-title-icons"></i>
                    </a>
                    <a
                      href="https://kittyshop.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      <i className="fas fa-globe card-title-icons-rightest"></i>
                    </a>
                  </h4>
                </Card.Title>
                <Card.Text className="card-text">
                  E-Shop avec des chatons créé avec l'ensemble des compétences
                  que j'ai acquis durant ma formation.
                  <br />
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">React</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Express.js</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Redux</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Mongo DB</span>
                  </Badge>
                  <Badge
                    className="d-inline-flex align-items-center justify-content-center badge"
                    pill
                  >
                    <span className="badge-text">Stripe</span>
                  </Badge>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          {/* <Col xs={12} md={4} className='col-horizontal-scroll'>
                <Card className='card-container'>
                    <Card.Img src={require('../style/Kitty.jpg')} alt='Kitty' height='256px' />
                    <Card.ImgOverlay className='d-flex flex-column justify-content-end card-overlay'>
                        <Card.Title><h4 className='card-title'>Nom du projet <i className="fab fa-github card-title-icons"></i></h4></Card.Title>
                        <Card.Text className='card-text'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.<br/>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 1</span>
                        </Badge>
                        <Badge className='d-inline-flex align-items-center justify-content-center badge' pill >
                            <span className='badge-text'>Techno 2</span>
                        </Badge>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col> */}
        </Row>
      </Container>
      <Row className="footer-container" id="contact">
        <Col className="d-flex flex-column justify-content-center">
          <h4 className="text-center footer-title">Contact</h4>
          <p className="text-center footer-text">
            <strong>
              Besoin d'un développeur fullstack pour votre projet ?
            </strong>
            <br />
            Envoyez un message (ou parlons-en autour d'une{" "}
            <span role="img" aria-label="beer">
              🍻
            </span>
            )<br />
            <Button
              className="contact-button"
              variant="light"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/alexandre-gvozdenovic-5b277813a/")
              }
            >
              On prend contact
            </Button>
          </p>
          <div className="d-flex justify-content-between bottom-footer">
            <div>{currentYear.getFullYear()}</div>
            <div className="mr-3">
              Codé avec{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              par Alexandre Gvozdenovic
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ThirdPage;
