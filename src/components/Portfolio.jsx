import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row, Card, CardTitle } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import arch from "../components/svg/arch.svg";
import ogrod from "../components/svg/ogrod.svg";
import interrior from "../components/svg/interrior.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Helmet } from "react-helmet";
const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  return (
    <Row className="">
      <Helmet>
        <title>Standard</title>
        <meta name="description" content="Standard wykończenia Willi Złocień w Krynicy-Zdrój" />
        <meta property="og:image" content="https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto.webp" />
        <link
          rel="canonical"
          href="https://willazlocien.com/standard"
        />
      </Helmet>
      <br />
      <div className="hide-on-small-only">
        <Nav />
      </div>
      <div className="hide-on-med-and-up">
        <NavMobile />
      </div>
      <br />
      <div
      // data-aos="fade-left"
      // data-aos-duration="3000"
      // className="hoverable z-depth-2"
      >
        <Col l={8} s={12} push="l2">
          <Card className="shadow" header={<CardTitle image={arch} />} horizontal>
            <h5 classname="right-align">
              Etap I - Remont Willi Złocień  <Divider />
            </h5>
            <div className="left-align">
              <li>Odrestaurowana fasada budynku</li>
              <li>Wydzielone miejsca postojowe</li>
              <li>Kotłownia gazowa</li>
              <li>Stan deweloperski, ściany malowane na biało</li>
            </div>{" "}
          </Card>
        </Col>
      </div>
      <Row />
      <div
      // data-aos="fade-right"
      // data-aos-duration="3000"
      // className="hoverable z-depth-2"
      >
        <Col l={8} s={12} push="l2">
          <Card className="shadow" header={<CardTitle image={arch} />} horizontal>
            <h5 classname="right-align">
              Etap II - Rozbudowa <Divider />
            </h5>
            <div className="left-align">
              <li>Garaż podziemny</li>
              {/* <li>Basen dla mieszkańców</li> */}
              <li>Balkony i tarasy</li>
              <li>Duże przeszklenia</li>
              <li>Pompa ciepła</li>
              <li>Winda</li>
            </div>{" "}
          </Card>
        </Col>
      </div>
      <Row />
      <div

      >
        <Col l={8} s={12} push="l2">
          <Card className="shadow" header={<CardTitle image={ogrod} />} horizontal>
            <h5 classname="right-align">
              Teren wokół Willi Złocień
              <Divider />
            </h5>
            <div className="left-align">
              <li>Wyznaczone miejsca postojowe</li>

              <li>Osobny wjazd na posesję</li>
              <li>Zagospodarowany plac wokół budynku</li>

              <br /><br /><br />
            </div>{" "}
          </Card>
        </Col>
      </div>
      <Row />
      <div
      // data-aos="fade-right"
      // data-aos-duration="3000"
      // className="hoverable z-depth-2"
      >
        <Col l={8} s={12} push="l2">
          <Card className="shadow" header={<CardTitle image={interrior} />} horizontal>
            <h5 classname="right-align">
              Projekt Wnętrz <Divider />
            </h5>
            <div className="left-align">
              Oferujemy przygotowanie projektu wnętrz oraz wykonczenia lokali
              na zyczenie. Koszt oraz czas realizacji takiego zamowienia
              bedzie dostosowany do Panstwa preferencji i wymagań.
              <br />
              <a href="https://cholujdesign.com/">
                https://cholujdesign.com/
              </a>
            </div>{" "}
          </Card>
        </Col>
      </div>

    </Row>
  );
};

export default Portfolio;
