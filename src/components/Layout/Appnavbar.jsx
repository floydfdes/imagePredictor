import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./styles.scss";

function Appnavbar() {
  const hideDropdown = () => {
    var dropDownMenu = document.getElementsByClassName("dropdown-menu show");
    var navItem = document.getElementById("basic-nav-dropdown");
    navItem.click();
    dropDownMenu[0].classList.remove("show");
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/home">Utilities</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <NavDropdown title="Prediction" id="basic-nav-dropdown">
              <Link
                onClick={hideDropdown}
                className="dropdown-item"
                to="/imagedetection"
              >
                Image
              </Link>
              <Link
                onClick={hideDropdown}
                className="dropdown-item"
                to="/hearts"
              >
                Heart disease
              </Link>
              <Link
                onClick={hideDropdown}
                className="dropdown-item"
                to="/mobilenet"
              >
                Mobile net
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appnavbar;