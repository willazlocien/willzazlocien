import db from "./firebase.config";
import React, { useState, useEffect } from "react";
import { PDFViewer } from '@react-pdf/renderer';
import "materialize-css";
import { Divider, Button, Modal, Col, Row } from "react-materialize";
// import { Document, Page } from 'react-pdf';

import lokalm01 from "./svg/M01.pdf";
import lokalm02 from "./svg/M02.pdf";
import lokalm03 from "./svg/M03.pdf";
import lokalm04 from "./svg/M04.pdf";
import lokalm05 from "./svg/M05.pdf";
import lokalm06 from "./svg/M06.pdf";
import lokalm07 from "./svg/M07.pdf";
import lokalm08 from "./svg/M08.pdf";
// import lokalm08 from "./svg/M08.pdf";
import lokalm11 from "./svg/M11.pdf";
// import lokalm12 from "./svg/M12.svg";
import lokalm13 from "./svg/M13.pdf";
import lokalm14 from "./svg/M14.pdf";
import lokalm15 from "./svg/M15.pdf";
import lokalm16 from "./svg/M16.pdf";
import lokalm17 from "./svg/M17.pdf";
import lokalm18 from "./svg/M18.pdf";
import lokalm19 from "./svg/M19.pdf";
import lokalm110 from "./svg/M110.pdf";
import lokalm111 from "./svg/M111.pdf";

import lokalm21 from "./svg/M21.pdf";
import lokalm22 from "./svg/M22.pdf";
import lokalm23 from "./svg/M23.pdf";
import lokalm24 from "./svg/M24.pdf";
import lokalm25 from "./svg/M25.pdf";
import lokalm26 from "./svg/M26.pdf";
import lokalm27 from "./svg/M27.pdf";
import lokalm28 from "./svg/M28.pdf";
import lokalm29 from "./svg/M29.pdf";

import lokalm31 from "./svg/M31.pdf";
import lokalm32 from "./svg/M32.pdf";
import lokalm32A from "./svg/M32A.pdf"
import lokalm34 from "./svg/M34.pdf";
import lokalm33 from "./svg/M33.pdf";
import lokalm35 from "./svg/M35.pdf";
import lokalm36 from "./svg/M36.pdf";
import lokalm37 from "./svg/M37.pdf";

import lokalm41 from "./svg/M41.pdf";
import lokalm42 from "./svg/M42.pdf";
import lokalm43 from "./svg/M43.pdf";
import lokalm44 from "./svg/M44.pdf";

import lokalm51 from "./svg/M51.pdf";
import lokalm52 from "./svg/M52.pdf";

const Lista = [
  { id: "lokalm01", lokal: lokalm01, active: "" },
  { id: "lokalm02", lokal: lokalm02, active: "" },
  { id: "lokalm03", lokal: lokalm03, active: "" },
  { id: "lokalm04", lokal: lokalm04, active: "" },
  { id: "lokalm05", lokal: lokalm05, active: "" },
  { id: "lokalm06", lokal: lokalm06, active: "" },
  { id: "lokalm07", lokal: lokalm07, active: "" },
  { id: "lokalm08", lokal: lokalm08, active: "" },
  { id: "lokalm11", lokal: lokalm11, active: "" },
  // { id: "lokalm12", lokal: lokalm12, active: "" },
  { id: "lokalm110", lokal: lokalm110, active: "" },
  { id: "lokalm111", lokal: lokalm111, active: "" },
  { id: "lokalm13", lokal: lokalm13, active: "" },
  { id: "lokalm14", lokal: lokalm14, active: "" },
  { id: "lokalm15", lokal: lokalm15, active: "" },
  { id: "lokalm16", lokal: lokalm16, active: "" },
  { id: "lokalm17", lokal: lokalm17, active: "" },
  { id: "lokalm18", lokal: lokalm18, active: "" },
  { id: "lokalm19", lokal: lokalm19, active: "" },
  
  { id: "lokalm21", lokal: lokalm21, active: "" },
  { id: "lokalm22", lokal: lokalm22, active: "" },
  { id: "lokalm23", lokal: lokalm23, active: "" },
  { id: "lokalm24", lokal: lokalm24, active: "" },
  { id: "lokalm25", lokal: lokalm25, active: "" },
  { id: "lokalm26", lokal: lokalm26, active: "" },
  { id: "lokalm27", lokal: lokalm27, active: "" },
  { id: "lokalm28", lokal: lokalm28, active: "" },
  { id: "lokalm29", lokal: lokalm29, active: "" },
  { id: "lokalm31", lokal: lokalm31, active: "" },
  { id: "lokalm32", lokal: lokalm32, active: "" },
  { id: "lokalm32A", lokal: lokalm32A, active: "" },
  { id: "lokalm33", lokal: lokalm33, active: "" },
  { id: "lokalm34", lokal: lokalm34, active: "" },
  { id: "lokalm35", lokal: lokalm35, active: "" },
  { id: "lokalm36", lokal: lokalm36, active: "" },
  { id: "lokalm37", lokal: lokalm37, active: "" },
  { id: "lokalm41", lokal: lokalm41, active: "" },
  { id: "lokalm42", lokal: lokalm42, active: "" },
  { id: "lokalm43", lokal: lokalm43, active: "" },
  { id: "lokalm44", lokal: lokalm44, active: "" },
  { id: "lokalm51", lokal: lokalm51, active: "" },
  { id: "lokalm52", lokal: lokalm52, active: "" },

];



