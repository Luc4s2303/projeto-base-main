import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  resultCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 1 };

  return (
    <div style={styles.container}>
      <div style={styles.resultCard}>
        <h1>Resultados</h1>
        <p>Sua nota: {score} de {totalQuestions}</p>
        <button style={styles.button} onClick={() => navigate("/PagAluno")}>
          Voltar para os Cursos
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
