import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h1>Sign In</h1>
          <Form>
            <Form.Group>
              <Form.Control name="email" type="text" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-block"
                onClick={() => history.push("/home")}
              >
                Sign In
              </Button>
            </Form.Group>
            <Form.Group>
              <Button variant="link" className="btn btn-block">
                Don't have an account ? klik Here
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
