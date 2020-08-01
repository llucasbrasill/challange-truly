import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./componentes/home/Index";
import Tickets from "./componentes/tickets/Index";
import Ticket from "./componentes/ticket/Index";
import Header from "./componentes/header/Index";
import Footer from "./componentes/footer/Index";

import { GlobalStorage } from "./providers/GlobalContext";

export default function App() {
  return (
    <>
      <GlobalStorage>
        <Router>
          <div className="App d-flex flex-column justify-content-center flex-wrap">
            <Header />
            <Switch>
              <Route path={`/ticket/:ticketId`}>
                <Ticket />
              </Route>
              <Route path="/ticket">
                <Tickets />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </GlobalStorage>
    </>
  );
}
