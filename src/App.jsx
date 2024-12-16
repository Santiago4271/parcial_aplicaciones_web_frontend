import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import StudentManagement from './components/students/StudentManagement';
import GradesManagement from './components/grades/GradesManagement';
import EnrollmentList from './components/enrollments/EnrollmentList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentManagement />} />
        <Route path="/grades/assign" element={<GradesManagement />} />
        <Route path="/enrollments" element={<EnrollmentList />} />
      </Routes>
    </Router>
  );
};

export default App;