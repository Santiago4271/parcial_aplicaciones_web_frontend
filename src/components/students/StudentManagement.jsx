import React, { useState, useEffect } from 'react';
import BackButton from '../BackButton';
import './StudentManagement.css';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/students/')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const addStudent = (student) => {
    fetch('http://127.0.0.1:8000/students/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then((newStudent) => setStudents([...students, newStudent]));
  };

  const updateStudent = (student) => {
    fetch(`http://127.0.0.1:8000/students/${studentToEdit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then((updatedStudent) => {
        setStudents(students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s)));
        setStudentToEdit(null);
        setName('');
        setAge('');
      });
  };

  const deleteStudent = (id) => {
    fetch(`http://127.0.0.1:8000/students/${id}`, {
      method: 'DELETE',
    }).then(() => setStudents(students.filter((student) => student.id !== id)));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const student = { name, age };
    if (studentToEdit) {
      updateStudent(student);
    } else {
      addStudent(student);
    }
    setName('');
    setAge('');
  };

  const handleEdit = (student) => {
    setStudentToEdit(student);
    setName(student.name);
    setAge(student.age);
  };

  return (
    <div className="student-management">
      <BackButton />
      <h1>Gestión de Estudiantes</h1>
      <form onSubmit={handleFormSubmit} className="student-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese el nombre del estudiante"
          />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Ingrese la edad del estudiante"
          />
        </div>
        <button type="submit">{studentToEdit ? 'Actualizar' : 'Agregar'} Estudiante</button>
      </form>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            {`Nombre: ${student.name}, Edad: ${student.age}`}
            <button onClick={() => handleEdit(student)}>Editar</button>
            <button onClick={() => deleteStudent(student.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentManagement;