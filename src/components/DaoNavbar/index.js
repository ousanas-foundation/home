import React from "react";
import {Nav, NavDropdown, Navbar, Container, Image } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'

function DaoNavbar(){
    return(
        <Navbar className="navbar navbar-default navbar-default-2" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/"><Image width={'100px'} src={logo} fluid alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="nav navbar-nav navbar-right ml-auto">
                        <li className="nav-item"><Nav.Link eventKey="1" href="#talari">Talari(TLR)</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="2" href="#structure">Structure</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="3" href="#charter">Charter</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="4" href="#timeLine">TimeLine</Nav.Link></li>
                        <li className="nav-item"><Nav.Link eventKey="5" href="#">Get Involve</Nav.Link></li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default DaoNavbar;