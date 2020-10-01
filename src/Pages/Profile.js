import React from "react";
import SideNav from "../Components/Sidenav";

import { Container, Row, Col } from "react-bootstrap";

export default function Profile() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col>Profile</Col>
      </Row>
    </Container>
  );
}