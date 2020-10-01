import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import SideNav from "../Components/Sidenav";

export default function Detail() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <SideNav />
        </Col>
        <Col>
          <Button variant="success" onClick={handleShow}>
            Add Library
          </Button>
          <Button variant="secondary" onClick={() => history.push("/read")}>
            Read Book
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <h5 className="text-success">
                Your book has been added successfully
              </h5>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}
