import React, { Component } from "react";
import { Container, Navbar, Button } from "react-bootstrap";

import logo from "../Assets/Icon/libraryIcon.svg";
import SignIn from "../Components/Signin";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </Navbar>
        <Container fluid>
          <h1>
            <i> Your </i> library
          </h1>
          <h1> anywhere </h1>
          <p>
            Sign - up today and receive unlimited access to all of your reading
            - share your book.
          </p>
          <Button> Sign Up </Button> <SignIn />
        </Container>
      </div>
    );
  }
}
