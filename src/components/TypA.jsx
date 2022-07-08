import db from "./firebase.config";
import React, { useState, useEffect } from "react";
import "materialize-css";
import { Modal, Card, Col, Row } from "react-materialize";
import Button from "react-materialize/lib/Button";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/database";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

const Write = () => {
  const [info, setInfo] = useState([]);
  const [metraz, setMetraz] = useState();
  const [pietro, setPietro] = useState();
  const [cena, setCena] = useState();
  const [dostepnosc, setDostepnosc] = useState();
  const [lokal, setLokal] = useState();
  // const [loggedin, setLoggedin] = useState();
  const [pass, setPass] = useState();
 

const login = () =>
{
  localStorage.setItem("pass", pass);
  window.location.reload(false);
}
let loggedin = localStorage.getItem("pass");
  const Fetchdata = async () => {
    await db
      .collection("data")
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
  useEffect(() => {
    setTimeout(() => {
      Fetchdata();
    }, 1); //miliseconds
  }, []);
  const updateDATA = async () => {
    const ref = doc(db, "data", lokal);
    await setDoc(
      ref,
      {
        LOKAL: lokal,
        DOSTEPNOSC: dostepnosc,
        PIETRO: pietro,
        CENA: cena,
        METRAZ: metraz,
      },
      { merge: true }
    );

    window.location.reload(false);
  };

  const createDATA = async () => {
    const ref = doc(db, "data", lokal);
    await setDoc(ref, {
      LOKAL: lokal,
      DOSTEPNOSC: dostepnosc,
      PIETRO: pietro,
      CENA: cena,
      METRAZ: metraz,
    });
    window.location.reload(false);
  };
  const deleteDATA = async () => {
    await deleteDoc(doc(db, "data", lokal));
    window.location.reload(false);
  };

  const items = info.map((data) => {
    return (
      <Row>
        <Col s={1}>{data.LOKAL}</Col>
        <Col s={2}>{data.METRAZ}</Col>
        <Col s={1}>{data.PIETRO}</Col>
        <Col s={2}>{data.CENA}</Col>

        <Col s={2}>{data.DOSTEPNOSC}</Col>
        <Col s={4}>
          <Modal
            actions={[
              <Button flat modal="close" node="button" waves="green">
                Close
              </Button>,
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header={data.LOKAL}
            id={data.LOKAL}
            value={data.LOKAL}
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
              <Button
                value={data.LOKAL}
                className="red"
                node="button"
                onClick={(e) => setLokal(e.target.value)}
              >
                <Button
                  value={data.LOKAL}
                  className="red"
                  node="button"
                  onClick={(e) => {
                    setLokal(e.target.value);
                    setCena(data.CENA);
                    setMetraz(data.METRAZ);
                    setPietro(data.PIETRO);
                    setDostepnosc(data.DOSTEPNOSC);
                  }}
                >
                  Edytuj
                </Button>
              </Button>
            }
          >
            <h5>
              {lokal} / {metraz} m2/p {pietro} / {cena} pln / {dostepnosc}
            </h5>
            <input
              placeholder="METRAZ"
              onChange={(e) => setMetraz(e.target.value)}
            />

            <input
              placeholder="PIETRO"
              onChange={(e) => setPietro(e.target.value)}
            />

            <input
              placeholder="CENA"
              onChange={(e) => setCena(e.target.value)}
            />

            <input
              placeholder="DOSTEPNOSC"
              onChange={(e) => setDostepnosc(e.target.value)}
            />

            <Button onClick={updateDATA}>Zapisz</Button>
          </Modal>
        </Col>
      </Row>
    );
  });
  if (loggedin == "KrynicaLeszek2022") {
    return (
      <Row>
        <Col s={12} l={8} push="l2">
        <Row className="white">
          <Row />
          <Col s={1}>LOKAL</Col>
          <Col s={2}>METRAZ</Col>
          <Col s={1}>PIETRO</Col>
          <Col s={2}>CENA</Col>

          <Col s={2}>DOSTEPNOSC</Col>
          <Col s={4}>zmiany</Col>
          <Row />
          <Row />

          <Col s={12}>{items}</Col>
        </Row>{" "}
        <Row>
          <Card>
            <h5>
              Dodaj nowy lokal: {lokal} / {metraz} m2/p {pietro} / {cena} pln /{" "}
              {dostepnosc}
            </h5>
            <input
              placeholder="Lokal format: M1.1"
              onChange={(e) => setLokal(e.target.value)}
            />
            <input
              placeholder="METRAZ"
              onChange={(e) => setMetraz(e.target.value)}
            />

            <input
              placeholder="PIETRO"
              onChange={(e) => setPietro(e.target.value)}
            />

            <input
              placeholder="CENA"
              onChange={(e) => setCena(e.target.value)}
            />

            <input
              placeholder="DOSTEPNOSC"
              onChange={(e) => setDostepnosc(e.target.value)}
            />
            <Button className="red" onClick={createDATA}>
              Dodaj
            </Button>
          </Card>
        </Row>
        <Row>
          <Card>
            <h5>Podaj lokal do usuniecia:</h5>

            <input
              placeholder="Lokal"
              onChange={(e) => setLokal(e.target.value)}
            />
            <Button className="red" onClick={deleteDATA}>
              Usun
            </Button>
          </Card>
        </Row></Col>
      </Row>
    );
  } else
    return (
      <Row>
        <Card>
        <input type="password" placeholder="haslo" onChange={(e) => setPass(e.target.value)} />
        <Button className="red" onClick={login}>
              Zaloguj
            </Button></Card>
      </Row>
    );
};

export default Write;
