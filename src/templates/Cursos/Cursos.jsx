import React, { useState } from 'react';
import Fundacao from '../Funcacao.jsx/Fundacao';

const coursesData = [
  { id: 1, title: 'Introdução à programação', subject: 'Tecnologia da informação', teacher: 'Rogério', description: 'Aprenda os fundamentos da programação com linguagens como Python e JavaScript..' },
  { id: 2, title: 'Desenvolvimento Web', subject: 'Tecnologia da informação', teacher: 'Rogério', description: 'Crie sites dinâmicos e interativos utilizando HTML, CSS, e JavaScript.'},
  { id: 3, title: 'Cibersegurança', subject: 'Tecnologia da informação', teacher: 'Rogério', description: 'Conheça as melhores práticas para proteger dados e sistemas de ataques digitais.' },

  { id: 4, title: 'Iniciação ao Empreendedorismo', subject: 'Empreendedorismo e Negócios', teacher: 'Silvia', description: ' Entenda como transformar ideias em negócios e lançar sua própria empresa.' },
  { id: 5, title: 'Marketing Digital', subject: 'Empreendedorismo e Negócios', teacher: 'Silvia', description: 'Aprenda estratégias para promover negócios e produtos online, utilizando SEO, redes sociais e e-mail marketing.' },
  { id: 6, title: 'Gestão Financeira', subject: 'Empreendedorismo e Negócios', teacher: 'Silvia', description: 'Desenvolva habilidades para gerir as finanças de pequenas e grandes empresas.' }, 
  { id: 7, title: 'Plano de negócios', subject: 'Empreendedorismo e Negócios', teacher: 'Silvia', description: 'Saiba como elaborar um plano de negócios eficiente para atrair investidores.' },
  
  { id: 8, title: 'Gestão de tempo', subject: 'Desenvolvimento pessoal', teacher: 'Antônio', description: 'É um curso.' },
  { id: 9, title: 'Inteligência emocional', subject: 'Desenvolvimento pessoal', teacher: 'Antônio', description: 'É um curso.' },
  { id: 10, title: 'Técnicas de comunicação', subject: 'Desenvolvimento pessoal', teacher: 'Antônio', description: 'É um curso.' },
  { id: 11, title: 'Liderança e Gestão de equipe', subject: 'Desenvolvimento pessoal', teacher: 'Antônio', description: 'É um curso.' },

  { id: 12, title: 'Matemática Básica', subject: 'Ciências Exatas', teacher: 'Susane', description: 'É um curso.' },
  { id: 13, title: 'Física para Iniciantes', subject: 'Ciências Exatas', teacher: 'Susane', description: 'É um curso.' },
  { id: 14, title: 'Introdução à Estatística', subject: 'Ciências Exatas', teacher: 'Susane', description: 'É um curso.' },
  { id: 15, title: 'Química Geral', subject: 'Ciências Exatas', teacher: 'Susane', description: 'É um curso.' }, 
  
  {id: 16, title: 'Fotografia Digital', subject: 'Artes e Criatividade', teacher: 'Carla', description: 'É um curso.' },
  {id: 17, title: 'Desehno e ilustração', subject: 'Artes e Criatividade', teacher: 'Carla', description: 'É um curso.' },
  {id: 18, title: 'Producão de Vídeo', subject: 'Artes e Criatividade', teacher: 'Carla', description: 'É um curso.' },
  {id: 19, title: 'Design Gráfico', subject: 'Artes e Criatividade', teacher: 'Carla', description: 'É um curso.' },

  
  // Adicionar mais cursos conforme necessário
];

const subjects = ['Todos', 'Tecnologia da informação', 'Empreendedorismo e Negócios', 'Desenvolvimento pessoal','Ciências Exatas','Artes e Criatividade'];

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
      <div style={{ width: '20%', padding: '20px', borderRight: '2px solid #ddd', backgroundColor: '#f8f9fa', color: '#fff' }}>
        <h3 style={{ color: '#000', marginBottom: '20px' }}>Matérias</h3>
        <ul style={{ padding: 0 }}>
          {subjects.map(subject => (
            <li
              key={subject}
              style={{
                cursor: 'pointer',
                margin: '10px 0',
                listStyle: 'none',
                padding: '10px',
                backgroundColor: selectedSubject === subject ? '#6c757d' : '#e9ecef',
                borderRadius: '5px',
                color: selectedSubject === subject ? '#fff' : '#343a40',
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
              <p style={{ margin: 0 }}>Professor(a): {course.teacher}</p>
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
  backgroundColor: '#6c757d',
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
