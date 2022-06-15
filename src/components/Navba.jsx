import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import "../App.css";
export default function Navba() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Challenge ITPS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://github.com/eber-cba/challengeITPS/blob/master/src/exercises.js"
            >
              Excercise(1,2,3)
            </Nav.Link>
            <Nav.Link href="/exerciseFour">Excercise 4</Nav.Link>
            <Nav.Link href="/exerciseFive">Excercise 5</Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://github.com/eber-cba/challengeITPS"
            >
              Repository
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Made by{" "}
              <a target="_blank" href="https://porfolio-dusky.vercel.app/">
                Eber Coronel
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
