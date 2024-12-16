import React, { useState, useEffect } from 'react';
import AssignGrades from './AssignGrade';
import StudentGrades from './StudentGrades';
import BackButton from '../BackButton';
import './GradesManagement.css';

const GradesManagement = () => {
  const [grades, setGrades] = useState([]);
  const [gradeToEdit, setGradeToEdit] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/grades/')
      .then((response) => response.json())
      .then((data) => setGrades(data));
  }, []);

  const addGrade = (grade) => {
    fetch('http://127.0.0.1:8000/grades/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(grade),
    })
      .then((response) => response.json())
      .then((newGrade) => setGrades([...grades, newGrade]));
  };

  const updateGrade = (grade) => {
    fetch(`http://127.0.0.1:8000/grades/${gradeToEdit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(grade),
    })
      .then((response) => response.json())
      .then((updatedGrade) => {
        setGrades(grades.map((g) => (g.id === updatedGrade.id ? updatedGrade : g)));
        setGradeToEdit(null);
      });
  };

  const deleteGrade = (id) => {
    fetch(`http://127.0.0.1:8000/grades/${id}`, {
      method: 'DELETE',
    }).then(() => setGrades(grades.filter((grade) => grade.id !== id)));
  };

  const handleFormSubmit = (grade) => {
    if (gradeToEdit) {
      updateGrade(grade);
    } else {
      addGrade(grade);
    }
  };

  const handleEdit = (grade) => {
    setGradeToEdit(grade);
  };

  return (
    <div className="grades-management">
      <BackButton />
      <h1>Gestión de Calificaciones</h1>
      <AssignGrades onSubmit={handleFormSubmit} gradeToEdit={gradeToEdit} />
      <StudentGrades grades={grades} onDelete={deleteGrade} onEdit={handleEdit} />
    </div>
  );
};

export default GradesManagement;