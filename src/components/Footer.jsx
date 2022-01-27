import React from 'react';
import { MDBFooter } from "mdbreact";
import {Container, Row, Col} from 'react-bootstrap';



export default function Footer() {
    return (


        
        <MDBFooter className="pt-4 mt-4">
    
                    <Container className="bg-dark">
    
                        <Row>

                            <Col md={2} xs={3} ><img class="img-nav" src="img/Logo-brote.png" alt="logo de la marca" /> </Col>
                            <Col md={8} xs={6}><h1 className="pt-4 mt-4">·B·R·O·T·E·</h1> </Col>
                            <Col sm md={2} xs={3} className="d-flex">
                                <Col sm md={4} xs={4} className="d-flex"><a href="https://www.instagram.com/interioresbrote/" target="_blank" rel="noreferrer"><img className="img-social justify-content-end" src="img/icono-instagram.png"alt=""  /></a></Col>
                                <Col sm md={4} xs={4} className="d-flex"><a href="https://web.facebook.com/InterioresBrote" target="_blank" rel="noreferrer"><img className="img-social" src="img/icon-facebook.png"alt="" /></a></Col>
                                <Col sm md={4} xs={4} className="d-flex">
                                    <a rel="noreferrer" href="https://wa.me/5493516829415?text=Hola, vengo de la pagina de brote. Quisiera mas informacion..." onclick="ga('send', 'event', 'whatsapp', this.href); return true;" target="_blank">
                                        <img className="img-social" src="img/whatsapp.png"alt="" />
                                    </a>
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <h6>
                                    &copy; {new Date().getFullYear()} Copyright: <h5> @tomichaldari </h5>
                                </h6>
                            </Col>

                        </Row>
                    </Container>
      
            <div className="footer-copyright text-center py-3 text-white">
            </div>
        </MDBFooter>
    );
}



