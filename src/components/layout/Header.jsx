import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const Header = ({ user, setLoginUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoginUser({});
    navigate('/login');
  };

  return (
    <header className="App-header">
      <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className="btn me-2">
              MERN Stack CRUD App with AUTH
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end align-items-center">
            {user && user._id ? (
              <>
                <Nav>
                  <Link to={'/create-student'} className="btn me-2">
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/student-list'} className="btn me-2">
                    Student List
                  </Link>
                </Nav>
                <Nav>
                  <Button
                    onClick={handleLogout}
                    variant="primary"
                    size="lg"
                    block="block"
                  >
                    Log Out
                  </Button>
                </Nav>
              </>
            ) : (
              <>
                <Nav>
                  <Link to={'/login'} className="btn btn-outline-primary me-2">
                    Login
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/register'} className="btn btn-primary">
                    Sign UP
                  </Link>
                </Nav>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
