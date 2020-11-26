import React from "react";
import logo from './big_logo.svg';
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartIcon from "../node_modules/@material-ui/icons/ShoppingCart";


function Header() {
  return (
    <nav className="header">
    <div className="header_nav">
      {/*sign in*/}
      <Link to="/login" className="header_link">
        <span>Σύνδεση</span>
      </Link>
      <span> | </span>
      {/*sign up*/}
      <Link to="/register" className="header_link">
        <span>Γίνε μέλος</span>
      </Link>
      <span> | </span>
      <Link to="/basket" className="basket">
          <ShoppingCartIcon/>
          <span>0</span>
      </Link>

    </div>
    <div className="logo">
      <Link to="/" className="logo_link">
        <img className="header_logo" src={logo} alt=""/>
      </Link>
    </div>
    <div className="searchbar">
      <input className="search" type="text" name="search" placeholder={"  γράψε τον όρο αναζήτησης"}/>
      <input className="searchbutton" type="submit" value="Αναζήτηση"/>
    </div>
    {/*basket with number*/}
    {/*dropdown for login etc*/}
    </nav>
  );
}

export default Header;
