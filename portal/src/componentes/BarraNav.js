import {React} from 'react';
import '../App.css';
import {Row, Col} from 'react-bootstrap';

const BarraNav = () => {
    return (
        <Row id="contenedor-menu">
            <Col sm id='opcion-select'>
                CANDIDATOS EN PROCESO
            </Col>
            <Col sm id ='opcion'>
                CANDIDATOS Contratados
            </Col>
            <Col sm id ='opcion'>
               Vacantes
            </Col>
        </Row>
    );
}

export default BarraNav;