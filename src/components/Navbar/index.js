import React from "react";
import {Nav, NavDropdown, Navbar, Container, Image } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'

function MainNavbar(){
    return(
        <Navbar className="navbar navbar-default navbar-default-2" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/"><Image src={logo} fluid alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="nav navbar-nav navbar-right ml-auto">
                        <li className="nav-item"><Nav.Link eventKey="1" href="#banner">Home</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="2" href="#about">About Us</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="3" href="#features">Features</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="4" href="#safety">Safety</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="5" href="/blog">Blog</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="6" href="#contact">Contact</Nav.Link></li>
                        <li className="nav-item sign-in-btn"><Nav.Link eventKey="7" className="nav-link btn btn-red" href="#singin">Sign In</Nav.Link></li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default MainNavbar;