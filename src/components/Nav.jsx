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
        <Col m={12} l={8} push=" l2">
          <h3 className="red-text">Willa Złocień</h3>
          <div className="text-black">
            
          <Link to="home" className="btn red navbaritem">
            O inwestycji
          </Link>

          <Link to="standard" className="btn red navbaritem">
            Standard
          </Link>
          
          <Link to="lokale" className="btn red navbaritem" >
            Lokale
          </Link>
          <Link to="galeria" className="btn red navbaritem">
            Galeria
          </Link>
          <Link to="kontakt" className="btn red navbaritem">
            Kontakt
          </Link>
       </div>
        </Col>
      </Row>
    );
};

export default Nav;
