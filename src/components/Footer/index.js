import React from "react";
import "./style.css";
import { Grid, Row, Col, Button } from "react-bootstrap";

const Footer = props => {
  return (
    <Grid>
      <Row className="justify-content-between">
        <Col md={4}>
          <Col md={6}>
            <p>KUNE BRASIL</p>
          </Col>
          <Col md={6}>
            <p>Quem Somos</p>
            <p>Trabaho</p>
            <p>Nossos Cães</p>
          </Col>
        </Col>
        <Col md={4}>
          <Col md={6}>
            <Button className="btn btn-default">Colabore</Button>
          </Col>
          <Col md={6} />
        </Col>
      </Row>
    </Grid>
  );
};
export default Footer;

{
  /* <div class="container my-container">
    <div class="row my-row justify-content-between">
      <div class="col-4">
        <div class="col-6">
          KUNE BRASIL
        </div>
        <div class="col-6">
          <P>Quem Somos</P>
          <P>Trabalho</P>
          <P>Nossos Cães</P>
        </div>
      </div>
      <div class="col-4">
        <div class="col-6">
          <button class="btn btn-default">Colabore</button>  
        </div>
        <div class="col-6">
          <p>f</p>
          <p>i</p>
        </div>
      </div>
    </div>
  </div> */
}
