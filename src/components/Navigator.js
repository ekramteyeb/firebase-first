import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


export default function Navigator() {
  return (
        <Navbar bg="info" expand="lg" className="col-12 text-white" >
        <Container>
            <Navbar.Brand href="/" className="text-white">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/slides" className="text-white" >Slides</Nav.Link>
                <Nav.Link href="/articles" className="text-white" >Articles</Nav.Link>
                <NavDropdown title="Dropdown" style={{color:'white'}} id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  )
}
