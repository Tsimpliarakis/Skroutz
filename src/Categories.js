import React from "react";
import "./Categories.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Categories() {
  return (
    <nav className="categories">
      <p className="title">Κατηγορίες προϊόντων</p>
      <div className="Technology">
        <Link to="/technology" className="technology_link">
          <span>Τεχνολογία</span>
        </Link>
      </div>
      <div className="House">
        <Link to="/register" className="header_link">
          <span>Γίνε μέλος</span>
        </Link>
      </div>
      <div className="Fashion">
        <Link to="/register" className="header_link">
          <span>Γίνε μέλος</span>
        </Link>
      </div>
      <div className="Hobby">
        <Link to="/register" className="header_link">
          <span>Γίνε μέλος</span>
        </Link>
      </div>
      <div className="Health">
        <Link to="/register" className="header_link">
          <span>Γίνε μέλος</span>
        </Link>
      </div>
      <div className="Kids">
        <Link to="/register" className="header_link">
          <span>Γίνε μέλος</span>
        </Link>
      </div>
    </nav>
  );
}

export default Categories;
