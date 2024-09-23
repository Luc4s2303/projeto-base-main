import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";

// Estilos em linha com barra lateral, botões superiores e vídeos menores
const styles = {
  container: {
    display: "flex",
    backgroundColor: "#f5f5f5",
    height: "100vh",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#e0e0e0",
    padding: "20px",
    borderRight: "1px solid #ccc",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sidebarHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  sidebarList: {
    listStyleType: "none",
    padding: 0,
    flexGrow: 1,
  },
  sidebarItem: {
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f8f8f8",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  sidebarItemActive: {
    backgroundColor: "#d0d0d0",
    fontWeight: "bold",
  },
  content: {
    flexGrow: 1,
    padding: "20px",
    position: "relative",
  },
  video: {
    width: "600px",
    height: "300px",
    backgroundColor: "#000",
    marginBottom: "20px",
  },
  activityCard: {
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#f8f8f8",
    borderRadius: "8px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

function CourseContent() {
  const { id } = useParams(); // Pega o ID do curso
  const navigate = useNavigate();

  // Lista de aulas e suas respectivas atividades com perguntas de múltipla escolha
  const videoLessons = [
    { id: 1, title: "Aula 1 - Introdução ao React", activities: [
      { 
        id: 1, 
        title: "Atividade 1 - Conceitos Básicos de React",
        question: "O que é o React?",
        options: [
          "Uma linguagem de programação",
          "Uma biblioteca JavaScript para construir interfaces de usuário",
          "Um framework CSS",
          "Uma ferramenta de edição de vídeo"
        ],
        correctAnswer: "Uma biblioteca JavaScript para construir interfaces de usuário"
      },
      { 
        id: 2, 
        title: "Atividade 2 - Configuração de Ambiente",
        question: "Qual o comando para criar um novo app React?",
        options: [
          "npm create react-app",
          "npx create-react-app",
          "npm install react",
          "npx start-react-app"
        ],
        correctAnswer: "npx create-react-app"
      },
    ] },
    { id: 2, title: "Aula 2 - Componentes e Props", activities: [
      { 
        id: 1, 
        title: "Atividade 1 - Criando Componentes Funcionais",
        question: "Qual a sintaxe correta para criar um componente funcional?",
        options: [
          "function MeuComponente() {}",
          "const MeuComponente = () => {}",
          "class MeuComponente {}",
          "Nenhuma das alternativas"
        ],
        correctAnswer: "const MeuComponente = () => {}"
      },
      { 
        id: 2, 
        title: "Atividade 2 - Trabalhando com Props",
        question: "O que são props no React?",
        options: [
          "São propriedades passadas para componentes",
          "São métodos herdados de classes",
          "São funções especiais do React",
          "São variáveis globais"
        ],
        correctAnswer: "São propriedades passadas para componentes"
      },
    ] },
    { id: 3, title: "Aula 3 - Gerenciamento de Estado", activities: [
      { 
        id: 1, 
        title: "Atividade 1 - Utilizando useState",
        question: "Para que serve o hook useState no React?",
        options: [
          "Para criar rotas no React",
          "Para gerenciar o estado de um componente",
          "Para criar componentes de classe",
          "Para manipular eventos do DOM"
        ],
        correctAnswer: "Para gerenciar o estado de um componente"
      },
      { 
        id: 2, 
        title: "Atividade 2 - Prática com Estados e Eventos",
        question: "Como você atualiza o estado de um componente?",
        options: [
          "Chamando diretamente o setState",
          "Usando o hook useState",
          "Acessando o DOM",
          "Executando um script externo"
        ],
        correctAnswer: "Usando o hook useState"
      },
    ] },
  ];

  const [currentLesson, setCurrentLesson] = useState(videoLessons[0]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({}); // Armazena as respostas dadas

  const handleOpenModal = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOption(null); // Limpa a seleção ao fechar o modal
  };

  const handleSubmitActivity = () => {
    // Salva a resposta selecionada
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [selectedActivity.id]: selectedOption,
    }));
    handleCloseModal();
  };

  const calculateScore = () => {
    let score = 0;
    let totalQuestions = 0;

    // Itera sobre as aulas e atividades para comparar as respostas
    videoLessons.forEach((lesson) => {
      lesson.activities.forEach((activity) => {
        totalQuestions++;
        if (answers[activity.id] === activity.correctAnswer) {
          score++;
        }
      });
    });

    return { score, totalQuestions };
  };

  const handleShowScore = () => {
    const { score, totalQuestions } = calculateScore();
    navigate("/results", { state: { score, totalQuestions } });
  };

  return (
    <div style={styles.container}>
      {/* Barra lateral */}
      <div style={styles.sidebar}>
        <div>
         

          <h2 style={styles.sidebarHeader}>Aulas</h2>
          <ul style={styles.sidebarList}>
            {videoLessons.map((lesson) => (
              <li
                key={lesson.id}
                style={{
                  ...styles.sidebarItem,
                  ...(currentLesson.id === lesson.id
                    ? styles.sidebarItemActive
                    : {}),
                }}
                onClick={() => setCurrentLesson(lesson)}
              >
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div style={styles.content}>
        <h2>{currentLesson.title}</h2>
        <div style={styles.video}>Vídeo {currentLesson.id}</div>

        {/* Atividades relacionadas à aula atual */}
        <h2>Atividades</h2>
        {currentLesson.activities.map((activity) => (
          <div
            key={activity.id}
            style={styles.activityCard}
            onClick={() => handleOpenModal(activity)}
          >
            <h3>{activity.title}</h3>
          </div>
        ))}

        {/* Modal para o formulário de múltipla escolha */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {selectedActivity && (
            <>
              <h3>{selectedActivity.title}</h3>
              <p>{selectedActivity.question}</p>
              {/* Exibe as opções de múltipla escolha */}
              {selectedActivity.options.map((option, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedOption === option}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    {option}
                  </label>
                </div>
              ))}
              <button style={styles.button} onClick={handleSubmitActivity}>
                Enviar Resposta
              </button>
            </>
          )}
        </Modal>

        {/* Botão para calcular a nota e redirecionar */}
        {currentLesson.id === videoLessons.length && (
          <button style={styles.button} onClick={handleShowScore}>
            Mostrar Nota
          </button>
        )}
      </div>
    </div>
  );
}

export default CourseContent;
