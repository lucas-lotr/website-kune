import React from "react";
import "./style.css";
import { Jumbotron, Col, Row, Button } from "react-bootstrap";

const Call = props => {
    return (
        <Jumbotron id="jumbo">
            <Row>
                <br />
                <Col
                    xs={10}
                    xsOffset={1}
                    sm={4}
                    smOffset={2}
                    md={4}
                    mdOffset={2}
                    lg={4}
                    lgOffset={2}
                >
                    <p className="call">
                        Treinamos cães de suporte para pessoas com deficiências
                        motoras, auditivas e para crianças no espectro autista.
                    </p>
                    <a href="#colabore">
                        <Button block>
                            <strong>COLABORE!</strong>
                        </Button>
                    </a>
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default Call;
