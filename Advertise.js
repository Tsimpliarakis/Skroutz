import React from "react";
import "./Advertise.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import background from './black_friday.jpeg';
import whitelogo from './whitelogo.png';



function Advertise() {
  return (
    <nav className="advertise">
      <Link to="blackfriday" className="ad">
        <img className="black_friday_background" src={background} alt=""/>
        <img className="whitelogo" src={whitelogo} alt=""/>
        <p className="inside_text">Η στιγμή που περίμενες <br/> έφτασε στο Skroutz.</p>
        <input className="prosfores" type="submit" value="Δες τις προσφορές"/>
        <p className="black">ＢＬＡＣＫ＇ＦＲＩＤＡＹ</p>
      </Link>
    </nav>
  );
}

export default Advertise;
