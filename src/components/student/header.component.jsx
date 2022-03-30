import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const Header = () => {
  return (
    <header className="App-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/create-student'} className="nav-link">
              React MERN Stack App
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav>
              <Link to={'/create-student'} className="nav-link">
                Create Student
              </Link>
            </Nav>
            <Nav>
              <Link to={'/student-list'} className="nav-link">
                Student List
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
