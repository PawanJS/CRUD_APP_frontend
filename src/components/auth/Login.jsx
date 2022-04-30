import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    errors: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      email: formValues.email,
      password: formValues.password,
    };

    axios
      .post(
        `${
          process.env.NODE_ENV !== 'production'
            ? process.env.REACT_APP_DEV_URL
            : process.env.REACT_APP_PROD_URL
        }/api/users/login`,
        newUser
      )
      .then((res) => {
        alert('Logged in successfully!');
        setFormValues({
          email: '',
          password: '',
          errors: {},
        });

        localStorage.setItem('user', JSON.stringify(res.data.user));
        setLoginUser(res.data.user);
        navigate('/student-list');
      })
      .catch((error) => {
        const { emailnotfound, passwordincorrect } = error.response.data;

        if (emailnotfound) alert(emailnotfound);
        if (passwordincorrect) alert(passwordincorrect);
      });
  };

  return (
    <div className="form-wrapper container mt-3">
      <div className="w-50 mx-auto">
        <div>
          <div>
            <h4>
              <b>Login</b> below
            </h4>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                error={formValues.errors.email}
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.password}
                error={formValues.errors.password}
                name="password"
                type="password"
                required
              />
            </Form.Group>
            <Button
              variant="primary mt-3"
              size="lg"
              block="block"
              type="submit"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
