import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Card,
  Col,
  Divider,
  Row,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import pietro0 from "./svg/PIETRO1.svg";
import pietro1 from "./svg/PIETRO2.svg";
import pietro2 from "./svg/PIETRO3.svg";
import pietro3 from "./svg/PIETRO4.svg";
import Test from "./test";
const Lokale = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  return (
    <div><div className="lokalebg"></div>
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className=" "
      >
        <Card>
          
        <div className="center">
              <h3>
                Etap 1
                <Divider />
              </h3>
              Etap 1 obejmuje renowacje Willi Złocień.
              <br/>
              Podane ceny brutto.
              <br/>
              Powierzchnie mieszkań po wykonaniu remontu mogą róznić się +/- 1.5 m2 
              <br/>
              od powierzchni oferowanej, po obmiarze wykonawczym nastąpi korekta ceny.
              <Row />
            </div>
            <Row>
          <Col s={12} m={3}>
                <img src={pietro0} width="100%" />
                Parter
              </Col>
              
              <Col s={12} m={3}>
                <img src={pietro1} width="100%" /> Piętro 1
              </Col>
             
              <Col s={12} m={3}>
                <img src={pietro2} width="100%" /> Piętro 2
              </Col>
             
              <Col s={12} m={3}>
                <img src={pietro3} width="100%" />
                Piętro 3
              </Col>
            
           </Row>
          
          {" "}
        </Card>
      </div>{" "}
      <Card className="z-depth-5 white">
        <h5>
          Etap I - Willa Złocień <Divider />
        </h5>
        <Row />
        <Test />
      </Card>
      <Card className="z-depth-5 white">
        <h5>
          Etap II - Rozbudowa planowana na 2024 rok <Divider />
        </h5>
        <Row />
      </Card>
    </div>
  );
};

export default Lokale;
