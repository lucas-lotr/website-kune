import React, { Component } from "react";
import "./style.css";
import { Grid, Row, Col, Button, Image } from "react-bootstrap";
import cachorro2 from "../../img/cachorro-2.jpg";
import cachorro3 from "../../img/cachorro-3.jpg";

class About extends Component {
    state = { expandHistory: false };

    toggleHistory = () => {
        console.log(this.state.expandHistory);
        let expand = this.state.expandHistory ? false : true;
        console.log(expand);
        this.setState({
            expandHistory: expand
        });
        window.location.hash = "#sobre";
        window.scrollBy(0, -90);
    };

    componentDidMount() {
        //window.location.assign(window.location.hostname + "/#sobre");
    }

    render() {
        if (this.state.expandHistory) {
            return (
                <Grid id="sobre">
                    <Row className="justify-content-center">
                        <p className="titulo">
                            <strong>Quem Somos</strong>
                        </p>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6} mdOffset={3} lg={6} lgOffset={3}>
                            <p className="texto">
                                Os cães de assistência são treinados para
                                prestar apoio a pessoas com diferentes
                                deficiências, o objetivo do treinamento é
                                transformar o Cão em uma ajuda técnica, para que
                                possam auxiliar no processo de independência e
                                autonomia, para que assim a pessoa com
                                deficiência melhore sua qualidade de vida.
                                <br />
                                <br />
                                Além de ser uma ajuda técnica, o Cão de
                                assistência se torna ainda mais importante por
                                ir além das ações específicas para as quais foi
                                treinado, se tornando um companheiro
                                incondicional, sendo assim um potente
                                instrumento social, podendo assim ser
                                considerado um importante aliado em tratamento
                                contra a depressão.
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <Row hidden className="justify-content-center">
                        <Image
                            className="imgCentro"
                            src="https://via.placeholder.com/700x700"
                            responsive
                            alt=""
                        />
                    </Row>
                    <br />
                    <Row hidden className="justify-content-center">
                        <Col md={6} mdOffset={3} lg={6} lgOffset={3}>
                            <p className="texto">
                                Os cães de assistência são treinados para
                                prestar apoio a pessoas com diferentes
                                deficiências, o objetivo do treinamento é
                                transformar o Cão em uma ajuda técnica, para que
                                possam auxiliar no processo de independência e
                                autonomia, para que assim a pessoa com
                                deficiência melhore sua qualidade de vida.
                                <br />
                                <br />
                                Além de ser uma ajuda técnica, o Cão de
                                assistência se torna ainda mais importante por
                                ir além das ações específicas para as quais foi
                                treinado, se tornando um companheiro
                                incondicional, sendo assim um potente
                                instrumento social, podendo assim ser
                                considerado um importante aliado em tratamento
                                contra a depressão.
                                <br />
                                <br />
                                Os cães de assistência são treinados para
                                prestar apoio a pessoas com diferentes
                                deficiências, o objetivo do treinamento é
                                transformar o Cão em uma ajuda técnica, para que
                                possam auxiliar no processo de independência e
                                autonomia, para que assim a pessoa com
                                deficiência melhore sua qualidade de vida.
                                <br />
                                <br />
                                Além de ser uma ajuda técnica, o Cão de
                                assistência se torna ainda mais importante por
                                ir além das ações específicas para as quais foi
                                treinado, se tornando um companheiro
                                incondicional, sendo assim um potente
                                instrumento social, podendo assim ser
                                considerado um importante aliado em tratamento
                                contra a depressão.
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-center">
                        <Image
                            className="imgCentro"
                            src={cachorro2}
                            responsive
                            alt=""
                        />
                    </Row>
                    <br />
                    <br />
                    <Row className="justify-content-center text-center my-row">
                        <Col className="col-6">
                            <Button onClick={this.toggleHistory}>
                                <strong>VOLTAR</strong>
                            </Button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                </Grid>
            );
        }
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
                    <Col
                        md={5}
                        lg={5}
                        mdOffset={1}
                        lgOffset={1}
                        className="my-col"
                    >
                        <Image responsive src={cachorro3} alt="" />
                    </Col>
                    <Col md={4} lg={4} className="my-col">
                        <br />
                        <Col md={12} lg={12}>
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
                        <Col md={12} lg={12}>
                            <p className="texto-inferior">
                                A Kune Brasil desenvolve programas e atividades
                                que auxiliam no desenvolvimento da autonomia e
                                bem-estar de pessoas com dificuldade física,
                                intelectual, orgânica, emocional ou psicológica
                                e de seus familiares através dos cães de ajuda
                                social como Cães de assistência, Cães de apoio
                                ou Cães de terapia.
                            </p>
                        </Col>
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-center text-center my-row">
                    <Col className="col-6">
                        <Button onClick={this.toggleHistory}>
                            <strong>LEIA A HISTÓRIA</strong>
                        </Button>
                    </Col>
                </Row>
                <br />
                <br />
            </Grid>
        );
    }
}
export default About;
