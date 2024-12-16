import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import BackButton from '../BackButton';
import './EnrollmentList.css';

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const data = await API.getEnrollments();
        setEnrollments(data);
      } catch (error) {
        console.error('Error fetching enrollments:', error);
      }
    };

    fetchEnrollments();
  }, []);

  const handleCreateEnrollment = async () => {
    try {
      const newEnrollment = await API.createEnrollment({ student_id: studentId, course_id: courseId });
      setEnrollments([...enrollments, newEnrollment]);
      setStudentId(''); // Limpia el campo de entrada después de crear la inscripción
      setCourseId(''); // Limpia el campo de entrada después de crear la inscripción
    } catch (error) {
      console.error('Error creating enrollment:', error);
    }
  };

  const handleDeleteEnrollment = async (id) => {
    try {
      await API.deleteEnrollment(id);
      setEnrollments(enrollments.filter(enrollment => enrollment.id !== id));
    } catch (error) {
      console.error('Error deleting enrollment:', error);
    }
  };

  return (
    <div className="enrollment-container">
      <BackButton />
      <h2>Enrollments</h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course ID"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        />
        <button onClick={handleCreateEnrollment}>Create Enrollment</button>
      </div>
      <ul className="enrollment-list">
        {Array.isArray(enrollments) && enrollments.map((enrollment) => (
          <li key={enrollment.id} className="enrollment-item">
            {`Student ID: ${enrollment.student_id}, Course ID: ${enrollment.course_id}`}
            <button onClick={() => handleDeleteEnrollment(enrollment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollmentList;