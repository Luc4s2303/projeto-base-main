import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Fundacao2 from '../Fundacao2/Fundacao';
import Fundo from '../../assets/images/fundo1.jpg'; 

const TeacherProfile = () => {
  const navigate = useNavigate();

  // Cursos fictícios
  const [courses, setCourses] = useState([
    { id: 1, title: 'Curso de React', description: 'Aprenda os fundamentos de React.' },
    { id: 2, title: 'Curso de JavaScript', description: 'Domine JavaScript de ponta a ponta.' },
  ]);

  const handleEdit = (id) => {
    alert(`Editar curso com id: ${id}`);
    // Implementar lógica de edição de curso
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(course => course.id !== id));
    alert(`Curso com id: ${id} foi deletado.`);
  };

  const handleNewCourse = () => {
    navigate('/new-course');
  }; 
  useEffect(() => {
    document.body.style.backgroundImage = `url(${Fundo})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = 'px';
    
    // Limpa o estilo quando o componente desmonta
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.height = '';
    };
  }, []);

  
  return (
    <>
    <Fundacao2 />
    <div className="container">
    <div style={containerStyle}>
      <h1>Perfil do Professor</h1>
      <button onClick={handleNewCourse} style={newCourseButtonStyle}>
        Publicar Novo Curso
      </button>

      <h2>Cursos Publicados</h2>
      {courses.length > 0 ? (
        courses.map(course => (
          <div key={course.id} style={courseCardStyle}>
            <div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
            <div>
              <button onClick={() => handleEdit(course.id)} style={editButtonStyle}>Editar</button>
              <button onClick={() => handleDelete(course.id)} style={deleteButtonStyle}>Deletar</button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum curso publicado.</p>
      )}
    </div>
    </div>
    </>
  );
};

// Estilos
const containerStyle = {
  padding: '20px',
};

const courseCardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
  border: '1px solid #ddd',
  marginBottom: '10px',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const editButtonStyle = {
  padding: '5px 10px',
  marginRight: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  padding: '5px 10px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const newCourseButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginBottom: '20px',
};

export default TeacherProfile;
