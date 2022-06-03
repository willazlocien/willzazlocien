import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Slider,
  Slide,
  Caption,
  Modal,
  Table,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";
import Iframe from "react-iframe";

import planparter1 from "./svg/planparter1.svg";
import planparter2 from "./svg/planparter2.svg";
import planparter3 from "./svg/planparter3.svg";
import planpietro1a from "./svg/planpietro1a.svg";
import planpietro1b from "./svg/planpietro1b.svg";
import carpark from "./svg/carpark.svg"
import pow from "./svg/52m.svg"
import taras from "./svg/taras.svg"
import pokoje3 from "./svg/pokoje3.svg"
import pietro3d from "./img/pietro3d.png"

const TypD = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  let lang = localStorage.getItem("lang");

  return (
    <Row>
      <Row />
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="hoverable white z-depth-5"
      >
        <Row>
          <Col s={12} m={6}>
            <Row>
              <Col m={8} push="m1">
                <div className="valign-wrapper">
                  <div className="left-align">
                    <h3>
                      Opis Lokalu
                      <Divider />
                    </h3>
                    PageMaker including versions of Lorem Ipsum. Why do we use
                    it? It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </div>
                </div>
                <Row/>
                <Col s={3}>
                <img className="red" src={pow} width="100%" /> powierzchnia</Col><Col s={3}>
                <img className="red" src={carpark} width="100%" /> dostępne parkingowe</Col><Col s={3}>
                <img className="red" src={taras} width="100%" /> taras z wyjściem na ogród</Col><Col s={3}>
                <img className="red" src={pokoje3} width="100%" /> 3 pokoje plus łazienka i korytarz</Col>
              </Col>
            </Row>
          </Col>
          <Col s={12} m={6}>
            {" "}
            <img
              src={pietro3d}
              width="100%"
            /><Button className="red right" node="button" large>
            Rzut
          </Button>
          </Col>
        </Row>
      </div>
      <Row />
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="hoverable z-depth-5 white"
      >
        <Row>
          <Col s={12} m={12}>
            <div className="valign-wrapper">
              <div className="center-align">
                <h3>
                  Przykładowe aranżacje wnętrz
                  <Divider />
                </h3>
                PageMaker including versions of Lorem Ipsum. Why do we use it?
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
            </div>
          </Col>
          <Row />
          <Row />
          <Col s={12} m={6}>
            <h5>Poddasze zaadaptowane</h5>
            <Iframe
              url="https://p3d.in/FgiNH"
              width="100%"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </Col>{" "}
          <Col s={12} m={6}>
            <h5>Poddasze niezaadaptowane</h5>
            <Iframe
              url="https://p3d.in/3Npzk"
              width="100%"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </Col>
          <Col s={12}>
            <div className="center-align">
              <h3>
                Możliwość zakupu lokalu wraz z wykończeniem
                <Divider />
              </h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus
              <br />
              <Row />
              <Button className="z-depth-2  " node="a" href="gallery">
                Przejdz do galerii
              </Button>
            </div>
          </Col>
          <Row />
          <Col s={12} m={12}>
            <Iframe
              url="https://www.youtube.com/embed/EYG7zL0qaS8"
              width="100%"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </Col>
          <Col s={12} m={12}>
            <Iframe
              url="https://www.youtube.com/embed/VPTWNZoGClk"
              width="100%"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </Col>
          <Col s={12} m={12}>
            <Iframe
              url="https://www.youtube.com/embed/DC7bFnzOIfE"
              width="100%"
              height="600px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </Col>
          <Col s={12}>
            <Row />
            <Button className="z-depth-2  " large node="a" href="contact">
              Zarazerwuj lokal
            </Button>
            <Row />
          </Col>
        </Row>
      </div>
      <Row />
    </Row>
  );
};

export default TypD;
