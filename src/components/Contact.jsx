import "leaflet/dist/leaflet.css";
import "materialize-css";
import React from "react";
import "react-leaflet";
import {
  CardPanel,
  Col, Row
} from "react-materialize";
import Button from "react-materialize/lib/Button";
import Divider from "react-materialize/lib/Divider";
import MapIn from "./MapIn";
import emailjs from 'emailjs-com';
import Iframe from "react-iframe";

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_a1wwmva', 'template_jnm4g0d', e.target, 'user_x9kPpW1JmhYVbwVWmxAVD')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}


class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
      lang: localStorage.getItem("lang"),
    };
  }
  
  render() {

    if (this.state.lang == "en")
      return (
        <div>
    
          <Row>
            <Col m={4} s={12} offset="m1">
              <Button
                className="z-depth-2 red "
                large
                target="blank"
                node="a"
                href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
              >
                Google Maps
              </Button>
              <a className="btn-large red " href="tel:+48518048983">
                Call us
              </a>
              <CardPanel className="white z-depth-2">
                <h5 className="center">Contact form</h5>
                <Row></Row>
                <Divider />
                <Row></Row>
                <div className="center ">
                  <form id="contact-form">
                    <Row>
                      <Col m={6} s={12}>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </Col>
                      <Col m={6} s={12}>
                        <div className="form-group">
                          <label htmlFor="name">Company's Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </Col>
                    </Row>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn red">
                      Send
                    </button>
                  </form>
                </div>
              </CardPanel>
              <CardPanel className="white z-depth-2">
                If additional information is required, please contact us using
                the application form or with our office from Monday to Friday,
                from 8:00 am until 4 p.m. Our advisors will present a specially
                prepared offer and will answer all your questions.
                <Row></Row>
                <br />
               Idea Development
                <br />
               Rakowicka 15
                <br />
                31-013 Krakow
                <br />T : +48 xxxxxxxxxxxxx
                <br />
                E: leszek.kraus@ideadevelopment.pl 
              </CardPanel>
            </Col>

            <Col m={1} s={0} />
            <Col m={5} s={12}>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <CardPanel className="white z-depth-2">
                {/* <div id="map" style={{ height: 500 }}>
                  <MapIn />
                </div> */}
                 <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.0508984842268!2d19.950128215396784!3d50.066608422829205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b19a3f7dbaf%3A0xc54683c71aef0750!2sRakowicka%2015%2C%2031-511%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1654247482292!5m2!1spl!2sp"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />{" "}
              </CardPanel>
            </Col>
          </Row>
        </div>
      );
    else
      return (
        <div>
      
          <Row>
            <Col m={4} s={12} offset="m1">
              <Button
                className="z-depth-2  black"
                large
                target="blank"
                node="a"
                href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
              >
                Google Maps
              </Button>
              <a className="btn-large black " href="tel:+48518048983">
                zadzwoń
              </a>
              <CardPanel className="white z-depth-2">
                <h5 className="center">Formularz Kontaktowy</h5>
                <Row></Row>
                <Divider />
                <Row></Row>
                <div className="center ">
                <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>   </div>
              </CardPanel>
              <CardPanel className="white z-depth-2">
                W razie zainteresowania lub w celu uzyskania dodatkowych
                informacji prosimy o kontakt za pomocą formularza zgłoszeniowego
                lub z naszym biurem od poniedziałku do piątku, w godzinach od
                8:00 do 16:00. Nasi doradcy przedstawią specjalnie przygotowaną
                ofertę oraz odpowiedzą na wszystkie Państwa pytania.
                <Row></Row>
                <br />
               Idea Development
                <br />
               Rakowicka 15
                <br />
                31-013 Krakow
                <br />T : +48 xxxxxxxxxxxxx
                <br />
                E: leszek.kraus@ideadevelopment.pl 
              </CardPanel>
            </Col>

            <Col m={1} s={0} />
            <Col m={5} s={12}>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <CardPanel className="white z-depth-2">
                {/* <div id="map" style={{ height: 500 }}>
                  <MapIn />
                </div> */}
                 <Iframe
                  url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.0508984842268!2d19.950128215396784!3d50.066608422829205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b19a3f7dbaf%3A0xc54683c71aef0750!2sRakowicka%2015%2C%2031-511%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1654247482292!5m2!1spl!2sp"
                  width="100%"
                  height="600px"
                  id="myId"
                  className="myClassname"
                  display="initial"
                  position="relative"
                />{" "}
              </CardPanel>
            </Col>
          </Row>
        </div>
      );
  }
}
export default Contact;

