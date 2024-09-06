import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Logo from '../../assets/images/Logo1.png';
import Fundacao from '../Funcacao.jsx/Fundacao';
import imagem1 from '../../assets/images/imagem1.png';
import imagemmulher from '../../assets/images/imagemmulher.jpg';
import imagemmulher2 from '../../assets/images/imagemmulher1.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Fundacao />
      <div className='div4'></div>
      
      <div className='container'>
      <div className='div3'> <div className='div5'> <p className='texto1'>Venha estudar conosco!</p> <p className='texto2'>Dezenas de cursos completamente gratuitos, faça agora mesmo sua inscrição!</p></div>
      <img className="imagem1" src={imagem1} alt="imagem1" />
      </div></div>

      <div className="container">
        <div className='div7'>
      <h1 className="boco">Uma ampla seleção de cursos</h1> 
      <p className='texto3'>Escolha entre mais de 2000 cursos em vídeo online com novas adições publicadas mensalmente</p>
      </div></div>

      <div className='container'>
        <div className='div7'>
      <h1 className="boco">Nosso diferencial</h1> 
      <p className='texto3'>Na Fundação Athena, além de se cadastrar como aluno e acessar
      divesos cursos gratuitos, você que é professor também pode se cadastrar, e publicar
       seus cursos e compartilhar seus conhecimentos!</p>

      </div></div>
      <div className='container'>
      <div className='div8'><h1 className='texto4'>Quero me tornar um professor na Fundação athena</h1></div>

      </div>
    
<div className="div6"></div>
 <div className='container'>
<div className='div9'> 
  <img src={imagemmulher} className='imagem2' alt="" />
</div>
</div>

<div className='container'>
<img src={imagemmulher2} className='imagem3' alt="" />

</div>







      <footer>
        <Link to={'/login'}
          className='btn btn-sm btn-warning'>
          Acesso Restrito
        </Link>
      </footer>
      
    </div>




  )    
  
}

export default App;
