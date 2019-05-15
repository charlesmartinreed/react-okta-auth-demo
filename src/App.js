import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/staff" component={Staff} />
        </div>
      </div>
    </Router>
  );
}

export default App;
