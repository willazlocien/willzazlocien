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
// import pietro0 from "./svg/PIETRO1.svg";
// import pietro1 from "./svg/PIETRO2.svg";
// import pietro2 from "./svg/PIETRO3.svg";
// import pietro3 from "./svg/PIETRO4.svg";
import rozbudowa0 from "./svg/rozbudowa0.svg";
import rozbudowa1 from "./svg/rozbudowa1.svg";
import rozbudowa2 from "./svg/rozbudowa2.svg";
import rozbudowa3 from "./svg/rozbudowa3.svg";
import rozbudowa4 from "./svg/rozbudowa4.svg";





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
              Etap 2
              <Divider />
            </h3>
            Etap 2 obejmuje rozbudowę Willi Złocień.
            <br />
            Podane ceny brutto.
            <br />
            Powierzchnie mieszkań po wykonaniu remontu mogą róznić się +/- 1.5 m2
            <br />
            od powierzchni oferowanej, po obmiarze wykonawczym nastąpi korekta ceny.
            <Row />
          </div>
          <Row className="">
          <Col s={12} m={1}>
           
            </Col>
            <Col s={12} m={2}>
              <img src={rozbudowa0} width="100%" />
              Parter
            </Col>

            <Col s={12} m={2}>
              <img src={rozbudowa1} width="100%" /> 
              Piętro 1
            </Col>

            <Col s={12} m={2}>
              <img src={rozbudowa2} width="100%" /> 
              Piętro 2
            </Col>

            <Col s={12} m={2}>
              <img src={rozbudowa3} width="100%" />
              Piętro 3
            </Col>
            <Col s={12} m={2}>
              <img src={rozbudowa4} width="100%" />
              Piętro 4
            </Col>
          </Row>
          {/* <div className="center">
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
            
           </Row> */}

          {" "}
        </Card>
      </div>{" "}
      <Card className="z-depth-5 white">
        <h5>
          Lokale - Willa Złocień <Divider />
        </h5>
        <Row />
        <Test />
      </Card>
      <Card className="z-depth-5 white">
        <h5>
          Etap I - Renowacja Willi Złocień - Zakończono <Divider />
        </h5>
        <Row />
      </Card>
    </div>
  );
};

export default Lokale;
