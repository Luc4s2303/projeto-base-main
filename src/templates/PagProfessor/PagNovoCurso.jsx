import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Fundacao2 from '../Fundacao2/Fundacao';

const NewCourse = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  // Adiciona uma nova aula com PDF e vídeo
  const handleAddLesson = () => {
    if (lessonTitle && lessonDescription) {
      const newLesson = {
        title: lessonTitle,
        description: lessonDescription,
        pdfFile: pdfFile ? URL.createObjectURL(pdfFile) : null,  // Criar URL do PDF
        videoFile: videoFile ? URL.createObjectURL(videoFile) : null  // Criar URL do vídeo
      };
      setLessons([...lessons, newLesson]);
      setLessonTitle('');
      setLessonDescription('');
      setPdfFile(null);
      setVideoFile(null);
    } else {
      alert('Preencha os campos da aula.');
    }
  };

  // Função para enviar o curso
  const handleSubmit = () => {
    if (title && description && lessons.length > 0) {
      alert('Curso criado com sucesso!');
      navigate('/teacher-profile'); // Volta para o perfil do professor
    } else {
      alert('Preencha todos os campos e adicione pelo menos uma aula.');
    }
  };

  return (
    <>
    <Fundacao2 />
    <div style={formContainerStyle}>
      <h1>Criar Novo Curso</h1>

      <label>Título do Curso</label>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        style={inputStyle}
      />

      <label>Descrição do Curso</label>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        style={{...inputStyle, height: '100px'}}
      />

      <h2>Aulas</h2>
      <input 
        type="text" 
        placeholder="Título da Aula" 
        value={lessonTitle} 
        onChange={(e) => setLessonTitle(e.target.value)} 
        style={inputStyle}
      />
      <textarea 
        placeholder="Descrição da Aula" 
        value={lessonDescription} 
        onChange={(e) => setLessonDescription(e.target.value)} 
        style={{...inputStyle, height: '100px'}}
      />
      
      <label>Adicionar PDF</label>
      <input 
        type="file" 
        accept=".pdf" 
        onChange={(e) => setPdfFile(e.target.files[0])} 
        style={inputStyle}
      />

      <label>Adicionar Vídeo</label>
      <input 
        type="file" 
        accept="video/*" 
        onChange={(e) => setVideoFile(e.target.files[0])} 
        style={inputStyle}
      />

      <button onClick={handleAddLesson} style={addButtonStyle}>Adicionar Aula</button>

      <div style={lessonsContainerStyle}>
        {lessons.map((lesson, index) => (
          <div key={index} style={lessonItemStyle}>
            <h4>{lesson.title}</h4>
            <p>{lesson.description}</p>

            {lesson.pdfFile && (
              <div>
                <p><strong>PDF: </strong><a href={lesson.pdfFile} target="_blank" rel="noopener noreferrer">Baixar PDF</a></p>
              </div>
            )}

            {lesson.videoFile && (
              <div>
                <p><strong>Vídeo:</strong></p>
                <video controls width="250">
                  <source src={lesson.videoFile} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} style={submitButtonStyle}>Publicar Curso</button>
    </div>
    </>
  );

};

// Estilos
const formContainerStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#f9f9f9',
  borderRadius: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const addButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginBottom: '20px',
};

const submitButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const lessonsContainerStyle = {
  marginTop: '20px',
};

const lessonItemStyle = {
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#fff',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

export default NewCourse;
