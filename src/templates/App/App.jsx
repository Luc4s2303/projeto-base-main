import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Logo2 from '../../assets/images/Logo2.png';
import Fundacao from '../Funcacao.jsx/Fundacao';
import imagem1 from '../../assets/images/banner.png';
import imagemmulher from '../../assets/images/imagemmulher.jpg';
import imagemmulher2 from '../../assets/images/imagemmulher1.jpg';
import Footer from '../Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Fundacao />
      
      
      <div className='container'>
  
      <img className="imagem1" src={imagem1} alt="imagem1" />
      </div>

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

<p className='texto7'>E pra você que é professor, venha fazer parte da nossa equipe de educadores
  e compartilhe seus conhecimentos com milhares de pessoas! Realize seu cadastro e publique seu curso agora mesmo.
 </p>
  



<div className='div9'> 
  <img src={imagemmulher} className='imagem2' alt="" />
</div>



<img  className="imagem4" src={Logo2} alt="Logo2" />


  <h1 className='texto5'>Fundação Athena</h1>

  
  <div className='div11'>

 
  <img src={imagemmulher2} className='imagem3' alt="" />

 <p className='texto6'>Mude sua vida profissional para sempre!
  Centenas de opções de cursos gratuitos para transformar sua 
  carreira. Aprenda alguma habilidade nova agora mesmo e 
  impressione seus amigos! Faça seu cadastro e acesse gratuitamente 
  todos os cursos.
 </p>
 </div>




      

      <Footer />
    </div>




  )    
  
}

export default App;
