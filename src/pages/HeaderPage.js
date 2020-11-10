import React from "react";
import { Jumbotron, Button } from "reactstrap";
import logo from "../assets/logo.png";
import "./HeaderPage.css";

export default function HeaderPage() {
  return (
    <div className="header" style={{ height: "90vh", textAlign: "center" }}>
      <Jumbotron>
        <img style={{ height: "45vh" }} src={logo} />
        <h1 style={{ fontSize: "150%" }}>
          Say hello to healthy meals! And become you own private chef!
        </h1>

        <p className="lead">
          <Button style={{ backgroundColor: "#ff914d" }}>Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
}
