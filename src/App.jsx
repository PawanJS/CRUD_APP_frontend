import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { Landing } from './components/layout/Landing';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { CreateStudent } from './components/student/create-student.component';
import { EditStudent } from './components/student/edit-student.component';
import { StudentList } from './components/student/student-list.component';

const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Header user={user} setLoginUser={setLoginUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route
          path="/register"
          element={<Register setLoginUser={setLoginUser} />}
        />
        {user && user._id && (
          <>
            <Route path="/create-student" element={<CreateStudent />} />
            <Route path="/edit-student/:id" element={<EditStudent />} />
            <Route path="/student-list" element={<StudentList />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
