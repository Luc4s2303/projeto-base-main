import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Logo2 from '../../assets/images/Logo2.png';
import Fundacao from '../Funcacao.jsx/Fundacao';
import imagem1 from '../../assets/images/banner.png';
import imagemmulher from '../../assets/images/imagemmulher.jpg';
import imagemmulher2 from '../../assets/images/imagemmulher1.jpg';
import fundocinza from '../../assets/images/fundocinza.jpg';
import fototemplo from '../../assets/images/imagem2.png';
import Footer from '../Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fundacao />
    <div className='div1'>
      
      <h1 className='texto3'>Fundação Athena</h1>
      <h1 className='texto4'>Faça já sua matrícula e tenha acesso a milhares de cursos gratuitos!</h1>
      <img src={fundocinza} className="fundo" alt="Fundo" />
      <img src={fototemplo} alt="" className='foto1' />
       <div>
        
       </div>
          
      

      
    </div>

    <Footer />
</>
  )    
  
}

export default App;
