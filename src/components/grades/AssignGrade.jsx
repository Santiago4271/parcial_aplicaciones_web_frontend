import React, { useState, useEffect } from 'react';
import './AssignGrades.css';

const AssignGrades = ({ onSubmit, gradeToEdit }) => {
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    if (gradeToEdit) {
      setStudentId(gradeToEdit.student_id);
      setCourseId(gradeToEdit.course_id);
      setGrade(gradeToEdit.grade);
    }
  }, [gradeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ student_id: studentId, course_id: courseId, grade });
    setStudentId('');
    setCourseId('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit} className="assign-grades-form">
      <div className="form-group">
        <label>ID del Estudiante:</label>
        <input
          type="number"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Ingrese el ID del estudiante"
        />
      </div>
      <div className="form-group">
        <label>ID del Curso:</label>
        <input
          type="number"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          placeholder="Ingrese el ID del curso"
        />
      </div>
      <div className="form-group">
        <label>Calificación:</label>
        <input
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          placeholder="Ingrese la calificación"
        />
      </div>
      <button type="submit">{gradeToEdit ? 'Actualizar' : 'Asignar'} Calificación</button>
    </form>
  );
};

export default AssignGrades;