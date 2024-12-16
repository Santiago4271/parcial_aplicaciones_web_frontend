import React from 'react';
import './StudentGrades.css';

const StudentGrades = ({ grades, onDelete, onEdit }) => {
  return (
    <ul className="student-grades-list">
      {grades.map((grade) => (
        <li key={grade.id} className="student-grades-item">
          Estudiante ID: {grade.student_id}, Curso ID: {grade.course_id}, Calificación: {grade.grade}
          <button onClick={() => onEdit(grade)}>Editar</button>
          <button onClick={() => onDelete(grade.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentGrades;