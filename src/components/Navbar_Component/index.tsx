import React from "react";

import {
    Navbar,
    Container,
    Nav,
    NavDropdown
} from "react-bootstrap";


export default function Navbar_Component(){

    return(
        <div>
            <Navbar className="bg-body-tertiary" fixed="bottom" >
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src=".png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Cassocup
            </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
        </div>
    )
}