import React from 'react';
import './StudentList.css';

const StudentList = ({ students, onDelete, onEdit }) => {
  return (
    <ul className="student-list">
      {students.map((student) => (
        <li key={student.id} className="student-item">
          {student.name} - {student.age} años
          <button onClick={() => onEdit(student)}>Editar</button>
          <button onClick={() => onDelete(student.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;