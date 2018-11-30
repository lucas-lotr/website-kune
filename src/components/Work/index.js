import React from "react";
import "./style.css";
import { Grid, Row, Col, Button } from "react-bootstrap";

const Work = props => {
  return (
    <Grid>
      <Row className="justify-content-center">
        <p>Nosso Trabalho</p>
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <p>
            Os cães de assistência são treinados para prestar apoio a pessoas
            com diferentes deficiências, o objetivo do treinamento é transformar
            o Cão em uma ajuda técnica, para que possam auxiliar no processo de
            independência e autonomia, para que assim a pessoa com deficiência
            melhore sua qualidade de vida. Além de ser uma ajuda técnica, o Cão
            de assistência se torna ainda mais importante por ir além das ações
            específicas plt="">nado, se tornando um companheiro incondicional,
            sendo assim um potente instrumento social, podendo assim ser
            considerado um importante aliado em tratamento contra a depressão.
          </p>
          <p>
            Além de ser uma ajuda técnica, o Cão de assistência se torna ainda
            mais importante por ir além das ações específicas para as quais foi
            treinado, se tornando um companheiro incondicional, sendo assim um
            potente instrumento social, podendo assim ser considerado um
            importante aliado em tratamento contra a depressão.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <img src={"https://via.placeholder.com/150"} alt="" />
        </Col>
        <Col md={4}>
          <img src={"https://via.placeholder.com/150"} alt="" />
        </Col>
        <Col md={4}>
          <img src={"https://via.placeholder.com/150"} alt="" />
        </Col>
      </Row>
    </Grid>
  );
};
export default Work;

{
  /* <div class="container my-container">
    <div class="row my-row justify-content-center">
      <p>Nosso Trabalho</p>
    </div>
    <div class="row my-row justify-content-center">
      <div class="col-10 my-col">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat sit blanditiis minima quisquam perferendis asperiores, tenetur neque eum sunt voluptatem maiores reiciendis corporis facere deleniti natus totam enim suscipit vitae!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum quam vero. Dignissimos deleniti error autem quam amet natus, in exercitationem saepe dicta temporibus perferendis numquam sit esse reprehenderit commodi!</p>
      </div>
    </div>
    <div class="row my-row justify-content-center">
      <div class="col-4">
        <img src="https://via.placeholder.com/150" alt="">
      </div>
      <div class="col-4">
        <img src="https://via.placeholder.com/150" alt="">
      </div>
      <div class="col-4">
        <img src="https://via.placeholder.com/150" alt="">
      </div>
    </div>
  </div> */
}
