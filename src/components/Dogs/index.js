import React from "react";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";

const Dogs = props => {
  return (
    <Grid>
      <Row className="justify-content-center">
        <Row>
          <Row>
            <Col md={4}>
              <img src="https://via.placeholder.com/150" alt="" />
            </Col>
            <Col md={4}>
              <img src="https://via.placeholder.com/150" alt="" />
            </Col>
            <Col md={4}>
              <img src="https://via.placeholder.com/150" alt="" />
            </Col>
          </Row>
        </Row>
        <Row>
          <Row className="justify-content-center">
            <Col md={4}>
              <img src="https://via.placeholder.com/150" alt="" />
              <p class="text-center">5</p>
              <p class="text-center">caes</p>
              <p class="text-center">treinados</p>
            </Col>
            <Col md={4}>
              <img src="https://via.placeholder.com/150" alt="" />
              <p class="text-center">3</p>
              <p class="text-center">caes</p>
              <p class="text-center">entregues</p>
            </Col>
            <Col md={4}>
              <img src="https://via.placeholder.com/150" alt="" />
              <p class="text-center">12</p>
              <p class="text-center">treinadores</p>
              <p class="text-center">formados</p>
            </Col>
          </Row>
        </Row>
        <Row className="justify-content-center">
          <Row>
            <p>Nossos Cães</p>
          </Row>
        </Row>
      </Row>
    </Grid>
  );
};
export default Dogs;

{
  /* <div class="container my-container">
    <div class="row my-row justify-content-center">
      <div class="row my-row">
        <div class="row my-row">
          <div class="col-md-4">
            <img src="https://via.placeholder.com/150" alt="">
          </div>
          <div class="col-md-4">
            <img src="https://via.placeholder.com/150" alt="">
          </div>
          <div class="col-md-4">
            <img src="https://via.placeholder.com/150" alt="">
          </div>
        </div>
      </div>
      <div class="row my-row">
        <div class="row my-row justify-content-center">
          <div class="col-4">
            <img src="https://via.placeholder.com/150" alt="">
            <p class="text-center">5</p>
            <p class="text-center">caes</p>
            <p class="text-center">treinados</p>
          </div>
          <div class="col-4">
            <img src="https://via.placeholder.com/150" alt="">
            <p class="text-center">3</p>
            <p class="text-center">caes</p>
            <p class="text-center">entregues</p>
          </div>
          <div class="col-4">
            <img src="https://via.placeholder.com/150" alt="">
            <p class="text-center">12</p>
            <p class="text-center">treinadores</p>
            <p class="text-center">formados</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-row justify-content-center">
      <div class="row my-row">
        <p>Nossos Cães</p>
      </div>
    </div>
  </div> */
}
