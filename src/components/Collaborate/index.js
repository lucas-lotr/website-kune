import React from "react";
import "./style.css";
import { Col, Row, Button } from "react-bootstrap";

const Collaborate = props => {
    return (
        <Row id="planos">
            <Col
                id="col2"
                md={6}
                mdOffset={3}
                lg={6}
                lgOffset={3}
                xs={10}
                xsOffset={1}
            >
                <h2>
                    <strong>SEJA UM AMIGO FIEL KUNÉ!</strong>
                </h2>
                <p>
                    O Amigo Fiel Kuné é um programa de doacao mensal onde voce
                    pode doar o valor desejado mensalmente e nos ajudar a
                    treinar e entregar cada vez mais cães para pessoas que
                    precisam.
                </p>
                <Row>
                    <a href="https://pag.ae/7UjChYUm2">
                        <Button>
                            <strong>R$20</strong>
                        </Button>
                    </a>
                    <a href="https://pag.ae/7UjCiRHg6">
                        <Button>
                            <strong>R$50</strong>
                        </Button>
                    </a>
                    <a href="https://pag.ae/7UjCjGjM2">
                        <Button>
                            <strong>R$70</strong>
                        </Button>
                    </a>
                    <a href="https://pag.ae/7UjCj-J-n">
                        <Button>
                            <strong>R$100</strong>
                        </Button>
                    </a>
                </Row>
            </Col>
        </Row>
    );
};
export default Collaborate;
