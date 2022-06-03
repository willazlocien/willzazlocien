import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Card,
  Button,
  Col,
  Divider,
  Row,
  Slider,
  Slide,
  Caption,
  Modal,
  Table,
  Carousel
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";
import axoLokale from "./img/axoLokale.webp";
import axoLokale1 from "./img/axoLokale1.webp";
import axoLokale2 from "./img/axoLokale2.webp";
import axoLokale3 from "./img/axoLokale3.webp";

const Lokale = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  const items = Lista.map((Lista) => {
    return (
      <Table>
        <tr className="hoverable">
          <td>{Lista.Lokal}</td>
          <td>{Lista.Metraz}</td>
          <td>{Lista.Pietro}</td>
          <td>{Lista.Cena}</td>
          <td>{Lista.Status}</td>
          <td>{Lista.Rzut}</td>
          <td>{Lista.Informacje}</td>
        </tr>
      </Table>
    );
  });

  return (
    <div>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="hoverable z-depth-5 white"
      >
        <Row>
          
            
            <Col s={12} m={8}>
              {" "}
              <Carousel
  carouselId="Carousel-2"
  className="white-text center car"
  options={{
    fullWidth: true,
    indicators: true
  }}
>
  <div className="black">
  <img src={axoLokale} width="100%" />
  </div>
  <div className="black">
  <img src={axoLokale1} width="100%" />
  </div>
  <div className="black">
  <img src={axoLokale2} width="100%" />
  </div>
  <div className="black">
  <img src={axoLokale3} width="100%" />
  </div>

 
</Carousel>
              
            </Col>
            <Col s={12} m={4}>
              <div className="left-align">
                <h3>
                  Układ Lokali
                  <Divider />
                </h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus
                <Row />
              </div>
            </Col> </Row >
          
        
      </div>{" "}

      <Card className="z-depth-5 white">
      {items}
      </Card>
    </div>
  );
};

export default Lokale;
