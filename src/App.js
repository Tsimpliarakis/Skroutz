import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Advertise from "./Advertise";
import Categories from "./Categories";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header/>
            <Advertise/>
            <Categories/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
