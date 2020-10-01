import React, { useRef, useState } from "react";
import { Card, Button, Overlay, Popover, CardGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Listbook() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div ref={ref}>
      <Card>
        <Card.Header>
          <h2>List Book</h2>

          <Button onClick={handleClick}>Category</Button>

          <Overlay
            show={show}
            target={target}
            placement="left"
            container={ref.current}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Content>
                <ul>
                  <li>Romance</li>
                  <li>Comedy</li>
                  <li>Sci-Fi</li>
                  <li>History</li>
                  <li>Documentary</li>
                </ul>
              </Popover.Content>
            </Popover>
          </Overlay>
        </Card.Header>
        <Card.Body>
          <CardGroup>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <h3>What if? Absurd Questions</h3>
              </Card.Body>
              <Card.Footer>
                <p>Randall Munroe</p>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <h3>Glyph: New look on things</h3>
              </Card.Body>
              <Card.Footer>
                <p>Morris Williamson</p>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <h3>Harry Potter and Goblet of Fire</h3>
              </Card.Body>
              <Card.Footer>
                <p>J. K. Rowling</p>
              </Card.Footer>
            </Card>
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/detail")}
            >
              <Card.Img variant="top" />
              <Card.Body>
                <h3>Tess on the Road</h3>
              </Card.Body>
              <Card.Footer>
                <p>Rachel Hartman</p>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
