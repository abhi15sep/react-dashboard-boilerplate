import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBar } from "../sidebar";
import { faSearch, faUser,faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export const CustomNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="nav-bar">
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <Navbar.Brand>Start Bootstrap</Navbar.Brand>
        <Navbar.Collapse
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon icon={faBars} color={"white"} />
        </Navbar.Collapse>
        <SideBar isOpen={isOpen} />
        <Nav className="mr-auto" />
        <Navbar.Collapse className="justify-content-end">
          <Form>
            <InputGroup className="mb-3">
              <FormControl placeholder="Search for..." />
              <InputGroup.Append>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          <NavDropdown
            className="dropdownMenu dropdown-menu-right"
            alignRight
            eventKey={1}
            title={<FontAwesomeIcon icon={faUser} />}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
            <NavDropdown.Item href="#">Activity Log</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
