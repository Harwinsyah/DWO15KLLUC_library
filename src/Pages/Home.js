import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

import SideNav from "../Components/Sidenav";
import ListBook from "../Components/Listbook";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <SideNav />
        </Col>
        <Col>
          <Row>
            <Jumbotron>
              <h1>share, read and love</h1>
            </Jumbotron>
          </Row>
          <Row>
            <ListBook />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
