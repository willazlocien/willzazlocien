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

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  if (lang == "en") return <Row>  <Lokale/></Row>;
  else
    return (
 <Row>
   <Lokale/>
 </Row>
      );
};

export default Offer;
