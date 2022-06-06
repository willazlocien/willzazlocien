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

import lokal1 from "./svg/M.1.1 .svg"
import lokal2 from "./svg/M.1.2.svg"
import lokal3 from "./svg/M.2.1 .svg"
import lokal4 from "./svg/M.2.2.svg"
import lokal5 from "./svg/M.2.3.svg"
import lokal6 from "./svg/M.3.2.svg"
import lokal7 from "./svg/M.3.3.svg"
import lokal8 from "./svg/M.1.1 .svg"
import lokal9 from "./svg/M.1.1 .svg"
let baseURL =
  "https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/assets/";
const Lista = [
  {
    Rzut: (
      <Modal
      className="modalid"
        actions={[
          <Button flat modal="close" node="button" disabledwaves="green">
            Zamknij
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header={"Rzut "}
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
          <Button className="red" node="button"  disabled small>
            Rzut
          </Button>
        }
      >
        <Row>
          <Divider />  <img src={lokal1} width="100%" />
         
        </Row>
      </Modal>
    ),
  },
  {
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
        header={"Rzut "}
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
          <Button className="red" node="button"   small>
            Rzut
          </Button>
        }
      >
        <Row>
          <Divider />  <img src={lokal1} width="100%" />
         
        </Row>
      </Modal>
    ),
  },
  {
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
        header={"Rzut "}
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
          <Button className="red" node="button"   small>
            Rzut
          </Button>
        }
      >
        <Row>
          <Divider />  <img src={lokal2} width="100%" />
         
        </Row>
      </Modal>
    ),
  },
  {
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
        header={"Rzut "}
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
          <Button className="red" node="button"   small>
            Rzut
          </Button>
        }
      >
        <Row>
          <Divider />  <img src={lokal3} width="100%" />
         
        </Row>
      </Modal>
    ),
  },
  {
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
        header={"Rzut "}
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
          <Button className="red" node="button"   small>
            Rzut
          </Button>
        }
      >
        <Row>
          <Divider />  <img src={lokal4} width="100%" />
         
        </Row>
      </Modal>
    ),
  },
  {
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
        header={"Rzut "}
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
          <Button className="red" node="button"   small>
            Rzut
          </Button>
        }
      >
        <Row>
          <Divider />  <img src={lokal5} width="100%" />
         
        </Row>
      </Modal>
    ),
  },
  {
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
        header={"Rzut "}
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
          <Button className="red" node="button"   small>
            Rzut
          </Button>
        }
      >
        <Row>
          <Divider />  <img src={lokal6} width="100%" />
         
        </Row>
      </Modal>
    ),
  },
  
 
  
 
  
];
export default Lista;
