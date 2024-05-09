import "materialize-css";
import React, { useEffect } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import {
  Col,
  Divider,
  Row,
  Slide,
  Caption,
  Button,
  Modal,
  Card,
  Slider,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";
import Iframe from "react-iframe";
import ogrod from "./svg/ogrod.svg";
import autostrada from "./svg/autostrada.svg";
import karkowwieliczka from "./svg/krakowwieliczka.svg";
import silence from "./svg/silence.svg";
import windows from "./svg/windows.svg";
import layout from "./svg/layout.svg";
import arrow from "./svg/arrow.svg";
let img19 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto.webp"
let img20 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto-2.webp"
let img21 = "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/budynek-foto-3.webp"
let img1 =
  "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/Image%2001.webp";
let img2 =
  "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/Image%2004.webp";
let img3 =
  "https://raw.githubusercontent.com/willazlocien/willzazlocien/main/src/components/img/Image%2007.webp";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
      <Col s={12} m={10} push="m1  s0">
        <div className="standard"></div>
        <Row className="">
          <Row />
          <Row />

          <div className="video-wrapper ">
            <Slider
              fullscreen={false}
              options={{
                duration: 500,
                height: 800,
                indicators: false,
                interval: 6000,
              }}
            >
              <Slide
                image={
                  <img
                    alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513970_5459907027399205_4461154066782848590_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Q2hwhnNMoesAX9PUaYc&_nc_ht=scontent.flcj1-1.fna&oh=00_AT93HYM7NfpGoWebeEw1MrSlCxaHzYq-uBLr0oGnnLJd7Q&oe=62DBB30A"
                    src={img19}
                  />
                }
              >
                <Caption placement="center">
                  <h3>Nowa inwestycja</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Krynica-Zdrój - Willa Złocień
                  </h5>
                </Caption>
              </Slide>
              <Slide
                image={
                  <img
                    alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294513602_5459907064065868_9194213757905239748_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=P06CFikdOOAAX_6k076&tn=o5ey6nqbzOgQXIue&_nc_ht=scontent.flcj1-1.fna&oh=00_AT8u4VeKgUkDzUPFQim6uOBzOvCbv1fTypOWjfX_twuqlQ&oe=62DC2C4B"
                    src={img20}
                  />
                }
              >
                <Caption placement="left">
                  <h3>Etap I</h3>
                  <h5 className="light grey-text text-lighten-3">
                    Rewitalziacja Willi
                  </h5>
                </Caption>
              </Slide>
              <Slide
                image={
                  <img
                    alt="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/294672919_5459907117399196_2524468230845151601_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=6qlk3bNBgzkAX8vXidl&_nc_oc=AQkAOaD3aZEL3H83i7MLZ_sXzBmPJNJe7vccg2d4gywFNQtbAkC5PEhhvte2mMQWlxk&_nc_ht=scontent.flcj1-1.fna&oh=00_AT_VUdYDmTk2P1NsLrvTYtdAXIkEIvSkb4MNPeKYoXcFxg&oe=62DAEC5A"
                    src={img21}
                  />
                }
              >
                <Caption placement="right">
                  <h3>Etap II</h3>
                  <h5 className="light grey-text text-lighten-3">Rozbudowa</h5>
                </Caption>
              </Slide>
            </Slider>
          </div>
        </Row>
        <img src={arrow} width="100%" />
        <Row />
        <Row />
        <Row />
        <Row>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hoverable z-depth-6"
          >
            <Card>
              <h5>
                Willa Złocień, Krynica-Zdrój
                <Divider />
              </h5>
              <Row />
              <Row />
              <Row />
              <Row>
                <Col m={6} s={12}>
                  <Row />
                  <div className="left-align  ">
                    Willa Złocień - wyjątkowy obiekt w Krynicy-Zdrój
                    <br />
                    <br />
                    <Divider />
                    Chcielibyśmy zaprezentować Państwu Willę Złocień, niezwykły
                    zabytkowy budynek zlokalizowany w malowniczej Krynicy-Zdrój.
                    Ta urocza posiadłość to idealne miejsce na relaks,
                    odpoczynek i odkrywanie uroków tego pięknego regionu. Z
                    przyjemnością przedstawimy Wam tę unikatową nieruchomość.
                    <br />
                    <br />
                    Mieszkania do Sprzedania
                    <br />
                    <Divider />
                    Willa Złocień to nie tylko urokliwy budynek, ale również
                    idealne miejsce do zamieszkania. W obiekcie znajduje się 11
                    w pełni wyremontowanych i gotowych do zamieszkania mieszkań.
                    Są one oferowane w podwyższonym standarcie deweloperskim. Te
                    przestronne, nowocześnie apartamenty oferują komfortowe
                    warunki życia w historycznym otoczeniu. To doskonała okazja
                    dla tych, którzy szukają nie tylko urokliwego miejsca na
                    wypoczynek, ale także nowego domu w sercu Krynicy-Zdrój.
                    <br />
                    <br />
                    Historia
                    <br />
                    <Divider />
                    To historyczne miejsce ma swoje korzenie sięgające okresu
                    wczesnego modernizmu z początku lat dwudziestych XX wieku.
                    Willa Złocień została odrestaurowana z dbałością o detale
                    konserwatorskie, zachowując przy tym oryginalny charakter i
                    urok. Jest to prawdziwy klejnot architektury z tamtych
                    czasów, który został odnowiony, aby zachować swój dawny
                    blask.
                    <br />
                    <br />
                    Architektura i Design
                    <br />
                    <Divider />
                    Budynek Willi Złocień to przykład znakomitego rzemiosła i
                    architektury. Każdy detal został starannie przywrócony do
                    życia, co czyni to miejsce nie tylko pięknym, ale również
                    pełnym historii. Wyjątkowe elementy architektoniczne, takie
                    jak zabytkowe okna czy oryginalne drewniane podłogi, dodają
                    uroku i elegancji.
                    <br />
                    <br />
                    Energooszczędność
                    <br />
                    <Divider />
                    Willa Złocień to nie tylko miejsce z bogatą historią, ale
                    również z nowoczesnymi rozwiązaniami energetycznymi. Budynek
                    został wyposażony w nowoczesne systemy izolacyjne,
                    energooszczędne ogrzewanie i oświetlenie . Dzięki temu dbamy
                    o środowisko i obniżamy koszty eksploatacji.
                    <br />
                    <br />
                    Podsumowanie
                    <br />
                    <Divider />
                    Willa Złocień w Krynicy-Zdrój to idealne miejsce dla tych,
                    którzy cenią zarówno historię, jak i nowoczesność. To
                    wyjątkowy dom z unikatową historią, zachwycającą
                    architekturą oraz dbałością o środowisko. Jeśli szukasz
                    magicznego miejsca na wypoczynek w sercu gór, Willa Złocień
                    jest dla Ciebie idealnym wyborem. Dziękujemy za uwagę, a
                    teraz serdecznie zapraszamy do odwiedzenia Willi Złocień!
                  </div>
                </Col>

                <Col m={6} s={12}>
                  <Row>
                    <Col s={4}>
                      <img src={autostrada} width="60%" />
                      <br />
                      Górskie trasy rowerowe i piesze
                    </Col>
                    <Col s={4}>
                      <img src={karkowwieliczka} width="60%" />
                      <br />
                      Basen w obiekcie
                    </Col>
                    <Col s={4}>
                      <img src={layout} width="60%" />
                      <br />
                      Praktyczny i adaptowalny uklad przestrzenny
                    </Col>
                    <Col s={4}>
                      <img src={silence} width="60%" />
                      <br />
                      Cicha i spokojna okolica
                    </Col>
                    <Col s={4}>
                      <img src={ogrod} width="60%" />
                      <br />
                      Budynek otoczony zielenią
                    </Col>
                    <Col s={4}>
                      <img src={windows} width="60%" />
                      <br />
                      Duze przeszklenia
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </div>
        </Row>
        <Row>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Card className="z-depth-5">
              <h5>
                Lokalizacja <Divider />
              </h5>
              <Row />
              <Row />
              <Row />
              <Row>
                <Col m={6} s={12}>
                  
                  <div className="left-align">
              
                    
                    Lokalziacja
                    <Divider />
                    Willa Złocień znajduje się w sercu Krynicy-Zdrój, otoczona
                    przez piękne góry i przyrodę. Znajduje się tuż obok Góry
                    Parkowej, co daje nieograniczone możliwości wędrówek po
                    okolicznych szlakach turystycznych. Ta lokalizacja jest
                    idealna dla miłośników aktywnego wypoczynku, spacerów i
                    przejażdżek rowerowych.
                    <br /><br />
                    Krynica-Zdrój
                    <Divider />
                    Miasto położone jest w Beskidzie Sądeckim, w dolinie potoku
                    Kryniczanka i jego dopływów. Krynica-Zdrój otaczają wzgórza
                    Góry Parkowej, Krzyżowej, Jasiennika. Miasto leży na terenie
                    Popradzkiego Parku Krajobrazowego, stanowi bazę wypadową w
                    okoliczne góry.  Uzdrowisko Krynica-Zdrój znajduje się we wschodniej części
                    Pasma Jaworzyny Krynickiej – jednego z dwóch pasm Beskidu
                    Sądeckiego.
                    <br /><br />
                    Ogród i Otoczenie
                    <br />
                    <Divider />
                    Otoczenie Willi Złocień to prawdziwy raj dla miłośników
                    przyrody. Oprócz Góry Parkowej w okolicy znajdują się liczne
                    ścieżki piesze i rowerowe, które pozwalają na aktywny
                    wypoczynek na świeżym powietrzu. Ogród wokół willi to
                    miejsce, gdzie można odpocząć, napić się herbaty i cieszyć
                    się spokojem.
                    
                   
                  </div>
                  <br />
                  <Row>
                    <Col m={2}></Col>
                    <Col m={8}>
                      <div>
                        
                          <li>Centrum Krynicy - 1,3 km</li>
                          <br />
                          <li>Zrdeko "Ciurkacz" -50 m</li>
                          <br />
                          <li>Góra Parkowa - 2 km</li>
                          <br />
                          <li>Sklep Spożywczy - 100 m</li>
                          <br />
                       
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col m={6} s={12}>
                  <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.531136832241!2d20.971877615372854!3d49.41777176911099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc55ac643528b3ff4!2zNDnCsDI1JzA0LjAiTiAyMMKwNTgnMjYuNiJF!5e0!3m2!1spl!2spl!4v1654243833197!5m2!1spl!2spl"
                    width="100%"
                    height="600px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                  />{" "}
                </Col>
              </Row>
            </Card>
          </div>
        </Row>
        {/* <Row>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Card className="z-depth-5">
              <h5>
                O budynku <Divider />
              </h5>
              <Row />

              <Row>
                <Col l={5} s={12} >
                  <div className="left-align  ">
                    <h5>Historia miejsca</h5>
                    Budynek został wybudowany na początku XX w. Służył jako baza
                    noclegowa dla osób odwiedzających Krynicę-Zdrój, a przede
                    wszytkim Gorę Parkową.
                    <br />
                    <br />
                  </div>
                  <div className="left-align">
                    <h5>Kluczowe aspekty inwestycji</h5>
                    <Row />
                    <Row />
                    <li>Budynek energooszczędny</li>
                    <br />
                    <li>Rewelacyjna lokalizacja</li>
                    <br />
                    <li>Gruntowna rewitalziacja budynku willi - 1 etap</li>
                    <br />
                    <li>Miejsca posotjowe zewnetrzne - 1 etap</li>
                    <br />
                    <li>Mieszkania objęte są 8% VAT</li>
                    <br />
                    <li>
                      Sprzedarz nie objęta jest ustawa deweloperską dla etapu 1,
                      gdyż sprzedawane są wyodrębnione lokale mieszkalne
                    </li>
                    <br />
                    <li>
                      Wspólnota zatrudni zewnętrznego administratora dla
                      zarządzania budynkiem
                    </li>
                    <br />
                    <li>
                    Oferowane lokale posiadają zaświadczenie o samodzielności
                      lokali
                    </li>
                    <br />
                    <li>winda - 1 etap</li>
                    <br />
                    <li>basen - 2 etap</li>
                    <br />
                    <li>integracja kotłowni gazowej z pompą ciepła - 2 etap</li>
                    <br />
                    <li>tarasy - 2 etap</li>
                    <br />
                    <li>mieszkania w stanie deweloperskim</li>
                    <br />
                    <li>
                      Możliwość zakupu miejsc posotojowych do mieszkań 
                    </li>
                    <br />

                    <li>garaż podziemny - 2 etap</li>
                  </div>
                </Col>
                <Col l={5} s={12} push="l2">
                <div className="left-align  ">
                    <h5>Gruntowna rewitalziacja</h5>
                    Budynek został poddany gruntownej reiwtalizacji z naciskiem na 
                    obniżenie kosztów zużycia enegrii.
                    <br />
                    <br />
                  </div>
                  <div className="left-align">
                    <h5>Energooszczędny budynek</h5>
                    <Row />
                    <Row />
                    Głównym celem przy reiwtalizacji Willi Złocień było zminimalizowanie ilości energii cieplnej, którą zużywa się na ogrzewanie Willi. W tym celu stosowane są nie tylko nowoczesne technologie, ale również specjalne techniki budownictwa, które pozwalają na minimalizację traconej energii przez budynek. Zadbano o utrzymanie zabytkowego wyglądu willi z jednoczesną zamianą budynku na 
                    budynek energooszczęny. 


                  </div>
                </Col>
              </Row>
            </Card>
          </div>
        </Row> */}
        <Row>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="hoverable z-depth-2"
          >
            <Card className="z-depth-5">
              <h5>
                Terminy <Divider />
                <Row />
                <Col s={12} m={4}>
                  Zakończenie Etapu 1 -<br /> planowane na 4 kwartał 2023 roku
                  <br />
                </Col>
                <Col s={12} m={4}>
                  Rozpoczęcie Etapu 2 -
                  <br />
                  planowane na 2 kwartał 2024 roku
                  <br />
                </Col>
                <Col s={12} m={4}>
                  Rzopoczęcie sprzedarzy
                  <br /> 1 kwartał 2022 roku
                  <br />
                </Col>
                <Row>
                  <Col m={6} s={12}>
                    <div className="left-align  "></div>
                  </Col>
                  <Col m={6} s={12}></Col>
                </Row>
              </h5>
            </Card>
          </div>
        </Row>
      </Col>
      
    </Row>
    
  );
};

export default Home;
