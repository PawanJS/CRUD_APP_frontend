import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header.component';

import './App.css';
import CreateStudent from './components/create-student.component';
import EditStudent from './components/edit-student.component';
import StudentList from './components/student-list.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CreateStudent />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
        <Route path="/student-list" element={<StudentList />} />
      </Routes>
    </div>
  );
}

export default App;
