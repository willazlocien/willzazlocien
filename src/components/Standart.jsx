import "materialize-css";
import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";



const Standart = () => {




  return (
<div className="home">
  <div className="hide-on-med-and-up">

 
  <br/><br/>
<Link to="home" className="btn red navbaritem">
            O inwestycji
          </Link>
<br/><br/>
          <Link to="standart" className="btn red navbaritem">
            Standart
          </Link>
          <br/><br/>
          <Link to="offer" className="btn red navbaritem" >
            Lokale
          </Link><br/><br/>
          <Link to="gallery" className="btn red navbaritem">
            Galeria
          </Link><br/><br/>
          <Link to="contact" className="btn red navbaritem">
            Kontakt
          </Link>
 </div>
</div>

  );
};

export default Standart;
