import React from "react";
import "./style.css";
import { Grid, Row, Col, Button } from "react-bootstrap";
import faceIcon from "../../img/icon-face.svg";
import instaIcon from "../../img/icon-insta.svg";
import logoBranco from "../../img/logo-kune-branco.svg";

const Footer = props => {
    function navScroll() {
        setTimeout(function() {
            window.scrollBy(0, -90);
        }, 10);
    }
    return (
        <Grid id="footer">
            <br />
            <br />
            <Row>
                <Col md={2} mdOffset={2}>
                    <a href="#home">
                        <img
                            className="logo-bottom"
                            src={logoBranco}
                            alt="Kuné Brasil"
                        />
                    </a>
                </Col>
                <Col md={2} mdOffset={0}>
                    <a href="#sobre">
                        <Button onClick={navScroll}>Quem somos</Button>
                    </a>
                    <a href="#work">
                        <Button onClick={navScroll}>Nosso trabalho</Button>
                    </a>
                    <a href="#">
                        <Button onClick={navScroll}>Nossos cães</Button>
                    </a>
                </Col>

                <Col className="col-social" md={2} mdOffset={2}>
                    <Row className="row-social">
                        <a href="#colabore">
                            <Button onClick={navScroll}>
                                <strong>COLABORE</strong>
                            </Button>
                        </a>
                        <a href="#">
                            <img
                                className="social-icon"
                                src={faceIcon}
                                alt="insta"
                            />
                        </a>
                        <a href="#">
                            <img
                                className="social-icon"
                                src={instaIcon}
                                alt="insta"
                            />
                        </a>
                    </Row>
                </Col>
            </Row>
            <br />.
        </Grid>
    );
};
export default Footer;
