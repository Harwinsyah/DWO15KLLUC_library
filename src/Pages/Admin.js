import React, { useRef, useState } from "react";
import User from "../Assets/Icon/User.svg";

import {
  Container,
  Row,
  Col,
  Image,
  Overlay,
  Popover,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Admin() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <Container ref={ref}>
      <Row>
        <Col></Col>
        <Col>
          <h1>Admin</h1>
          <Image className="pointer" src={User} onClick={handleClick} />
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref.current}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Content>
                <Button onClick={() => history.push("/addBooks")}>
                  Add Book
                </Button>
                <Button onClick={() => history.push("/")}>Logout</Button>
              </Popover.Content>
            </Popover>
          </Overlay>
        </Col>
      </Row>
    </Container>
  );
}
