import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  Slider,
  Slide,
  Caption,
  Modal,
  Table,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Lista from "./Lista";

const Standart = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  return (
    <div className="left-align">
      <Row>
        <Row>
          <Col m={4}>
            <h5>Fudnamenty</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>zelbet</li>
            <li>zelbet</li>
            <li>zelbet</li>
            <li>zelbet</li>
          </Col>
        </Row>
        <Row>
          <Col m={4}>
            <h5>Sciany</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>zewnętrzne: żelbetowe/z pustaków silikatowych </li>
            <li>
              wewnętrzne: <br />
              nośne i wypełniające: żelbetowe/z pustaków silikatowych działowe:
              z pustaków gipsowych np. Rigirock gr. 10/8cm
            </li>
          </Col>
          <hr />
        </Row>
        <Row>
          <Col m={4}>
            <h5>STROPY</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>międzykondygnacyjne – żelbetowe wylewane</li>
          </Col>
          <hr />
        </Row>
        <Row>
          <Col m={4}>
            <h5>TERMOIZOLACJA</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>
              ściany zewnętrzne: styropian/wełna mineralna gr. 18cm (15cm na
              klatkach schodowych)
            </li>
          </Col>
        </Row>
        <Row>
          <Col m={4}>
            <h5>WYKOŃCZENIE ŚCIAN ZEWNĘTRZNYCH</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>
              silikonowy tynk cienkowarstwowy baranek, płytki klinkierowe na
              kleju
            </li>
          </Col>
        </Row>
        <Row>
          <Col m={4}>
            <h5>WYKOŃCZENIE ŚCIAN WEWNĘTRZNYCH</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>
              ściany nośne i wypełniające z pustaków silikatowych - tynk gipsowy
            </li>
            <li>ścianki działowe np. Rigirock - szpachlowane</li>
          </Col>
        </Row>
        <Row>
          <Col m={4}>
            <h5> WYKOŃCZENIE POSADZEK</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>wylewka cementowa</li>
            <li>śklatki schodowe i korytarze – płytki typu gres</li>
          </Col>
        </Row>
        <Row>
          <Col m={4}>
            <h5> STOLARKA OKIENNA</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>
              okna i drzwi balkonowe aluminiowe, trójszybowe wyposażone w
              kontaktrony
            </li>
            <li>współczynnik przenikania ciepła: U ≤ 1,1 W/(m2· K)</li>

            <li>system przesuwny, samonośny, bez ram</li>
          </Col>
          <hr />
        </Row>

        <Row>
          <Col m={4}>
            <h5> STOLARKA DRZWIOWA</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>drzwi wejściowe do mieszkań klasy RC3 z dwoma zamkami</li>
            <li>drzwi wewnętrzne w gestii Mieszkańców</li>

            <li>drzwi wejściowe do budynku - aluminiowe</li>
          </Col>
        </Row>

        <Row>
          <Col m={4}>
            <h5> TARASY</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>tarasy na parterach – deski tarasowe z podkonstrukcją</li>
            <li>oświetlenie tarasów na parterach</li>
          </Col>
        </Row>
        <Row>
          <Col m={4}>
            <h5> BALKONY</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>żelbetowe, ocieplone, deski tarasowe z podkonstrukcją</li>
            <li>balustrady balkonów szklane</li>
            <li>oświetlenie balkonów</li>
          </Col>
        </Row>

        <Row>
          <Col m={4}>
            <h5> Instalacje</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>
              INSTALACJA ELEKTRYCZNA trójfazowa (do kuchenki elektrycznej)
              wypusty oświetleniowe w mieszkaniach zakończone odpowiednim
              złączem instalacja dzwonkowa gniazda, wyłączniki
            </li>
            <li>INSTALACJA TELEWIZYJNA gniazdo we wszystkich pokojach</li>
            <li>
              {" "}
              INSTALACJA INTERNETOWA tablica teletechniczna w przedpokoju, 1
              gniazdo w salonie
            </li>
            <li> INSTALACJA TELEFONICZNA gniazdo w mieszkaniu</li>

            <li>INSTALACJA DOMOFONOWA wideofon w przedpokoju</li>

            <li>
              INSTALACJA CENTRALNEGO OGRZEWANIA I CIEPŁEJ WODY UŻYTKOWEJ
              centralne ogrzewanie na rurach PEX, grzejniki stalowe – płytowe i
              kanałowe wodomierze i ciepłomierze zabudowane w szafkach na
              korytarzu
            </li>
            <li>
              {" "}
              INSTALACJA WODNO-KANALIZACYJNA kanalizacja sanitarna – system
              niskoszumowy instalacja wody zimnej i c.w.u. na rurach PEX piony w
              szachtach instalacyjnych/ w bruzdach ściennych/ zabudowane
            </li>
            <li> WENTYLACJA wentylacja mechaniczna wywiewna</li>

            <li>INSTALACJA KLIMATYZACYJNA</li>
          </Col>

          <Col m={4}>
            <h5> Plan zagospodarowania terenu</h5>
          </Col>
          <Col m={8}>
            <Row />
            <li>ŚMIETNIK</li>
            <li></li>
            <li>teren ogrodzony</li>
            <li>miejsca parkingowe</li>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Standart;
