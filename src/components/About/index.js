import React from "react";
import "./style.css";
import { Grid, Row, Col, Button } from "react-bootstrap";

const About = props => {
    return (
        <Grid id="sobre">
            <Row className="justify-content-center">
                <p className="titulo">
                    <strong>Quem Somos</strong>
                </p>
            </Row>
            <br />
            <br />
            <Row>
                <Col md={5} mdOffset={1} className="my-col">
                    <img src="https://via.placeholder.com/350x350" alt="" />
                </Col>
                <Col md={4} className="my-col">
                    <br />
                    <Col md={12}>
                        <blockquote className="blockquote">
                            <p className="mb-0">
                                <strong>
                                    "Os animais nos dão a oportunidade de
                                    melhorar a qualidade de vida de qualquer
                                    pessoa"
                                </strong>
                            </p>
                            <footer className="blockquote-footer">
                                Natalie,{" "}
                                <cite title="Source Title">voluntária</cite>
                            </footer>
                        </blockquote>
                    </Col>
                    <br />
                    <Col md={12}>
                        <p className="texto-inferior">
                            A Kune Brasil desenvolve programas e atividades que
                            auxiliam no desenvolvimento da autonomia e bem-estar
                            de pessoas com dificuldade física, intelectual,
                            orgânica, emocional ou psicológica e de seus
                            familiares através dos cães de ajuda social como
                            Cães de assistência, Cães de apoio ou Cães de
                            terapia.
                        </p>
                    </Col>
                </Col>
            </Row>
            <br />
            <Row className="justify-content-center text-center my-row">
                <Col className="col-6">
                    <Button>
                        <strong>LEIA A HISTÓRIA</strong>
                    </Button>
                </Col>
            </Row>
            <br />
            <br />
        </Grid>
    );
};
export default About;
