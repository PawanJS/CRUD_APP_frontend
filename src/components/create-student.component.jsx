import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateStudent extends Component {
  state = {
    name: '',
    email: '',
    rollNo: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: 'http://localhost:4000/students/create-student',
      data: this.state,
      mode: 'cors',
    })
      .then((response) => {
        console.log(response.data);
        this.setState({ name: '', email: '', rollNo: '' });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { name, email, rollNo } = this.state;

    return (
      <div className="form-wrapper container mt-3">
        <Form className="w-50 mx-auto" onSubmit={this.handleSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="Name">
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="number"
              name="rollNo"
              value={rollNo}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button variant="danger mt-3" size="lg" block="block" type="submit">
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
