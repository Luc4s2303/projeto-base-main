import React, { useState, useEffect } from 'react';
import Fundo from '../../assets/images/fundo.jpg'; 
import perfil from '../../assets/images/fotoperfil.jpg';
import Fundacao2 from '../Fundacao2/Fundacao'; 

const PagPerfilProf = () => {
  const [profile, setProfile] = useState({
    photo: perfil,
    name: 'Luíza Vilela Silva',
    email: 'luiza.vilelasilva@gmail.com',
    password: '********',
    age: 22,
    bio: 'Desenvolvedora apaixonada por tecnologia e inovação.',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  // Adiciona estilo de fundo ao body quando o componente monta
  useEffect(() => {
    document.body.style.backgroundImage = `url(${Fundo})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.height = '750px';
    
    // Limpa o estilo quando o componente desmonta
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.height = '';
    };
  }, []);

  return (
     <>
    <Fundacao2 />
    <div style={styles.container}>
     
      <div style={styles.profileCard}>
        <div style={styles.photoContainer}>
          <img src={profile.photo} alt="Foto de perfil" style={styles.photo} />
        </div>

        <div style={styles.infoContainer}>
          {isEditing ? (
            <>
              <label>Nome:</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                style={styles.input}
              />
              <label>E-mail:</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                style={styles.input}
              />
              <label>Senha:</label>
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                style={styles.input}
              />
              <label>Idade:</label>
              <input
                type="number"
                name="age"
                value={profile.age}
                onChange={handleChange}
                style={styles.input}
              />
              <label>Bio:</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                style={styles.textarea}
              />
              <button onClick={handleSave} style={styles.saveButton}>
                Salvar
              </button>
            </>
          ) : (
            <>
              <h2>{profile.name}</h2>
              <p><strong>E-mail:</strong> {profile.email}</p>
              <p><strong>Senha:</strong> {profile.password}</p>
              <p><strong>Idade:</strong> {profile.age} anos</p>
              <p><strong>Bio:</strong> {profile.bio}</p>
              <button onClick={() => setIsEditing(true)} style={styles.editButton}>
                Editar Perfil
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

// Estilos para o container do perfil
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '700px', // Garante que o conteúdo central fique centralizado verticalmente
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fundo branco com opacidade para destacar o conteúdo
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
  },
  photoContainer: {
    marginBottom: '20px',
  },
  photo: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #gray',
  },
  infoContainer: {
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    resize: 'none',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: 'gray',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
  saveButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default PagPerfilProf;
