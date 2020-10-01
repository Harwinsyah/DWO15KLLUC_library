import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Logo from "../Assets/Icon/libraryIcon.svg";

export default function Read() {
  const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Image
          src={Logo}
          alt="logo"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/home")}
        />
      </Row>
      <Row>Alice in wonderland</Row>
    </Container>
  );
}
