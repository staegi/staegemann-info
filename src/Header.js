import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Gravatar from 'react-gravatar';

function Header() {
    return (
        <header>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <Gravatar default="mm" md5="854ef566a3ff901c6458a3cb842171bb" size={40} className="rounded-circle"/> Thomas Stägemann
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-nav" />
                <Navbar.Collapse id="main-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#work">My Work</Nav.Link>
                        <Nav.Link href="#technologies">Technologies</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
