import React from "react";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";

const Contact = props => {
  return (
    <Grid>
      <Row className="justify-content-center">
        <Col md={8}>
          <p className="text-center">Precisa de um cão de serviços?</p>
          <p className="text-center">Fale com a gente</p>
          <p className="text-center">kunebrasil@gmail.com</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <p className="text-center">Apoiadores</p>
      </Row>
      <Row className="justify-content-center">
        <Col md={3}>
          <img src="https://via.placeholder.com/130" alt="" />
        </Col>
        <Col md={3}>
          <img src="https://via.placeholder.com/130" alt="" />
        </Col>
        <Col md={3}>
          <img src="https://via.placeholder.com/130" alt="" />
        </Col>
        <Col md={3}>
          <img src="https://via.placeholder.com/130" alt="" />
        </Col>
      </Row>
    </Grid>
  );
};
export default Contact;

{
  /* <div class="container my-container"></br>
    <div class="row my-row justify-content-center">
      <div class="col-8">
        <p class="text-center">Precisa de um cão de serviços?</p>
        <p class="text-center">Fale com a gente</p>
        <p class="text-center">kunebrasil@gmail.com</p>
      </div>
    </div>
    <div class="row my-row justify-content-center">
      <p class="text-center">Apoiadores</p>
    </div>
    <div class="row my-row justify-content-center">
      <div class="col-3">
        <img src="https://via.placeholder.com/130" alt="">
      </div>
      <div class="col-3">
        <img src="https://via.placeholder.com/130" alt="">
      </div>
      <div class="col-3">
        <img src="https://via.placeholder.com/130" alt="">
      </div>
      <div class="col-3">
        <img src="https://via.placeholder.com/130" alt="">
      </div>
    </div>
  </div>
  <br> */
}
