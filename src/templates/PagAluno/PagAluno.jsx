import React, { useState, useEffect } from "react";

function App() {
  // Estado para armazenar os cursos do aluno
  const [courses, setCourses] = useState([]);

  // Simulando uma API para buscar os cursos do aluno
  useEffect(() => {
    // Aqui você pode fazer uma chamada de API real
    const fetchCourses = async () => {
      // Dados simulados dos cursos do aluno
      const coursesFromAPI = [
        { id: 1, title: "Curso de React", progress: 70 },
        { id: 2, title: "Curso de Node.js", progress: 40 },
        { id: 3, title: "Curso de Python", progress: 100 },
      ];
      setCourses(coursesFromAPI);
    };

    fetchCourses();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Meus Cursos</h1>
      {courses.length === 0 ? (
        <p>Você ainda não está inscrito em nenhum curso.</p>
      ) : (
        <div>
          {courses.map((course) => (
            <div key={course.id} style={{ marginBottom: "20px" }}>
              <h3>{course.title}</h3>
              <p>Progresso: {course.progress}%</p>
              <button style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none" }}>
                Continuar Curso
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
