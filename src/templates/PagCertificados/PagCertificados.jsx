import React, { useState } from 'react';
import Fundacao3 from '../Fundacao3/Fundacao';

const certificatesData = [
  { id: 1, title: 'Certificado de Desenvolvimento de Aplicativos Móveis', subject: 'Tecnologia da Informação', teacher: 'Rogério', description: 'Este certificado atesta a conclusão do curso de Desenvolvimento de Aplicativos Móveis.' },
  { id: 2, title: 'Certificado de Marketing Digital', subject: 'Empreendedorismo e Negócios', teacher: 'Silvia', description: 'Este certificado atesta a conclusão do curso de Marketing Digital.' },
  // Adicionar mais certificados conforme necessário
];

const subjects = ['Todos', 'Tecnologia da Informação', 'Empreendedorismo e Negócios'];

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState('Todos');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  // Filtrar certificados por matéria selecionada
  const filteredCertificates = selectedSubject === 'Todos'
    ? certificatesData
    : certificatesData.filter(certificate => certificate.subject === selectedSubject);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
  };

  const handleDownload = () => {
    alert('O certificado está sendo baixado!');
  };

  const openShareModal = () => {
    setShareModalOpen(true);
  };

  const closeShareModal = () => {
    setShareModalOpen(false);
  };

  return (
    <>
      <Fundacao3 />
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        {/* Filtro por matérias (em branco e cinza) */}
        <div style={{ width: '20%', padding: '20px', borderRight: '2px solid #ddd', backgroundColor: '#f1f1f1' }}>
          <h3 style={{ color: '#343a40', marginBottom: '20px' }}>Filtros</h3>
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

        {/* Cards de certificados */}
        <div style={{ width: '80%', padding: '20px' }}>
          {filteredCertificates.map((certificate) => (
            <div key={certificate.id} style={listItemStyle}>
              <div style={courseInfoStyle}>
                <h4 style={{ margin: '0 0 10px 0' }}>{certificate.title}</h4>
                <p style={{ margin: 0 }}>{certificate.subject}</p>
                <p style={{ margin: 0 }}>Professor(a): {certificate.teacher}</p>
              </div>
              <button style={buttonStyle} onClick={() => openModal(certificate)}>Visualizar</button>
              <button style={buttonStyle} onClick={handleDownload}>Baixar</button>
              <button style={buttonStyle} onClick={openShareModal}>Compartilhar</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para visualizar o certificado */}
      {isModalOpen && selectedCertificate && (
        <div style={modalOverlay}>
          <div style={modal}>
            <h2>{selectedCertificate.title}</h2>
            <p>{selectedCertificate.description}</p>
            <img
              src={`https://via.placeholder.com/400x200.png?text=Certificado+${selectedCertificate.id}`}
              alt={`Certificado ${selectedCertificate.id}`}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <button style={buttonStyle} onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}

      {/* Modal de compartilhamento */}
      {isShareModalOpen && (
        <div style={modalOverlay}>
          <div style={modal}>
            <h2>Compartilhar Certificado</h2>
            <p>Escolha uma opção para compartilhar:</p>
            <button style={buttonStyle}>WhatsApp</button>
            <button style={buttonStyle}>Facebook</button>
            <button style={buttonStyle}>LinkedIn</button>
            <button style={buttonStyle} onClick={closeShareModal}>Fechar</button>
          </div>
        </div>
      )}
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
  margin: '10px',
};

const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modal = {
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '8px',
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default App;

//#f8f9fa
