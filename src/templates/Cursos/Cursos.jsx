import React, { useState } from 'react';
import Fundacao from '../Funcacao.jsx/Fundacao';

const coursesData = [
  { id: 1, title: 'React Básico', subject: 'React', teacher: 'John Doe', description: 'Aprenda os fundamentos de React.' },
  { id: 2, title: 'JavaScript Avançado', subject: 'JavaScript', teacher: 'Jane Doe', description: 'Aprofunde-se no JavaScript.' },
  { id: 3, title: 'HTML e CSS', subject: 'HTML/CSS', teacher: 'Carlos Silva', description: 'Dominando HTML e CSS.' },
  { id: 4, title: 'React Avançado', subject: 'React', teacher: 'Ana Maria', description: 'Componentes e hooks avançados em React.' },
  // Adicionar mais cursos conforme necessário
];

const subjects = ['Todos', 'React', 'JavaScript', 'HTML/CSS'];

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState('Todos');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Filtrar cursos por matéria selecionada
  const filteredCourses = selectedSubject === 'Todos'
    ? coursesData
    : coursesData.filter(course => course.subject === selectedSubject);

  return (
    <>
    <Fundacao />
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Lista de Materias */}
      <div style={{ width: '20%', padding: '20px', borderRight: '2px solid #ddd', backgroundColor: '#343a40', color: '#fff' }}>
        <h3 style={{ color: '#fff', marginBottom: '20px' }}>Matérias</h3>
        <ul style={{ padding: 0 }}>
          {subjects.map(subject => (
            <li
              key={subject}
              style={{
                cursor: 'pointer',
                margin: '10px 0',
                listStyle: 'none',
                padding: '10px',
                backgroundColor: selectedSubject === subject ? '#007bff' : '#6c757d',
                borderRadius: '5px',
                color: '#fff',
                textAlign: 'center',
              }}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </li>
          ))}
        </ul>
      </div>

      {/* Cards de Cursos (em formato de lista) */}
      <div style={{ width: '80%', padding: '20px' }}>
        {filteredCourses.map(course => (
          <div key={course.id} style={listItemStyle} onClick={() => setSelectedCourse(course)}>
            <div style={courseInfoStyle}>
              <h4 style={{ margin: '0 0 10px 0' }}>{course.title}</h4>
              <p style={{ margin: 0 }}>{course.subject}</p>
              <p style={{ margin: 0 }}>Professor: {course.teacher}</p>
            </div>
            <button style={buttonStyle}>Ver Curso</button>
          </div>
        ))}
      </div>

      {/* Detalhes do Curso (Modal) */}
      {selectedCourse && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h3>{selectedCourse.title}</h3>
            <p><strong>Matéria:</strong> {selectedCourse.subject}</p>
            <p><strong>Professor:</strong> {selectedCourse.teacher}</p>
            <p><strong>Descrição:</strong> {selectedCourse.description}</p>
            <button style={buttonStyle} onClick={() => alert('Inscrição realizada!')}>Inscrever-se</button>
            <button onClick={() => setSelectedCourse(null)} style={{ marginLeft: '10px', ...buttonStyle }}>Fechar</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

// Estilos
const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#fff',
  border: '2px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px 0',
  cursor: 'pointer',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

const courseInfoStyle = {
  flex: 1,
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '8px',
  width: '400px',
  textAlign: 'center',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
};

export default App;
