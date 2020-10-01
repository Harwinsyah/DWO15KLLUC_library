import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Logo from "../Assets/Icon/libraryIcon.svg";

export default function Read() {
  const history = useHistory();
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image
            src={Logo}
            alt="logo"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/home")}
          />
        </Col>
        <Col>Alice in wonderland</Col>
      </Row>
    </Container>
  );
}
