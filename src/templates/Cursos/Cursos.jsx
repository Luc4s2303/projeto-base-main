import React, { useState } from 'react';
import Fundacao from '../Funcacao.jsx/Fundacao';

// Componente para a barra lateral com matérias
const Sidebar = ({ subjects, onSelectSubject }) => {
  return (
    <div style={styles.sidebar}>
      <h3>Matérias</h3>
      <ul style={styles.subjectList}>
        {subjects.map((subject, index) => (
          <li 
            key={index} 
            style={styles.subjectItem}
            onClick={() => onSelectSubject(subject)}
          >
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente para renderizar a lista de cursos
const CourseList = ({ courses, onViewCourse }) => {
  return (
    <div style={styles.courseList}>
      {courses.map(course => (
        <div key={course.id} style={styles.listItem}>
          <img src={course.image} alt={course.title} style={styles.image} />
          <div style={styles.courseInfo}>
            <h3 style={styles.title}>{course.title}</h3>
            <p style={styles.description}>{course.description}</p>
            <button style={styles.button} onClick={() => onViewCourse(course)}>Ver Curso</button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Componente para exibir o modal com os detalhes do curso
const CourseModal = ({ course, onClose }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>{course.title}</h2>
        <img src={course.image} alt={course.title} style={styles.detailsImage} />
        <p>{course.description}</p>
        <button style={styles.button}>Inscrever-se</button>
        <button style={styles.closeButton} onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

// Componente principal da página de cursos
const CoursesPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('React');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Lista simulada de matérias
  const subjects = ['React', 'JavaScript', 'Node', 'CSS','Matemática'];

  // Lista simulada de cursos por matéria
  const allCourses = {
    React: [
      { id: 1, title: 'React Básico', description: 'Aprenda os fundamentos do React.js.', image: 'https://via.placeholder.com/100' },
      { id: 2, title: 'React Avançado', description: 'Aprofunde seus conhecimentos em React.', image: 'https://via.placeholder.com/100' },
    ],
    JavaScript: [
      { id: 3, title: 'JavaScript Básico', description: 'Aprenda a linguagem JavaScript.', image: 'https://via.placeholder.com/100' },
      { id: 4, title: 'JavaScript Avançado', description: 'Torne-se um expert em JavaScript.', image: 'https://via.placeholder.com/100' },
    ],
    Node: [
      { id: 5, title: 'Node.js Básico', description: 'Aprenda sobre desenvolvimento de backend com Node.js.', image: 'https://via.placeholder.com/100' },
      { id: 6, title: 'Node.js Avançado', description: 'Técnicas avançadas de desenvolvimento com Node.js.', image: 'https://via.placeholder.com/100' },
    ],
    CSS: [
      { id: 7, title: 'CSS Flexbox e Grid', description: 'Domine os layouts modernos com CSS.', image: 'https://via.placeholder.com/100' },
      { id: 8, title: 'Animações com CSS', description: 'Crie animações impressionantes com CSS.', image: 'https://via.placeholder.com/100' },
    ],
    Matemática: [
      { id: 7, title: 'Calculos', description: 'Domine os layouts modernos com CSS.', image: 'https://via.placeholder.com/100' },
      { id: 8, title: 'Animações com CSS', description: 'Crie animações impressionantes com CSS.', image: 'https://via.placeholder.com/100' },
    ],
  };

  // Obtém os cursos da matéria selecionada
  const courses = allCourses[selectedSubject] || [];

  return (
    <>
    <Fundacao />
    <div style={styles.container}>
      {/* Barra lateral para selecionar matérias */}
      <Sidebar subjects={subjects} onSelectSubject={setSelectedSubject} />

      {/* Exibe a lista de cursos */}
      <div style={styles.mainContent}>
        <CourseList courses={courses} onViewCourse={setSelectedCourse} />
      </div>

      {/* Modal de detalhes do curso */}
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
    </>
  );
};

// Estilos para o layout da página
const styles = {
  container: {
    display: 'flex',
    padding: '20px',
  },
  sidebar: {
    width: '200px',
    padding: '10px',
    borderRight: '1px solid #ddd',
  },
  subjectList: {
    listStyleType: 'none',
    padding: 0,
  },
  subjectItem: {
    cursor: 'pointer',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f7f7f7',
    marginBottom: '5px',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
  courseList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0px 0px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '15px',
  },
  courseInfo: {
    textAlign: 'left',
  },
  title: {
    fontSize: '18px',
    margin: '0',
  },
  description: {
    fontSize: '14px',
    margin: '5px 0',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '12px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    textAlign: 'center',
  },
  detailsImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  closeButton: {
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
  },
};

export default CoursesPage;
