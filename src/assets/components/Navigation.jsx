import React from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="danger" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/" className="nav-link text-white fw-medium fs-5">
                            <FcHome className="mb-2 align-text-center" /> Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/Contact" className="nav-link text-white fw-medium fs-5">
                            <FcAddressBook className="mb-2 align-text-center" /> Contact
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
