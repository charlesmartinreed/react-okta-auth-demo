import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

// OKTA setup
// Wrap everything in the Security component
// setup the Security props
// Use SecureRoute instead of Route component

function onAuthRequired({ history }) {
  history.push("/login");
}

function App() {
  return (
    <Router>
      <Security
        issuer="https://dev-534664.okta.com/oauth2/default"
        client_id="0oalpcxze5wNruN4c356"
        redirect_uri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
      >
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <SecureRoute exact path="/staff" component={Staff} />
            <Route
              path="/login"
              render={() => <Login baseUrl="https://dev-534664.okta.com" />}
            />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
