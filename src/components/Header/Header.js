import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth'

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Smile Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Log out</Button> :
                            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
                        <Navbar.Text>
                            Hello: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;