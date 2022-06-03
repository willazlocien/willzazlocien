import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Modal,
  Slide,
  Caption,
  Table,
  Card, Slider
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";
import Iframe from "react-iframe";
import ReactPlayer from "react-player";
import Lokale from "./Lokale";
import ogrod from "./svg/ogrod.svg";
import autostrada from "./svg/autostrada.svg";
import karkowwieliczka from "./svg/krakowwieliczka.svg";
import silence from "./svg/silence.svg";
import windows from "./svg/windows.svg";
import layout from "./svg/layout.svg";
import arrow from "./svg/arrow.svg";
import oddanie from "./svg/oddanie.svg";
import budowa from "./svg/budowa.svg";
import sprzedaz from "./svg/sprzedaz.svg";
import img1 from "../components/img/1.png"
import img2 from "../components/img/2.png"
import img3 from "../components/img/3.png"
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
              url="https://youtu.be/e2pJmZU8rdA"
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
    interval: 6000
  }}
>
  <Slide image={<img alt="" src={img1}/>}>
    <Caption placement="center">
      <h3>
        Nowa inwestycja
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Krynica-Zdrój - Willa Złocień
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={img2}/>}>
    <Caption placement="left">
      <h3>
        Etap I
      </h3>
      <h5 className="light grey-text text-lighten-3">
       Rewitalziacja Willi
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={img3}/>}>
    <Caption placement="right">
      <h3>
       Etap II
      </h3>
      <h5 className="light grey-text text-lighten-3">
       Rozbudowa
      </h5>
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
            <Row><div className="left-align  ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
              <Col m={6} s={12}>
                
                <Row />
                <Row>
                  <Col s={4}>
                    <img src={autostrada} width="60%" />
                    <br />Górskie trasy rowerowe i piesze
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
                <Row/>
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  <br />
                  <br />
                  <br />
                  <Row>
                    <Col m={2}></Col>
                    <Col m={8}>
                      <div>
                        <h5>
                          <li>Centrum Krynicy - xx km</li>
                          <br />
                          <li>Stacja Kolejowa xx - xxkm</li>
                          <br />
                          <li>Góra Parkowa - 2 km</li>
                          <br />
                          <li>sklep spożywczy - xx km</li>
                          <br />
                          <li>Paczkomat Inpost - xx m</li>
                          <br />
                        </h5>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="left-align">
                Uzdrowisko Krynica-Zdrój znajduje się we wschodniej części Pasma Jaworzyny Krynickiej – jednego z dwóch pasm Beskidu Sądeckiego.
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
            <Row />
            <Row />
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  ">
                  <h5>Historia miejsca</h5>
                "Idea development prezentuje ..... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  <br />
                  <br />
                  <br />
                
                </div>
                <div className="left-align">
                <h5>Kluczowe aspekty inwestycji</h5>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, semollit anim id est laborum."
                <h5>
                <li>garaż</li><br/>
                <li>miejsca parkingowe zewnetrzne</li><br/>
                <li>basen</li><br/>
                <li>tarasy</li><br/></h5>
                </div>
              </Col>
              <Col m={6} s={12}>
              <Iframe url="https://sketchfab.com/models/a85b372a3f8d4a7985caea65ca94932b/embed"
     width="90%"
       height="500px"
      id="videoIframe"
      className="imgCarousel"
      display="initial"
      position="relative"/>
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
            </h5>
            <Row />
            <Col s={12} m={4}>
              <img  className="red" src={sprzedaz} width="70%" />
              <br />
         
            </Col>
            <Col s={12} m={4}>
              <img className="red" src={budowa} width="70%" />
              <br />
     
            </Col>
            <Col s={12} m={4}>
              <img className="red" src={oddanie} width="70%" />
              <br />
           
            </Col>
            <Row>
              <Col m={6} s={12}>
                <div className="left-align  "></div>
              </Col>
              <Col m={6} s={12}></Col>
            </Row>
          </Card>
        </div>
      </Row>
    </Row>
  );
};

export default Home;
