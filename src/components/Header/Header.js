import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home">Smile Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Log out</Button> :
                            <Nav.Link as={HashLink} to="/login">LogIn</Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;