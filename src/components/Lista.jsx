import React from "react";
import { Table, Button, Modal, Row, Col,  } from "react-materialize";
import Divider from "react-materialize/lib/Divider";
import planparter1 from "./svg/planparter1.svg";
import planparter2 from "./svg/planparter2.svg";
import planparter3 from "./svg/planparter3.svg";
import planpietro1a from "./svg/planpietro1a.svg";
import planpoddasze1a from "./svg/planppoddasze1a.svg";
import planpietro1b from "./svg/planpietro1b.svg";
import planpoddasze1b from "./svg/planppoddasze1b.svg";
import { Link } from "react-router-dom";
let baseURL =
  "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/";
const Lista = [
  {
    Lokal: "Lokal",
    Metraz: "Metraz",
    Pietro: "Piętro",
    Cena: "Cena",
    Status: "Dotępność",
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Informacje "}
        id="M1"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" disabled small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
         informacje ogolne
        </Row>
      </Modal>
    ),
   
  },
  {
    Lokal: "M 1",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 1"}
        id="M1"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
           
            
          </Col>
       
      <Button
        className="z-depth-2 red  "
        target="blank"
        node="a"
        href="tel:+48518048983"
      >
        zadzwoń
      </Button>
      <Button
        className="z-depth-2  red "
        target="blank"
        node="a"
        href="https://goo.gl/maps/xrJdtaQWoJFFU5ya7"
      >
        Email
      </Button>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 2",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 2"}
        id="M2"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1a} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1a} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 3",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 3"}
        id="M3"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 4",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 4"}
        id="M4"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1b} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1b} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },

  {
    Lokal: "M 5",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 5"}
        id="M5"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 6",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 6"}
        id="M6"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1a} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1a} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 7",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 7"}
        id="M7"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 8",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 8"}
        id="M8"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1b} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1b} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },

  {
    Lokal: "M 9",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 9"}
        id="M9"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 10",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 10"}
        id="M10"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1a} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1a} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 11",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 11"}
        id="M11"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 12",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 12"}
        id="12"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1b} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1b} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },

  {
    Lokal: "M 13",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 13"}
        id="13"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 14",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 14"}
        id="14"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1a} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1a} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 15",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 15"}
        id="15"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 16",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 16"}
        id="16"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1b} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1b} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },

  {
    Lokal: "M 17",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 17"}
        id="17"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 18",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 18"}
        id="18"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1a} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1a} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 19",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 19"}
        id="19"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 20",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 20"}
        id="20"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1b} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1b} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },

  {
    Lokal: "M 21",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 21"}
        id="21"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 22",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 22"}
        id="22"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1a} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1a} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 23",
    Metraz: "52m2",
    Pietro: "0 pietro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 23"}
        id="23"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter1} alt="" width="100%" />
            <h5 className="center">Wersja A</h5>
          </Col>
          <Col s={12} m={6} push="m" l={4}>
            <img className="center" src={planparter2} alt="" width="100%" />
            <h5 className="center">Wersja B</h5>
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 5.27 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Przedsionek 1.88 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem A 20.18 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem B 30.55 m2
                  <Divider />
                </li>
                <li>
                Taras 7.5 m2
                <Divider />
              </li>
              <li>
                Ogród
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red " small node="a" href="typa">
        informacje
      </Button>
    ),
  },
  {
    Lokal: "M 24",
    Metraz: "55m2",
    Pietro: "1 piętro",
    Cena: "2pln",
    Status:   <Link to="contact" className="navbaritem">
            Zapytaj
          </Link>,
    Rzut: (
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut Lokalu M 24"}
        id="24"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={
          <Button className="red" node="button" small>
            Informacje
          </Button>
        }
      >
        <Row>
          <Divider />
          <Row />
          <Row />
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Piętro</h5>
            <img className="center" src={planpietro1b} alt="" width="100%" />
            
          </Col>
          <Col s={12} m={6} push="m" l={4}><h5 className="center">Poddasze</h5>
            <img className="center" src={planpoddasze1b} alt="" width="95%" />
            
          </Col>
          <Col s={12} m={4} l={4} push="m">
            <h5>
              Zestawienie pomieszczeń
              <br/><br/>
              <li className="grey lighten-2">
                Hol 2.81 m2
                <Divider />
              </li>
              <li className="yellow lighten-4">
                Pokój 6.15 m2
                <Divider />
              </li>
              <li className=" teal lighten-5">
                Sypialnia 1 10.37 m2
                <Divider />
              </li>
              <li className=" brown lighten-3">
                Sypialnia 2 10.37 m2
                <Divider />
              </li>
              <li className=" blue lighten-4">
                  Łazienka 1 5.33 m2
                  <Divider />
                </li>
                <li className="red lighten-4">
                  Salon z aneksem  20.18 m2
                  <Divider />
                </li>
               
                <li>
                Balkon 5.36 m2
                <Divider />
              </li>
              <li>
                Ogród - naprzeciwko wejścia
                <Divider />
              </li><br/>
              Przy zaadaptowanym poddaszu
              <br/><br/>
              <li className="pink lighten-4">
                Sypialnia 3 25 m2
                <Divider />
              </li>
              <li className="green lighten-4">
                Łazienka 2 4 m2
                <Divider />
              </li>
            </h5>
          </Col>
        </Row>
      </Modal>
    ),

    Informacje: (
      <Button className="z-depth-2 red  " small node="a" href="typb">
        informacje
      </Button>
    ),
  },

  
];
export default Lista;
