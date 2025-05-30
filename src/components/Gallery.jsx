import "materialize-css";
import React from "react";
import { Col, MediaBox, Row } from "react-materialize";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Helmet } from "react-helmet";
import scene8 from "../components/img/Scene 8.webp"
import scene9 from "../components/img/Scene 9 (2).webp"
import scene7 from "../components/img/Scene 7.webp"



import imgh1 from "../components/img/HOLMAJ25.jpg"

import imgh4 from "../components/img/BUDYNEKMAJ25.jpg"

let imgh2 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/hol2.webp";

let img19 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto.webp"
let img20 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto-2.webp"
let img21 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto-3.webp"
export default class Gallery extends React.Component {
  render() {
    return (

      <Row className="black">
        <Helmet>
          <title>Galeria</title>
          <meta name="description" content="Galeria zdjęć willa Złocień w Krynicy-Zdrój" />
          <meta property="og:image" content="https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto.webp" />
          <link
            rel="canonical"
            href="https://willazlocien.com/galeria"
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
        <Row /><div className="standard"></div>
        <Row>
          <Col s={12} m={6}>
            <MediaBox
              className="z-depth-3"
              id="MediaBox_1"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513970_5459907027399205_4461154066782848590_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q2hwhnNMoesAX9PUaYc&_nc_ht=scontent.flcj1-1.fna&oh=00_AT93HYM7NfpGoWebeEw1MrSlCxaHzYq-uBLr0oGnnLJd7Q&oe=62DBB30A" src={img19} width="100%" />
            </MediaBox>

          </Col>
          <Col s={12} m={6}>
            <MediaBox
              className="z-depth-3"
              id="MediaBox_1"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513970_5459907027399205_4461154066782848590_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q2hwhnNMoesAX9PUaYc&_nc_ht=scontent.flcj1-1.fna&oh=00_AT93HYM7NfpGoWebeEw1MrSlCxaHzYq-uBLr0oGnnLJd7Q&oe=62DBB30A" src={img20} width="100%" />
            </MediaBox>


          </Col>


        </Row><Row>
          <Col s={12} m={6}>
            <MediaBox
              className="z-depth-3"
              id="MediaBox_1"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513970_5459907027399205_4461154066782848590_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q2hwhnNMoesAX9PUaYc&_nc_ht=scontent.flcj1-1.fna&oh=00_AT93HYM7NfpGoWebeEw1MrSlCxaHzYq-uBLr0oGnnLJd7Q&oe=62DBB30A" src={scene9} width="100%" />
            </MediaBox>

          </Col>
          <Col s={12} m={6}>
            <MediaBox
              className="z-depth-3"
              id="MediaBox_1"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513970_5459907027399205_4461154066782848590_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q2hwhnNMoesAX9PUaYc&_nc_ht=scontent.flcj1-1.fna&oh=00_AT93HYM7NfpGoWebeEw1MrSlCxaHzYq-uBLr0oGnnLJd7Q&oe=62DBB30A" src={scene7} width="100%" />
            </MediaBox>

          </Col>
        </Row><Row>
          <Col s={12} m={6}>
            <MediaBox
              className="z-depth-3"
              id="MediaBox_6"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294285645_5459907120732529_7665346751386665222_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=F5hvg0x1KGYAX8EMmup&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-n2xG634dG3_tg96lx8AaM_ei7oUDvI6PCOiBlNM9DSA&oe=62DB3163" src={img21} width="100%" />
            </MediaBox>

          </Col>

          <Col s={12} m={6}>
            <MediaBox
              className="z-depth-3"
              id="MediaBox_6"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294285645_5459907120732529_7665346751386665222_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=F5hvg0x1KGYAX8EMmup&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-n2xG634dG3_tg96lx8AaM_ei7oUDvI6PCOiBlNM9DSA&oe=62DB3163" src={imgh4} width="100%" />
            </MediaBox>
          </Col>
        </Row>


        <Row>

          <Col s={12} m={6}>
            <MediaBox
              className="z-depth-3"
              id="MediaBox_6"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294285645_5459907120732529_7665346751386665222_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=F5hvg0x1KGYAX8EMmup&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-n2xG634dG3_tg96lx8AaM_ei7oUDvI6PCOiBlNM9DSA&oe=62DB3163" src={imgh1} width="100%" />
            </MediaBox>

          </Col>

          <Col s={12} m={6}>
            <MediaBox
              className="z-depth-3"
              id="MediaBox_6"
              options={{
                inDuration: 275,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
              }}
            >
              <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294285645_5459907120732529_7665346751386665222_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=F5hvg0x1KGYAX8EMmup&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-n2xG634dG3_tg96lx8AaM_ei7oUDvI6PCOiBlNM9DSA&oe=62DB3163" src={imgh2} width="100%" />
            </MediaBox>

          </Col>
        </Row>





        {" "}

      </Row>
    );
  }
}
