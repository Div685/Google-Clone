import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is Search Page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
