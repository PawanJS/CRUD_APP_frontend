import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export const StudentList = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(async () => {
    const url = 'http://localhost:4000/students/';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (event) => {
    const studentId = event.target.getAttribute('data-id');

    axios
      .delete(`http://localhost:4000/students/delete-student/${studentId}`)
      .then((response) => console.log('Sucessfully deleted'))
      .catch((error) => console.log(error));

    const newStudentData = studentData.filter(
      (student) => student._id !== studentId
    );
    setStudentData(newStudentData);
  };

  return (
    <div className="table-wrapper mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.rollNo}</td>
              <td>
                <Button
                  size="sm"
                  data-id={student._id}
                  variant="danger"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
