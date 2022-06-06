import React, { Component } from "react";
import "./App.css";
import "materialize-css";
import { Button, Card, Row, Col } from "react-materialize";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Other from "./components/Other";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import TypA from "./components/TypA";
import TypB from "./components/TypB";
import TypC from "./components/TypC";
import TypD from "./components/TypD";
import test from "./components/test"
function App() {
  return (
    <div className="App">
      <Row>
        <Col s={12} m={10} l={8} push="m1 l2 s0" className="appbg">
          <BrowserRouter>
            <br />
            <div className="hide-on-small-only">
<Nav />
            </div>
            <div className="hide-on-med-and-up">
<NavMobile />
            </div>
            <br />

            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/offer" component={Offer} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/typa" component={TypA} />
              <Route path="/typb" component={TypB} />
              <Route path="/typc" component={TypC} />
              <Route path="/typd" component={TypD} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/test" component={test} />
              <Route path="/other" component={Other} />{" "}
              <Route path="/:any" component={Home} />
              <Route path="/" component={Home} />
            </Switch>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <div className="grey darken-2">
              <Row>
                <Col m={6}>
                  <h3 className="white-text valign-align">Dane Kontaktowe</h3>
                </Col>
                <Col m={6}>
                  <h5 className="white-text left-align">
                    {/* +48 509 446 704, 
                    <br/>+48 509 447 006, 
                    <br/>+48 518 048 983
                    <br/>Rynek Główny 43, 31-013 Kraków, Polska
                    <br/>NIP: 676 243 76 55
                    <br/>© 2023 by Choluj Design s.c. */}
                  </h5>
                </Col>
              </Row>
            </div>
          </BrowserRouter>
        </Col>
      </Row>
<div className="hide-on-small-only">
      <Button
        className="z-depth-2  btnhome0 red"
        target="blank"
        node="a"
        href="https://goo.gl/maps/te1YqVZKmfbe3EdM6"
      >
        Nasze Biuro
      </Button>
      <Button
        className="z-depth-2  btnhome1 red"
        target="blank"
        node="a"
        href="https://goo.gl/maps/sSB9xmXwWHLGFXTD9"
      >
        Willa Złocień
      </Button>
      <Button
        className="z-depth-2 red  btnhome2"
        target="blank"
        node="a"
        href="tel:+ 48601437453"
      >
        zadzwoń
      </Button>
      <Button
        className="z-depth-2  red btnhome3"
        target="blank"
        node="a"
        href="mailto:leszek.kraus@ideadevelopment.pl"
      >
        Email
      </Button>
    </div></div>
  );
}

export default App;