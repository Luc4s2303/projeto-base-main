import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fundacao3 from '../Fundacao3/Fundacao';

// Estilos em linha com cinza claro
const styles = {
  appContainer: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    height: "100vh",
    color: "#333",
  },
  sidebar: {
    width: "250px",
    padding: "20px",
    backgroundColor: "#343a40",
    borderRight: "1px solid #ccc",
    height: "815px",
    color: 'white',
  },
  sidebarHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
   
  },
  sidebarList: {
    listStyleType: "none",
    padding: 0,
  },
  sidebarItem: {
    padding: "12px",
    cursor: "pointer",
    backgroundColor: "#6c757d",
    marginBottom: "5px",
    transition: "background-color 0.3s ease",
    borderRadius: "5px",
    color: "white",
  },
  sidebarItemActive: {
    backgroundColor: "#007bff",
  
    color: "white"
  },
  content: {
    flexGrow: 1,
    padding: "20px",
    backgroundColor: "#fff",
  },
  courseCard: {
    backgroundColor: "#f8f8f8",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};

function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesFromAPI = [
        { id: 1, title: "Curso de React", progress: 70 },
        { id: 2, title: "Curso de Node.js", progress: 40 },
        { id: 3, title: "Desenvolvimento de Aplicativos Móveis", progress: 100 },
      ];
      setCourses(coursesFromAPI);
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    if (filter === "in-progress") return course.progress < 100;
    if (filter === "completed") return course.progress === 100;
    return true;
  });

  return (
    <>
    <Fundacao3 />
    <div style={{ display: "flex", width: "100%" }}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarHeader}>Filtrar Cursos</h2>
        <ul style={styles.sidebarList}>
          <li
            style={{
              ...styles.sidebarItem,
              ...(filter === "all" ? styles.sidebarItemActive : {}),
            }}
            onClick={() => setFilter("all")}
          >
            Todos os Cursos
          </li>
          <li
            style={{
              ...styles.sidebarItem,
              ...(filter === "in-progress" ? styles.sidebarItemActive : {}),
            }}
            onClick={() => setFilter("in-progress")}
          >
            Em Andamento
          </li>
          <li
            style={{
              ...styles.sidebarItem,
              ...(filter === "completed" ? styles.sidebarItemActive : {}),
            }}
            onClick={() => setFilter("completed")}
          >
            Concluídos
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <h1>Meus Cursos</h1>
        {filteredCourses.length === 0 ? (
          <p>Nenhum curso encontrado.</p>
        ) : (
          filteredCourses.map((course) => (
            <div key={course.id} style={styles.courseCard}>
              <h3>{course.title}</h3>
              <p>Progresso: {course.progress}%</p>
              <Link to={`/course/${course.id}`}>
                <button style={styles.button}>Continuar Curso</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
}

export default CoursePage;
