import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.css";

function Nav(props) {
  return (
    <Navbar variant="dark" className="Navbar">
  <Navbar.Text className="brand">
        Clicky Game!
  </Navbar.Text>
  <Navbar.Collapse className="justify-content-center">
    <Navbar.Text className="response">
      {props.msg}
    </Navbar.Text>
  </Navbar.Collapse>
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text className="score">
      Score: <Navbar.Text className="number">{props.score}</Navbar.Text> | Top Score: <Navbar.Text className="number">{props.topScore}</Navbar.Text>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
  );
}

export default Nav;
