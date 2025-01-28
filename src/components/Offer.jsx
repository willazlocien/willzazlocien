import "materialize-css";
import React, { Component, useEffect } from "react";
import { Button, Col, Divider, Row, Card, CardTitle } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import arch from "../components/svg/arch.svg";
import obsluga from "../components/svg/obsluga.svg";
import other2 from "../components/svg/other2.svg";
import marketing from "../components/svg/marketing.svg";
import interrior from "../components/svg/interrior.svg";
import bim from "../components/svg/bim.svg";
import Lokale from "../components/Lokale"
import Nav from "./Nav";
import { Helmet } from "react-helmet";
import NavMobile from "./NavMobile";

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");
  return (
    

      <Row>
        <Helmet>
          <title>Lokale</title>
          <meta name="description" content="Oferta mieszkań dla Willa Złocień w Krynicy-Zdrój" />
          <meta property="og:image" content="https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto.webp" />
          <link
            rel="canonical"
            href="https://willazlocien.com/lokale"
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
          <Lokale />
      </Row>
      );
};

      export default Offer;
