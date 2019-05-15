import React, { Component } from "react";
// welcome page, using email and name pulled from the locally stored idToken

export default class Staff extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: ""
  };

  // when component mounts, grab user info from local storage
  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    const { email, name } = idToken.idToken.claims;

    this.setState({
      currentUserEmail: email,
      currentUserName: name
    });
  }

  // insert the pulled info into the DOM
  render() {
    const { currentUserEmail, currentUserName } = this.state;
    return (
      <div>
        <h1>Welcome, {currentUserName}</h1>
        <p>({currentUserEmail})</p>
        <p>You have reached the authorized staff section of the portal</p>
      </div>
    );
  }
}
