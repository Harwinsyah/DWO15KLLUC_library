import React from "react";
import Logo from "../Assets/Icon/libraryIcon.svg";
import User from "../Assets/Icon/User.svg";
import { Row, Image, Container } from "react-bootstrap";
import { FaBuffer, FaUser, FaBookMedical, FaDoorOpen } from "react-icons/fa";

export default function SideNav() {
  return (
    <Container>
      <Row>
        <Image src={Logo} alt="logo" />
      </Row>
      <Row>
        <Image src={User} alt="user" />
      </Row>
      <Row>
        <h2>Egi Ganteng</h2>
      </Row>
      <Row>
        <ul>
          <li>
            <FaUser /> Profile
          </li>
          <li>
            <FaBuffer /> My Library
          </li>
          <li>
            <FaBookMedical /> Add Book
          </li>
          <li>
            <FaDoorOpen /> Logout
          </li>
        </ul>
      </Row>
    </Container>
  );
}
