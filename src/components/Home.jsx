import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Col,
  Divider,
  Row,
  Slide,
  Caption,
  Card,
  Slider,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";
import ogrod from "./svg/ogrod.svg";
import autostrada from "./svg/autostrada.svg";
import karkowwieliczka from "./svg/krakowwieliczka.svg";
import silence from "./svg/silence.svg";
import windows from "./svg/windows.svg";
import layout from "./svg/layout.svg";
import arrow from "./svg/arrow.svg";
import img1 from "../components/img/Image 01.webp";
import img2 from "../components/img/Image 04.webp";
import img3 from "../components/img/Image 15.webp";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  return (
    <Row className="">
      <Row>
        <Col s={12}>
          <div className="video-wrapper z-depth-5 hide-on-small-only">
            <ReactPlayer
              // className="react-player"
              url="https://youtu.be/eRbJY64wlQo"
              playing={true}
              muted={true}
              width="100%"
              height="570px"
              loop={true}
            />
          </div>
          <div className="video-wrapper z-depth-5 hide-on-med-and-up">
            <Slider
              fullscreen={false}
              options={{
                duration: 500,
                height: 600,
                indicators: false,
                interval: 6000,
              }}
            >
              <Slide image={<img alt="" src={img1} />}>
                <Caption placement="center">
                  <h3>Nowa inwestycja</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Krynica-Zdrój - Willa Złocień
                  </h5>
                </Caption>
              </Slide>
              <Slide image={<img alt="" src={img2} />}>
                <Caption placement="left">
                  <h3>Etap I</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Rewitalziacja Willi
                  </h5>
                </Caption>
              </Slide>
              <Slide image={<img alt="" src={img3} />}>
                <Caption placement="right">
                  <h3>Etap II</h3>
                  <h5 className="light grey-text text-lighten-3">Rozbudowa</h5>
                </Caption>
              </Slide>
            </Slider>
          </div>
        </Col>
      </Row>
      <img src={arrow} width="100%" />
      <Row />
      <Row />
      <Row />
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-6"
        >
          <Card>
            <h5>
              Willa Złocień, Krynica-Zdrój
              <Divider />
            </h5>
            <Row />
            <Row />
            <Row />
            <Row>
              <div className="left-align  ">
                Przedstawiamy Państwu "Will Złocień" – naszą najnowszą
                inwestycję zlokalizowaną w Krynicy-Zdrój na wschodnim stoku Gory
                Parkowej!
                <br />
                Budynek położony jest w rewelacyjnej lokalizacji z świetnym
                dojazdem. Jest idealne miejsce dla osób ceniących sobie ciszę,
                spokój i naturę.
                <br />
                Wszystkich zainteresowanych ofertą prosimy o kontakt mailowy lub
                telefoniczny.{" "}
              </div>
              <Col m={6} s={12}>
                <Row />
                <Row>
                  <Col s={4}>
                    <img src={autostrada} width="60%" />
                    <br />
                    Górskie trasy rowerowe i piesze
                  </Col>
                  <Col s={4}>
                    <img src={karkowwieliczka} width="60%" />
                    <br />
                    Basen w obiekcie
                  </Col>
                  <Col s={4}>
                    <img src={layout} width="60%" />
                    <br />
                    Praktyczny i adaptowalny uklad przestrzenny
                  </Col>
                  <Col s={4}>
                    <img src={silence} width="60%" />
                    <br />
                    Cicha i spokojna okolica
                  </Col>
                  <Col s={4}>
                    <img src={ogrod} width="60%" />
                    <br />
                    Budynek otoczony zielenią
                  </Col>
                  <Col s={4}>
                    <img src={windows} width="60%" />
                    <br />
                    Duze przeszklenia
                  </Col>
                </Row>
              </Col>

              <Col m={6} s={12}>
                <Row />
                <img src={img1} width="100%" />
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-2"
        >
          <Card className="z-depth-5">
            <h5>
              Lokalizacja <Divider />
            </h5>
            <Row />
            <Row />
            <Row />
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  ">
                  Miasto położone jest w Beskidzie Sądeckim, w dolinie potoku
                  Kryniczanka i jego dopływów. Krynica-Zdrój otaczają wzgórza
                  Góry Parkowej, Krzyżowej, Jasiennika. Miasto leży na terenie
                  Popradzkiego Parku Krajobrazowego, stanowi bazę wypadową w
                  okoliczne góry. <br />
                  <br />
                  <div className="left-align">
                  Uzdrowisko Krynica-Zdrój znajduje się we wschodniej części
                  Pasma Jaworzyny Krynickiej – jednego z dwóch pasm Beskidu
                  Sądeckiego.
                </div>
                  <br />
                  <Row>
                    <Col m={2}></Col>
                    <Col m={8}>
                      <div>
                        <h5>
                          <li>Centrum Krynicy - 1,3 km</li>
                          <br />
                          <li>Zrdeko "Ciurkacz"  - 50 m</li>
                          <br />
                          <li>Góra Parkowa - 2 km</li>
                          <br />
                          <li>Sklep Spożywczy - 100 m</li>
                          <br />
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </div>
                
              </Col>
              <Col m={6} s={12}>
                <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.531136832241!2d20.971877615372854!3d49.41777176911099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc55ac643528b3ff4!2zNDnCsDI1JzA0LjAiTiAyMMKwNTgnMjYuNiJF!5e0!3m2!1spl!2spl!4v1654243833197!5m2!1spl!2spl"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />{" "}
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-2"
        >
          <Card className="z-depth-5">
            <h5>
              O budynku <Divider />
            </h5>
            <Row />
            
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  ">
                  <h5>Historia miejsca</h5>
                  Budynek został wybudowany na początku XX w. Służył jako baza
                  noclegowa dla osób odwiedzających Krynicę-Zdrój, a przede
                  wszytkim Gorę Parkową.
                  <br />
                  <br />
                </div>
                <div className="left-align">
                  <h5>Kluczowe aspekty inwestycji</h5>
                  <Row />
            <Row />
                  <li>rewelacyjna lokalizacja</li>
                  <br />
                  <li>gruntowna rewitalziacja budynku willi - 1 etap</li>
                  <br />
                  <li>miejsca parkingowe zewnetrzne - 1 etap</li>
                  <br />
                  <li>Mieszkania objęte są 8% VAT</li>
                  <br />
                  <li>
                    Sprzedarz nie objęta jest ustawa deweloperską dla etapu 1,
                    gdyż sprzedawane są wyodrębnione lokale mieszkalne
                  </li>
                  <br />
                  <li>
                    Wspólnota zatrudni zewnętrznego administratora dla
                    zarządzania budynkiem
                  </li>
                  <br />
                  <li>
                    Lokale oferowane posiadają zaświadczenie o samodzielności
                    lokali
                  </li>
                  <br />
                  <li>winda - 1 etap</li>
                  <br />
                  <li>basen - 2 etap</li>
                  <br />
                  <li>integracja kotłowni z panelami słonecznymi - 2 etap</li>
                  <br />
                  <li>tarasy - 2 etap</li>
                  <br />
                  <li>mieszkania w stanie deweloperskim</li>
                  <br />
                  <li>
                    Możliwość wykupu miejsc parkingowych - cena 32 500 pln netto
                  </li>
                  <br />
                  
                  <li>garaż - 2 etap</li>
                </div>
              </Col>
              <Col m={6} s={12}>
                <Iframe
                  url="https://sketchfab.com/models/0bb9d7472cda434a93534511dc88f849/embed"
                  width="90%"
                  height="500px"
                  id="videoIframe"
                  className="imgCarousel"
                  display="initial"
                  position="relative"
                />
              </Col>
            </Row>
          </Card>
        </div>
      </Row>
      <Row>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="hoverable z-depth-2"
        >
          <Card className="z-depth-5">
            <h5>
              Terminy <Divider />
              <Row />
              <Col s={12} m={4}>
                Zakończenie Etapu 1 - planowane na 2 kwartał 2023 roku
                <br />
              </Col>
              <Col s={12} m={4}>
                Zakończenie Etapu 1 - planowane na rok 2023/2022
                <br />
              </Col>
              <Col s={12} m={4}>
                Rzopoczęcie sprzedarzy 1 kwartał 2022 rok
                <br />
              </Col>
              <Row>
                <Col m={6} s={12}>
                  <div className="left-align  "></div>
                </Col>
                <Col m={6} s={12}></Col>
              </Row>
            </h5>
          </Card>
        </div>
      </Row>
    </Row>
  );
};

export default Home;
