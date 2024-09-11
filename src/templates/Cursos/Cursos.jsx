import React, { useState } from 'react';
import Fundacao from '../Funcacao.jsx/Fundacao';


// Um componente funcional que representa um item de lista de curso
const CourseItem = ({ course }) => {
  return ( 
    
    <div style={styles.listItem}>
      <img src={course.image} alt={course.title} style={styles.image} />
      <div style={styles.courseInfo}>
        <h3 style={styles.title}>{course.title}</h3>
        <p style={styles.description}>{course.description}</p>
        <button style={styles.button}>Ver Curso</button>
      </div>
    </div>
    
  );
};

// O componente principal da página que lista os cursos por matéria
const CoursesPage = () => {
  // Lista de cursos simulada com matéria associada
  const allCourses = [
    {
      id: 1,
      title: 'React Básico',
      description: 'Aprenda os fundamentos do React.js.',
      image: 'https://via.placeholder.com/100',
      subject: 'React',
    },
    {
      id: 2,
      title: 'React Avançado',
      description: 'Aprofunde seus conhecimentos em React.',
      image: 'https://via.placeholder.com/100',
      subject: 'React',
    },
    {
      id: 3,
      title: 'Redux com React',
      description: 'Gerencie o estado da sua aplicação com Redux.',
      image: 'https://via.placeholder.com/100',
      subject: 'Redux',
    },
    {
      id: 4,
      title: 'Hooks no React',
      description: 'Aprenda como utilizar os hooks no React.',
      image: 'https://via.placeholder.com/100',
      subject: 'React',
    },
    {
      id: 5,
      title: 'JavaScript ES6',
      description: 'Domine as novas funcionalidades do JavaScript ES6.',
      image: 'https://via.placeholder.com/100',
      subject: 'JavaScript',
    },
    {
      id: 6,
      title: 'Fundamentos de JavaScript',
      description: 'Aprenda os conceitos fundamentais do JavaScript.',
      image: 'https://via.placeholder.com/100',
      subject: 'JavaScript',
    },
  
  ];

  // Lista de matérias disponíveis
  const subjects = ['React', 'Redux', 'JavaScript'];

  // Estado para armazenar a matéria selecionada
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  // Função para filtrar cursos pela matéria selecionada
  const filteredCourses = allCourses.filter(course => course.subject === selectedSubject);

  return (
    
    
    
    <>
  
<Fundacao />
    <div style={styles.container}>
    
      <div style={styles.sidebar}>
        <h3>Matérias</h3>
        <ul style={styles.subjectList}>
          {subjects.map(subject => (
            <li 
              key={subject} 
              style={selectedSubject === subject ? styles.activeSubject : styles.subject}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject}
            </li>
          ))}
        </ul>
      </div>
      
      <div style={styles.mainContent}>
        <h1>Cursos de {selectedSubject}</h1>
        <div style={styles.list}>
          {filteredCourses.map(course => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

// Estilos simples para a página com sidebar e layout em lista
const styles = {
  container: {
    display: 'flex',
    padding: '20px',
  },
  sidebar: {
    width: '200px',
    marginRight: '20px',
    borderRight: '1px solid #ddd',
    paddingRight: '10px',
  },
  subjectList: {
    listStyleType: 'none',
    padding: '0',
  },
  subject: {
    padding: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
  },
  activeSubject: {
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    color: '#fff',
    borderBottom: '1px solid #ddd',
  },
  mainContent: {
    flexGrow: 1,
  },
  courseGrid: {
    display: 'flex',
    flexWrap: 'wrap', // Permite que os itens se ajustem em várias linhas se necessário
    gap: '15px',      // Espaçamento entre os cursos
    justifyContent: 'center', // Centraliza os cursos
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column', // Orientação vertical para cada curso
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    width: '500px', // Largura dos itens da lista (ajustar conforme necessário)
    boxShadow: '0px 0px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  courseInfo: {
    textAlign: 'center',
  },
  title: {
    fontSize: '16px',
    margin: '0 0 10px 0',
  },
  description: {
    fontSize: '12px',
    marginBottom: '10px',
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '12px',
  },
};
export default CoursesPage;
