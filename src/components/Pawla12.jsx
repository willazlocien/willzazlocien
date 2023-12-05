import db from "./firebase.config";
import React, { useState, useEffect } from "react";


import "materialize-css";
import { Divider,  Button, Modal,Col, Row } from "react-materialize";
import lokalm01 from "./svg/M01.svg";
import lokalm02 from "./svg/M02.svg";
import lokalm03 from "./svg/M03.svg";
import lokalm04 from "./svg/M04.svg";
import lokalm05 from "./svg/M05.svg";
import lokalm06 from "./svg/M06.svg";
import lokalm07 from "./svg/M07.svg";
import lokalm08 from "./svg/M08.svg";
import lokalm11 from "./svg/M11.svg";
import lokalm12 from "./svg/M12.svg";
import lokalm13 from "./svg/M13.svg";
import lokalm14 from "./svg/M14.svg";
import lokalm15 from "./svg/M15.svg";
import lokalm16 from "./svg/M16.svg";
import lokalm17 from "./svg/M17.svg";
import lokalm18 from "./svg/M18.svg";
import lokalm19 from "./svg/M19.svg";
import lokalm21 from "./svg/M21.svg";
import lokalm22 from "./svg/M22.svg";
import lokalm23 from "./svg/M23.svg";
import lokalm24 from "./svg/M24.svg";
import lokalm25 from "./svg/M25.svg";
import lokalm26 from "./svg/M26.svg";
import lokalm27 from "./svg/M27.svg";
import lokalm28 from "./svg/M28.svg";
import lokalm29 from "./svg/M29.svg";
import lokalm31 from "./svg/M31.svg";
import lokalm32 from "./svg/M32.svg";
import lokalm33 from "./svg/M33.svg";
import lokalm34 from "./svg/M34.svg";
import lokalm35 from "./svg/M35.svg";
import lokalm36 from "./svg/M36.svg";
import lokalm37 from "./svg/M37.svg";


const Lista = [

  {id:"lokalm01", lokal: lokalm01, active: ""},
  {id:"lokalm02", lokal: lokalm02, active: ""},
  {id:"lokalm03", lokal: lokalm03, active: ""},
  {id:"lokalm04", lokal: lokalm04, active: ""},
  {id:"lokalm05", lokal: lokalm05, active: ""},
  {id:"lokalm06", lokal: lokalm06, active: ""},
  {id:"lokalm07", lokal: lokalm07, active: ""},
  {id:"lokalm08", lokal: lokalm08, active: ""},
  {id:"lokalm11", lokal: lokalm11, active: ""},
  {id:"lokalm12", lokal: lokalm12, active: ""},
  {id:"lokalm13", lokal: lokalm13, active: ""},
  {id:"lokalm14", lokal: lokalm14, active: ""},
  {id:"lokalm15", lokal: lokalm15, active: ""},
  {id:"lokalm16", lokal: lokalm16, active: ""},
  {id:"lokalm17", lokal: lokalm17, active: ""},
  {id:"lokalm18", lokal: lokalm18, active: ""},
  {id:"lokalm19", lokal: lokalm19, active: ""},
  {id:"lokalm21", lokal: lokalm21, active: ""},
  {id:"lokalm22", lokal: lokalm22, active: ""},
  {id:"lokalm23", lokal: lokalm23, active: ""},
  {id:"lokalm24", lokal: lokalm24, active: ""},
  {id:"lokalm25", lokal: lokalm25, active: ""},
  {id:"lokalm26", lokal: lokalm26, active: ""},
  {id:"lokalm27", lokal: lokalm27, active: ""},
  {id:"lokalm28", lokal: lokalm28, active: ""},
  {id:"lokalm29", lokal: lokalm29, active: ""},
  {id:"lokalm31", lokal: lokalm31, active: ""},
  {id:"lokalm32", lokal: lokalm32, active: ""},
  {id:"lokalm33", lokal: lokalm33, active: ""},
  {id:"lokalm34", lokal: lokalm34, active: ""},
  {id:"lokalm35", lokal: lokalm35, active: ""},
  {id:"lokalm36", lokal: lokalm36, active: ""},
  {id:"lokalm37", lokal: lokalm37, active: ""},
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
  const Fetchdata = async() => {
   await db.collection("pawla")
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
    )
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
        <Col className="tabela" s={12}>
        
   
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
          <Button  className="red" node="button" small>
            Rzut
          </Button>
        }
      >
        <Row>
          <Divider /> <img src={data.lokal} width="100%" />
        </Row>
      </Modal>
 
        </Col>
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
            PIĘ<br/>TRO
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
      <Col s={2}>
        Rzut <br/><Row/><Row/><Row/>
        {items2}</Col>
    </Row>
    </div>
  );
};

export default Read;
