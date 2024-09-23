import React, { useEffect } from 'react';
import backgroundImage from '../../assets/images/fundo4.jpg'; // Caminho para a sua imagem de fundo
import Fundacao from '../Funcacao.jsx/Fundacao';
const AboutUs = () => {
  
  // Aplicando o background na página inteira
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed'; // Mantém a imagem fixa ao rolar a página

    return () => {
      // Limpa o estilo quando o componente é desmontado
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  return (
    <>
    <Fundacao />
    <div style={containerStyle}>
      <h1 style={headerStyle}>Quem Somos</h1>

      <p style={paragraphStyle}>
        Somos uma plataforma dedicada a fornecer cursos online gratuitos para ajudar pessoas de todo o mundo a adquirir novos conhecimentos e habilidades. Nossa missão é democratizar a educação, proporcionando acesso a conteúdos de qualidade sem custo, permitindo que todos possam aprender e crescer, independentemente de sua localização ou situação financeira.
      </p>

      <h2 style={subHeaderStyle}>Nossa Missão</h2>
      <p style={paragraphStyle}>
        Acreditamos que a educação é um direito fundamental e que todos devem ter a oportunidade de aprender. Trabalhamos incansavelmente para criar um ambiente onde professores possam compartilhar seus conhecimentos e alunos possam acessar uma vasta gama de cursos gratuitos.
      </p>

      <h2 style={subHeaderStyle}>Nossa Equipe</h2>
      <p style={paragraphStyle}>
        Nossa equipe é composta por profissionais apaixonados por educação e tecnologia. Juntos, unimos forças para criar uma plataforma simples, acessível e eficaz, que coloca o aluno no centro do processo de aprendizado.
      </p>
      <h2 style={subHeaderStyle}>Nossa Diferencial</h2>
      <p style={paragraphStyle}>
      Aqui na Fundação Athena, você que é professor pode compartilhar seus conhecimentos com todos! Com seu certificado faça seu cadastro, e comece agora mesmo a publicar seus cursos.  
      </p>
      <h2 style={subHeaderStyle}>Contato</h2>
      <p style={paragraphStyle}>
        Se você tiver qualquer dúvida ou sugestão, ficaremos felizes em ouvir de você. Entre em contato conosco pelo email: <a href="mailto:contato@plataformadecursos.com" style={linkStyle}>contato@plataformadecursos.com</a>.
      </p>
      
    </div>
    </>
  );
};

// Estilos da Página
const containerStyle = {
  backgroundColor: 'white', // Fundo semi-transparente para legibilidade do texto
  padding: '40px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  maxWidth: '800px',
  marginLeft: '200px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  textAlign: '',
  color: '#555',
  fontSize: '50px',
  marginBottom: '20px',
};

const subHeaderStyle = {
  color: '#333',
  fontSize: '30px',
  marginTop: '20px',
};

const paragraphStyle = {
  lineHeight: '1.6',
  color: '#666',
  fontSize: '20px',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
};
const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

export default AboutUs;
