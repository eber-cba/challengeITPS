import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";
export default function Home() {
  return (
    <div className="container">
      <p className="pHome">
        Thank you very much for this challenge, for more information about me
        these are my networks
      </p>
      <div className="cards">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png"
            />
            <Card.Body>
              <Button
                href="https://www.linkedin.com/in/eber-coronel-13536218b/"
                target="_blank"
                variant="dark"
              >
                Go
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png"
            />
            <Card.Body>
              <Button
                target="_blank"
                href="https://github.com/eber-cba"
                variant="dark"
              >
                Go
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
