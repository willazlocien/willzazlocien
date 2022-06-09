import db from "./firebase.config";
import React, { useState, useEffect } from "react";
import Lista from "./Lista";
import axios from "axios";
import "materialize-css";
import { Divider, Table, Col, Row } from "react-materialize";
import Button from "react-materialize/lib/Button";

const Read = () => {
 
const [info, setInfo] = useState([]);
useEffect(() => {
  setTimeout(() => {
    Fetchdata();
  }, 1); //miliseconds
}, []);
 window.addEventListener("load", () => {
    Fetchdata();
  });
 
 
  // Fetch the required data using the get() method
  const Fetchdata = async() => {
   await db.collection("data")
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
    return (
      <Row className="hoverable">
        <Col className="tabela" s={2}>
          {data.LOKAL}
        </Col>
        <Col className="tabela" s={3}>
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
          {data.Rzut}
        </Col>
      </Row>
    );
  });
  return (









    
    <Row className="white">
      <Col s={8}>
        <Row>
          <Col className="tabela" s={2}>
            LOKAL
          </Col>
          <Col className="tabela" s={3}>
            METRAZ
          </Col>
          <Col className="tabela" s={1}>
            PIETRO
          </Col>
          <Col className="tabela" s={2}>
            CENA
          </Col>

          <Col className="tabela" s={4}>
            DOSTEPNOSC
          </Col>
        </Row>
        {items}
      </Col>
      <Col s={4}>{items2}</Col>
    </Row>
  );
};

export default Read;
