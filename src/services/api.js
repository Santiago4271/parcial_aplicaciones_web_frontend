const API_URL = 'http://127.0.0.1:8000'; // Asegúrate de que esta URL sea correcta

const API = {
  getEnrollments: async () => {
    const response = await fetch(`${API_URL}/enrollments/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
  createEnrollment: async (enrollment) => {
    const response = await fetch(`${API_URL}/enrollments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enrollment)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
  deleteEnrollment: async (enrollmentId) => {
    const response = await fetch(`${API_URL}/enrollments/${enrollmentId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
};

export default API;