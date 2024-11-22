// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Home
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/posts">
                        Posts
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
