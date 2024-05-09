import "materialize-css";
import React from "react";
import { Col, MediaBox, Row } from "react-materialize";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

let img19 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto.webp"
let img20 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto-2.webp"
let img21 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto-3.webp"

let img1 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/Image 01.webp";
let img5 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/Image 05.webp";
let img12 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/Image 12.webp";





export default class Gallery extends React.Component {
  render() {
    return (
      <Row className="black">
          <br />
            <div className="hide-on-small-only">
              <Nav />
            </div>
            <div className="hide-on-med-and-up">
              <NavMobile />
            </div>
            <br />
        <Row/><div className="standard"></div>
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
          <Row />
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
          <Row />
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
            <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513970_5459907027399205_4461154066782848590_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q2hwhnNMoesAX9PUaYc&_nc_ht=scontent.flcj1-1.fna&oh=00_AT93HYM7NfpGoWebeEw1MrSlCxaHzYq-uBLr0oGnnLJd7Q&oe=62DBB30A" src={img1} width="100%" />
          </MediaBox>
          <Row />
        </Col>
        <Col s={12} m={6}>
          <MediaBox
            className="z-depth-3"
            id="MediaBox_2"
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
            }}
          >
            <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294741285_5459907087399199_4943312274515117985_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=z28YBJ4N7RsAX8Q--O_&tn=o5ey6nqbzOgQXIue&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9ulwuoR4xqMB17GizKbaL0ONo1NRy2WaY62jEdDa5xbw&oe=62DABE07" src={img12} width="100%" />
          </MediaBox>
          <Row />
        </Col>
        {/* <Col s={12} m={6}>
          <MediaBox
            className="z-depth-3"
            id="MediaBox_3"
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
            }}
          >
            <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513602_5459907064065868_9194213757905239748_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=P06CFikdOOAAX_6k076&tn=o5ey6nqbzOgQXIue&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8u4VeKgUkDzUPFQim6uOBzOvCbv1fTypOWjfX_twuqlQ&oe=62DC2C4B" src={img4} width="100%" />
          </MediaBox>
          <Row />
        </Col> */}
        <Col s={12} m={6}>
          <MediaBox
            className="z-depth-4"
            id="MediaBox_4"
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
            }}
          >
            <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294864534_5459907090732532_1422648611873246676_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=fC8gf2dGmPkAX89NBG4&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8rwUIdSGXY1G6Yyb12EGbIXtqP2Kx5_XB-Qf9BXF_77g&oe=62DBFE6C" src={img5} width="100%" />
          </MediaBox>
          <Row />
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
            <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294285645_5459907120732529_7665346751386665222_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=F5hvg0x1KGYAX8EMmup&_nc_ht=scontent.flcj1-1.fna&oh=00_AT-n2xG634dG3_tg96lx8AaM_ei7oUDvI6PCOiBlNM9DSA&oe=62DB3163" src={img21} width="100%" />
          </MediaBox>
          <Row />
        </Col>
   
   
      
        {/* <Col s={12} m={6}>
          <MediaBox
            className="z-depth-3"
            id="MediaBox_6121"
            options={{
              inDuration: 275,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
            }}
          >
            <img alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294767948_5459907427399165_8788460574981909151_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=o5pgFvzgsIcAX-KdInj&_nc_ht=scontent.flcj1-1.fna&oh=00_AT9aK4x0yIZGYiEXHyU4vbivEE-TTlJwgN5Yv80Y1FIf5A&oe=62DC5607" src={img18} width="100%" />
          </MediaBox>
          <Row />
        </Col> */}
       
        {" "}
        
      </Row>
    );
  }
}