const Read = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      Fetchdata();
    }, 1); //miliseconds
  }, []);
  //  window.addEventListener("load", () => {
  //     Fetchdata();
  //   });

  // Fetch the required data using the get() method
  const Fetchdata = async () => {
    await db
      .collection("pawla")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  const items = info.map((data) => {
    if (data.DOSTEPNOSC == "DOSTĘPNY")
      return (
        <Row className="hoverable green-text textMobile">
          <Col className="tabela" s={2}>
            {data.LOKAL}
          </Col>
          <Col className="tabela" s={2}>
            {data.METRAZ}
          </Col>
          <Col className="tabela" s={1}>
            {data.PIETRO}
          </Col>
          <Col className="tabela" s={2}>
            {data.CENA}
          </Col>
          <Col className="tabela" s={4}>
            {data.DOSTEPNOSC}
          </Col>
        </Row>
      );
    else
      return (
        <Row className="hoverable red-text textMobile">
          <Col className="tabela" s={2}>
            {data.LOKAL}
          </Col>
          <Col className="tabela" s={2}>
            {data.METRAZ}
          </Col>
          <Col className="tabela" s={1}>
            {data.PIETRO}
          </Col>
          <Col className="tabela" s={2}>
            {data.CENA}
          </Col>
          <Col className="tabela" s={4}>
            {data.DOSTEPNOSC}
          </Col>
        </Row>
      );
  });
  const items2 = Lista.map((data) => {
    return (
      <Row>
        <Col className="tabela hide-on-small-only" s={12}>
          <Modal
            className="modalid"
            actions={[
              <Button flat modal="close" node="button" small waves="green">
                Zamknij
              </Button>,
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header={"Rzut "}
            id={data.id}
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
                Rzut
              </Button>
            }
          >
            <Row>
              <Divider />


              <iframe src={data.lokal} width="100%" height={1200} />


              {/* <img src={data.lokal} width="100%" /> */}
            </Row>
          </Modal>
        </Col>
        {/* <Col className="tabela hide-on-med-and-up" s={12}>
          <Modal
            className="modalid"
            actions={[
              <Button flat modal="close" node="button" small waves="green">
                Zamknij
              </Button>,
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header={"Rzut "}
            id={data.id}
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
              <p className="red white-text" node="button" small>
                Rzut
              </p>
            }
          >
            <Row>
              <Divider />

           <PDFViewer
              height={300}
              width={300}
              renderMode='svg'
              >
                {data.lokal}
              </PDFViewer>
            </Row>
          </Modal>
        </Col> */}
      </Row>
    );
  });
  return (
    <div className="">
      <Row className="white textMobile pawla12">
        <Col s={10}>
          <Row>
            <Col className="tabela" s={2}>
              LOKAL
            </Col>
            <Col className="tabela" s={2}>
              M2
            </Col>
            <Col className="tabela hide-on-med-and-up" s={1}>
              PIĘ
              <br />
              TRO
            </Col>
            <Col className="tabela hide-on-small-only" s={1}>
              PIĘTRO
            </Col>
            <Col className="tabela" s={2}>
              CENA
            </Col>

            <Col className="tabela" s={4}>
              DOSTĘPNOSC
            </Col>
          </Row>
          {items}
        </Col>
        <Col className="tabela hide-on-small-only" s={2}>
          Rzut <br />
          <Row /> <Row />

          {items2}
        </Col>
      </Row>
    </div>
  );
};

export default Read;
