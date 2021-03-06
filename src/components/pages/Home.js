import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

// withAuth is a wrapper where we export using our component class - think Redux and connect where you return a function/component
export default withAuth(
  class Home extends Component {
    state = {
      authenticated: null
    };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    componentDidMount() {
      this.checkAuthentication();
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth
        .logout("/")
        .then(() => console.log("logout triggered"))
        .catch(() => <Redirect to="/" />);
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            Welcome to the staff portal, <Link to="/staff">click here</Link>
          </p>
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="lead">
            Staff members: Please get credentials from your Supervisor.
          </p>
          <button className="btn btn-light btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-4">CATT Staff Portal</h1>
          {mainContent}
        </div>
      );
    }
  }
);
