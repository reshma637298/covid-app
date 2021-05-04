import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">COVID-19</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/India" className="nav-link">
              India
            </Link>
            <Link to="/State" className="nav-link">
              States
            </Link>
            <Link to="/World" className="nav-link">
              World
            </Link>
          </Nav>
          {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form> */}
        </Navbar>
      </>
    );
  }
}

export default Header;
