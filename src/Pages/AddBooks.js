import React, { useState } from "react";

import { Container, Row, Col, Button, Modal } from "react-bootstrap";

export default function AddBook() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>Add Book</Row>
          <Row>
            <Button onClick={handleShow}>Add Book</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <h5 className="text-success">
                  Thank you for adding your own books to our website, please
                  wait 1 x 24 hours to verify whether this book is your writing
                </h5>
              </Modal.Body>
            </Modal>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
