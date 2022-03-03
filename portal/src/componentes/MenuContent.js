import React from 'react'
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import BarraNav from './BarraNav'


const MenuContent = () => {
    return (
        <Container fluid id='menu'>
            <Row>
                <Col sm>
                    <div >
                        Terminal de reclutamiento
                    </div>
                </Col>
                <Col sm>
                    <BarraNav />
                </Col>
                <Col sm>
                    <div className="justify-content-center">
                        <div >
                            Terminal de reclutamiento
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default MenuContent;

