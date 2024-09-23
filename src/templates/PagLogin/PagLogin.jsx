import React, { useState } from 'react';
import backgroundImage from '../../assets/images/fundo2.jpg';// Imagem de fundo
import professorImage from '../../assets/images/imagemchapeu.jpg'; // Imagem para o botão do professor
import alunoImage from '../../assets/images/imagemlapis.jpg'; // Imagem para o botão do aluno
import Fundacao from '../Funcacao.jsx/Fundacao';
import "./PagLogin.css"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [isStudentModalOpen, setStudentModalOpen] = useState(false);
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [isStudentModalOpenLogin, setStudentModalOpenLogin] = useState(false);
  const [isTeacherModalOpenLogin, setTeacherModalOpenLogin] = useState(false);
  const [isAvisoProfessor, setAvisoProfessor] = useState(false);

  const openStudentModal = () => setStudentModalOpen(true);
  const openTeacherModal = () => setTeacherModalOpen(true);
  const openStudentModalLogin = () => setStudentModalOpenLogin(true);
  const openTeacherModalLogin = () => setTeacherModalOpenLogin(true);
  const openAvisoProfessor = () => setAvisoProfessor(true);


  const closeModal = () => {
    setStudentModalOpen(false);
    setTeacherModalOpen(false);
  };

  const closeModalLogin = () => {
    setStudentModalOpenLogin(false);
    setTeacherModalOpenLogin(false);
  };

  const closeAvisoProfessor = () =>{
    setTeacherModalOpen(false);
    setAvisoProfessor(false);
  }

  
  const proxpagina = () => {
    navigate('/PagProfessor'); // Usa useNavigate para redirecionar
  };

  const proxpagina2 = () => {
    navigate('/PagAluno'); // Usa useNavigate para redirecionar
  };
 
  const proxpagina3 = () => {
    navigate('/PagAviso'); // Usa useNavigate para redirecionar
  };
  return (

<>
<Fundacao />
    <div style={styles.container}>   

      <div style={styles.main}>
        {/* Botão para o professor */}
        <div style={styles.card} >
        <h2 >Sou professor</h2>
        <img src={professorImage} alt="Professor" style={styles.image} onClick={openTeacherModalLogin }/>
        <p className='p1' onClick={openTeacherModal}>Crie uma conta como professor</p>
        </div>

        {/* Botão para o aluno */}
        <div style={styles.card} >
        <h2>Sou aluno</h2>
        <img src={alunoImage} alt="Aluno" style={styles.image}  onClick={openStudentModalLogin}/>
        <p className='p1' onClick={openStudentModal} >Crie uma conta como aluno</p>
        
        </div>
      </div>

      {/* Modal de cadastro para aluno */}
      {isStudentModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Cadastro Aluno</h2>
            <input type="text" placeholder="Nome" style={styles.input} />
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="text" placeholder="Telefone" style={styles.input} />
            <input type="password" placeholder="Senha" style={styles.input} />
            <button onClick={proxpagina2} style={styles.button}>Entrar</button>
          </div>
        </div>
      )}

      {/* Modal de cadastro para professor */}
      {isTeacherModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Cadastro Professor</h2>
            <input type="text" placeholder="Nome" style={styles.input} />
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="password" placeholder="Senha" style={styles.input} />
            <input type="text" placeholder="Endereço" style={styles.input} />
            <input type="text" placeholder="CPF" style={styles.input} />
            <input type="text" placeholder="Telefone" style={styles.input} />
            <label>Certificado</label>
            <input type="file"  accept=".pdf" style={styles.inputStyle}/>
            <button onClick={openAvisoProfessor} style={styles.button}>Entrar</button>
            
          </div>
        </div>
      )}

       {/* Modal de login para aluno */}
       {isStudentModalOpenLogin && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Login Aluno</h2>
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="password" placeholder="Senha" style={styles.input} />
            <button onClick={proxpagina2} style={styles.button}>Entrar</button>
          </div>
        </div>
      )}

      {/* Modal de login para professor */}
      {isTeacherModalOpenLogin && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Login Professor</h2>
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="password" placeholder="Senha" style={styles.input} />
            <input type="text" placeholder="CPF" style={styles.input} />
            <button onClick={proxpagina} style={styles.button} href="/PagProfessor" >Entrar</button>
            
          </div>
        </div>
      )}

      {/* Modal de login para professor */}
      {isAvisoProfessor && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.texto}>A equipe da Fundação Athena irá verificar seu certificado.</h2>
            <h2 style={styles.texto}>A validação será enviada por em e-mail em até 2 dias úteis.</h2>
            <button onClick={closeAvisoProfessor} style={styles.button} href="/PagProfessor">Fechar</button>
            
          </div>
        </div>
      )}
    </div>
    </>
  );
};





const styles = {
  container: {
    height: '815px',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    marginTop: '100px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
    cursor: 'pointer',
    height: '400px',
  },
  image: {
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    
    
  },
  image: {width: "200px",
          margin: "30px",
    
  },
  texto: {
    color: '',
    textAlign: 'center',
    lineHeight: '1.4',

  },
  certificado: {
    fontSize: '30px'
    

  },
  inputStyle: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },

  
};

export default LoginPage;
