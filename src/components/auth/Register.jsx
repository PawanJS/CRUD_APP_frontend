import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

export const Register = ({ setLoginUser }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      password2: formValues.password2,
    };

    axios
      .post(
        'https://crud-app-pawan-js.herokuapp.com/api/users/register',
        newUser
      )
      .then((res) => {
        alert('User created successfully!');
        setFormValues({
          name: '',
          email: '',
          password: '',
          password2: '',
          errors: {},
        });

        console.log(res);
        setLoginUser(res.data);
        navigate('/student-list');
      })
      .catch((error) => {
        const { email, password2 } = error.response.data;

        if (email) alert(email);
        if (password2) alert(password2);
      });
  };

  return (
    <div className="form-wrapper container mt-3">
      <div className="w-50 mx-auto">
        <div>
          <div>
            <h4>
              <b>Register</b> below
            </h4>
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.name}
                error={formValues.errors.name}
                name="name"
                type="text"
                required
              />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.email}
                error={formValues.errors.email}
                name="email"
                type="email"
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
            <Form.Group controlId="password2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={formValues.password2}
                error={formValues.errors.password2}
                name="password2"
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
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
