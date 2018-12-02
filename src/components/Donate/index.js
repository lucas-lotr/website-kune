import React from "react";
import "./style.css";
import { Col, Row, Button } from "react-bootstrap";

const Donate = props => {
    return (
        <Row id="colabore">
            <Col
                id="col"
                md={6}
                mdOffset={3}
                lg={6}
                lgOffset={3}
                xs={10}
                xsOffset={1}
            >
                <h2>
                    <strong>COLABORE</strong>
                </h2>
                <p>
                    Atualmente precisamos investir em um filhote de labrador
                    para ser nosso próximo cão de serviço. Além disso, a
                    organização possui gastos recorrentes com as aulas de
                    treinamento, cuidados com os cães, transporte, eventos, etc.
                </p>
                <a href="https://pag.ae/7UnQ88FxL">
                    <Button>
                        <strong>DOE</strong>
                    </Button>
                </a>
            </Col>
        </Row>
    );
};
export default Donate;
