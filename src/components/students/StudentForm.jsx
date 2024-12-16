import React, { useState, useEffect } from 'react';
import './StudentForm.css';

const StudentForm = ({ onSubmit, studentToEdit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setAge(studentToEdit.age);
    }
  }, [studentToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age });
    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingrese el nombre"
        />
      </div>
      <div className="form-group">
        <label>Edad:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Ingrese la edad"
        />
      </div>
      <button type="submit">{studentToEdit ? 'Actualizar' : 'Agregar'} Estudiante</button>
    </form>
  );
};

export default StudentForm;