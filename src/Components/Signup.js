import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h1>Sign Up</h1>
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
              <Form.Control
                name="fullName"
                type="text"
                placeholder="Full Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control as="select" custom>
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control name="phone" type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group>
              <Form.Control name="Address" type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn btn-block"
                onClick={() => history.push("/home")}
              >
                Sign Up
              </Button>
            </Form.Group>
            <Form.Group>
              <Button variant="link" className="btn btn-block">
                Already have an account ? klik <b>Here</b>
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
