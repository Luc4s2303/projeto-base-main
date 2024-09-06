
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cursos.css'
import Fundacao from '../Funcacao.jsx/Fundacao';

function Cursos() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <Fundacao/>
     
      
      <h1> Tela cursos</h1>












      
     
      <footer>
        <Link to={'/login'}
          className='btn btn-sm btn-warning'>
          Acesso Restrito
        </Link>
      </footer>
    </div>


  )
}

export default Cursos;
