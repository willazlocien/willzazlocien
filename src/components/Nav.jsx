import "materialize-css";
import React, { Component, useEffect } from "react";
import { Card, Col, Divider, Row } from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Nav = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  
  let lang = localStorage.getItem("lang");


    return (
      <Row className="navbar">
        <Col m={10} l={6} push="m1 l3">
          <h3 className="red-text">Willa Złocień</h3>
          <div className="text-black">
            
          <Link to="home" className="btn red navbaritem">
            O inwestycji
          </Link>

          <Link to="standart" className="btn red navbaritem">
            Standart
          </Link>
          
          <Link to="offer" className="btn red navbaritem" >
            Lokale
          </Link>
          <Link to="gallery" className="btn red navbaritem">
            Galeria
          </Link>
          <Link to="contact" className="btn red navbaritem">
            Kontakt
          </Link>
       </div>
        </Col>
      </Row>
    );
};

export default Nav;
