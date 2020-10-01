import React from "react";
import Logo from "../Assets/Icon/libraryIcon.svg";
import User from "../Assets/Icon/User.svg";
import { useHistory } from "react-router-dom";
import { Row, Image, Container } from "react-bootstrap";
import { FaBuffer, FaUser, FaBookMedical, FaDoorOpen } from "react-icons/fa";

export default function SideNav() {
  const history = useHistory();
  return (
    <Container>
      <Row>
        <Image
          src={Logo}
          alt="logo"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/home")}
        />
      </Row>
      <Row>
        <Image src={User} alt="user" />
      </Row>
      <Row>
        <h2>Egi Ganteng</h2>
      </Row>
      <Row>
        <ul>
          <li className="pointer" onClick={() => history.push("/profile")}>
            <FaUser /> Profile
          </li>
          <li className="pointer" onClick={() => history.push("/library")}>
            <FaBuffer /> My Library
          </li>
          <li className="pointer" onClick={() => history.push("/addBook")}>
            <FaBookMedical /> Add Book
          </li>
          <li className="pointer" onClick={() => history.push("/")}>
            <FaDoorOpen /> Logout
          </li>
        </ul>
      </Row>
    </Container>
  );
}
