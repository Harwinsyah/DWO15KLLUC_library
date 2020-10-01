import React from "react";
import SideNav from "../Components/Sidenav";
import { Col, Container, Row } from "react-bootstrap";

export default function MyLibrary() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col>My Library</Col>
      </Row>
    </Container>
  );
}
