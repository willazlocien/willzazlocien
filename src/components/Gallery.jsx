import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  MediaBox,
  Row,
  Modal,
  Slide,
  Caption,
  Table,
  Carousel,
  Card,
} from "react-materialize";

import img1 from "../components/img/1.png"
import img2 from "../components/img/13.png"
import img3 from "../components/img/axoLokale.webp"
import img4 from "../components/img/1.png"
import img5 from "../components/img/13.png"
import img6 from "../components/img/axoLokale.webp"
import img7 from "../components/img/1.png"
import img8 from "../components/img/13.png"
import img9 from "../components/img/axoLokale.webp"


export default class Gallery extends React.Component {
  render() {
    return <Row>
      
      <Col s={12}  m={4}><MediaBox
  id="MediaBox_1"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={img1}
    width="100%"
  />
</MediaBox><Row/>
      </Col>
      <Col s={12}  m={4}><MediaBox
  id="MediaBox_2"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={img2}
    width="100%"
  />
</MediaBox><Row/>
      </Col>
      <Col s={12}  m={4}><MediaBox
  id="MediaBox_2"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={img3}
    width="100%"
  />
</MediaBox><Row/>
      </Col>
      <Col s={12}  m={4}><MediaBox
  id="MediaBox_3"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={img4}
    width="100%"
  />
</MediaBox><Row/>
      </Col>
      <Col s={12}  m={4}><MediaBox
  id="MediaBox_4"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={img5}
    width="100%"
  />
</MediaBox>
<Row/>
      </Col>
      <Col s={12}  m={4}><MediaBox
  id="MediaBox_5"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={img5}
    width="100%"
  />
</MediaBox>
<Row/>
      </Col>
      <Col s={12}  m={4}><MediaBox
  id="MediaBox_6"
  options={{
    inDuration: 275,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200
  }}
>
  <img
    alt=""
    src={img9}
    width="100%"
  />
</MediaBox>
<Row/>
      </Col>
    
    </Row>;
  }
}
