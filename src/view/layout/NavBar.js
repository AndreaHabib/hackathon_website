import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faInfoCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <Nav className="justify-content-center nav">
      <Nav.Item>
        <Link to="section2" spy={true} delay={false}>
          <Nav.Link
            className="option"
            style={{ color: "white", textDecoration: "none" }}
          >
            About <FontAwesomeIcon icon={faInfoCircle} size="1x" />
          </Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="section4" spy={true} delay={false}>
          <Nav.Link
            className="option"
            style={{ color: "white", textDecoration: "none" }}
          >
            FAQ <FontAwesomeIcon icon={faQuestionCircle} size="1x" />
          </Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="section5" spy={true} delay={false}>
          <Nav.Link
            className="option"
            style={{ color: "white", textDecoration: "none" }}
          >
            Team <FontAwesomeIcon icon={faUserFriends} size="1x" />
          </Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  );
}
