import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const CreateStudent = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    rollNo: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // http://localhost:4000/students/create-student
    // https://crud-app-pawan-js.herokuapp.com/students/create-student

    axios
      .post(
        'https://crud-app-pawan-js.herokuapp.com/students/create-student',
        formValues
      )
      .then((response) => {
        alert('Student Data created Successfully!');
        setFormValues({ name: '', email: '', rollNo: '' });
        navigate('/student-list');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="form-wrapper container mt-3">
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type="number"
            name="rollNo"
            value={formValues.rollNo}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="danger mt-3" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>
  );
};
