import "materialize-css";
import React, { Component, useEffect } from "react";
import {
  Button,
  Col,
  Divider,
  Row,
  NavItem,
  Navbar,
  Modal,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let lang = localStorage.getItem("lang");

  // if (lang == "en")
  return (
    <Row>
      <Navbar
        className="red"
        menuIcon={"MENU"}
        alignLinks="left"
        brand={
          <a className="brand-logo" href="#">
            Willa Złocień
          </a>
        }
        id="mobile-nav"
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem className="" href="home">
          O inwestycji
        </NavItem>
        <NavItem className=" " href="standart">
          Standart
        </NavItem>
        <NavItem className="" href="offer">
          Lokale
        </NavItem>
        <NavItem className="" href="gallery">
          Galeria
        </NavItem>
        <NavItem className="" href="contact">
          Kontakt
        </NavItem>
        <NavItem>
          <Modal
            actions={[
              <Button flat modal="close" node="button" waves="green">
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
              <Button className="blue" node="button">
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
              administrator of your personal data is Idea Developemnt.
              Purpose and basis of processing We process your personal data: •
              for the purpose consistent with the consent granted, provided that
              consent has been given, pursuant to Art. 6 sec. 1 lit. a GDPR; •
              in order to respond to your interest in our offer commercial, in
              accordance with Art. 6 sec. 1 lit. b GDPR; • in order to conclude
              and perform a contract, pursuant to Art. 6 sec. 1 lit. b GDPR; •
              in order to comply with legal obligations, such as those resulting
              from regulations tax, pursuant to Art. 6 sec. 1 lit. c GDPR; • in
              order to pursue our legitimate interests as The administrator
              referred to in art. 6 sec. 1 lit. f GDPR, such as marketing
              direct, investigation or defense against claims. Recipients of
              personal data The recipients of your data will be the following
              entities: • entities entrusted with the processing of personal
              data in our on behalf of: IT companies, law firms, audit units,
              agencies protection; • entities or bodies authorized by law. The
              period of data storage your personal data will be stored: • in the
              case of data processing on the basis of consent - until the
              consent is withdrawn; • in the case of data processing on the
              basis of the purpose of presenting an offer - for the period of
              contract negotiation and until the end of the calendar year
              following the year in which you last contacted about the matter
              its conclusion; • in the case of data processing on the basis of
              the performance of a contract - up to the moment the contract
              expires; • in the case of processing in order to fulfill legal
              obligations - for the period of what current legal regulations
              require their storage; • in the case of data processing based on a
              legitimate interest Administrator - until the end of this interest
              (e.g. limitation of claims) or until an effective objection is
              raised, against another processing by the data subject. Rights of
              data subjects According to the GDPR, you are entitled to: • the
              right to access your data and receive a copy of it; • the right to
              rectify (correct) your data; • the right to delete data; • the
              right to limit data processing; • right to object; • the right to
              lodge a complaint with the President of the Personal Data
              Protection Office. Information on the right to withdraw consent In
              relation to data processed on the basis of consent, we inform that
              consent is each time entirely voluntary, and in the case of it
              expression, you have the right to withdraw it at any time.
              Withdrawal of consent will not affect the lawfulness of the
              processing has been done so far. Obligation to provide personal
              data Providing data is voluntary, but necessary if you want to
              enter into a contract with us or receive offers. Providing data on
              the basis of consent is completely voluntary. Information on
              automated decision making and profiling In connection with the
              processing of your personal data, there is no automated decision
              making, including profiling.
            </p>
          </Modal>
        </NavItem>
      </Navbar>
    </Row>
  );
  // else
  // return
  // (
  // <Navbar
  // className="blue darken-3 white-text"
  // menuIcon={"MENU"}
  //   alignLinks="left"
  //   brand={"Willa Złocień"}
  //   id="mobile-nav"
  //   options={{
  //     draggable: true,
  //     edge: 'left',
  //     inDuration: 250,
  //     onCloseEnd: null,
  //     onCloseStart: null,
  //     onOpenEnd: null,
  //     onOpenStart: null,
  //     outDuration: 200,
  //     preventScrolling: true
  //   }}
  // >
  //   <NavItem className="" href="home">

  //             O inwestycji

  //   </NavItem>
  //   <NavItem className=" "  href="portfolio">

  //             Standart

  //   </NavItem>
  //   <NavItem className=""

  //                 href="offer">
  //             Lokale
  //   </NavItem>
  //   <NavItem className=""
  //                 href="gallery">
  //             Galeria
  //   </NavItem>
  //   <NavItem className=""

  //                 href="contact">
  //             Kontakt
  //   </NavItem>
  //   <NavItem>
  //   <Modal
  //   actions={[
  //     <Button flat modal="close" node="button" waves="green">Close</Button>
  //   ]}
  //   bottomSheet={false}
  //   fixedFooter={false}
  //   header="RODO"
  //   id="Modal-10"
  //   open={false}
  //   options={{
  //     dismissible: true,
  //     endingTop: '10%',
  //     inDuration: 250,
  //     onCloseEnd: null,
  //     onCloseStart: null,
  //     onOpenEnd: null,
  //     onOpenStart: null,
  //     opacity: 0.5,
  //     outDuration: 250,
  //     preventScrolling: true,
  //     startingTop: '4%'
  //   }}

  //   trigger={<Button className="blue" node="button">RODO</Button>}
  // >
  //   <p>
  //   RODO
  // Klauzula informacyjna dla klientów i kontrahentów. Zgodnie z przepisami rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) („RODO”), przekazujemy poniższe informacje dotyczące Państwa danych osobowych. Administrator danych osobowych Administratorem Państwa danych osobowych jest P.P.H.U. EL-GAZ-WOD-TRANZ Cel i podstawa przetwarzania Państwa dane osobowe przetwarzamy: • w celu zgodnym z udzieloną zgodą, o ile została wyrażona zgoda, na podstawie art. 6 ust. 1 lit. a RODO; • w celu udzielenia odpowiedzi w związku z Państwa zainteresowaniem naszą ofertą handlową, zgodnie z art. 6 ust. 1 lit. b RODO; • w celu zawarcia i wykonania umowy, na podstawie art. 6 ust. 1 lit. b RODO; • w celu realizacji obowiązków prawnych, na przykład wynikających z przepisów podatkowych, na podstawie art. 6 ust. 1 lit. c RODO; • w celu wykonywania naszych prawnie uzasadnionych interesów jako Administratora, o których mowa w art. 6 ust. 1 lit. f RODO, takich jak marketing bezpośredni, dochodzenie lub obrona przed roszczeniami. Odbiorcy danych osobowych Odbiorcami Państwa danych będą następujące podmioty: • podmioty, którym powierzyliśmy przetwarzanie danych osobowych w naszym imieniu: spółki informatyczne, kancelarie prawne, jednostki audytujące, agencje ochrony; • podmioty lub organy uprawnione na podstawie przepisów prawa. Okres przechowywania danych Państwa dane osobowe będą przechowywane: • w przypadku przetwarzania danych na podstawie zgody – do czasu cofnięcia zgody; • w przypadku przetwarzania danych na podstawie w celu przedstawienia oferty – przez okres negocjowania umowy oraz do końca roku kalendarzowego następującego po roku, w którym ostatni raz kontaktowali się Państwo w sprawie jej zawarcia; • w przypadku przetwarzania danych na podstawie w celu wykonania umowy – do momentu wygaśnięcia umowy; • w przypadku przetwarzania w celu realizacji obowiązków prawnych - przez okres w jaki aktualne przepisy prawa nakazują ich przechowywanie; • w przypadku przetwarzania danych na podstawie uzasadnionego interesu Administratora – do momentu ustania tego interesu (np. przedawnienia roszczeń) lub do momentu wniesienia skutecznego sprzeciwu, przeciwko dalszemu przetwarzaniu przez osobę, której dane dotyczą. Prawa osób, których dane dotyczą Zgodnie z RODO przysługuje Państwu: • prawo dostępu do swoich danych oraz otrzymania ich kopii; • prawo do sprostowania (poprawienia) swoich danych; • prawo do usunięcia danych; • prawo do ograniczenia przewarzania danych; • prawo do sprzeciwu; • prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych. Informacja na temat prawa cofnięcia zgody W stosunku do danych przetwarzanych na podstawie zgody informujemy, że wyrażenie zgody każdorazowo jest całkowicie dobrowolne, a w przypadku jej wyrażenia w dowolnym momencie przysługuje Państwu prawo do jej wycofania. Cofnięcie zgody nie będzie wpływać na zgodność z prawem przetwarzania, którego dokonano dotychczas. Obowiązek podawania danych osobowych Podanie danych jest dobrowolne, niemniej jednak konieczne, jeśli chcą Państwo zawrzeć z nami umowę lub otrzymać oferty. Podanie danych na postawie zgody jest całkowicie dobrowolne. Informacja na temat zautomatyzowanego podejmowania decyzji i profilowania W związku z przetwarzaniem Państwa danych osobowych nie dochodzi do zautomatyzowanego podejmowania decyzji, w tym do profilowaniu. English
  // In accordance with the provisions of the Regulation of the European Parliament and of the Council (EU)
  // 2016/679 of 27 April 2016 on the protection of natural persons in connection with
  // the processing of personal data and on the free movement of such data
  // data and repealing Directive 95/46 / EC (general protection regulation
  // data) ("GDPR"), we provide the following information regarding your data
  // personal.
  // Personal data administrator
  // The administrator of your personal data is P.P.H.U. EL-GAZ-WOD-TRANS.
  // Purpose and basis of processing
  // We process your personal data:
  // • for the purpose consistent with the consent granted, provided that consent has been given, pursuant to Art.
  // 6 sec. 1 lit. a GDPR;
  // • in order to respond to your interest in our offer
  // commercial, in accordance with Art. 6 sec. 1 lit. b GDPR;
  // • in order to conclude and perform a contract, pursuant to Art. 6 sec. 1 lit. b GDPR;
  // • in order to comply with legal obligations, such as those resulting from regulations
  // tax, pursuant to Art. 6 sec. 1 lit. c GDPR;
  // • in order to pursue our legitimate interests as
  // The administrator referred to in art. 6 sec. 1 lit. f GDPR, such as marketing
  // direct, investigation or defense against claims.
  // Recipients of personal data
  // The recipients of your data will be the following entities:
  // • entities entrusted with the processing of personal data in our
  // on behalf of: IT companies, law firms, audit units, agencies
  // protection;
  // • entities or bodies authorized by law.
  // The period of data storage
  // your personal data will be stored:
  // • in the case of data processing on the basis of consent - until the consent is withdrawn;
  // • in the case of data processing on the basis of the purpose of presenting an offer -
  // for the period of contract negotiation and until the end of the calendar year
  // following the year in which you last contacted about the matter
  // its conclusion;
  // • in the case of data processing on the basis of the performance of a contract - up to
  // the moment the contract expires;
  // • in the case of processing in order to fulfill legal obligations - for the period of
  // what current legal regulations require their storage;
  // • in the case of data processing based on a legitimate interest
  // Administrator - until the end of this interest (e.g. limitation of claims)
  // or until an effective objection is raised, against another
  // processing by the data subject.
  // Rights of data subjects
  // According to the GDPR, you are entitled to:
  // • the right to access your data and receive a copy of it;
  // • the right to rectify (correct) your data;
  // • the right to delete data;
  // • the right to limit data processing;
  // • right to object;
  // • the right to lodge a complaint with the President of the Personal Data Protection Office.
  // Information on the right to withdraw consent
  // In relation to data processed on the basis of consent, we inform that
  // consent is each time entirely voluntary, and in the case of it
  // expression, you have the right to withdraw it at any time.
  // Withdrawal of consent will not affect the lawfulness of the processing
  // has been done so far.
  // Obligation to provide personal data
  // Providing data is voluntary, but necessary if you want to
  // enter into a contract with us or receive offers. Providing data on the basis of consent is
  // completely voluntary.
  // Information on automated decision making and profiling
  // In connection with the processing of your personal data, there is no
  // automated decision making, including profiling.
  //   </p>
  // </Modal>
  //   </NavItem>
  // </Navbar>)
};

export default Nav;
