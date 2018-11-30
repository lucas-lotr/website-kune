import React from 'react';
import './style.css';
import {
    Col,
    Row,
    Button

} from 'react-bootstrap'

const Donate = (props) => {
    return (
        <Row id='colabore'>
            <Col md={6} mdOffset={3} lg={6} lgOffset={3} xs={10} xsOffset={1}>
                <h3>COLABORE</h3>
                <p>
                    Atualmente precisamos investir em um filhote de labrador para ser nosso
                    próximo cão de serviço. Além disso, a organização possui gastos
                    recorrentes com as aulas de treinamento, cuidados com os cães,
                    transporte, eventos, etc.
                </p>
            </Col>
        </Row>
    );
}
export default Donate;