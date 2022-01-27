import React from 'react';

import {Container, Row, Col} from 'react-bootstrap'



export default function Header() {
    return (

        
        
               
                    
                
        <Container className="auto bg-dark md-2">
    
            <Row>

                <Col md={2} xs={2} ><img class="img-nav" src="img/Logo-brote.png" alt="logo de la marca" /> </Col>
                <Col md={8} xs={8}><h1 className="pt-4 mt-4">·B·R·O·T·E·</h1> </Col>
                <Col md={2} xs={2}> </Col>
            </Row>
        </Container>
                

        
    );
}

