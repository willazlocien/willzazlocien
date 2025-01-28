import React from "react";
import "./App.css";
import "materialize-css";
import { Button, Modal, Row, Col, Card } from "react-materialize";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import TypA from "./components/TypA";
import test from "./components/test";
import DocumentMeta from "react-document-meta";
import Welcome from "./components/Standard";
import Pawla12 from "./components/Pawla12";
import Pawla12zmiany from "./components/Pawla12zmiany"

function App() {
  const meta = {
    title: "willa zlocien",
    description: "willa zlocien mieszkania",
    canonical: "https://willzazlocien.netlify.app",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "willa zlocien, Krynica-zdroj, nowe mieszkania, budowa",
      },
    },
  };
  return (
    <DocumentMeta {...meta}>
      {" "}
      <div className="App">
        <Row>
          <BrowserRouter>
            
            <Row>
              <Col s={12} className="appbg">
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/kontakt" component={Contact} />
                  <Route path="/lokale" component={Offer} />
                  <Route path="/standard" component={Portfolio} />
                  <Route path="/wprowadzzmiany" component={TypA} />
                  <Route path="/galeria" component={Gallery} />
                  <Route path="/test" component={test} />
                  <Route path="/pawla12" component={Pawla12} />
                  <Route path="/wprowadzzmianypawla12" component={Pawla12zmiany} />
                  <Route path="/:any" component={Welcome} />
                  <Route path="/" component={Welcome} />
                </Switch>
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                <Row />
                
                  <Row><Col m={12} l={8} push="l2">
                    <Card className="shadow white">
                    
                      <Row>
                        <Col m={6}>
                          <h3 className="black-text valign-align">
                            Dane Kontaktowe
                          </h3>
                        </Col>
                        <Modal
            actions={[
              <Button
                className="z-depth-2  "
                flat
                modal="close"
                node="button"
                waves="green"
              >
                Close
              </Button>,
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="RODO"
            id="Modal-10"
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
              <Button className=" red btnhome4" node="button">
                RODO
              </Button>
            }
          >
            <p>
              RODO Klauzula informacyjna dla klientów i kontrahentów. Zgodnie z
              przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE)
              2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
              fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
              swobodnego przepływu takich danych oraz uchylenia dyrektywy
              95/46/WE (ogólne rozporządzenie o ochronie danych) („RODO”),
              przekazujemy poniższe informacje dotyczące Państwa danych
              osobowych. Administrator danych osobowych Administratorem Państwa
              danych osobowych jest Idea Developemnt Cel i podstawa
              przetwarzania Państwa dane osobowe przetwarzamy: • w celu zgodnym
              z udzieloną zgodą, o ile została wyrażona zgoda, na podstawie art.
              6 ust. 1 lit. a RODO; • w celu udzielenia odpowiedzi w związku z
              Państwa zainteresowaniem naszą ofertą handlową, zgodnie z art. 6
              ust. 1 lit. b RODO; • w celu zawarcia i wykonania umowy, na
              podstawie art. 6 ust. 1 lit. b RODO; • w celu realizacji
              obowiązków prawnych, na przykład wynikających z przepisów
              podatkowych, na podstawie art. 6 ust. 1 lit. c RODO; • w celu
              wykonywania naszych prawnie uzasadnionych interesów jako
              Administratora, o których mowa w art. 6 ust. 1 lit. f RODO, takich
              jak marketing bezpośredni, dochodzenie lub obrona przed
              roszczeniami. Odbiorcy danych osobowych Odbiorcami Państwa danych
              będą następujące podmioty: • podmioty, którym powierzyliśmy
              przetwarzanie danych osobowych w naszym imieniu: spółki
              informatyczne, kancelarie prawne, jednostki audytujące, agencje
              ochrony; • podmioty lub organy uprawnione na podstawie przepisów
              prawa. Okres przechowywania danych Państwa dane osobowe będą
              przechowywane: • w przypadku przetwarzania danych na podstawie
              zgody – do czasu cofnięcia zgody; • w przypadku przetwarzania
              danych na podstawie w celu przedstawienia oferty – przez okres
              negocjowania umowy oraz do końca roku kalendarzowego następującego
              po roku, w którym ostatni raz kontaktowali się Państwo w sprawie
              jej zawarcia; • w przypadku przetwarzania danych na podstawie w
              celu wykonania umowy – do momentu wygaśnięcia umowy; • w przypadku
              przetwarzania w celu realizacji obowiązków prawnych - przez okres
              w jaki aktualne przepisy prawa nakazują ich przechowywanie; • w
              przypadku przetwarzania danych na podstawie uzasadnionego interesu
              Administratora – do momentu ustania tego interesu (np.
              przedawnienia roszczeń) lub do momentu wniesienia skutecznego
              sprzeciwu, przeciwko dalszemu przetwarzaniu przez osobę, której
              dane dotyczą. Prawa osób, których dane dotyczą Zgodnie z RODO
              przysługuje Państwu: • prawo dostępu do swoich danych oraz
              otrzymania ich kopii; • prawo do sprostowania (poprawienia) swoich
              danych; • prawo do usunięcia danych; • prawo do ograniczenia
              przewarzania danych; • prawo do sprzeciwu; • prawo do wniesienia
              skargi do Prezesa Urzędu Ochrony Danych Osobowych. Informacja na
              temat prawa cofnięcia zgody W stosunku do danych przetwarzanych na
              podstawie zgody informujemy, że wyrażenie zgody każdorazowo jest
              całkowicie dobrowolne, a w przypadku jej wyrażenia w dowolnym
              momencie przysługuje Państwu prawo do jej wycofania. Cofnięcie
              zgody nie będzie wpływać na zgodność z prawem przetwarzania,
              którego dokonano dotychczas. Obowiązek podawania danych osobowych
              Podanie danych jest dobrowolne, niemniej jednak konieczne, jeśli
              chcą Państwo zawrzeć z nami umowę lub otrzymać oferty. Podanie
              danych na postawie zgody jest całkowicie dobrowolne. Informacja na
              temat zautomatyzowanego podejmowania decyzji i profilowania W
              związku z przetwarzaniem Państwa danych osobowych nie dochodzi do
              zautomatyzowanego podejmowania decyzji, w tym do profilowaniu.
              English In accordance with the provisions of the Regulation of the
              European Parliament and of the Council (EU) 2016/679 of 27 April
              2016 on the protection of natural persons in connection with the
              processing of personal data and on the free movement of such data
              data and repealing Directive 95/46 / EC (general protection
              regulation data) ("GDPR"), we provide the following information
              regarding your data personal. Personal data administrator The
              administrator of your personal data is Idea Developemnt. Purpose
              and basis of processing We process your personal data: • for the
              purpose consistent with the consent granted, provided that consent
              has been given, pursuant to Art. 6 sec. 1 lit. a GDPR; • in order
              to respond to your interest in our offer commercial, in accordance
              with Art. 6 sec. 1 lit. b GDPR; • in order to conclude and perform
              a contract, pursuant to Art. 6 sec. 1 lit. b GDPR; • in order to
              comply with legal obligations, such as those resulting from
              regulations tax, pursuant to Art. 6 sec. 1 lit. c GDPR; • in order
              to pursue our legitimate interests as The administrator referred
              to in art. 6 sec. 1 lit. f GDPR, such as marketing direct,
              investigation or defense against claims. Recipients of personal
              data The recipients of your data will be the following entities: •
              entities entrusted with the processing of personal data in our on
              behalf of: IT companies, law firms, audit units, agencies
              protection; • entities or bodies authorized by law. The period of
              data storage your personal data will be stored: • in the case of
              data processing on the basis of consent - until the consent is
              withdrawn; • in the case of data processing on the basis of the
              purpose of presenting an offer - for the period of contract
              negotiation and until the end of the calendar year following the
              year in which you last contacted about the matter its conclusion;
              • in the case of data processing on the basis of the performance
              of a contract - up to the moment the contract expires; • in the
              case of processing in order to fulfill legal obligations - for the
              period of what current legal regulations require their storage; •
              in the case of data processing based on a legitimate interest
              Administrator - until the end of this interest (e.g. limitation of
              claims) or until an effective objection is raised, against another
              processing by the data subject. Rights of data subjects According
              to the GDPR, you are entitled to: • the right to access your data
              and receive a copy of it; • the right to rectify (correct) your
              data; • the right to delete data; • the right to limit data
              processing; • right to object; • the right to lodge a complaint
              with the President of the Personal Data Protection Office.
              Information on the right to withdraw consent In relation to data
              processed on the basis of consent, we inform that consent is each
              time entirely voluntary, and in the case of it expression, you
              have the right to withdraw it at any time. Withdrawal of consent
              will not affect the lawfulness of the processing has been done so
              far. Obligation to provide personal data Providing data is
              voluntary, but necessary if you want to enter into a contract with
              us or receive offers. Providing data on the basis of consent is
              completely voluntary. Information on automated decision making and
              profiling In connection with the processing of your personal data,
              there is no automated decision making, including profiling.
            </p>
          </Modal>
                        <Col m={6}>
                          <h5 className="black-text left-align">
                            Idea Development sp. z o.o.
                            <br />
                            <a href='tel:+48794055035'>+48 794 055 035</a>
                            
                            <br />
                            <a href='mailto:Leszek.kraus@poczta.onet.pl'>Leszek.kraus@poczta.onet.pl</a>
                            
                            <br />
                            Rakowicka 15 31-511 Krakow
                            <br />
                            <a href="https://cholujdesign.com/">
                              © 2023 by Choluj Design s.c.
                            </a>
                          </h5>
                        </Col>
                      </Row>    </Card>
                    </Col>  
                
                  </Row>
              
              </Col>
            </Row>
          </BrowserRouter>
        </Row>
        
      </div>{" "}
    </DocumentMeta>
  );
}

export default App;
