import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const EditStudent = () => {
  const [formValues, setFormvalues] = useState({
    name: '',
    email: '',
    rollNo: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // http://localhost:4000/students/edit-student/${id}

      await axios
        .get(
          `https://crud-app-pawan-js.herokuapp.com/students/edit-student/${id}`,
          formValues
        )
        .then((response) => {
          setFormvalues({
            name: response.data.name,
            email: response.data.email,
            rollNo: response.data.rollNo,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchData();
  }, [formValues, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormvalues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // http://localhost:4000/students/update-student/${id}`

    axios
      .put(
        `https://crud-app-pawan-js.herokuapp.com/students/update-student/${id}`,
        formValues
      )
      .then((response) => {
        alert('Student Data Updated Sucessfully!');
        setFormvalues({ name: '', email: '', rollNo: '' });
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
          Update Student
        </Button>
      </Form>
    </div>
  );
};
