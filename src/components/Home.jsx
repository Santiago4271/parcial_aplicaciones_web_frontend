import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a la Gestión Escolar</h1>
      <p>Seleccione una opción para continuar:</p>
      <div className="button-container">
        <Link to="/students">
          <button className="home-button">Gestión de Estudiantes</button>
        </Link>
        <Link to="/grades/assign">
          <button className="home-button">Asignar Calificaciones</button>
        </Link>
        <Link to="/enrollments">
          <button className="home-button">Gestión de Inscripciones</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;